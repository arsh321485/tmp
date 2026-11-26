<template>
  <div class="tmp-home">
    <svg width="0" height="0" style="position: absolute" aria-hidden="true">
      <symbol id="slack" viewBox="0 0 24 24">
        <rect x="9.5" y="2" width="3.6" height="9" rx="1.8" fill="#36C5F0" />
        <rect x="2" y="9.9" width="9" height="3.6" rx="1.8" fill="#36C5F0" />
        <rect x="10.9" y="13" width="3.6" height="9" rx="1.8" fill="#ECB22E" />
        <rect x="13" y="10.5" width="9" height="3.6" rx="1.8" fill="#2EB67D" />
      </symbol>
      <symbol id="teams" viewBox="0 0 24 24">
        <rect x="2" y="5" width="14" height="14" rx="3" fill="#5059C9" />
        <path d="M5.5 9h7v1.8H10V16H8v-5.2H5.5z" fill="#fff" />
        <circle cx="19" cy="7.5" r="2.5" fill="#7B83EB" />
        <rect x="16.5" y="11" width="5.5" height="7" rx="2.5" fill="#7B83EB" />
      </symbol>
    </svg>

    <header class="nav">
      <div class="wrap">
        <a class="brand" href="#top">
          <img :src="logo" alt="TestMyPlan" />
          <b>TestMyPlan</b>
        </a>
        <nav class="nav-links">
          <a href="#how">How it works</a>
          <a href="#live">Live threats</a>
          <a href="#why">Knowledge base</a>
          <a href="#mssp">Partners</a>
          <router-link to="/teams-portal">Teams</router-link>
          <router-link to="/faq">Support</router-link>
        </nav>
        <div class="nav-cta">
          <button type="button" class="btn btn-red btn-sm" @click="openSignupModal">Sign up</button>
        </div>
      </div>
    </header>

    <main id="top">
      <section class="hero">
        <div class="wrap">
          <div>
            <div class="tag"><span>Prepared</span>Incident and continuity drills, run where your team works</div>
            <h1>Test your incident plan <em>before</em> an attacker does.</h1>
            <p class="lede">
              TestMyPlan runs role-based incident response and business continuity drills inside Slack and Microsoft Teams — every person gets their exact action, the clock runs, and you get audit-ready evidence of who did what, and how fast.
            </p>
            <div class="signup">
              <button type="button" class="btn btn-slack" @click="openSignupModal">
                <svg class="ico"><use href="#slack" /></svg>Sign up with Slack
              </button>
              <button type="button" class="btn btn-teams" @click="openSignupModal">
                <svg class="ico"><use href="#teams" /></svg>Sign up with Microsoft Teams
              </button>
            </div>
            <div class="fine">
              <span>No new tool to learn</span>
              <span>Set up in one sitting</span>
              <span>Evidence for auditors</span>
            </div>
          </div>
          <div class="mock">
            <div class="win">
              <div class="win-bar"># ir-war-room <span class="live">LIVE DRILL</span><small>Cybersecurity · Phase 2 of 5</small></div>
              <div class="msg">
                <div class="msg-av"><img :src="logo" alt="" /></div>
                <div>
                  <div class="msg-who">TestMyPlan <i>APP</i> <small>10:42 AM</small></div>
                  <div class="card">
                    <div class="card-k">Containment · Your move <b>14:32</b></div>
                    <h3>Ransomware spreading from file server FS‑02</h3>
                    <dl>
                      <dt>Your role</dt><dd>Incident Commander</dd>
                      <dt>Backup</dt><dd>Priya Shah</dd>
                      <dt>Team</dt><dd>Cyber Response Team</dd>
                    </dl>
                    <div class="act"><small>Exact action</small>Authorise network isolation of the finance VLAN</div>
                    <div class="acts"><span>Done</span><span>Need help</span><span>Hand to backup</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="float">
              <small>Response logged</small>
              <b>Isolation authorised in 3m 12s</b>
              <p>Within target · added to evidence report</p>
            </div>
          </div>
        </div>
      </section>

      <section class="strip">
        <div class="wrap">
          <div class="dm" v-for="domain in domains" :key="domain.name">
            <b>{{ domain.name }}</b>
            <span>{{ domain.line }}</span>
            <small>Sample scenarios</small>
            <ul>
              <li v-for="item in domain.items" :key="item">{{ item }}</li>
            </ul>
          </div>
          <div class="met">
            <span><i>RTO</i><i>RPO</i><i>MTPOD</i></span>
            <b>Measured, not assumed.</b>
            <em>Every drill records the recovery times you actually achieve across continuity, cyber and privacy scenarios, alongside the targets in your plan.</em>
          </div>
        </div>
      </section>

      <section class="sec" id="see-it-run">
        <div class="wrap">
          <div class="sec-head">
            <div>
              <div class="eyebrow">See it run</div>
              <h2>A full drill, without leaving the chat.</h2>
            </div>
            <p>One command to launch, one tap to respond, an evidence report at the end. Pick a module and switch between Slack and Microsoft Teams.</p>
          </div>
          <DemoReel />
        </div>
      </section>

      <section class="sec chal" id="challenges">
        <div class="wrap">
          <div class="sec-head">
            <div>
              <div class="eyebrow">The challenge</div>
              <h2>Plans that sit on a shelf fail on the day.</h2>
            </div>
            <p>Attacks move faster than any team can respond from memory. <b>Most incident and continuity plans are out of date, untested, and unclear about who does what</b> — until it’s too late to find out.</p>
          </div>
          <div class="probs">
            <div class="prob" v-for="(prob, i) in problems" :key="prob.title">
              <div class="prob-n">{{ String(i + 1).padStart(2, "0") }}</div>
              <h3>{{ prob.title }}</h3>
              <p>{{ prob.text }}</p>
            </div>
          </div>
          <div class="audit">
            <b>Your auditor will ask: <em>“When was this plan last tested?”</em> TestMyPlan gives you the answer — with evidence.</b>
            <button type="button" class="btn btn-red" style="background: var(--hi); color: var(--ink)" @click="openSignupModal">Sign up</button>
          </div>
        </div>
      </section>

      <section class="sec dark" id="approach">
        <div class="wrap">
          <div class="sec-head">
            <div>
              <div class="eyebrow">The TestMyPlan approach</div>
              <h2>One method across continuity, recovery and response.</h2>
            </div>
            <p>Every plan is mapped to your own processes — with their RTO, RPO and MTPOD — and technology, covers every threat and incident, and is exercised end to end — from trigger to post-incident activity.</p>
          </div>
          <div class="matrix-wrap">
            <div class="matrix">
              <div class="mh">Plan</div>
              <div class="mh">Objective</div>
              <div class="mh">Approach and scope</div>
              <div class="mh">Implementation and maintenance</div>
              <template v-for="row in matrix" :key="row.plan">
                <div class="mc pl">{{ row.plan }}</div>
                <div class="mc"><span class="band" :class="row.band">{{ row.bandText }}</span>{{ row.objective }}</div>
                <div class="mc">{{ row.approach }}</div>
                <div class="mc">{{ row.maintain }}</div>
              </template>
            </div>
            <div class="side"><span>End-to-end preparedness · trigger to post-incident activity</span></div>
          </div>
        </div>
      </section>

      <section class="sec" id="inject">
        <div class="wrap inj">
          <div class="inj-l">
            <div class="eyebrow">Admin-injected scenarios</div>
            <h2>Throw a curveball — mid-drill.</h2>
            <p>Real incidents don’t follow the script. While a drill is live, admins inject new developments into the scenario and watch how teams adapt, escalate and hand over.</p>
            <ul class="ticks">
              <li>Inject from the scenario library or write your own</li>
              <li>Target one role, one team or the whole channel</li>
              <li>Test backups by taking a primary role offline</li>
              <li>Every inject is timed and logged in the evidence report</li>
            </ul>
          </div>
          <div class="win">
            <div class="win-bar">Drill control <span class="live">LIVE</span><small>Ransomware on FS‑02 · 18:40 elapsed</small></div>
            <div class="phases">
              <div class="past">Detect</div>
              <div class="on">Contain</div>
              <div>Eradicate</div>
              <div>Recover</div>
              <div>Review</div>
            </div>
            <div class="inj-k" style="margin-top: 14px">Injects</div>
            <div class="injl">
              <div v-for="item in injects" :key="item.title" class="injr" :class="{ sent: item.sent }">
                <div>
                  <b>{{ item.title }}</b>
                  <small>{{ item.sent ? item.sentNote : item.note }}</small>
                </div>
                <button type="button" @click="sendInject(item)">{{ item.sent ? "Sent" : "Inject" }}</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="sec" id="solution" style="padding-top: 0">
        <div class="wrap">
          <div class="sec-head">
            <div>
              <div class="eyebrow">What you get</div>
              <h2>Readiness you can measure — and prove.</h2>
            </div>
            <p>Each drill turns your plan into live, timed actions for real people, then shows you exactly where the response held and where it broke.</p>
          </div>
          <div class="sol">
            <div class="sol-c wide"><div class="n">01</div><p>Test readiness to respond to incidents with role plays and scenarios that expose delayed detection, ineffective containment and weak communication.</p></div>
            <div class="sol-c"><div class="n">02</div><p>Identify readiness and dependencies for each incident.</p></div>
            <div class="sol-c"><div class="n">03</div><p>Pinpoint the users who need training — and in which areas.</p></div>
            <div class="sol-c"><div class="n">04</div><p>Develop team competencies drill by drill.</p></div>
            <div class="sol-c"><div class="n">05</div><p>Meet internal audit and compliance requirements with evidence.</p></div>
            <div class="sol-c"><div class="n">06</div><p>Prepare users to act within stipulated time frames.</p></div>
            <div class="sol-c"><div class="n">07</div><p>Keep incident response plans clear, current and well-defined.</p></div>
            <div class="sol-c full"><div class="n">08</div><p>Test business continuity end to end — <span>validate RTO, RPO and MTPOD</span> for critical processes and prove backups restore in time.</p></div>
          </div>
        </div>
      </section>

      <section class="sec" id="how" style="padding-top: 0">
        <div class="wrap">
          <div class="sec-head">
            <div>
              <div class="eyebrow">How it works</div>
              <h2>From sign-up to first drill in four steps.</h2>
            </div>
            <p>Admins configure once. Participants never leave Slack or Teams.</p>
          </div>
          <div class="steps">
            <div class="step" v-for="step in steps" :key="step.title">
              <h3>{{ step.title }}</h3>
              <p>{{ step.text }}</p>
            </div>
          </div>
          <div class="chain">
            <span>Threats</span><i>→</i><span>Incidents</span><i>→</i><span>Causes</span><i>→</i><span>Scenarios</span><i>→</i><span>Phases</span><i>→</i><span>Actions</span>
          </div>
        </div>
      </section>

      <section class="sec ms" id="mssp">
        <div class="wrap">
          <div class="sec-head">
            <div>
              <div class="eyebrow">For MSSPs &amp; MDR providers</div>
              <h2>Every client’s drills in one console, measured against your SLAs.</h2>
            </div>
            <p>Deliver incident response and continuity testing as a recurring managed service. Each client drills in their own Slack or Teams; you see every response time against the SLA you signed.</p>
          </div>
          <div class="ms-grid">
            <div>
              <div class="ms-pts">
                <div v-for="point in mssp" :key="point.n">
                  <h3><span>{{ point.n }}</span>{{ point.title }}</h3>
                  <p>{{ point.text }}</p>
                </div>
              </div>
              <div class="ms-cta">
                <button type="button" class="btn btn-red" @click="openSignupModal">Sign up as an MSSP</button>
                <a class="lk" href="#mssp">Explore the partner programme →</a>
              </div>
            </div>
            <div class="sla">
              <div class="sla-h"><b>Client SLA board</b><span>24 clients · 38 drills this quarter</span><em>SLA met 87%</em></div>
              <table class="sla-t">
                <thead>
                  <tr>
                    <th>Client · last drill</th>
                    <th>Acknowledge<small>SLA 15m</small></th>
                    <th>Escalate<small>SLA 30m</small></th>
                    <th>Contain<small>SLA 4h</small></th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Northwind Bank<small>Ransomware · 12 Nov</small></td>
                    <td>6m</td><td>22m</td><td>3h 10m</td>
                    <td><span class="sla-s">Met</span></td>
                  </tr>
                  <tr>
                    <td>Halcyon Health<small>Privacy breach · 9 Nov</small></td>
                    <td>12m</td><td class="no">41m</td><td class="no">4h 50m</td>
                    <td><span class="sla-s risk">At risk</span></td>
                  </tr>
                  <tr>
                    <td>Brightline Retail<small>Data centre outage · 7 Nov</small></td>
                    <td>9m</td><td>18m</td><td>2h 05m</td>
                    <td><span class="sla-s">Met</span></td>
                  </tr>
                  <tr>
                    <td>Orbis Logistics<small>BEC fraud · 4 Nov</small></td>
                    <td class="no">19m</td><td class="no">35m</td><td>3h 40m</td>
                    <td><span class="sla-s br">Breach</span></td>
                  </tr>
                </tbody>
              </table>
              <div class="sla-f"><i></i><span><b>Halcyon Health</b> escalated 11m over SLA. A follow-up drill for the escalation path is scheduled for 21 Nov.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section class="sec" id="why" style="background: var(--surface); border-top: 1px solid var(--line)">
        <div class="wrap">
          <div class="sec-head">
            <div>
              <div class="eyebrow">Why test regularly</div>
              <h2>Eight reasons to test your business continuity plan regularly.</h2>
            </div>
            <p>The threat landscape changes every week. Your incident response and continuity plans should be proven against it just as often.</p>
          </div>
          <div class="why">
            <div class="why-i" v-for="(item, i) in reasons" :key="item.title">
              <h3><span>{{ String(i + 1).padStart(2, "0") }}</span>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="sec feed-sec" id="live">
        <div class="wrap">
          <div class="sec-head">
            <div>
              <div class="eyebrow">Live · global incident feed</div>
              <h2>While you read this, someone is being hit.</h2>
            </div>
            <p>Ransomware claims, reported cyberattacks, data breaches and actively exploited vulnerabilities, from public sources worldwide. Every one of these organisations had a plan. The question is whether it had been tested.</p>
          </div>
          <div class="feed-grid">
            <div class="feed">
              <div class="feed-top"><b>Latest threats</b><span>{{ snap.clock }}</span></div>
              <ul class="feed-list">
                <li v-for="(item, i) in feed" :key="item.title" :style="{ animationDelay: i * 70 + 'ms' }">
                  <span class="f-t" :class="{ new: item.fresh }">{{ item.ago }}</span>
                  <div class="f-m"><b>{{ item.title }}</b><small>{{ item.meta }}</small></div>
                  <span class="f-k" :style="{ background: item.color }">{{ item.label }}</span>
                </li>
              </ul>
              <div class="feed-src">
                <a href="#live" class="btn btn-red btn-sm">Open the live threat page →</a>
                <span>{{ snap.note }}</span>
              </div>
            </div>
            <div class="stats">
              <div class="stat"><small>Ransomware claims · 24 h</small><b>{{ snap.stats.rw }}</b><p>publicly disclosed</p></div>
              <div class="stat"><small>Breached accounts · 30 days</small><b>{{ snap.stats.accounts }}</b><p>{{ snap.stats.breachLine }}</p></div>
              <div class="stat"><small>Exploited vulns · 30 days</small><b>{{ snap.stats.kev }}</b><p>{{ snap.stats.kevLine }}</p></div>
            </div>
          </div>
          <div class="prepare">
            <span class="prep">Prepared</span>
            <div>
              <h2>Prepare now.</h2>
              <p>Don’t wait to find out in a real incident. Sign up, map your threats and critical processes, and run your first drill this week.</p>
            </div>
            <div class="stack">
              <button type="button" class="btn btn-slack" @click="openSignupModal">
                <svg class="ico"><use href="#slack" /></svg>Sign up with Slack
              </button>
              <button type="button" class="btn btn-teams" @click="openSignupModal">
                <svg class="ico"><use href="#teams" /></svg>Sign up with Microsoft Teams
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="sfoot">
      <div class="wrap">
        <p>TestMyPlan is a product of Secureitabservices Inc, a Delaware corporation.<br />© 2026 TestMyPlan. All rights reserved.</p>
        <nav aria-label="Legal">
          <router-link to="/privacy-policy">Privacy</router-link><i>·</i>
          <a href="#top">Terms</a><i>·</i>
          <a href="#top">DPA</a><i>·</i>
          <a href="#top">Sub-processors</a><i>·</i>
          <router-link to="/faq">Support</router-link>
        </nav>
      </div>
    </footer>

    <CompliancePill />

    <div class="tk" role="region" aria-label="Live threats">
      <span class="tk-l">Live threats</span>
      <span class="tk-v">
        <span class="tk-tr">
          <a
            v-for="(item, i) in tickerLoop"
            :key="i"
            class="tk-i"
            href="#live"
            :tabindex="i >= ticker.length ? -1 : undefined"
            :aria-hidden="i >= ticker.length ? 'true' : undefined"
          >
            <span :style="{ background: item.color }">{{ item.label }}</span>
            <b>{{ item.title }}</b>
            <small>{{ item.ago }}</small>
          </a>
        </span>
      </span>
      <a class="tk-r" href="#live">View all →</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, reactive, ref } from "vue";
