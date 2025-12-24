<template>
    <div id="top">
        <MainNavbar />

        <RegulatoryWidget />

        <!-- ========== FAQ ========= -->
        <section class="faq-section delayed-faq" id="faq" style="animation-delay: 300ms;">
            <div class="container">
                <div class="faq-shell">
                    <!-- header -->
                    <div class="faq-header">
                        <div class="faq-eyebrow">/ faq /</div>
                        <h2 class="faq-title">Everything you need to know about</h2>
                    </div>

                    <!-- accordion -->
                    <div id="faqAccordion" class="faq-list">
                        <div class="faq-item" v-for="(f, index) in visibleFaqs" :key="index">
                            <button :class="['faq-toggle', index === 0 ? '' : 'collapsed']" type="button"
                                data-bs-toggle="collapse" :data-bs-target="'#faq-' + index"
                                :aria-expanded="index === 0 ? 'true' : 'false'" :aria-controls="'faq-' + index">
                                <span class="faq-number">{{ f.number }}</span>
                                <span class="faq-question">{{ f.question }}</span>
                                <span class="faq-arrow">▴</span>
                            </button>

                            <div :id="'faq-' + index" :class="index === 0 ? 'collapse show' : 'collapse'"
                                data-bs-parent="#faqAccordion">
                                <div class="faq-answer">
                                    {{ f.answer }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Explore more button -->
                    <div class="faq-more-wrap">
                        <button type="button" class="faq-more-btn" @click="toggleShowAll">
                            <span class="faq-more-btn-icon">
                                {{ showAllFaq ? '‹' : '›' }}
                            </span>
                            <span>{{ showAllFaq ? 'Show less' : 'Explore more' }}</span>
                        </button>
                    </div>
                </div>

                <!-- CTA inside FAQ section -->
                <div class="ps-5">
                    <h3 class="faq-cta-title">Ready to strengthen your preparedness?</h3>

                    <RouterLink to="/contact" class="faq-cta-btn">
                        Contact us and get started today →
                    </RouterLink>
                </div>

            </div>
        </section>

        <MainContact />
        <!-- FOOTER -->
        <MainFooter />
        <ScrollToTop />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "../components/MainNavbar.vue";
import MainFooter from "../components/MainFooter.vue";
import MainContact from "@/components/MainContact.vue";
import RegulatoryWidget from "@/components/RegulatoryWidget.vue";
import ScrollToTop from "@/components/ScrollToTop.vue";

type FaqItem = {
    number: string;
    question: string;
    answer: string;
};

export default defineComponent({
    name: "FaqView",
    components: {
        MainNavbar,
        MainFooter,
        MainContact,
        RegulatoryWidget,
        ScrollToTop,
    },
    data() {
        return {
            showAllFaq: false,
            faqs: [
                {
                    number: "01",
                    question: "What is TestMyPlan (TMP)?",
                    answer:
                        "TMP is an automated incident preparedness platform that converts your Cybersecurity, Business Continuity, Data Privacy, and ESG plans into executable workflows, real-world scenarios, and measurable readiness insights.",
                },
                {
                    number: "02",
                    question: "How is TMP different from traditional tabletop drills?",
                    answer:
                        "Tabletops rely on manual coordination, static documents, and subjective evaluations. TMP automates the entire process — from scenario execution to communication, role assignment, and reporting — making preparedness continuous, measurable, and repeatable.",
                },
                {
                    number: "03",
                    question: "Do I need to upload my plans to get started?",
                    answer:
                        "No. You can upload your plans or start with our pre-built threat and incident templates. TMP’s Threat Agent can also guide you in selecting scenarios based on your industry and technology environment.",
                },
                {
                    number: "04",
                    question: "We already have documented plans. Why do we need TMP?",
                    answer:
                        "Most plans are never tested or are tested only annually. TMP ensures your plans are validated continuously, uncovering gaps, clarifying roles, and showing how your teams actually respond under pressure.",
                },
                {
                    number: "05",
                    question: "Does TMP support Cybersecurity, BC, Data Privacy, and ESG scenarios?",
                    answer:
                        "Yes. TMP includes libraries and workflows aligned to all four domains, covering operational, technical, legal, and communication aspects across the organization.",
                },
                {
                    number: "06",
                    question: "Will my team need training to use TMP?",
                    answer:
                        "Very minimal. TMP uses guided steps, auto-assigned roles, and intuitive workflows. Most teams can participate without any onboarding — that’s part of the platform’s value.",
                },
                {
                    number: "07",
                    question: "Does TMP integrate with Slack, Teams, and email?",
                    answer:
                        "Yes. TMP automatically orchestrates communication, notifications, and escalations across Slack, Microsoft Teams, email, and other connected channels.",
                },
                {
                    number: "08",
                    question: "Is TMP secure?",
                    answer:
                        "Absolutely. TMP follows industry best practices including encryption in transit and at rest, RBAC, audit logs, and cloud security controls aligned with ISO 27001 and SOC 2 guidelines.",
                },
                {
                    number: "09",
                    question: "Can TMP generate audit-ready evidence?",
                    answer:
                        "Yes. TMP produces comprehensive reports aligned with ISO, SOC, GDPR, BC, and ESG control requirements — making audits simpler and eliminating “plans not tested” findings.",
                },
                {
                    number: "10",
                    question: "How long does it take to get started?",
                    answer:
                        "Most organizations can configure users, select scenarios, and launch their first preparedness test within 10 minutes. Full rollout can be done in less than a day.",
                },
                {
                    number: "11",
                    question: "Does TMP require technical expertise to run?",
                    answer:
                        "Not at all. TMP is designed for both technical and non-technical users. Setup takes minutes, and participation requires no training — the platform guides every user automatically.",
                },
                {
                    number: "12",
                    question: "How does TMP handle communication during preparedness testing?",
                    answer:
                        "TMP orchestrates all communication, sending automated messages, escalations, reminders, and task prompts across Slack, Microsoft Teams, email, and other connected channels.",
                },
            ] as FaqItem[],
        };
    },
    computed: {
        visibleFaqs(): FaqItem[] {
            // show first 4 when collapsed, otherwise show all
            return this.showAllFaq ? (this.faqs as FaqItem[]) : (this.faqs as FaqItem[]).slice(0, 4);
        },
    },
    methods: {
        toggleShowAll() {
            this.showAllFaq = !this.showAllFaq;

            // optional: scroll to top of FAQ area when collapsing back
            if (!this.showAllFaq) {
                const el = document.getElementById("faq");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        },
    },
});
</script>
