const HOUR = 36e5;
const DAY = 864e5;

type Kind = "ransomware" | "attack" | "breach" | "kev";

const TYPES: Record<Kind, { label: string; color: string }> = {
  ransomware: { label: "Ransomware", color: "#b2111a" },
  attack: { label: "Cyberattack", color: "#a85a12" },
  breach: { label: "Data breach", color: "#6b2a6e" },
  kev: { label: "Exploited vuln", color: "#006767" },
};

type Item = {
  type: Kind;
  title: string;
  meta: string;
  d: Date;
  c?: string;
  n?: number;
  rw?: boolean;
};

export type FeedCard = {
  title: string;
  meta: string;
  ago: string;
  fresh: boolean;
  label: string;
  color: string;
};

export type FeedSnapshot = {
  cards: FeedCard[];
  ticker: FeedCard[];
  clock: string;
  note: string;
  stats: {
    rw: string;
    accounts: string;
    breachLine: string;
    kev: string;
    kevLine: string;
  };
};

let regions: Intl.DisplayNames | null = null;
try {
  regions = new Intl.DisplayNames(["en"], { type: "region" });
} catch {
  regions = null;
}

function country(code?: string) {
  if (!code) return "";
  const upper = String(code).toUpperCase();
  try {
    return regions?.of(upper) || upper;
  } catch {
    return upper;
  }
}

function cap(value?: string) {
  if (!value) return "";
  return String(value)
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function parseDate(value?: string) {
  if (!value) return null;
  let text = String(value).trim();
  if (/^\d{4}-\d\d-\d\d$/.test(text)) text += "T12:00:00Z";
  else {
    if (/^\d{4}-\d\d-\d\d \d/.test(text)) text = text.replace(" ", "T");
    if (text.includes("T") && !/[zZ]|[+-]\d\d:?\d\d$/.test(text)) text += "Z";
  }
  const date = new Date(text);
  return Number.isNaN(date.getTime()) ? null : date;
}

function ago(date: Date) {
  const minutes = Math.max(0, Math.round((Date.now() - date.getTime()) / 60000));
  if (minutes < 60) return minutes + " min ago";
  const hours = Math.round(minutes / 60);
  if (hours < 48) return hours + " h ago";
  return Math.round(hours / 24) + " d ago";
}

function fmt(n: number) {
  if (n >= 1e9) return (n / 1e9).toFixed(1) + "B";
  if (n >= 1e6) return (n / 1e6).toFixed(1) + "M";
  if (n >= 1e3) return Math.round(n / 1e3) + "K";
  return String(n);
}

async function getJson(url: string, ms = 8000): Promise<unknown> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) throw new Error(String(response.status));
    return await response.json();
  } finally {
    clearTimeout(timer);
  }
}

function asList(value: unknown, keys: string[]) {
  if (Array.isArray(value)) return value as Record<string, unknown>[];
  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>;
    for (const key of keys) {
      if (Array.isArray(record[key])) return record[key] as Record<string, unknown>[];
    }
  }
  return [];
}

function str(value: unknown) {
  return typeof value === "string" ? value : "";
}