import { loadThreats, sampleSnapshot } from "@/utils/threatFeed";
import logo from "@/assets/images/tmp-app-icon.png";
import { openSignupModal } from "@/utils/signup";
import DemoReel from "@/components/home/DemoReel.vue";
import CompliancePill from "@/components/home/CompliancePill.vue";
import "@/assets/home-landing.css";

const domains = [
  {
    name: "Business Continuity",
    line: "Critical processes, tested",
    items: [
      "Primary data centre outage",
      "Key supplier fails to deliver",
      "Head office inaccessible after fire or flood",
      "Payments platform down at month-end close",
      "Mass staff absence from illness or travel disruption",
    ],
  },
  {
    name: "Cybersecurity",
    line: "Five-phase response plan",
    items: [
      "Ransomware encrypts file servers overnight",
      "Business email compromise and fraudulent payment request",
      "Privileged admin credentials stolen",
      "Zero-day exploited on internet-facing VPN",
      "DDoS takes the customer portal offline",
    ],
  },
  {
    name: "Privacy",
    line: "Clock-driven breach sequence",
    items: [
      "Customer database exfiltrated and posted for sale",
      "Personal data emailed to the wrong recipient",
      "Unencrypted laptop with HR records lost",
      "Third-party processor reports a breach",
      "Extortion threat to leak patient or employee data",
    ],
  },
];

