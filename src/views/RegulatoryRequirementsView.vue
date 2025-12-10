<template>
    <div id="top" class="reg-page">
        <!-- ================= HERO SECTION ================= -->
        <section class="reg-hero">
            <div class="container">
                <div class="row align-items-center g-4">
                    <!-- LEFT IMAGE -->
                    <div class="col-lg-6">
                        <div class="hero-image-card">
                            <!-- Replace this with a real <img> if you want -->
                            <div class="hero-image-placeholder">
                                <span>Hero image</span>
                            </div>
                        </div>
                    </div>

                    <!-- RIGHT CONTENT -->
                    <div class="col-lg-6">
                        <h1 class="reg-title">
                            Compare data protection laws around the world
                        </h1>

                        <p class="reg-intro">
                            Welcome to the Regulatory Requirements section of TestMyPlan.
                            Use the filters below to explore how data protection regulations
                            apply across multiple countries and topics.
                        </p>

                        <div class="row g-3 align-items-end mt-3">
                            <!-- Select countries -->
                            <div class="col-md-5">
                                <div class="custom-dropdown" ref="countriesDropdownRef">
                                    <button type="button" class="dropdown-toggle-btn w-100" @click="toggleCountries">
                                        <span>
                                            {{ selectedCountriesLabel }}
                                        </span>
                                        <span class="chevron" :class="{ open: showCountries }">▾</span>
                                    </button>

                                    <!-- DROPDOWN PANEL -->
                                    <div v-if="showCountries" class="dropdown-panel multi">
                                        <!-- search -->
                                        <div class="dropdown-search">
                                            <input v-model="countrySearch" type="text" class="form-control"
                                                placeholder="Search" />
                                        </div>

                                        <!-- actions -->
                                        <div class="dropdown-actions">
                                            <button type="button" class="btn-link-action" @click="selectAllCountries">
                                                Select all
                                            </button>
                                            <button type="button" class="btn-link-action" @click="clearAllCountries">
                                                Clear all
                                            </button>
                                            <button type="button" class="btn-link-action ms-auto"
                                                @click="applyCountries">
                                                Apply
                                            </button>
                                        </div>

                                        <!-- list -->
                                        <div class="dropdown-list">
                                            <label v-for="country in filteredCountries" :key="country"
                                                class="dropdown-check-row">
                                                <input type="checkbox" :value="country" v-model="selectedCountries" />
                                                <span>{{ country }}</span>
                                            </label>

                                            <div v-if="filteredCountries.length === 0" class="dropdown-empty">
                                                No countries found.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Select topic -->
                            <div class="col-md-5">
                                <div class="custom-dropdown" ref="topicsDropdownRef">
                                    <button type="button" class="dropdown-toggle-btn w-100" @click="toggleTopics">
                                        <span>
                                            {{ selectedTopicLabel }}
                                        </span>
                                        <span class="chevron" :class="{ open: showTopics }">▾</span>
                                    </button>

                                    <!-- DROPDOWN PANEL -->
                                    <div v-if="showTopics" class="dropdown-panel single">
                                        <!-- search -->
                                        <div class="dropdown-search">
                                            <input v-model="topicSearch" type="text" class="form-control"
                                                placeholder="Search" />
                                        </div>

                                        <!-- list -->
                                        <div class="dropdown-list">
                                            <button v-for="topic in filteredTopics" :key="topic" type="button"
                                                class="dropdown-topic-row" @click="selectTopic(topic)">
                                                {{ topic }}
                                            </button>

                                            <div v-if="filteredTopics.length === 0" class="dropdown-empty">
                                                No topics found.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Go button -->
                            <div class="col-md-2 d-flex">
                                <button type="button" class="btn btn-go w-100" @click="onGo">
                                    Go
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ================= RESULT / TESTIMONIAL ================= -->
        <section v-if="hasResult" class="reg-result-section">
            <div class="container">
                <div class="result-summary">
                    <h2 class="result-title">
                        Regulatory snapshot
                    </h2>
                    <p class="result-meta">
                        Countries:
                        <strong>{{ selectedCountries.join(", ") }}</strong>
                        <span class="mx-2">|</span>
                        Topic:
                        <strong>{{ selectedTopic || "All topics" }}</strong>
                    </p>
                    <p class="result-text">
                        This is dummy content just to illustrate how the results can be
                        shown. In your real implementation, you would load detailed
                        regulatory requirements from your API based on the selected
                        countries and topic.
                    </p>
                </div>

                <!-- testimonial style card -->
                <div class="testimonial-card">
                    <div class="quote-mark">“</div>
                    <p class="testimonial-text">
                        TestMyPlan makes it easy to compare complex privacy requirements
                        across multiple jurisdictions. The Regulatory Requirements view is
                        an invaluable tool for privacy and compliance teams.
                    </p>
                    <p class="testimonial-author">
                        Jane Doe, Global Privacy Counsel – ExampleCorp
                    </p>
                    <div class="testimonial-dots">
                        <span class="dot active"></span>
                        <span class="dot"></span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "RegulatoryRequirements",

    data() {
        return {
            /* -------- DATA -------- */
            allCountries: [
                "Albania",
                "Algeria",
                "Argentina",
                "Armenia",
                "Australia",
                "Belgium",
                "Brazil",
                "Canada",
                "France",
                "Germany",
                "India",
                "Japan",
                "Netherlands",
                "United Kingdom",
                "United States",
            ],

            allTopics: [
                "Law",
                "Definitions",
                "Authority",
                "Registration",
                "Data protection officers",
                "Collection and processing",
                "Transfer of personal data",
                "Security",
                "Data subject rights",
            ],

            selectedCountries: [] as string[],
            countrySearch: "",
            selectedTopic: null as string | null,
            topicSearch: "",

            showCountries: false,
            showTopics: false,
            hasResult: false,
        };
    },

    /* -------- COMPUTED -------- */
    computed: {
        filteredCountries(): string[] {
            return this.allCountries.filter((c) =>
                c.toLowerCase().includes(this.countrySearch.toLowerCase())
            );
        },

        filteredTopics(): string[] {
            return this.allTopics.filter((t) =>
                t.toLowerCase().includes(this.topicSearch.toLowerCase())
            );
        },

        selectedCountriesLabel(): string {
            if (this.selectedCountries.length === 0) {
                return "Select countries";
            }

            if (this.selectedCountries.length === 1) {
                return this.selectedCountries[0] ?? "Select countries";
            }

            return `${this.selectedCountries.length} countries selected`;
        },


        selectedTopicLabel(): string {
            return this.selectedTopic || "Select topic";
        },
    },

    /* -------- METHODS -------- */
    methods: {
        toggleCountries() {
            this.showCountries = !this.showCountries;
            if (this.showCountries) this.showTopics = false;
        },

        toggleTopics() {
            this.showTopics = !this.showTopics;
            if (this.showTopics) this.showCountries = false;
        },

        selectAllCountries() {
            this.selectedCountries = [...this.allCountries];
        },

        clearAllCountries() {
            this.selectedCountries = [];
        },

        applyCountries() {
            this.showCountries = false;
        },

        selectTopic(topic: string) {
            this.selectedTopic = topic;
            this.showTopics = false;
        },

        onGo() {
            // Later → call API with selectedCountries & selectedTopic
            this.hasResult = true;
        },

        onClickOutside(event: MouseEvent) {
            const target = event.target as Node;

            const countriesEl = this.$refs.countriesDropdownRef as HTMLElement | undefined;
            const topicsEl = this.$refs.topicsDropdownRef as HTMLElement | undefined;

            if (
                this.showCountries &&
                countriesEl &&
                !countriesEl.contains(target)
            ) {
                this.showCountries = false;
            }

            if (
                this.showTopics &&
                topicsEl &&
                !topicsEl.contains(target)
            ) {
                this.showTopics = false;
            }
        },
    },

    /* -------- LIFECYCLE -------- */
    mounted() {
        document.addEventListener("click", this.onClickOutside);
    },

    beforeUnmount() {
        document.removeEventListener("click", this.onClickOutside);
    },
});
</script>


