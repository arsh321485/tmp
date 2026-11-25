<template>
  <div class="reel" :class="platform">
    <div class="reel-side">
      <div class="plat" role="tablist" aria-label="Chat platform">
        <button type="button" role="tab" :aria-selected="platform === 'slack'" :class="{ on: platform === 'slack' }" @click="setPlatform('slack')">
          <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><use href="#slack" /></svg>
          Slack
        </button>
        <button type="button" role="tab" :aria-selected="platform === 'teams'" :class="{ on: platform === 'teams' }" @click="setPlatform('teams')">
          <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><use href="#teams" /></svg>
          Microsoft Teams
        </button>
      </div>

      <button
        v-for="mod in modules"
        :key="mod.id"
        type="button"
        class="scen"
        :class="{ on: mod.id === moduleId }"
        @click="pick(mod.id)"
      >
        <b>{{ mod.name }}</b>
        <span>{{ mod.scenario }}</span>
        <ol v-if="mod.id === moduleId">
          <li v-for="(label, i) in steps" :key="label" :class="{ now: i === step, done: step > i }">
            <i>{{ i + 1 }}</i>{{ label }}
          </li>
        </ol>
      </button>
    </div>

    <div class="win">
      <aside class="rail">
        <div class="rail-org">Acme Corp</div>
        <div class="rail-k">{{ platform === 'slack' ? 'Channels' : 'Channels' }}</div>
        <button
          v-for="ch in active.channels"
          :key="ch"
          type="button"
          class="ch"
          :class="{ on: ch === active.channel }"
        >
          <span class="hash">{{ platform === 'slack' ? '#' : '' }}</span>{{ ch }}
        </button>
        <div class="rail-k apps">Apps</div>
        <div class="app-row">
          <img :src="logo" alt="" />
          TestMyPlan
        </div>
      </aside>

      <section class="thread">
        <header class="thread-bar">
          <b>{{ platform === 'slack' ? '#' : '' }}{{ active.channel }}</b>
          <span class="live">LIVE DRILL</span>
          <small>{{ active.members }} members</small>
        </header>

        <div class="thread-body" ref="bodyEl">
          <article v-for="(msg, i) in visible" :key="moduleId + '-' + i" class="bubble" :class="msg.kind">
            <div class="av" :class="msg.kind">
              <img v-if="msg.kind === 'bot'" :src="logo" alt="" />
              <span v-else>{{ msg.initials }}</span>
            </div>
            <div class="bubble-main">
              <div class="who">
                {{ msg.who }}
                <i v-if="msg.kind === 'bot'">APP</i>
                <small>{{ msg.time }}</small>
              </div>
              <p v-if="msg.text" class="cmd">{{ msg.text }}</p>
              <div v-if="msg.card" class="card">
                <div class="card-k">{{ msg.card.kicker }}</div>
                <h3>{{ msg.card.title }}</h3>
                <dl>
                  <template v-for="row in msg.card.rows" :key="row[0]">
                    <dt>{{ row[0] }}</dt>
                    <dd>{{ row[1] }}</dd>
                  </template>
                </dl>
              </div>
              <div v-if="msg.action" class="act">
                <small>Exact action</small>
                {{ msg.action }}
              </div>
              <div v-if="msg.pills" class="pills">
                <span v-for="(pill, pi) in msg.pills" :key="pill" :class="{ hit: pi === 0 }">{{ pill }}</span>
              </div>
            </div>
          </article>
        </div>

        <div class="composer">Message {{ platform === 'slack' ? '#' : '' }}{{ active.channel }}</div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from "vue";
import logo from "@/assets/images/tmp-app-icon.png";

type Platform = "slack" | "teams";
type ModuleId = "bc" | "cyber" | "privacy";

interface Card {
  kicker: string;
  title: string;
  rows: [string, string][];
}

interface Beat {
  at: number;
  kind: "user" | "bot";
  who: string;
  initials?: string;
  time: string;
  text?: string;
  card?: Card;
  action?: string;
  pills?: string[];
}

interface DrillModule {
  id: ModuleId;
  name: string;
  scenario: string;
  channel: string;
  channels: string[];
  members: string;
  beats: Beat[];
}

const steps = [
  "Launch with one command",
  "Every role gets its exact action",
  "One tap to respond, clock running",
  "Live inject tests decisions",
  "Evidence report, ready for audit",
];

