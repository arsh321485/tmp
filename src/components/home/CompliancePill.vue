<template>
  <div>
    <button type="button" class="cp-pill" :class="{ solo: cur === 'GL' }" @click="open = true">
      <i v-if="cur !== 'GL'">{{ cur }}</i>
      {{ cur === "GL" ? "Compliance" : "Compliance in " + (regions[cur]?.n ?? "") }}
    </button>

    <div v-if="open" class="cp-ov" role="dialog" aria-modal="true" aria-label="Regulatory requirements" @click.self="open = false">
      <div class="cp">
        <button class="cp-x" type="button" aria-label="Close" @click="open = false">×</button>
        <div class="cp-h">
          <img :src="logo" alt="" />
          <h3>Regulatory requirements</h3>
          <select class="cp-sel" aria-label="Country or region" v-model="cur" @change="showAll = false">
            <option v-for="(region, code) in regions" :key="code" :value="code">{{ region.n }}</option>
          </select>
        </div>
        <p class="cp-lede" v-html="lede"></p>
        <table class="cp-t">
          <thead>
            <tr>
              <th>Regulator</th>
              <th>Control / Ref</th>
              <th>Requirement</th>
              <th>TMP module</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in shown" :key="row[0] + row[1]">
              <td>{{ row[0] }}</td>
              <td>{{ row[1] }}</td>
              <td>{{ row[2] }}</td>
              <td>
                <div class="cp-m">
                  <span v-for="m in row[3].split(',')" :key="m" :class="'m-' + m">{{ labels[m] }}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="cp-f">
          <small>Examples for guidance only, not legal advice. Confirm the requirements that apply to you with your compliance team.</small>
          <button v-if="extra" type="button" class="cp-btn cp-sec" @click="showAll = !showAll">
            {{ showAll ? "Show fewer" : "View all requirements" }}
          </button>
          <a href="#" class="cp-btn cp-pri" @click.prevent="signup">Sign up</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import logo from "@/assets/images/tmp-app-icon.png";
import { openSignupModal } from "@/utils/signup";

type Row = [string, string, string, string];

const labels: Record<string, string> = {
  c: "Cybersecurity",
  p: "Privacy",
  b: "Business Continuity",
  t: "Preparedness Testing",
};

const ISO: Row = ["ISO / Internal audit", "ISO 27001 · ISO 22301", "Provide evidence of regular incident response and continuity testing.", "t"];