<style scoped>
/* overall page */
.reg-page {
    background: #ffffff;
}

/* ============ HERO ============ */
.reg-hero {
    padding: 3.5rem 0 3rem;
}

.hero-image-card {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 18px 45px rgba(15, 23, 42, 0.25);
}

/* placeholder – replace with real image */
.hero-image-placeholder {
    background: linear-gradient(135deg, #b92b27, #1565c0);
    min-height: 260px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f8fafc;
    font-size: 1.5rem;
    font-weight: 600;
}

.reg-title {
    font-size: 2.1rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.reg-intro {
    font-size: 0.98rem;
    line-height: 1.6;
    color: #4b5563;
}

/* ============ CUSTOM DROPDOWNS ============ */
.custom-dropdown {
    position: relative;
}

.dropdown-toggle-btn {
    border-radius: 0;
    border: 1px solid #d1d5db;
    background: #f9fafb;
    padding: 0.75rem 0.9rem;
    font-size: 0.95rem;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.dropdown-toggle-btn:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
    border-color: #2563eb;
}

.chevron {
    font-size: 0.8rem;
    transition: transform 0.15s ease;
}

.chevron.open {
    transform: rotate(180deg);
}

.dropdown-panel {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: 2px;
    background: #ffffff;
    border-radius: 0;
    border: 1px solid #e5e7eb;
    box-shadow: 0 16px 35px rgba(15, 23, 42, 0.25);
    z-index: 20;
    display: flex;
    flex-direction: column;
}

.dropdown-panel.multi {
    max-height: 340px;
}

.dropdown-panel.single {
    max-height: 320px;
}

.dropdown-search {
    padding: 0.65rem 0.75rem 0.5rem;
    border-bottom: 1px solid #e5e7eb;
}

.dropdown-actions {
    display: flex;
    align-items: center;
    padding: 0.4rem 0.75rem;
    border-bottom: 1px solid #e5e7eb;
    gap: 0.5rem;
}

.btn-link-action {
    border: none;
    background: none;
    padding: 0;
    font-size: 0.85rem;
    color: #1d4ed8;
    text-decoration: none;
}

.btn-link-action:hover {
    text-decoration: underline;
}

.dropdown-list {
    padding: 0.4rem 0.75rem 0.7rem;
    overflow-y: auto;
}

.dropdown-check-row {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.25rem 0;
    font-size: 0.92rem;
}

.dropdown-check-row input[type="checkbox"] {
    width: 1rem;
    height: 1rem;
}

.dropdown-topic-row {
    display: block;
    width: 100%;
    border: none;
    background: none;
    text-align: left;
    padding: 0.45rem 0;
    font-size: 0.94rem;
}

.dropdown-topic-row:hover {
    background: #f3f4f6;
}

.dropdown-empty {
    font-size: 0.85rem;
    color: #9ca3af;
    padding: 0.4rem 0;
}

/* Go button */
.btn-go {
    background: #111827;
    border-radius: 0;
    color: #f9fafb;
    font-weight: 500;
    padding: 0.75rem 0;
}

.btn-go:hover {
    background: #020617;
}

/* ============ RESULT / TESTIMONIAL ============ */
.reg-result-section {
    padding: 3rem 0 4rem;
}

.result-summary {
    max-width: 880px;
    margin: 0 auto 2rem;
    text-align: left;
}

.result-title {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
}

.result-meta {
    font-size: 0.9rem;
    color: #6b7280;
    margin-bottom: 0.75rem;
}

.result-text {
    font-size: 0.98rem;
    line-height: 1.6;
    color: #4b5563;
}

/* testimonial */
.testimonial-card {
    background: #f9fafb;
    border-radius: 4px;
    padding: 2.5rem 3rem 2rem;
    position: relative;
    margin-top: 1.5rem;
}

.quote-mark {
    position: absolute;
    top: 1.2rem;
    left: 1.5rem;
    font-size: 3rem;
    color: #111827;
    opacity: 0.1;
}

.testimonial-text {
    font-size: 1rem;
    line-height: 1.8;
    margin-bottom: 1.2rem;
}

.testimonial-author {
    font-weight: 600;
    font-size: 0.95rem;
}

.testimonial-dots {
    margin-top: 1.2rem;
    display: flex;
    justify-content: center;
    gap: 0.4rem;
}

.dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: #d1d5db;
}

.dot.active {
    background: #111827;
}

/* ============ RESPONSIVE ============ */
@media (max-width: 991.98px) {
    .reg-hero {
        padding-top: 2.5rem;
    }

    .hero-image-placeholder {
        min-height: 220px;
    }

    .reg-title {
        margin-top: 0.5rem;
        font-size: 1.8rem;
    }
}

@media (max-width: 575.98px) {
    .dropdown-panel {
        left: 0;
        right: 0;
    }

    .testimonial-card {
        padding: 2rem 1.5rem 1.75rem;
    }
}
</style>
