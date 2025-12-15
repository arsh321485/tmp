<template>
    <div id="top">
        <MainNavbar />
        <RegulatoryWidget />

        <section class="cyber-hero position-relative delayed-section" style="animation-delay: 100ms;">
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
                <h1 class="cyber-title">ESG Preparedness</h1>

                <!-- Description -->
                <p class="cyber-desc">
                    Resilience is now part of ESG scoring — can you demonstrate it?<br />
                    ESG and Sustainability Leaders must show preparedness for operational, environmental, and governance
                    risks. TMP gives you a structured, measurable framework.
                </p>

                <!-- Small CTA Button -->
                <div class="cta-row">
                    <button class="btn btn-light btn-sm cyber-btn-sm">
                        Assess ESG Preparedness →
                    </button>
                </div>
            </div>

            <!-- Breadcrumb pill -->
            <div class="breadcrumb-pill d-flex align-items-center">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item"><a href="/" class="text-decoration-none">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">ESG Preparedness</li>
                    </ol>
                </nav>
            </div>
        </section>


        <section class="cyber-reality container py-5 delayed-section" aria-labelledby="cyber-reality-title"
            style="animation-delay: 300ms;">

            <div class="header mb-4">
                <h2 id="cyber-reality-title" class="cyber-section-title">The ESG Preparedness Reality</h2>
                <!-- <p class="cyber-section-sub">Key problems that make technical tools ineffective without prepared people.
                </p> -->
            </div>

            <div class="cyber-grid">
                <!-- 1 -->
                <article class="cyber-card" aria-labelledby="pr1-title">
                    <div class="cyber-left">
                        <div class="cyber-number">01</div>
                    </div>
                    <div class="cyber-right">
                        <h3 id="pr1-title" class="cyber-card-title">ESG plans lack operational clarity</h3>
                        <p class="cyber-card-body">
                            Policies exist, but workflows do not.
                        </p>

                        <ul class="cyber-list">
                            <li>Cybersecurity tools detect threats, but TMP ensures that your teams are prepared to
                                handle them effectively.</li>
                            <li>Modern cyberattacks evolve faster than organizations can train; attackers exploit this
                                gap in human readiness.</li>
                            <li>Even trained staff may hesitate or skip critical steps under pressure during an
                                incident.</li>

                        </ul>
                    </div>
                </article>

                <!-- 2 -->
                <article class="cyber-card" aria-labelledby="pr2-title">
                    <div class="cyber-left">
                        <div class="cyber-number">02</div>
                    </div>
                    <div class="cyber-right">
                        <h3 id="pr2-title" class="cyber-card-title"> Governance decisions are not documented</h3>
                        <p class="cyber-card-body">
                            Boards want audit trails for oversight responsibilities.
                        </p>
                        <ul class="cyber-list">
                            <li>tool changes</li>
                            <li>cloud migration</li>
                            <li>new vendors</li>
                            <li>updated OS / app versions</li>
                            <li>new regulatory requirements</li>
                        </ul>

                    </div>
                </article>

                <!-- 3 -->
                <article class="cyber-card" aria-labelledby="pr3-title">
                    <div class="cyber-left">
                        <div class="cyber-number">03</div>
                    </div>
                    <div class="cyber-right">
                        <h3 id="pr3-title" class="cyber-card-title">Third-party ESG risk is rising</h3>
                        <p class="cyber-card-body">
                            Suppliers often cause sustainability & compliance failures.
                        </p>

                        <ul class="cyber-list">
                            <li>TMP keeps response plans updated and aligned with reality, adapting to new tools,
                                migrations, and regulations.</li>
                            <li>TMP makes cybersecurity preparedness measurable, trackable, and reportable, giving
                                leadership a clear view of team readiness.</li>
                            <li>TMP defines clear communication channels and roles to ensure all teams work together
                                effectively under pressure.</li>

                        </ul>


                    </div>
                </article>

                <!-- 4 -->
                <article class="cyber-card" aria-labelledby="pr4-title">
                    <div class="cyber-left">
                        <div class="cyber-number">04</div>
                    </div>
                    <div class="cyber-right">
                        <h3 id="pr4-title" class="cyber-card-title">Environmental & safety risks are unpredictable</h3>
                        <p class="cyber-card-body">
                            Workplace incidents, environmental hazards, ethical violations.
                        </p>
                        <ul class="cyber-list">
                            <li>SOC</li>
                            <li>IR</li>
                            <li>AppSec</li>
                            <li>DevOps</li>
                            <li>Cloud</li>
                            <li>Management</li>
                        </ul>
                        <!-- <p class="cyber-card-note"> <strong>But communication breaks down under stress, which slows containment.</strong>
                        </p> -->
                    </div>
                </article>

                <!-- 5 -->
                <article class="cyber-card" aria-labelledby="pr5-title">
                    <div class="cyber-left">
                        <div class="cyber-number">05</div>
                    </div>
                    <div class="cyber-right">
                        <h3 id="pr5-title" class="cyber-card-title">Reporting frameworks demand proof
                        </h3>
                        <p class="cyber-card-body">
                            GRI, ESRS & SASB expect documented response capability.
                        </p>
                        <ul class="cyber-list">
                            <li>“How prepared are we today?”</li>
                            <li>“Which teams are weakest?”</li>
                            <li>“Where are our IR bottlenecks?”</li>
                        </ul>

                    </div>
                </article>
            </div>
        </section>


        <section class="steps-hero py-5 delayed-section" aria-labelledby="tmp-solves-title"
            style="animation-delay: 500ms;">

            <div class="container">

                <header class="mb-4 steps-left">
                    <h2 id="tmp-solves-title" class="steps-title"> How TMP Improves ESG
                        Readiness</h2>
                    <!-- <p class="section-sub">Practical, continuous, and auditor-ready capabilities that close the people
                        &amp;
                        process gap.</p> -->
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
    name: "EsgView",
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
                    title: "ESG-Focused Preparedness Simulations",
                    intro:
                        "Environmental events:",
                    examples: [
                        "air quality incident",
                        "water contamination",
                        "waste management failure",
                        "worker safety incident",
                        "discrimination incident",
                        "ethical misconduct",
                        "corruption or bribery alert",
                    ],
                },
                {
                    id: "workflows",
                    title: " Multi-Department Coordination",
                    intro: "TMP unites:",
                    items: [
                        "Risk",
                        "HR",
                        "Sustainability",
                        "Compliance",
                        "Legal",
                        "Operations",
                        "Board",
                    ],
                    note: "Each sees tasks relevant to them.",
                },
                {
                    id: "metrics",
                    title: "Supplier & Third-Party Preparedness",
                    intro:
                        "Test supplier readiness for:",
                    items: [
                        "ethical compliance",
                        "environmental standards",
                        "labor & safety requirements",
                        "governance practices",
                        "contract obligations",
                       
                    ],
                    
                },
                {
                    id: "improve",
                    title: "Governance Traceability",
                    intro:
                        "Every decision is logged:",
                    items: [
                        "who approved",
                        "who escalated",
                        "who communicated",
                        "investigation notes",
                        "documentation timeline",
                    ],
                    note: "Boards love this.",
                },
                {
                    id: "evidence",
                    title: "ESG Reporting Support",
                    intro: "TMP outputs exportable evidence aligned to:",
                    items: [
                        "GRI",
                        'SASB',
                        "ESRS",
                        "UN SDGs",
                        "Investor questionnaires", 
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