const modules: DrillModule[] = [
  {
    id: "bc",
    name: "Business Continuity",
    scenario: "Primary data centre outage",
    channel: "bcm-drill",
    channels: ["general", "ir-war-room", "bcm-drill", "privacy-response", "testmyplan-comman…"],
    members: "9",
    beats: [
      { at: 0, kind: "user", who: "Maya Chen", initials: "MC", time: "10:00 AM", text: '/testmyplan run bc "Primary data centre outage"' },
      {
        at: 0, kind: "bot", who: "TestMyPlan", time: "10:01 AM",
        card: {
          kicker: "Drill launched · Business continuity",
          title: "Primary data centre outage — DC-1 unavailable",
          rows: [
            ["Critical processes", "Payments · Customer service · Payroll"],
            ["People notified", "9 across 3 teams"],
            ["Targets", "RTO 4h · RPO 1h · MTPOD 24h"],
          ],
        },
      },
      { at: 1, kind: "bot", who: "TestMyPlan", time: "10:01 AM", action: "Confirm DC-1 failover and notify the process owners" },
      { at: 2, kind: "user", who: "Maya Chen", initials: "MC", time: "10:03 AM", text: "Done · failover confirmed", pills: ["Done · 2m 14s", "Need help", "Hand to backup"] },
      { at: 3, kind: "bot", who: "TestMyPlan", time: "10:04 AM", text: "Inject · Payments platform cannot fail over. RTO is now at risk." },
      { at: 4, kind: "bot", who: "TestMyPlan", time: "10:06 AM", text: "Evidence report ready. 9 responses logged, recovery times recorded against plan." },
    ],
  },
  {
    id: "cyber",
    name: "Cybersecurity",
    scenario: "Ransomware on file servers",
    channel: "ir-war-room",
    channels: ["general", "ir-war-room", "bcm-drill", "privacy-response", "testmyplan-comman…"],
    members: "11",
    beats: [
      { at: 0, kind: "user", who: "Priya Shah", initials: "PS", time: "10:40 AM", text: '/testmyplan run cyber "Ransomware on file servers"' },
      {
        at: 0, kind: "bot", who: "TestMyPlan", time: "10:41 AM",
        card: {
          kicker: "Drill launched · Cybersecurity",
          title: "Ransomware spreading from file server FS-02",
          rows: [
            ["Your role", "Incident Commander"],
            ["Backup", "Priya Shah"],
            ["Team", "Cyber Response Team"],
          ],
        },
      },
      { at: 1, kind: "bot", who: "TestMyPlan", time: "10:41 AM", action: "Authorise network isolation of the finance VLAN" },
      { at: 2, kind: "user", who: "Priya Shah", initials: "PS", time: "10:44 AM", text: "Isolation authorised", pills: ["Done · 3m 12s", "Need help", "Hand to backup"] },
      { at: 3, kind: "bot", who: "TestMyPlan", time: "10:46 AM", text: "Inject · Backup restore fails the integrity check." },
      { at: 4, kind: "bot", who: "TestMyPlan", time: "10:49 AM", text: "Evidence report ready. Isolation was inside the target time." },
    ],
  },
  {
    id: "privacy",
    name: "Privacy",
    scenario: "Customer database exfiltrated",
    channel: "privacy-response",
    channels: ["general", "ir-war-room", "bcm-drill", "privacy-response", "testmyplan-comman…"],
    members: "7",
    beats: [
      { at: 0, kind: "user", who: "Jordan Lee", initials: "JL", time: "11:12 AM", text: '/testmyplan run privacy "Customer database exfiltrated"' },
      {
        at: 0, kind: "bot", who: "TestMyPlan", time: "11:13 AM",
        card: {
          kicker: "Drill launched · Privacy",
          title: "Customer database posted for sale",
          rows: [
            ["Records", "128,000 customers"],
            ["Your role", "Data Protection Officer"],
            ["Clock", "Notify the regulator within 72 hours"],
          ],
        },
      },
      { at: 1, kind: "bot", who: "TestMyPlan", time: "11:13 AM", action: "Confirm the breach scope and start the regulator clock" },
      { at: 2, kind: "user", who: "Jordan Lee", initials: "JL", time: "11:18 AM", text: "Scope confirmed · clock started", pills: ["Done · 5m 02s", "Need help", "Hand to backup"] },
      { at: 3, kind: "bot", who: "TestMyPlan", time: "11:21 AM", text: "Inject · The regulator calls for a status update." },
      { at: 4, kind: "bot", who: "TestMyPlan", time: "11:26 AM", text: "Evidence report ready. Notification timeline logged for audit." },
    ],
  },
];