const regions: Record<string, { n: string; r: Row[] }> = {
  PH: { n: "Philippines", r: [["NPC", "Data Privacy Act 2012 · NPC Circular 16-03", "Notify the NPC and affected data subjects within 72 hours of a personal data breach.", "p"], ["BSP", "Circular 951 (BCM) · Circular 982 (IT Risk)", "Maintain and regularly test cyber incident response and business continuity plans.", "c,b"], ["DICT", "National Cybersecurity Plan", "Critical information infrastructure must report incidents and run readiness exercises.", "c"]] },
  IN: { n: "India", r: [["CERT-In", "Directions 20(3)/2022", "Report specified cyber incidents to CERT-In within 6 hours of noticing them.", "c"], ["Data Protection Board", "DPDP Act 2023 · DPDP Rules", "Notify the Board and each affected data principal of a personal data breach.", "p"], ["RBI", "Master Direction on IT Governance 2023", "Maintain a cyber crisis management plan; test BCP and DR arrangements regularly.", "c,b"], ["SEBI", "CSCRF 2024", "Conduct cyber resilience drills and maintain tested incident response plans.", "c"]] },
  SG: { n: "Singapore", r: [["PDPC", "PDPA Part 6A", "Notify the PDPC within 3 calendar days of assessing a notifiable data breach.", "p"], ["MAS", "Technology Risk Management Guidelines · Notice 644", "Report relevant incidents within 1 hour; test incident response and recovery plans.", "c"], ["MAS", "Business Continuity Management Guidelines", "Set recovery time objectives for critical business services and test them.", "b"], ["CSA", "Cybersecurity Act 2018", "CII owners must report incidents and take part in national cyber exercises.", "c"]] },
  AE: { n: "United Arab Emirates", r: [["UAE Data Office", "Federal Decree-Law 45/2021 (PDPL)", "Notify the Data Office and affected data subjects of breaches affecting personal data.", "p"], ["TDRA", "UAE Information Assurance Regulation", "Establish, test and maintain information security incident management.", "c"], ["NCEMA", "NCEMA 7000", "Implement and exercise a business continuity management system.", "b"]] },
  SA: { n: "Saudi Arabia", r: [["NCA", "Essential Cybersecurity Controls (ECC)", "Manage cybersecurity incidents and threats, and maintain cyber resilience.", "c"], ["SDAIA", "Personal Data Protection Law", "Notify SDAIA within 72 hours of becoming aware of a personal data breach.", "p"], ["SAMA", "Business Continuity Management Framework", "Test business continuity and disaster recovery plans for critical activities.", "b"]] },
  GB: { n: "United Kingdom", r: [["ICO", "UK GDPR Article 33", "Notify the ICO within 72 hours of becoming aware of a reportable personal data breach.", "p"], ["FCA / PRA", "Operational resilience · SYSC 15A", "Set impact tolerances for important business services and scenario-test them.", "b"], ["NCSC / regulators", "NIS Regulations 2018", "Operators of essential services must report significant incidents without undue delay.", "c"]] },
  EU: { n: "European Union", r: [["Data protection authority", "GDPR Article 33", "Notify the supervisory authority within 72 hours of a personal data breach.", "p"], ["National CSIRT", "NIS2 Directive Article 23", "Early warning within 24 hours and incident notification within 72 hours.", "c"], ["Financial supervisors", "DORA", "Report major ICT incidents and run digital operational resilience testing.", "c,b"]] },
  US: { n: "United States", r: [["SEC", "Form 8-K Item 1.05", "Disclose material cybersecurity incidents within 4 business days of determining materiality.", "c"], ["NYDFS", "23 NYCRR 500", "Notify within 72 hours; maintain and test incident response and BCDR plans annually.", "c,b"], ["HHS", "HIPAA Breach Notification Rule", "Notify affected individuals without unreasonable delay, no later than 60 days.", "p"], ["FFIEC", "Business Continuity Management booklet", "Exercise and test business continuity and resilience plans.", "b"]] },
  AU: { n: "Australia", r: [["OAIC", "Notifiable Data Breaches scheme", "Assess suspected breaches within 30 days and notify eligible breaches promptly.", "p"], ["APRA", "CPS 234", "Notify APRA within 72 hours; test information security response plans annually.", "c"], ["APRA", "CPS 230", "Maintain and test a business continuity plan for critical operations.", "b"], ["CISC", "SOCI Act 2018", "Report critical cyber security incidents within 12 hours.", "c"]] },
  CA: { n: "Canada", r: [["OPC", "PIPEDA breach of security safeguards", "Report breaches posing a real risk of significant harm as soon as feasible.", "p"], ["OSFI", "Guideline B-13", "Maintain cyber incident response and recovery capabilities.", "c"], ["OSFI", "Guideline E-21", "Set tolerances for disruption to critical operations and test against them.", "b"]] },
  MY: { n: "Malaysia", r: [["PDP Commissioner", "PDPA (Amendment) 2024", "Notify the Commissioner of personal data breaches within 72 hours.", "p"], ["BNM", "Risk Management in Technology (RMiT)", "Run cyber drills and test business continuity arrangements.", "c,b"], ["NACSA", "Cyber Security Act 2024", "NCII entities must report cyber security incidents and conduct exercises.", "c"]] },
  ID: { n: "Indonesia", r: [["Kominfo / PDP Agency", "Law 27/2022 (PDP Law)", "Notify data subjects and the authority within 3 × 24 hours of a data breach.", "p"], ["OJK", "POJK 11/2022", "Banks must maintain and test business continuity and disaster recovery plans.", "b"], ["BSSN", "Presidential Reg. 47/2023", "Operators must handle and report cyber incidents.", "c"]] },
  HK: { n: "Hong Kong", r: [["Commissioner’s Office", "Protection of Critical Infrastructures Ordinance", "Report serious incidents within 12 hours and take part in security drills.", "c"], ["HKMA", "SPM TM-G-2", "Test business continuity plans for critical business functions.", "b"], ["PCPD", "PDPO data breach guidance", "Notify the PCPD and affected individuals of data breaches as soon as practicable.", "p"]] },
  GL: { n: "Other / Global", r: [["NIST", "Cybersecurity Framework 2.0", "Respond and Recover functions: plan, test and improve incident response.", "c"], ["ISO", "ISO/IEC 27035", "Plan and prepare for information security incident management.", "c"], ["ISO", "ISO 22301 clause 8.5", "Exercise and test business continuity procedures at planned intervals.", "b"]] },
};