const problems = [
  { title: "Outpaced", text: "Humans are unable to match the speed and number of attacks." },
  { title: "Out of date", text: "Incident management plans prepared by organisations are not up to date." },
  { title: "Heavy to run", text: "Testing plans adds administrative overhead, and orchestrating tests is a challenge." },
  { title: "Nobody knows their move", text: "Many roles and responsibilities exist, but no one is clear on what to do when an attack hits." },
  { title: "Gaps in coverage", text: "Plans don’t comprehensively cover threats, incidents, causes, scenarios and phases." },
  { title: "Untrained responders", text: "IT teams are not trained to respond effectively to an incident." },
  { title: "Proof on demand", text: "Regulators and customers increasingly demand regular incident testing — and evidence of it." },
  { title: "“Plan not tested”", text: "One of the most common audit observations in organisations." },
  { title: "No method", text: "No methodical, process-based approach to testing that yields real data and assurance." },
  { title: "Recovery unproven", text: "Most organisations cannot effectively validate RTO, RPO and MTPOD for critical processes." },
];

const matrix = [
  {
    plan: "Business Continuity",
    band: "b1",
    bandText: "Mapping to organisational process RTO, RPO and MTPOD",
    objective: "Ensure critical business functions continue during a disruption.",
    approach: "Identify critical business processes and develop continuity strategies.",
    maintain: "Regular review and testing, including updating as needed.",
  },
  {
    plan: "Disaster Recovery",
    band: "b2",
    bandText: "Mapping to organisation-specific technology recovery process",
    objective: "Restore IT systems and infrastructure quickly after a disaster.",
    approach: "Restore IT infrastructure and systems, including data backup and recovery.",
    maintain: "Regular backup and testing of the recovery process.",
  },
  {
    plan: "Incident Response",
    band: "b3",
    bandText: "Coverage of all threats and incidents",
    objective: "Identify, contain, eradicate and recover from cybersecurity incidents.",
    approach: "Structured approach to incident detection, containment, eradication and recovery.",
    maintain: "Regular assessment and testing of the incident response plan.",
  },
];

