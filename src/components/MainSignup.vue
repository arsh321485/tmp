<template>
    <div class="signup-page">
        <div class="container h-100">
            <div class="row h-100 align-items-start justify-content-between">

                <!-- LEFT CONTENT -->
                <div class="col-12 col-lg-7 d-flex justify-content-center">
                    <div class="left-wrapper">
                        <!-- Logo -->
                        <div class="brand">
                            <img src="../assets/images/testmyplan-logo.jpg" alt="logo" class="brand-logo" />
                            <!-- <span class="brand-text">TESTMYPLAN</span> -->
                        </div>

                        <!-- Heading -->
                        <h1 class="main-title">
                            Let’s make your organisation incident ready.
                        </h1>

                        <!-- Divider -->
                        <hr class="divider" />

                        <!-- Testimonial -->
                        <div class="testimonial d-flex align-items-start">
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Clarissa Fair"
                                class="testimonial-avatar" />
                            <div class="ms-3">
                                <p class="testimonial-text mb-1">
                                    “Testmyplan completely changed how we respond to incidents.
                                    What used to take hours to coordinate now happens in minutes—with
                                    clear ownership, real-time updates, and zero confusion.”
                                </p>
                                <small class="testimonial-author">
                                    Clarissa Fair, Palantir
                                </small>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- RIGHT SIGNUP CARD -->
                <div class="col-12 col-lg-5 d-flex justify-content-center">
                    <div class="signup-card shadow-sm">

                        <!-- TAB 1: Organization Details -->
                        <template v-if="signupStep === 'form'">
                            <h2 class="org-form-title">Tell us about your organization</h2>
                            <p class="org-form-sub">This shows up in Slack once you sign up — you can still correct it there later.</p>

                            <div class="org-field">
                                <label>Organization name *</label>
                                <input type="text" class="org-input" v-model="orgProfile.org_name" placeholder="e.g. Acme Health Systems" />
                            </div>

                            <div class="org-field">
                                <label>Industry *</label>
                                <select class="org-input" v-model="orgProfile.industry">
                                    <option value="" disabled>Select…</option>
                                    <option v-for="opt in industryOptions" :key="opt" :value="opt">{{ opt }}</option>
                                </select>
                            </div>

                            <div class="org-field">
                                <label>Website URL *</label>
                                <input type="text" class="org-input" v-model="orgProfile.website_url" placeholder="https://yourcompany.com" />
                            </div>

                            <div class="org-field">
                                <label>Where do you operate?</label>
                                <div class="pill-row">
                                    <button type="button" v-for="r in regionOptions" :key="r" class="org-pill"
                                        :class="{ active: orgProfile.regions.includes(r) }" @click="togglePill(orgProfile.regions, r)">
                                        {{ r }}
                                    </button>
                                </div>
                            </div>

                            <div class="org-field">
                                <label>Regulations that apply (if known)</label>
                                <div class="pill-row">
                                    <button type="button" v-for="r in regulationOptions" :key="r" class="org-pill"
                                        :class="{ active: orgProfile.regulations.includes(r) }" @click="togglePill(orgProfile.regulations, r)">
                                        {{ r }}
                                    </button>
                                </div>
                            </div>

                            <p v-if="formError" class="org-form-error">{{ formError }}</p>

                            <button class="btn btn-continue w-100 mb-1 d-inline-flex align-items-center justify-content-center"
                                @click="goToSignupStep">
                                Continue
                            </button>
                        </template>

                        <!-- TAB 2: Connect with Slack/Teams -->
                        <template v-else>
                            <button type="button" class="back-link" @click="signupStep = 'form'">&larr; Back to organization details</button>

                            <h2 class="org-form-title">Almost there</h2>
                            <p class="org-form-sub">Choose how you'd like to sign up.</p>

                            <button class="btn btn-slack w-100 mb-3 d-inline-flex align-items-center justify-content-center"
                                @click="signup('slack')">
                                <i class="bi bi-slack me-2"></i>
                                Connect with Slack
                            </button>

                            <button class="btn btn-teams w-100 mb-3 d-inline-flex align-items-center justify-content-center"
                                @click="signup('teams')">
                                <i class="bi bi-microsoft-teams me-2"></i>
                                Connect with Teams
                            </button>

                            <div class="terms-text text-black">
                                By signing up, you agree to Testmyplan
                                <a href="#">Terms of Service</a> and acknowledge the
                                <a href="#">Privacy Statement</a>.
                            </div>
                        </template>
                    </div>
                </div>

                <!-- TRUST + LOGOS -->
                <div class="trust-block">
                    <p class="trust-text">
                        More than <strong>20,000 tests</strong> run by
                        <strong>500+ organisations.</strong>
                    </p>

                    <!-- <div class="logos">
                        <img v-for="logo in logos" :key="logo.name" :src="logo.src" :alt="logo.name" class="logo-img" />
                    </div> -->

                    <div class="logos">
                        <div v-for="logo in logos" :key="logo.name" class="logo-item">
                            <img :src="logo.src" :alt="logo.name" class="logo-img" />
                            <span class="logo-name">{{ logo.name }}</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>