const EU = "AT BE BG HR CY CZ DK EE FI FR DE GR HU IE IT LV LT LU MT NL PL PT RO SK SI ES SE".split(" ");
const TZ: Record<string, string> = {
  "Asia/Manila": "PH", "Asia/Kolkata": "IN", "Asia/Calcutta": "IN", "Asia/Singapore": "SG",
  "Asia/Dubai": "AE", "Asia/Riyadh": "SA", "Europe/London": "GB", "Asia/Kuala_Lumpur": "MY",
  "Asia/Jakarta": "ID", "Asia/Hong_Kong": "HK", "America/Toronto": "CA", "America/Vancouver": "CA",
  "America/Edmonton": "CA", "America/Winnipeg": "CA", "America/Halifax": "CA",
};

const cur = ref("GL");
const detected = ref("GL");
const how = ref("none");
const open = ref(false);
const showAll = ref(false);

const extra = computed(() => (regions[cur.value]?.r.length ?? 0) > 3);
const shown = computed(() => {
  const rows = [...(regions[cur.value]?.r ?? []), ISO];
  return showAll.value ? rows : rows.slice(0, 3).concat([ISO]);
});
const lede = computed(() => {
  const name = regions[cur.value]?.n ?? "";
  if (cur.value === "GL") return "We couldn’t match your location to a region we cover yet. Below are widely used international expectations and how TestMyPlan helps you meet them.";
  const matched = how.value !== "none" && cur.value === detected.value;
  return `${matched ? "We’ve detected your location as" : "Showing requirements for"} <b>${name}</b>. Below are example regulatory expectations and how TestMyPlan helps you stay compliant.`;
});

function norm(code: string) {
  const c = (code || "").toUpperCase();
  if (regions[c]) return c;
  if (EU.includes(c)) return "EU";
  return null;
}

