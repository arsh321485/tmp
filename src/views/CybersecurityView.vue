<template>
    <div id="top">
        <MainNavbar />
        <RegulatoryWidget />

        <section class="cyber-hero position-relative">
            <!-- Background image -->
            <div class="cyber-bg"></div>

            <!-- Content area -->
            <div class="container content-wrap d-flex flex-column justify-content-center">

                <!-- Small icon -->
                <div class="cyber-icon mb-3">
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>

                <!-- Title -->
                <h1 class="cyber-title">Cybersecurity Preparedness</h1>

                <!-- Description -->
                <p class="cyber-desc">
                    Your tools detect threats. TMP prepares your people to handle them.<br />
                    Modern cyberattacks evolve faster than organizations can train—and attackers count on that.<br />
                    TMP gives your SOC, IR, Cloud, AppSec, and leadership teams the ability to respond
                    with clarity, speed, and confidence.
                </p>

                <!-- Small CTA Button -->
                <div class="cta-row">
                    <button class="btn btn-light btn-sm cyber-btn-sm">
                        Assess Cyber Preparedness →
                    </button>
                </div>
            </div>

            <!-- Breadcrumb pill -->
            <div class="breadcrumb-pill d-flex align-items-center">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item"><a href="/" class="text-decoration-none">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Cybersecurity Preparedness</li>
                    </ol>
                </nav>
            </div>
        </section>


        <section class="cyber-reality container py-5" aria-labelledby="cyber-reality-title">
            <div class="header mb-4">
                <h2 id="cyber-reality-title" class="cyber-section-title">The Cyber Reality</h2>
                <p class="cyber-section-sub">Key problems that make technical tools ineffective without prepared people.
                </p>
            </div>

            <div class="cyber-grid">
                <!-- 1 -->
                <article class="cyber-card" aria-labelledby="pr1-title">
                    <div class="cyber-left">
                        <div class="cyber-number">01</div>
                    </div>
                    <div class="cyber-right">
                        <h3 id="pr1-title" class="cyber-card-title">Tools are advanced. Human readiness is not.</h3>
                        <p class="cyber-card-body">
                            Security stacks get stronger; human behavior remains the weakest link. Under pressure,
                            even trained staff hesitate, escalate incorrectly, or miss critical steps.
                        </p>
                    </div>
                </article>

                <!-- 2 -->
                <article class="cyber-card" aria-labelledby="pr2-title">
                    <div class="cyber-left">
                        <div class="cyber-number">02</div>
                    </div>
                    <div class="cyber-right">
                        <h3 id="pr2-title" class="cyber-card-title">Incident response plans are outdated the moment
                            they're written.</h3>
                        <p class="cyber-card-body">
                            IR playbooks often don’t reflect changes across the environment. Common gaps include:
                        </p>
                        <ul class="cyber-list">
                            <li>tool changes</li>
                            <li>cloud migration</li>
                            <li>new vendors</li>
                            <li>updated OS / app versions</li>
                            <li>new regulatory requirements</li>
                        </ul>
                        <p class="cyber-card-note"><strong>TMP keeps your response living and aligned to
                                reality.</strong></p>
                    </div>
                </article>

                <!-- 3 -->
                <article class="cyber-card" aria-labelledby="pr3-title">
                    <div class="cyber-left">
                        <div class="cyber-number">03</div>
                    </div>
                    <div class="cyber-right">
                        <h3 id="pr3-title" class="cyber-card-title">SOC burnout & alert fatigue slow response</h3>
                        <p class="cyber-card-body">
                            Analysts drown in alerts. Important decisions get delayed. <strong>TMP forces clarity—who
                                acts,
                                how fast, in what order.</strong>
                        </p>
                    </div>
                </article>

                <!-- 4 -->
                <article class="cyber-card" aria-labelledby="pr4-title">
                    <div class="cyber-left">
                        <div class="cyber-number">04</div>
                    </div>
                    <div class="cyber-right">
                        <h3 id="pr4-title" class="cyber-card-title">Cross-team friction kills containment</h3>
                        <p class="cyber-card-body">
                            Real incidents require many teams to work together:
                        </p>
                        <ul class="cyber-list inline-list">
                            <li>SOC</li>
                            <li>IR</li>
                            <li>AppSec</li>
                            <li>DevOps</li>
                            <li>Cloud</li>
                            <li>Management</li>
                        </ul>
                        <p class="cyber-card-body">But communication breaks down under stress, which slows containment.
                        </p>
                    </div>
                </article>

                <!-- 5 -->
                <article class="cyber-card" aria-labelledby="pr5-title">
                    <div class="cyber-left">
                        <div class="cyber-number">05</div>
                    </div>
                    <div class="cyber-right">
                        <h3 id="pr5-title" class="cyber-card-title">Leadership gets no visibility into real readiness
                        </h3>
                        <p class="cyber-card-body">
                            CISOs can’t answer:
                        </p>
                        <ul class="cyber-list">
                            <li>“How prepared are we today?”</li>
                            <li>“Which teams are weakest?”</li>
                            <li>“Where are our IR bottlenecks?”</li>
                        </ul>
                        <p class="cyber-card-note"><strong>TMP makes readiness measurable, trackable, and
                                reportable.</strong></p>
                    </div>
                </article>
            </div>
        </section>


        <section class=" steps-hero py-5 " aria-labelledby="tmp-solves-title">
            <div class="container">

            <header class="mb-4 steps-left">
                <h2 id="tmp-solves-title" class="Steps-title" style="font-weight: 600;">How TMP Solves Cyber Preparedness</h2>
                <p class="section-sub">Practical, continuous, and auditor-ready capabilities that close the people &amp;
                    process gap.</p>
            </header>

            <div class="solves-wrap">
                <!-- Tabs (left on desktop, top on mobile) -->
                <nav class="tabs" role="tablist" :aria-orientation="isMobile ? 'horizontal' : 'vertical'">
                    <button v-for="(t, i) in tabs" :key="t.id" :id="'tab-' + t.id"
                        :class="['tab-btn', { active: active === i }]" role="tab"
                        :aria-selected="active === i ? 'true' : 'false'" :aria-controls="'panel-' + t.id"
                        @click="setActive(i)" @keyup.enter.space.prevent="setActive(i)">
                        <span class="tab-num">{{ (i + 1).toString().padStart(2, '0') }}</span>
                        <span class="tab-label">{{ t.title }}</span>
                    </button>
                </nav>

                <!-- Content panels -->
                <div class="panels">
                    <article v-for="(t, i) in tabs" :key="t.id" :id="'panel-' + t.id" class="panel" role="tabpanel"
                        :aria-labelledby="'tab-' + t.id" v-show="active === i">
                        <h3 class="panel-title">{{ t.title }}</h3>
                        <p class="panel-desc" v-if="t.intro">{{ t.intro }}</p>

                        <div v-if="t.examples && t.examples.length" class="panel-examples">
                            <strong class="examples-label">Examples:</strong>
                            <ul class="examples-list">
                                <li v-for="(ex, k) in t.examples" :key="k">{{ ex }}</li>
                            </ul>
                        </div>

                        <div v-if="t.items && t.items.length" class="panel-steps">
                            <strong class="examples-label">Key steps:</strong>
                            <ul class="steps-list">
                                <li v-for="(it, j) in t.items" :key="j">{{ it }}</li>
                            </ul>
                        </div>

                        <p v-if="t.note" class="panel-note"><strong>{{ t.note }}</strong></p>
                    </article>
                </div>
            </div>

            </div>
        </section>

        <MainContact />
        <!-- FOOTER -->
        <MainFooter />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "../components/MainNavbar.vue";
