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
                <h1 class="cyber-title">Data Privacy Preparedness</h1>

                <!-- Description -->
                <p class="cyber-desc">
                    When a privacy breach happens, seconds matter — and regulators watch.<br />
                    TMP ensures your privacy, security, legal, and communications teams act quickly, consistently, and
                    in full compliance with global privacy laws.
                </p>

                <!-- Small CTA Button -->
                <div class="cta-row">
                    <button class="btn btn-light btn-sm cyber-btn-sm">
                       Assess Privacy Preparedness →
                    </button>
                </div>
            </div>

            <!-- Breadcrumb pill -->
            <div class="breadcrumb-pill d-flex align-items-center">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item"><a href="/" class="text-decoration-none">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Data Privacy Preparedness</li>
                    </ol>
                </nav>
            </div>
        </section>


        <section class="cyber-reality container py-5 delayed-section" aria-labelledby="cyber-reality-title"
            style="animation-delay: 300ms;">

            <div class="header mb-4">
                <h2 id="cyber-reality-title" class="cyber-section-title">The Data Privacy Reality</h2>
                <p class="cyber-section-sub">Major Privacy Response Challenges
                </p>
            </div>

            <div class="cyber-grid">
                <!-- 1 -->
                <article class="cyber-card" aria-labelledby="pr1-title">
                    <div class="cyber-left">
                        <div class="cyber-number">01</div>
                    </div>
                    <div class="cyber-right">
                        <h3 id="pr1-title" class="cyber-card-title">The first 4 hours of a breach are chaotic</h3>
                        <p class="cyber-card-body">
                            Teams scramble to classify, log, contain, communicate — often incorrectly.
                        </p>

                        <ul class="cyber-list">
                            <li>During a data breach’s first four hours, chaos can reign as teams scramble to classify, log, contain, and communicate — often making mistakes.</li>
                            <li>Regulatory timelines for breach notification are unforgiving</li>
                            <li> GDPR, KSA PDPL, and PDPB require reporting within 72 hours, CCPA imposes strict disclosure requirements, and HIPAA requires notification within 60 days.</li>

                        </ul>
                    </div>
                </article>

                <!-- 2 -->
                <article class="cyber-card" aria-labelledby="pr2-title">
                    <div class="cyber-left">
                        <div class="cyber-number">02</div>
                    </div>
                    <div class="cyber-right">
                        <h3 id="pr2-title" class="cyber-card-title"> Regulatory timelines are unforgiving</h3>
                        <p class="cyber-card-body">
                            IR playbooks often don’t reflect changes across the environment. Common gaps include:
                        </p>
                        <ul class="cyber-list">
                            <li>GDPR: 72 hours</li>
                            <li>KSA PDPL:  72 hours</li>
                            <li>PDPB: 72 hours</li>
                            <li>CCPA: strict requirements</li>
                            <li>HIPAA: 60-day notification</li>
                        </ul>
                        <p class="cyber-card-note"><strong>One misstep = major penalties.</strong></p>
                    </div>
                </article>

                <!-- 3 -->
                <article class="cyber-card" aria-labelledby="pr3-title">
                    <div class="cyber-left">
                        <div class="cyber-number">03</div>
                    </div>
                    <div class="cyber-right">
                        <h3 id="pr3-title" class="cyber-card-title">Multi-team alignment fails under pressure</h3>
                        <p class="cyber-card-body">
                            ALegal, DPO, IT, PR, HR & Exec teams must work in lockstep.
                        </p>

                        <ul class="cyber-list">
                            <li> One misstep can result in major penalties.</li>
                            <li>Cross-functional alignment often fails under pressure</li>
                            <li>legal, data protection, IT, PR, HR, and executive teams must coordinate quickly during an incident.</li>

                        </ul>

                       
                    </div>
                </article>

                <!-- 4 -->
                <article class="cyber-card" aria-labelledby="pr4-title">
                    <div class="cyber-left">
                        <div class="cyber-number">04</div>
                    </div>
                    <div class="cyber-right">
                        <h3 id="pr4-title" class="cyber-card-title">No standardized incident classification</h3>
                        <p class="cyber-card-body">
                            Misclassification = under-report or over-report = regulatory issues.
                        </p>
                        <ul class="cyber-list">
                            <li>Lack of standardized incident classification can lead to under-reporting or over-reporting of breaches</li>
                            <li> causing compliance issues.</li>
                            <li>Evidence logs often lack the required detail</li>
                           
                        </ul>
                      
                    </div>
                </article>

                <!-- 5 -->
                <article class="cyber-card" aria-labelledby="pr5-title">
                    <div class="cyber-left">
                        <div class="cyber-number">05</div>
                    </div>
                    <div class="cyber-right">
                        <h3 id="pr5-title" class="cyber-card-title">Poor evidence logs
                        </h3>
                        <p class="cyber-card-body">
                          Regulators require timestamped, defensible steps — rarely available.
                        </p>
                        <ul class="cyber-list">
                            <li> regulators expect timestamped, defensible steps, which many organizations do not have readily available.</li>
                            <li> GDPR, KSA PDPL, and PDPB require reporting within 72 hours, CCPA imposes strict disclosure requirements, and HIPAA requires notification within 60 days</li>
                            <li> One misstep can result in major penalties.</li>
                        </ul>
                       
                    </div>
                </article>
            </div>
        </section>


        <section class="steps-hero py-5 delayed-section" aria-labelledby="tmp-solves-title"
            style="animation-delay: 500ms;">

            <div class="container">

                <header class="mb-4 steps-left">
                    <h2 id="tmp-solves-title" class="steps-title"> How TMP Ensures Privacy Compliance
</h2>
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
    name: "DataPrivacy",
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
                    title: "Automated Breach Response Workflows",
                    intro:
                        "TMP guides your team through:",
                    examples: [
                        "immediate containment",
                        "legal assessment",
                        "classification",
                        "communication prep",
                        "authority notification",
                        "data subject evaluation",
                        "documentation",
                       
                    ],
                },
                {
                    id: "workflows",
                    title: "Global Privacy Alignment (KSA PDPL, GDPR, HIPAA, CCPA)",
                    intro: "TMP gives jurisdiction-specific workflows including:",
                    items: [
                        "deadlines",
                        "notification requirements",
                        "severity scoring",
                        "breach thresholds",
                       
                    ],
                    
                },
                {
                    id: "metrics",
                    title: " Privacy Evidence Generation",
                    intro:
                        "Includes:",
                    items: [
                        "breach log",
                        "timeline",
                        "decisions",
                        "approvals",
                        "stakeholder actions",
                        "compliance mapping",
                    ],
                    note: "These metrics help CISOs justify budgets, staffing, and tool investment.",
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