function fromTZ() {
  try {
    const z = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    if (TZ[z]) return TZ[z];
    if (/^Australia\//.test(z)) return "AU";
    if (/^Europe\//.test(z)) return "EU";
    if (/^America\/(New_York|Chicago|Denver|Los_Angeles|Phoenix|Anchorage|Detroit|Indiana)/.test(z) || /^Pacific\/Honolulu/.test(z)) return "US";
  } catch { /* ignore */ }
  return null;
}

function signup() {
  open.value = false;
  openSignupModal();
}

onMounted(async () => {
  let key: string | null = null;
  let source = "none";
  try {
    const ctrl = new AbortController();
    const timer = window.setTimeout(() => ctrl.abort(), 2500);
    const res = await fetch("https://ipapi.co/json/", { signal: ctrl.signal });
    window.clearTimeout(timer);
    const body = await res.json();
    key = norm(body.country_code || body.country);
    if (key) source = "ip";
  } catch { /* fall through */ }
  if (!key) {
    key = fromTZ();
    source = key ? "tz" : "none";
  }
  cur.value = key || "GL";
  detected.value = cur.value;
  how.value = source;
  let seen = false;
  try {
    seen = sessionStorage.getItem("tmp-compliance-seen") === "1";
    sessionStorage.setItem("tmp-compliance-seen", "1");
  } catch { /* ignore */ }
  if (!seen) window.setTimeout(() => { open.value = true; }, 2500);
});
</script>

<style scoped>
.cp-ov { position: fixed; inset: 0; z-index: 80; background: rgba(20, 21, 22, 0.5); display: grid; place-items: center; padding: 20px; overflow: auto; }
.cp { position: relative; width: 100%; max-width: 960px; background: #fbf9f8; border-radius: 20px; padding: 34px 38px 30px; box-shadow: 0 50px 100px -40px rgba(0, 0, 0, 0.6); font-family: "Manrope", system-ui, sans-serif; color: #2c2b2b; }
.cp-x { position: absolute; top: 18px; right: 18px; width: 36px; height: 36px; border-radius: 50%; border: 0; background: transparent; color: #948f8e; font-size: 24px; line-height: 1; cursor: pointer; }
.cp-x:hover { background: #f0eded; color: #141516; }
.cp-h { display: flex; flex-wrap: wrap; align-items: center; gap: 14px 20px; padding-right: 40px; }
.cp-h img { width: 40px; height: 40px; display: block; border-radius: 8px; }
.cp-h h3 { font-family: "Sora", system-ui, sans-serif; font-size: 26px; font-weight: 700; letter-spacing: -0.025em; color: #141516; margin: 0; flex: 1; min-width: 220px; }
.cp-sel { appearance: none; font: inherit; font-size: 15px; font-weight: 700; color: #fff; background: #141516 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2.5' stroke-linecap='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E") right 14px center/16px no-repeat; border: 0; border-radius: 999px; height: 44px; padding: 0 44px 0 20px; cursor: pointer; min-width: 220px; }
.cp-lede { font-size: 16.5px; line-height: 1.6; color: #625e5d; margin: 16px 0 22px; max-width: 760px; }
.cp-lede :deep(b) { color: #141516; font-weight: 800; }
.cp-t { width: 100%; border-collapse: separate; border-spacing: 0; background: #141516; border-radius: 14px; overflow: hidden; font-size: 15px; line-height: 1.45; }
.cp-t th { text-align: left; color: #fff; font-family: "Sora", system-ui, sans-serif; font-size: 13.5px; font-weight: 700; padding: 16px 18px; border-bottom: 3px solid #e2141b; }
.cp-t td { color: #e6e2e1; padding: 16px 18px; vertical-align: top; border-top: 1px solid #2a2c2d; }
.cp-t tr:nth-child(even) td { background: #1c1e1f; }
.cp-t td:first-child { color: #fff; font-weight: 800; }
.cp-t td:nth-child(2) { color: #b3aead; font-weight: 600; }
.cp-m { display: flex; flex-wrap: wrap; gap: 6px; }
.cp-m span { font-size: 12px; font-weight: 800; border-radius: 6px; padding: 3px 9px; white-space: nowrap; color: #141516; }
.m-c { background: #ffc4c0; } .m-p { background: #d9c2f0; } .m-b { background: #a9e0e0; } .m-t { background: #fff; }
.cp-f { display: flex; flex-wrap: wrap; gap: 12px 16px; align-items: center; margin-top: 22px; }
.cp-f small { flex: 1; min-width: 240px; font-size: 12.5px; color: #948f8e; line-height: 1.5; }
.cp-btn { display: inline-flex; align-items: center; justify-content: center; height: 50px; padding: 0 24px; border-radius: 10px; font: inherit; font-weight: 800; font-size: 15px; cursor: pointer; border: 1px solid transparent; text-decoration: none; }
.cp-pri { background: #e2141b; color: #fff; }
.cp-pri:hover { background: #b2111a; color: #fff; }
.cp-sec { background: #fff; color: #141516; border-color: #d6d2d1; }
.cp-pill { position: fixed; right: 20px; top: 84px; z-index: 40; display: flex; align-items: center; gap: 10px; background: #141516; color: #fff; border: 0; border-radius: 999px; padding: 10px 18px 10px 10px; font: inherit; font-family: "Manrope", system-ui, sans-serif; font-size: 14px; font-weight: 700; cursor: pointer; box-shadow: 0 14px 30px -12px rgba(0, 0, 0, 0.5); }
.cp-pill i { font-style: normal; background: #5cd0cb; color: #141516; font-weight: 800; font-size: 12px; border-radius: 999px; padding: 3px 9px; }
.cp-pill.solo { padding-left: 18px; }
.cp-pill:hover { background: #e2141b; }
@media (max-width: 760px) {
  .cp { padding: 28px 20px 22px; }
  .cp-t thead { display: none; }
  .cp-t, .cp-t tbody, .cp-t tr, .cp-t td { display: block; }
  .cp-t tr { padding: 14px 18px; border-top: 1px solid #2a2c2d; }
  .cp-t td { padding: 3px 0; border: 0; background: transparent !important; }
  .cp-sel, .cp-btn { width: 100%; }
}
</style>