import MainFooter from "../components/MainFooter.vue";
import MainContact from "@/components/MainContact.vue";
import RegulatoryWidget from "@/components/RegulatoryWidget.vue";

type Tab = {
    id: string;
    title: string;
    intro?: string;
    examples?: string[];
    items?: string[];
    note?: string;
};

export default defineComponent({
    name: "CybersecurityView",
    components: {
        MainNavbar,
        RegulatoryWidget,
        MainFooter,
        MainContact
    },

    data() {
        return {
            active: 0 as number,
            resizeHandlerFn: null as null | (() => void), // FIXED (no _)
            tabs: [
                {
                    id: "sim",
                    title: "Automated Cyber Simulations (No Hassle, No Setup)",
                    intro:
                        "Launch real-world incident simulations across endpoints, cloud, apps, and users. TMP maps tasks to actual systems you use (Cloud, Windows, Linux, SaaS, Networks).",
                    examples: [
                        "Ransomware infiltration",
                        "Compromised credentials",
                        "Cloud IAM misconfigurations",
                        "Phishing chain attacks",
                        "Privilege escalation event",
                        "Business email compromise",
                        "API abuse",
                        "Zero-day exploitation pattern",
                    ],
                },
                {
                    id: "workflows",
                    title: "Guided Response Workflows Across All Teams",
                    intro: "TMP ensures each stakeholder receives role-specific steps and every action is logged.",
                    items: [
                        "isolate endpoint",
                        "suspend session",
                        "rotate keys",
                        "notify leadership",
                        "check firewall logs",
                        "update SIEM case",
                        "engage forensics",
                    ],
                    note: "Every action is logged.",
                },
                {
                    id: "metrics",
                    title: "Real-Time Cyber Readiness Metrics",
                    intro:
                        "TMP tracks the critical readiness metrics CISOs need to measure and justify investment.",
                    items: [
                        "MTTA (Mean Time to Acknowledge)",
                        "MTTR-S (Mean Time to Respond to Simulation)",
                        "Escalation latency",
                        "Cross-team collaboration score",
                        "Playbook completion %",
                        "Decision accuracy vs ideal response",
                    ],
                    note: "These metrics help CISOs justify budgets, staffing, and tool investment.",
                },
                {
                    id: "improve",
                    title: "Continuous IR Improvement Loop",
                    intro:
                        "Each simulation creates focused observations and recommended fixes so your IR program improves continuously.",
                    items: [
                        "gap analysis",
                        "role misconfigurations",
                        "slow responders",
                        "dependency failures",
                        "documentation errors",
                    ],
                    note: "TMP automatically recommends improvements.",
                },
                {
                    id: "evidence",
                    title: "Auditor-Ready Cyber Evidence",
                    intro: "TMP produces evidence mapped to common frameworks so audits are straightforward and defensible.",
                    items: [
                        "ISO 27001 A.5, A.16 controls",
                        'NIST CSF "Respond" & "Recover"',
                        "SOC 2 CC7.x",
                        "RBI Cyber Security directions",
                        "PCI DSS incident handling",
                        "CIS Controls",
                    ],
                },
            ] as Tab[],
        };
    },

    computed: {
        isMobile(): boolean {
            return window.innerWidth <= 768;
        },
    },

    mounted() {
        this.resizeHandlerFn = () => {
            this.$forceUpdate();
        };
        window.addEventListener("resize", this.resizeHandlerFn);
    },

    beforeUnmount() {
        if (this.resizeHandlerFn) {
            window.removeEventListener("resize", this.resizeHandlerFn);
        }
    },

    methods: {
        setActive(index: number) {
            this.active = index;

            this.$nextTick(() => {
                // FIX: safely reference tab
                const tab = this.tabs[index];
                if (!tab) return;

                const el = document.getElementById("tab-" + tab.id) as HTMLElement | null;
                if (el) el.focus();
            });
        },
    },
});
</script>