const injects = reactive([
  { title: "Backup restore fails integrity check", note: "Injected 10:51 · DR team · 4 of 6 responded", sentNote: "Injected 10:51 · DR team · 4 of 6 responded", sent: true },
  { title: "Incident Commander unreachable", note: "Hand over to backup · Cyber Response Team", sentNote: "", sent: false },
  { title: "Regulator calls for a status update", note: "Privacy · Data Protection Officer", sentNote: "", sent: false },
  { title: "Payroll process down past RTO", note: "Business Continuity · Process owner", sentNote: "", sent: false },
]);

function sendInject(item: (typeof injects)[number]) {
  if (item.sent) return;
  const t = new Date();
  const stamp = t.getHours() + ":" + String(t.getMinutes()).padStart(2, "0");
  item.sent = true;
  item.sentNote = "Injected " + stamp + " · awaiting responses";
}

const steps = [
  { title: "Confirm threats and processes", text: "Start from your organisation profile, set criticality, and map critical processes to their RTO, RPO and MTPOD." },
  { title: "Assign roles and backups", text: "Build response teams with a mandatory backup for every role and the exact action each one owns." },
  { title: "Run the drill and inject", text: "Scenarios unfold phase by phase in channel — each person gets one clear action and a clock, while admins inject new developments." },
  { title: "Get the evidence", text: "Response times, gaps, training needs and RTO/RPO/MTPOD results — ready for audit and the board." },
];