const sources: Record<Kind, { fetch: () => Promise<Item[]>; sample: () => Item[] }> = {
  ransomware: {
    async fetch() {
      const json = await getJson("https://api.ransomware.live/v2/recentvictims");
      return asList(json, ["victims", "data"]).map((v) => {
        const sector = cap(str(v.activity) || str(v.sector));
        const code = str(v.country).toUpperCase();
        const group = cap(str(v.group) || str(v.group_name));
        const date = parseDate(str(v.discovered) || str(v.published) || str(v.attackdate));
        return {
          type: "ransomware" as const,
          title: (sector && !/not found|unknown/i.test(sector) ? sector : "Organisation") + (code ? " · " + country(code) : ""),
          meta: "Ransomware claim" + (group ? " by " + group : "") + " · name withheld",
          d: date as Date,
          c: code,
        };
      }).filter((item) => item.d);
    },
    sample() {
      const rows: [string, string, string, number][] = [
        ["Healthcare", "US", "Akira", 1],
        ["Manufacturing", "DE", "Qilin", 3],
        ["Financial Services", "GB", "Play", 6],
        ["Education", "AU", "Rhysida", 9],
        ["Logistics", "IN", "Lockbit5", 13],
        ["Retail", "CA", "Safepay", 17],
        ["Public Sector", "FR", "Medusa", 21],
      ];
      return rows.map((row) => ({
        type: "ransomware" as const,
        title: row[0] + " · " + country(row[1]),
        meta: "Ransomware claim by " + row[2] + " · name withheld",
        d: new Date(Date.now() - row[3] * HOUR),
        c: row[1],
      }));
    },
  },
  attack: {
    async fetch() {
      const json = await getJson("https://api.ransomware.live/v2/recentcyberattacks");
      return asList(json, ["data", "attacks"]).map((v) => {
        const code = str(v.country).toUpperCase();
        let host = "";
        try {
          host = new URL(str(v.url) || str(v.link)).hostname.replace(/^www\./, "");
        } catch {
          host = "";
        }
        return {
          type: "attack" as const,
          title: str(v.title) || str(v.victim) || "Reported cyberattack",
          meta: [country(code), host ? "via " + host : ""].filter(Boolean).join(" · ") || "Press report",
          d: parseDate(str(v.date) || str(v.added) || str(v.published)) as Date,
          c: code,
        };
      }).filter((item) => item.title && item.d);
    },
    sample() {
      const rows: [string, string, number][] = [
        ["Regional hospital network diverts ambulances after cyberattack", "US", 2],
        ["Port operator halts container systems following network intrusion", "NL", 8],
        ["City council services offline after IT security incident", "GB", 15],
        ["Airline check-in disrupted by third-party supplier breach", "DE", 27],
        ["University suspends online exams after attack on IT systems", "AU", 40],
      ];
      return rows.map((row) => ({
        type: "attack" as const,
        title: row[0],
        meta: country(row[1]) + " · press report",
        d: new Date(Date.now() - row[2] * HOUR),
        c: row[1],
      }));
    },
  },
  breach: {
    async fetch() {
      const json = await getJson("https://haveibeenpwned.com/api/v3/breaches");
      return asList(json, []).filter((v) => !v.IsSpamList).map((v) => {
        const classes = Array.isArray(v.DataClasses) ? v.DataClasses.map(String).slice(0, 3) : [];
        const count = Number(v.PwnCount) || 0;
        return {
          type: "breach" as const,
          title: str(v.Title) + " data breach",
          meta: count.toLocaleString() + " accounts" + (classes.length ? " · " + classes.join(", ") : ""),
          d: parseDate(str(v.AddedDate)) as Date,
          n: count,
        };
      }).filter((item) => item.d);
    },
    sample() {
      const rows: [string, number, string, number][] = [
        ["Online retailer", 1240000, "Email addresses, Names, Phone numbers", 1],
        ["Fitness app", 3800000, "Email addresses, Passwords, Locations", 4],
        ["Ticketing platform", 560000, "Email addresses, Purchases, Names", 9],
        ["Recruitment portal", 910000, "Email addresses, Employers, Job titles", 16],
      ];
      return rows.map((row) => ({
        type: "breach" as const,
        title: row[0] + " data breach",
        meta: row[1].toLocaleString() + " accounts · " + row[2],
        d: new Date(Date.now() - row[3] * DAY),
        n: row[1],
      }));
    },
  },
  kev: {
    async fetch() {
      const json = await getJson("https://raw.githubusercontent.com/cisagov/kev-data/main/known_exploited_vulnerabilities.json", 10000);
      const list = json && typeof json === "object" ? (json as { vulnerabilities?: Record<string, unknown>[] }).vulnerabilities || [] : [];
      return list.map((v) => ({
        type: "kev" as const,
        title: str(v.cveID) + " · " + str(v.vendorProject) + " " + str(v.product),
        meta: str(v.vulnerabilityName) + (v.knownRansomwareCampaignUse === "Known" ? " · used in ransomware" : ""),
        d: parseDate(str(v.dateAdded)) as Date,
        rw: v.knownRansomwareCampaignUse === "Known",
      })).filter((item) => item.d);
    },
    sample() {
      const rows: [string, string, number, number][] = [
        ["VPN appliance", "Authentication bypass", 1, 1],
        ["Email server", "Remote code execution", 2, 0],
        ["File transfer software", "SQL injection", 5, 1],
        ["Browser engine", "Use-after-free", 8, 0],
        ["Firewall OS", "Command injection", 12, 1],
      ];
      return rows.map((row) => ({
        type: "kev" as const,
        title: row[0] + " · " + row[1],
        meta: "Actively exploited" + (row[3] ? " · used in ransomware" : ""),
        d: new Date(Date.now() - row[2] * DAY),
        rw: !!row[3],
      }));
    },
  },
};