const platform = ref<Platform>("slack");
const moduleId = ref<ModuleId>("bc");
const step = ref(0);
const bodyEl = ref<HTMLElement | null>(null);
let timer = 0;

const active = computed(() => modules.find((m) => m.id === moduleId.value) ?? modules[0]!);
const visible = computed(() => active.value.beats.filter((b) => b.at <= step.value));

function setPlatform(next: Platform) {
  platform.value = next;
}

function pick(id: ModuleId) {
  moduleId.value = id;
  step.value = 0;
}

function advance() {
  if (step.value < steps.length - 1) {
    step.value += 1;
    return;
  }
  const order: ModuleId[] = ["bc", "cyber", "privacy"];
  const next = order[(order.indexOf(moduleId.value) + 1) % order.length] ?? "bc";
  moduleId.value = next;
  step.value = 0;
}

watch(visible, async () => {
  await nextTick();
  const el = bodyEl.value;
  if (el) el.scrollTop = el.scrollHeight;
});

onMounted(() => {
  timer = window.setInterval(advance, 2200);
});

onUnmounted(() => {
  window.clearInterval(timer);
});
</script>

<style scoped>
.reel {
  display: grid;
  grid-template-columns: minmax(240px, 300px) minmax(0, 1fr);
  gap: 16px;
  align-items: stretch;
  background: #f4f1f0;
  border: 1px solid #e5e2e1;
  border-radius: 24px;
  padding: 16px;
  min-height: 560px;
}
.reel-side { display: flex; flex-direction: column; gap: 12px; min-width: 0; }
.plat {
  display: inline-flex;
  align-self: flex-start;
  gap: 4px;
  background: #fff;
  border: 1px solid #e5e2e1;
  border-radius: 999px;
  padding: 4px;
}
.plat button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 0;
  background: transparent;
  border-radius: 999px;
  height: 36px;
  padding: 0 14px;
  font: inherit;
  font-size: 13.5px;
  font-weight: 700;
  color: #625e5d;
  cursor: pointer;
}
.plat button.on { background: #141516; color: #fff; }
.ico { width: 16px; height: 16px; display: block; }
.scen {
  text-align: left;
  background: #fff;
  border: 1px solid #e5e2e1;
  border-radius: 16px;
  padding: 16px 16px 14px;
  cursor: pointer;
  font: inherit;
  color: inherit;
}
.scen.on { border-color: #141516; box-shadow: inset 0 -3px 0 #e2141b; }
.scen b { display: block; font-family: "Sora", system-ui, sans-serif; font-size: 16px; font-weight: 700; color: #141516; letter-spacing: -0.02em; }
.scen > span { display: block; margin-top: 2px; color: #625e5d; font-size: 14px; font-weight: 600; }
.scen ol { list-style: none; margin: 14px 0 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
.scen li { display: flex; gap: 10px; align-items: flex-start; font-size: 13.5px; font-weight: 650; color: #948f8e; line-height: 1.35; }
.scen li i {
  flex: none;
  width: 20px; height: 20px; border-radius: 50%;
  display: grid; place-items: center;
  font-style: normal; font-size: 11px; font-weight: 800;
  background: #f4f1f0; color: #625e5d;
}
.scen li.now { color: #141516; font-weight: 800; }
.scen li.now i { background: #e2141b; color: #fff; }
.scen li.done { color: #2c2b2b; }
.scen li.done i { background: #141516; color: #fff; }
.win {
  display: grid;
  grid-template-columns: 196px minmax(0, 1fr);
  min-height: 520px;
  background: #fff;
  border: 1px solid #e5e2e1;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 30px 60px -36px rgba(20, 21, 22, 0.45);
}
.rail { background: #1c1528; color: #d7d2e4; padding: 16px 10px; display: flex; flex-direction: column; gap: 2px; }
.teams .rail { background: #3b3f8f; }
.rail-org { font-family: "Sora", system-ui, sans-serif; font-weight: 700; color: #fff; font-size: 16px; padding: 4px 8px 12px; }
.rail-k { font-size: 11px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #9b93ad; padding: 10px 8px 4px; }
.teams .rail-k { color: #c9c8ef; }
.ch {
  display: flex; gap: 4px; align-items: center;
  width: 100%; text-align: left;
  border: 0; background: transparent; color: #d7d2e4;
  font: inherit; font-size: 13.5px; font-weight: 650;
  border-radius: 8px; padding: 7px 8px; cursor: default;
}
.ch.on { background: #3b6cff; color: #fff; }
.teams .ch.on { background: #6264a7; }
.hash { opacity: 0.7; }
.teams .hash { display: none; }
.app-row { display: flex; align-items: center; gap: 8px; padding: 6px 8px; font-size: 13.5px; font-weight: 700; color: #fff; }
.app-row img { width: 18px; height: 18px; border-radius: 4px; }
.thread { display: flex; flex-direction: column; min-width: 0; background: #fff; }
.thread-bar {
  display: flex; align-items: center; gap: 10px;
  padding: 14px 16px; border-bottom: 1px solid #e5e2e1;
  font-family: "Sora", system-ui, sans-serif;
}
.thread-bar b { font-size: 15px; color: #141516; }
.live {
  display: inline-flex; align-items: center; gap: 6px;
  background: #fdeceb; color: #b2111a;
  font-family: "Manrope", system-ui, sans-serif;
  font-size: 11px; font-weight: 800; letter-spacing: 0.06em;
  border-radius: 999px; padding: 3px 8px;
}
.live::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: #e2141b; animation: pulse 1.4s infinite; }
@keyframes pulse { 50% { opacity: 0.25; } }
.thread-bar small { margin-left: auto; color: #948f8e; font-family: "Manrope", system-ui, sans-serif; font-weight: 700; font-size: 12.5px; }
.thread-body { flex: 1; overflow: auto; padding: 8px 8px 12px; display: flex; flex-direction: column; gap: 4px; max-height: 430px; }
.bubble { display: grid; grid-template-columns: 36px minmax(0, 1fr); gap: 10px; padding: 10px; border-radius: 12px; animation: rise 0.45s both; }
@keyframes rise { from { opacity: 0; transform: translateY(8px); } }
.av { width: 36px; height: 36px; border-radius: 8px; display: grid; place-items: center; font-size: 12px; font-weight: 800; color: #fff; overflow: hidden; }
.av.user { background: #0f766e; }
.av.bot { background: #fff; border: 1px solid #e5e2e1; }
.av img { width: 100%; height: 100%; object-fit: cover; display: block; }
.who { display: flex; gap: 8px; align-items: center; font-weight: 800; color: #141516; font-size: 14px; }
.who i { font-style: normal; font-size: 10px; font-weight: 800; background: #f4f1f0; color: #625e5d; border-radius: 4px; padding: 1px 5px; }
.who small { font-weight: 600; color: #948f8e; font-size: 12px; }
.cmd { margin: 4px 0 0; color: #b2111a; font-weight: 650; font-size: 14.5px; }
.card { margin-top: 8px; border: 1px solid #e5e2e1; border-left: 4px solid #e2141b; border-radius: 10px; padding: 12px 14px; display: block; cursor: default; box-shadow: none; background: transparent; }
.card-k { font-size: 11px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #b2111a; }
.card h3 { font-family: "Sora", system-ui, sans-serif; font-size: 16px; line-height: 1.3; margin-top: 4px; color: #141516; font-weight: 700; }
.card dl { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 4px 12px; margin: 10px 0 0; font-size: 13px; }
.card dt { color: #948f8e; font-weight: 600; }
.card dd { margin: 0; color: #141516; font-weight: 700; }
.act { margin-top: 8px; background: #f4f1f0; border-radius: 8px; padding: 10px 12px; font-size: 14px; font-weight: 700; color: #141516; }
.act small { display: block; font-size: 11px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #625e5d; margin-bottom: 2px; }
.pills { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
.pills span { border: 1px solid #d6d2d1; border-radius: 7px; padding: 6px 10px; font-size: 12.5px; font-weight: 700; color: #141516; }
.pills span.hit { background: #006767; border-color: #006767; color: #fff; }
.composer { margin: 0 12px 12px; border: 1px solid #e5e2e1; border-radius: 8px; padding: 10px 12px; color: #948f8e; font-size: 14px; }
@media (max-width: 900px) {
  .reel, .win { grid-template-columns: minmax(0, 1fr); }
  .rail { display: none; }
}
</style>