<script lang="ts">
import type { Router } from "vue-router";
import logo3 from "@/assets/images/logo-3.jpg";


export default {
    name: "MainSignup",

    data() {
        return {
            logos: [
                { name: "Decagon", src: logo3 },
                { name: "Palantir", src: logo3 },
                { name: "Windsurf", src: logo3 },
                { name: "Hightouch", src: logo3 },
                { name: "Augment Code", src: logo3 },
                { name: "Nooks", src: logo3 },
                { name: "Scale", src: logo3 },

            ],
            orgProfile: {
                org_name: "",
                industry: "",
                website_url: "",
                regions: [] as string[],
                regulations: [] as string[],
            },
            industryOptions: [
                "Healthcare", "Financial Services", "Retail", "Manufacturing", "Technology",
                "Legal", "Education", "Government", "Energy", "Other",
            ],
            regionOptions: ["North America", "UK", "EU", "APAC", "Middle East", "Other"],
            regulationOptions: ["GDPR", "HIPAA", "NIS2", "DSPT", "SOC 2", "PCI DSS", "Not sure yet"],
            formError: "",
            signupStep: "form" as "form" | "signup",
            profileToken: "",
        };
    },

    methods: {
        togglePill(list: string[], value: string) {
            const i = list.indexOf(value);
            if (i === -1) list.push(value);
            else list.splice(i, 1);
        },

        isValidWebsiteUrl(value: string): boolean {
            try {
                const url = new URL(value);
                // Any real http(s) address, dot in the domain or not (e.g.
                // internal/local addresses are fine too) -- just needs to be
                // an actual URL, not a bare word or a different protocol
                // (e.g. "mailto:x").
                return url.protocol === "http:" || url.protocol === "https:";
            } catch {
                return false;
            }
        },

        async goToSignupStep(this: any) {
            this.formError = "";
            const { org_name, industry, website_url } = this.orgProfile;
            if (!org_name.trim() || !industry || !website_url.trim()) {
                this.formError = "Please fill in organization name, industry and website URL first.";
                return;
            }
            if (!this.isValidWebsiteUrl(website_url.trim())) {
                this.formError = "Please enter a valid website URL.";
                return;
            }

            const apiBaseUrl = import.meta.env.VITE_API_BASE_URL as string;

            // Save Organization Details first so it's already in Slack the
            // moment they land there -- the Slack card just shows/edits it
            // after this, it doesn't collect it again.
            try {
                const resp = await fetch(`${apiBaseUrl}/api/auth/org-profile/pending/`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(this.orgProfile),
                });
                const data = await resp.json();
                this.profileToken = data.token || "";
            } catch (e) {
                // Don't block signup if this fails -- Slack's own Organization
                // Details card can always be filled in/corrected afterwards.
                this.profileToken = "";
            }

            this.signupStep = "signup";
        },

        signup(this: any, provider: "slack" | "teams" | "email") {
            if (provider === "email") {
                this.$router?.push({
                    path: "/command-center",
                    query: { provider },
                });
                return;
            }

            // Slack/Teams sign-in is handled by the backend's OAuth flow, not
            // the SPA router: it redirects the whole browser to Slack/Microsoft,
            // then back to our callback, then to the frontend.
            const apiBaseUrl = import.meta.env.VITE_API_BASE_URL as string;
            const query = this.profileToken ? `?profile_token=${encodeURIComponent(this.profileToken)}` : "";
            window.location.href = `${apiBaseUrl}/api/auth/${provider}/${query}`;
        }
    }
};
</script>



<style scoped>
.logo-item {
    display: flex;
    align-items: center;
    gap: 3px;
}

.logo-name {
    color: #555;
    text-align: center;
    white-space: nowrap;
}

/* Your existing layout untouched */
.signup-page {
    min-height: 100vh;
    background: #ffffff;
    padding-top: 24px;
}

.left-wrapper {
    max-width: 520px;
}

.brand {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
}

.brand-logo {
    height: 46px;
}

.brand-text {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1.2px;
    color: #111;
}

.main-title {

    font-weight: 400;
    font-size: 59px;
    line-height: 70px;
    letter-spacing: -2.1%;
    word-break: break-word;
    max-width: 100%;
}

.content-divider {
    width: 80px;
    border-top: 2px solid #e5e7eb;
    margin: 24px 0;
}

.testimonial {
    margin-bottom: 40px;
}

.testimonial-avatar {
    width: 74px;
    height: 74px;
    object-fit: cover;
}

.testimonial-text {
    font-size: 0.75rem;
    color: #444;
}

.testimonial-author {
    color: #666;
}