function card(item: Item): FeedCard {
  const kind = TYPES[item.type];
  return {
    title: item.title,
    meta: item.meta,
    ago: ago(item.d),
    fresh: Date.now() - item.d.getTime() < HOUR * 3,
    label: kind.label,
    color: kind.color,
  };
}

function snapshot(items: Item[], liveCount: number): FeedSnapshot {
  const sorted = [...items].sort((a, b) => b.d.getTime() - a.d.getTime());
  const pick: Item[] = [];
  const seen: Partial<Record<Kind, number>> = {};
  for (const item of sorted) {
    seen[item.type] = seen[item.type] || 0;
    if (pick.length < 9 && (seen[item.type] || 0) < 3) {
      pick.push(item);
      seen[item.type] = (seen[item.type] || 0) + 1;
    }
  }
  pick.sort((a, b) => b.d.getTime() - a.d.getTime());

  const within = (type: Kind, ms: number) => items.filter((item) => item.type === type && Date.now() - item.d.getTime() < ms);
  const breaches = within("breach", 30 * DAY);
  const kev = within("kev", 30 * DAY);
  const rw24 = within("ransomware", DAY).length;
  const rwTotal = items.filter((item) => item.type === "ransomware").length;
  const linked = kev.filter((item) => item.rw).length;

  return {
    cards: pick.map(card),
    ticker: sorted.slice(0, 24).map(card),
    clock: liveCount
      ? "Updated " + new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      : "Sample data",
    note: liveCount === 4
      ? "4 public sources · refreshes every 5 minutes"
      : liveCount + " of 4 sources live · others show sample data",
    stats: {
      rw: rw24 >= rwTotal && rwTotal >= 100 ? "100+" : String(rw24),
      accounts: fmt(breaches.reduce((sum, item) => sum + (item.n || 0), 0)),
      breachLine: "across " + breaches.length + " new breach" + (breaches.length === 1 ? "" : "es"),
      kev: String(kev.length),
      kevLine: linked + " linked to ransomware",
    },
  };
}

async function loadAll() {
  const items: Item[] = [];
  let liveCount = 0;
  await Promise.all((Object.keys(sources) as Kind[]).map(async (kind) => {
    let batch: Item[] = [];
    let live = false;
    try {
      batch = (await sources[kind].fetch()).filter((item) => item.d);
      live = batch.length > 0;
    } catch {
      live = false;
    }
    if (!live) batch = sources[kind].sample();
    if (live) liveCount += 1;
    items.push(...batch);
  }));
  return snapshot(items, liveCount);
}

export function sampleSnapshot() {
  const items = (Object.keys(sources) as Kind[]).flatMap((kind) => sources[kind].sample());
  return snapshot(items, 0);
}

export function loadThreats() {
  return loadAll();
}