const mssp = [
  { n: "01", title: "One console, every client", text: "Connect each client’s Slack or Teams. Their data stays separate; you get one view across all of them." },
  { n: "02", title: "SLA clocks on every drill", text: "Time to acknowledge, escalate, contain and notify, measured against each client’s contracted SLA." },
  { n: "03", title: "Catch misses before they’re real", text: "Drills show where an SLA would be missed, so you fix the runbook before a live incident tests it." },
  { n: "04", title: "Evidence for reviews and renewals", text: "Client-ready reports for quarterly business reviews, audits and renewals — under your brand." },
];

const reasons = [
  { title: "Cyber threat landscape changes", text: "New threats and attack vectors emerge constantly. Testing shows whether you are ready for the latest ones." },
  { title: "Detection and response capabilities", text: "Assess how well you detect and respond to malware outbreaks, data breaches and ransomware before they hit operations, data integrity and reputation." },
  { title: "Assessing incident response plans", text: "Simulated attacks and breach scenarios reveal weaknesses such as delayed detection, ineffective containment or inadequate communication." },
  { title: "Backup and recovery validation", text: "Confirm backups are complete, accessible and intact, and that recovery restores critical systems promptly." },
  { title: "Evaluation of cybersecurity controls", text: "See how your preventive, detective and response controls perform in real-world scenarios — and where the gaps are." },
  { title: "Training and awareness", text: "Most incidents start with human error. Drills teach best practice and make sure everyone knows their role." },
  { title: "Compliance and regulatory requirements", text: "Demonstrate to regulators that you safeguard data, maintain operations and can recover from cyber incidents." },
  { title: "Stakeholder confidence and reputation", text: "Regular testing reassures customers, investors and your board that cyber risk is managed — protecting trust." },
];

const snap = ref(sampleSnapshot());
const feed = computed(() => snap.value.cards);
const ticker = computed(() => snap.value.ticker);
const tickerLoop = computed(() => [...ticker.value, ...ticker.value]);

let feedTimer = 0;
onMounted(() => {
  loadThreats().then((next) => { snap.value = next; }).catch(() => {});
  feedTimer = window.setInterval(() => {
    loadThreats().then((next) => { snap.value = next; }).catch(() => {});
  }, 300000);
});
onUnmounted(() => window.clearInterval(feedTimer));
</script>
