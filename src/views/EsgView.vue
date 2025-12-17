<template>
    <div id="top">
        <MainNavbar />
        <RegulatoryWidget />

        <section class="cyber-hero position-relative delayed-section" data-delay="200" style="animation-delay: 100ms;">
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
                <h1 class="hero-heading">
                    ESG Preparedness</h1>

                <!-- Description -->
                <p class="hero-description">
                    Resilience is now part of ESG scoring — can you demonstrate it?
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




        <section class="advantages-bg delayed-section" data-delay="300" style="background: #f4f5f8;">
            <div class="advantages-section container delayed-section" data-delay="200">
                <h2 class="selling-heading">The ESG Preparedness Reality</h2>

                <div class="advantages-grid">

                    <!-- SERVICE 1 -->
                    <div class="adv-card">
                        <div class="adv-icon">

                            <i class="bi bi-gear-fill fs-4 icon-size"></i>
                        </div>
                        <h3 class="selling-heading">
                            ESG plans lack operational clarity</h3>
                        <p class="hero-description">
                            Policies exist, but workflows do not.
                        </p>

                        <ul class="hero-description">
                            <li>Cybersecurity tools detect threats, but TMP ensures that your teams are prepared to
                                handle them effectively.</li>
                            <li>Modern cyberattacks evolve faster than organizations can train; attackers exploit this
                                gap in human readiness.</li>
                            <li>Even trained staff may hesitate or skip critical steps under pressure during an
                                incident.
                            </li>
                        </ul>
                    </div>

                    <!-- SERVICE 2 -->
                    <div class="adv-card">
                        <div class="adv-icon">
                            <!-- <i class="icon-style"></i> -->
                            <i class="bi bi-clouds-fill fs-4 icon-size"></i>
                        </div>
                        <h3 class="selling-heading">Governance decisions are not documented
                        </h3>
                        <p class="hero-description">
                            Boards want audit trails for oversight responsibilities.
                        </p>

                        <ul class="hero-description">
                            <li>tool changes</li>
                            <li>cloud migration</li>
                            <li>new vendors</li>
                            <li>updated OS / app versions</li>
                            <li>new regulatory requirements</li>
                        </ul>

                    </div>

                    <!-- SERVICE 3 -->
                    <div class="adv-card">
                        <div class="adv-icon">
                            <!-- <i class="icon-resolution"></i> -->
                            <i class="bi bi-exclamation-triangle-fill fs-4 icon-size"></i>
                        </div>
                        <h3 class="selling-heading">
                            Third-party ESG risk is rising</h3>
                        <p class="hero-description">
                            Suppliers often cause sustainability & compliance failures.
                        </p>

                        <ul class="hero-description">
                            <li>TMP keeps response plans updated and aligned with reality, adapting to new tools,
                                migrations, and regulations.</li>
                            <li>TMP makes cybersecurity preparedness measurable, trackable, and reportable, giving
                                leadership a clear view of team readiness.</li>
                            <li>TMP defines clear communication channels and roles to ensure all teams work together
                                effectively under pressure.</li>
                        </ul>


                    </div>

                    <!-- SERVICE 4 -->
                    <div class="adv-card">
                        <div class="adv-icon">
                            <!-- <i class="icon-edit"></i> -->
                            <i class="bi bi-steam fs-4 icon-size"></i>
                        </div>
                        <h3 class="selling-heading">
                            Environmental & safety risks are unpredictable</h3>
                        <p class="hero-description">
                            Workplace incidents, environmental hazards, ethical violations.
                        </p>

                        <ul class="hero-description">
                            <li>SOC</li>
                            <li>IR</li>
                            <li>AppSec</li>
                            <li>DevOps</li>
                            <li>Cloud</li>
                            <li>Management</li>
                        </ul>


                    </div>

                    <!-- SERVICE 5 (CENTERED) -->
                    <div class="adv-card">
                        <div class="adv-icon">
                            <!-- <i class="icon-translate"></i> -->
                            <i class="bi bi-hypnotize fs-4 icon-size"></i>
                        </div>
                        <h3 class="selling-heading">

                            Reporting frameworks demand proof</h3>
                        <p class="hero-description">
                            GRI, ESRS & SASB expect documented response capability.
                        </p>

                        <ul class="hero-description">
                            <li>“How prepared are we today?”</li>
                            <li>“Which teams are weakest?”</li>
                            <li>“Where are our IR bottlenecks?”</li>
                        </ul>
                       
                    </div>

                </div>
            </div>
        </section>



        <section class="projects-hero delayed-section" data-delay="400">
            <div class="container">

                <!-- HEADER -->
                <div class="projects-header">
                    <div class="left">
                        <!-- <span class="eyebrow">/ TMP Solves /</span> -->
                        <span class="hero-description">/ ESG Preparedness /</span>
                        <!-- <h2 class="title">How TMP Solves<br />Cyber Preparedness</h2> -->
                        <h2 class="selling-heading-white-bg"> How TMP Improves <br> ESG Readiness</h2>
                       

                        <!-- controls -->
                        <div class="controls">
                            <button @click="scrollLeft">‹</button>
                            <button @click="scrollRight">›</button>
                        </div>
                    </div>


                </div>

                <!-- CARDS -->
                <div class="cards-wrap" ref="cardsWrap">
                    <article v-for="t in tabs" :key="t.id" class="project-card">

                        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475" alt="project"
                            class="card-img" />

                        <!-- TITLE (moves on hover) -->
                        <h3 class="card-title">
                            {{ t.title }}
                        </h3>

                        <!-- OVERLAY CONTENT -->
                        <div class="card-overlay">

                            <p class="overlay-intro ">{{ t.intro }}</p>

                            <ul v-if="t.examples?.length">
                                <li v-for="(ex, k) in t.examples" :key="'ex-' + k">
                                    {{ ex }}
                                </li>
                            </ul>

                            <ul v-else-if="t.items?.length">
                                <li v-for="(it, k) in t.items" :key="'it-' + k">
                                    {{ it }}
                                </li>
                            </ul>

                            <p v-if="t.note" class="card-note">
                                {{ t.note }}
                            </p>

                        </div>
                    </article>


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
                    title: "Multi-Department Coordination",
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
                       "SASB",
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

        // 🔥 SCROLL REVEAL OBSERVER
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target as HTMLElement;
                        const delay = el.dataset.delay || "0";

                        el.style.transitionDelay = `${delay}ms`;
                        el.classList.add("is-visible");

                        observer.unobserve(el);
                    }
                });
            },
            { threshold: 0.15 }
        );

        document
            .querySelectorAll(".delayed-section")
            .forEach((el) => observer.observe(el));
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

        scrollLeft() {
            const el = this.$refs.cardsWrap as HTMLElement;
            el.scrollBy({ left: -320, behavior: "smooth" });
        },

        scrollRight() {
            const el = this.$refs.cardsWrap as HTMLElement;
            el.scrollBy({ left: 320, behavior: "smooth" });
        },

        scrollToCard(index: number) {
            const el = this.$refs.cardsWrap as HTMLElement;
            const card = el.children[index] as HTMLElement;
            card.scrollIntoView({ behavior: "smooth", inline: "start" });
        },
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