.signup-card {
    width: 100%;
    max-width: 400px;
    padding: 40px;
    border-radius: 12px;
    border: 3px solid #e5e7eb;
    background: #fff;
    margin-top: 64px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.org-form-title {
    font-size: 1.35rem;
    font-weight: 700;
    line-height: 1.3;
    color: #111;
    margin: 0 0 8px 0;
    text-align: left;
}

.org-form-sub {
    font-size: 0.8rem;
    color: #666;
    margin: 0 0 20px 0;
    text-align: left;
    line-height: 1.4;
}

.org-field {
    width: 100%;
    margin-bottom: 16px;
    text-align: left;
}

.org-field label {
    display: block;
    font-size: 0.78rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 6px;
}

.org-input {
    width: 100%;
    box-sizing: border-box;
    height: 42px;
    padding: 0 12px;
    border-radius: 8px;
    border: 1px solid #d7d9dc;
    font-size: 0.88rem;
    color: #111;
    background: #fff;
}

.org-input:focus {
    outline: none;
    border-color: #5b6bf5;
    box-shadow: 0 0 0 3px rgba(91, 107, 245, 0.15);
}

select.org-input {
    appearance: auto;
}

.pill-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.org-pill {
    padding: 7px 14px;
    border-radius: 20px;
    border: 1px solid #d7d9dc;
    background: #fff;
    color: #333;
    font-size: 0.78rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s ease;
}

.org-pill:hover {
    border-color: #5b6bf5;
}

.org-pill.active {
    background: #5b6bf5;
    border-color: #5b6bf5;
    color: #fff;
}

.org-form-error {
    color: #e11d48;
    font-size: 0.78rem;
    margin: 0 0 12px 0;
    text-align: left;
}

.btn {
    font-weight: 500;
    font-size: 0.95rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    transition: all 0.3s ease;
}

.btn i {
    font-size: 1.1rem;
}

.btn-slack {
    background: #e11d48;
    color: #fff;
    border-radius: 25px;
}

.btn-teams {
    background: #5b6bf5;
    color: #fff;
    border-radius: 25px;
}

.btn-continue {
    background: #111;
    color: #fff;
    border-radius: 25px;
    margin-top: 4px;
}

.back-link {
    background: none;
    border: none;
    padding: 0;
    margin-bottom: 16px;
    color: #5b6bf5;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    text-align: left;
}

.back-link:hover {
    text-decoration: underline;
}

.btn-email {
    background: #000;
    color: #fff;
    border-radius: 25px;
}

/* Divider in signup */
.divider {
    position: relative;
    text-align: center;
    width: 100%;
    font-weight: 700;
}

.divider span {
    background: #fff;
    padding: 0 10px;
    font-size: 0.8rem;
    color: #1b1b1b;
    position: relative;
    z-index: 1;
}

.divider::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: #b1b1b3;
    z-index: 0;
}

.terms-text {
    font-size: 0.75rem;
    color: #555;
    line-height: 1.6;
}

.terms-text a {
    color: #555;
    text-decoration: underline;
}

/* Trust Block — unchanged margins */
.trust-block {
    margin-top: 80px;
}

.trust-text {
    /* max-width: 360px; */
    font-size: 0.85rem;
    color: #444;
    line-height: 1.5;
    margin: 0 0 24px 120px;
    font-weight: 600;
}

.logos {
    display: flex;
    flex-wrap: wrap;
    gap: 60px;
    justify-content: center;
    align-items: center;
}

.logo-img {
    height: 30px;
    filter: grayscale(100%);
    opacity: 0.75;
    transition: opacity 0.3s ease;
}

.logo-img:hover {
    opacity: 1;
}



/* RESPONSIVE ENHANCEMENTS — without touching margins or paddings */
@media screen and (width: 1920px) and (height: 1080px) {
    .signup-page {
        min-height: 100vh;
        background: #ffffff;
        padding-top: 74px;
    }

    .trust-block {
        margin-top: 300px;
    }

    .brand-logo {
        height: 56px;
    }

    .main-title {

        font-weight: 600;
        font-size: 59px;
        line-height: 70px;
        letter-spacing: -2.1%;
        word-break: break-word;
        max-width: 100%;
    }

    .testimonial-text {
        font-size: 0.95rem;
        color: #444;
    }

}

@media (max-width: 1200px) {
    .main-title {
        font-size: 58px;
        line-height: 70px;
    }

    .brand-logo {
        height: 48px;
    }
}

@media (max-width: 992px) {
    .main-title {
        font-size: 46px;
        line-height: 46px;
    }

    .signup-card {
        max-width: 360px;
    }

    .logo-img {
        height: 26px;
    }
}

@media (max-width: 768px) {
    .main-title {
        font-size: 34px;
        line-height: 42px;
    }

    .brand-logo {
        height: 32px;
    }

    .trust-text {
        margin: 0 auto 24px auto;
        text-align: center;
    }

    .trust-block {
        margin-top: 8rem;
    }
}

@media (max-width: 576px) {
    .main-title {
        font-size: 28px;
        line-height: 36px;
    }

    .testimonial-avatar {
        width: 56px;
        height: 56px;
    }

    .logo-img {
        height: 22px;
    }

    .logos {
        gap: 30px;
    }
}
</style>
