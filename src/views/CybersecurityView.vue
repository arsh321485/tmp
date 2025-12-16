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
                  <h1 class="hero-heading">Cybersecurity Preparedness</h1>

                <!-- Description -->
                <p class="hero-description">
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




        <section class="advantages-bg delayed-section" data-delay="300" style="background: #f4f5f8;">
            <div class="advantages-section container delayed-section" data-delay="200">
                 <h2 class="selling-heading">The Cyber Reality</h2>

                <div class="advantages-grid">

                    <!-- SERVICE 1 -->
                    <div class="adv-card">
                        <div class="adv-icon">
                         
                             <i class="bi bi-gear-fill fs-4 icon-size"></i>
                        </div>
                        <h3 class="selling-heading">Tools are advanced. Human readiness is not.</h3>
                        <p class="hero-description">
                            Security stacks get stronger; human behavior remains the weakest link. Under pressure, even
                            trained staff hesitate, escalate incorrectly, or miss critical steps.
                        </p>

                        <ul class="hero-description">
                            <li>Cybersecurity tools detect threats, but TMP ensures that your teams are prepared to
                                handle
                                them effectively.</li>
                            <li>Modern cyberattacks evolve faster than organizations can train; attackers exploit this
                                gap
                                in human readiness.</li>
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
                        <h3  class="selling-heading">Incident response plans are outdated the moment they're written.</h3>
                        <p  class="hero-description">
                            IR playbooks often don’t reflect changes across the environment. Common gaps include:
                        </p>

                        <ul  class="hero-description">
                            <li>tool changes</li>
                            <li>cloud migration</li>
                            <li>new vendors</li>
                            <li>updated OS / app versions</li>
                            <li>new regulatory requirements</li>
                        </ul>
                        <p>TMP keeps your response living and aligned to reality.</p>
                    </div>

                    <!-- SERVICE 3 -->
                    <div class="adv-card">
                        <div class="adv-icon">
                            <!-- <i class="icon-resolution"></i> -->
                             <i class="bi bi-exclamation-triangle-fill fs-4 icon-size"></i>
                        </div>
                        <h3  class="selling-heading">SOC burnout & alert fatigue slow response</h3>
                        <p  class="hero-description">
                            Analysts drown in alerts. Important decisions get delayed.
                        </p>

                        <ul  class="hero-description">
                            <li>TMP keeps response plans updated and aligned with reality, adapting to new tools,
                                migrations, and regulations.</li>
                            <li>TMP makes cybersecurity preparedness measurable, trackable, and reportable, giving
                                leadership a clear view of team readiness.</li>
                            <li>TMP defines clear communication channels and roles to ensure all teams work together
                                effectively under pressure.</li>
                        </ul>

                        <p>TMP forces clarity—who acts, how fast, in what order.</p>
                    </div>

                    <!-- SERVICE 4 -->
                    <div class="adv-card">
                        <div class="adv-icon">
                            <!-- <i class="icon-edit"></i> -->
                             <i class="bi bi-steam fs-4 icon-size"></i>
                        </div>
                        <h3  class="selling-heading">Cross-team friction kills containment</h3>
                        <p class="hero-description">
                            Real incidents require many teams to work together:
                        </p>

                        <ul class="hero-description">
                            <li>SOC</li>
                            <li>IR</li>
                            <li>AppSec</li>
                            <li>DevOps</li>
                            <li>Cloud</li>
                            <li>Management</li>
                        </ul>

                        <p>But communication breaks down under stress, which slows containment.</p>
                    </div>

                    <!-- SERVICE 5 (CENTERED) -->
                    <div class="adv-card">
                        <div class="adv-icon">
                            <!-- <i class="icon-translate"></i> -->
                             <i class="bi bi-hypnotize fs-4 icon-size"></i>
                        </div>
                        <h3 class="selling-heading">
                            Leadership gets no visibility into real readiness</h3>
                        <p class="hero-description">
                            CISOs can’t answer:
                        </p>

                        <ul class="hero-description">
                            <li>“How prepared are we today?”</li>
                            <li>“Which teams are weakest?”</li>
                            <li>“Where are our IR bottlenecks?”</li>
                        </ul>
                        <p>TMP makes readiness measurable, trackable, and reportable.</p>
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
                        <span class="hero-description">/ TMP Solves /</span>
                        <!-- <h2 class="title">How TMP Solves<br />Cyber Preparedness</h2> -->
                        <h2 class="selling-heading-white-bg">How TMP Solves<br />Cyber Preparedness</h2>
                        <!-- <p class="sub">
                            Practical, continuous, and auditor-ready capabilities that close the
                            people & process gap.
                        </p> -->
                        <p class="hero-description-bg">
                            Practical, continuous, and auditor-ready capabilities that close the
                            people & process gap.
                        </p>

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
                        "ISO 27001, Control 5.24 - Information security incident management planning and preparation",
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



