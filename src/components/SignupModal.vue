<!-- SignupModal.vue -->
<template>
    <!-- Centered popup (Bootstrap modal) -->
    <div class="modal fade signup-modal" id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable signup-modal-dialog">
            <div class="modal-content signup-modal-content">
                <button type="button" class="btn-close modal-close" data-bs-dismiss="modal" aria-label="Close"></button>

                <div class="modal-body signup-modal-body">
                    <div class="modal-header-block">
                        <h2 class="org-form-title">Tell us about your organization</h2>
                    </div>

                    <div class="org-field">
                        <label>Organization name *</label>
                        <div class="org-input-wrap">
                            <i class="bi bi-building org-input-icon"></i>
                            <input type="text" class="org-input" v-model="orgProfile.org_name" placeholder="e.g. Acme Health Systems" />
                        </div>
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
                        <div class="org-input-wrap">
                            <i class="bi bi-globe2 org-input-icon"></i>
                            <input type="text" class="org-input" v-model="orgProfile.website_url" placeholder="https://yourcompany.com" />
                        </div>
                    </div>

                    <div class="org-field">
                        <label>Where do you operate?</label>
                        <div class="pill-group">
                            <div class="pill-row">
                                <button type="button" v-for="r in regionOptions" :key="r" class="org-pill"
                                    :class="{ active: orgProfile.regions.includes(r) }" @click="togglePill(orgProfile.regions, r)">
                                    {{ r }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="org-field">
                        <label>Regulations that apply (if known)</label>
                        <div class="pill-group">
                            <div class="pill-row">
                                <button type="button" v-for="r in regulationOptions" :key="r" class="org-pill"
                                    :class="{ active: orgProfile.regulations.includes(r) }" @click="togglePill(orgProfile.regulations, r)">
                                    {{ r }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <p v-if="formError" class="org-form-error">{{ formError }}</p>

                    <div class="connect-row">
                        <button class="btn-connect btn-connect-slack" @click="handleConnect('slack')">
                            <i class="bi bi-slack"></i>
                            Connect with Slack
                        </button>

                        <button class="btn-connect btn-connect-teams" @click="handleConnect('teams')">
                            <i class="bi bi-microsoft-teams"></i>
                            Connect with Teams
                        </button>
                    </div>

                    <div class="terms-text text-black">
                        By signing up, you agree to Testmyplan
                        <a href="#">Terms of Service</a> and acknowledge the
                        <a href="#">Privacy Statement</a>.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
interface BootstrapModalInstance {
    show: () => void;
    hide: () => void;
}
interface BootstrapWindow extends Window {
    bootstrap: {
        Modal: {
            new(element: Element, options?: { backdrop?: boolean | "static"; keyboard?: boolean }): BootstrapModalInstance;
            getOrCreateInstance: (element: Element) => BootstrapModalInstance;
        };
    };
    openSignupModal?: () => void;
}

export default {
    name: "SignupModal",

    data() {
        return {
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
        };
    },

    mounted() {
        const modalEl = document.getElementById("signupModal");
        if (!modalEl) return;

        const win = window as unknown as BootstrapWindow;
        const signupModal = win.bootstrap.Modal.getOrCreateInstance(modalEl);

        // 👇 expose a function on window so the navbar (or anywhere else)
        // can open this without needing a shared store -- same pattern as
        // CookiesModal's window.openCookiesModal.
        win.openSignupModal = () => {
            this.formError = "";
            signupModal.show();
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

        async handleConnect(this: any, provider: "slack" | "teams") {
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
            let profileToken = "";
            try {
                const resp = await fetch(`${apiBaseUrl}/api/auth/org-profile/pending/`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(this.orgProfile),
                });
                const data = await resp.json();
                profileToken = data.token || "";
            } catch (e) {
                // Don't block signup if this fails -- Slack's own Organization
                // Details card can always be filled in/corrected afterwards.
                profileToken = "";
            }

            // Slack/Teams sign-in is handled by the backend's OAuth flow, not
            // the SPA router: it redirects the whole browser to Slack/Microsoft,
            // then back to our callback, then to the frontend.
            const query = profileToken ? `?profile_token=${encodeURIComponent(profileToken)}` : "";
            window.location.href = `${apiBaseUrl}/api/auth/${provider}/${query}`;
        },
    },
};
</script>

<style scoped>
.signup-modal {
    /* The navbar uses z-index: 2000, higher than Bootstrap's own modal
    default (1055) -- without this the navbar rendered ON TOP of the
    popup, hiding its title/close button underneath it. */
    z-index: 2100 !important;
}

.signup-modal-dialog {
    /* Sit over the right half of the page (where the hero's "Start
    Preparedness Now" column is), not dead-center -- margin-left: auto
    pushes it toward the right edge, margin-right keeps a gap from it. */
    margin-left: auto !important;
    margin-right: 6% !important;
}

@media (max-width: 992px) {
    .signup-modal-dialog {
        margin-left: auto !important;
        margin-right: auto !important;
    }
}

.signup-modal-content {
    border-radius: 16px;
    border: none;
    padding: 12px;
    max-height: 90vh;
}

.signup-modal-body {
    overflow-y: auto;
    padding: 8px 16px 20px 16px;
}

.modal-close {
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 2;
}

.modal-header-block {
    text-align: center;
    padding-bottom: 18px;
    margin-bottom: 22px;
    border-bottom: 1px solid #e5e7eb;
}

.org-form-title {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.3;
    color: #111;
    margin: 0 0 8px 0;
    text-align: center;
}

.org-form-sub {
    font-size: 0.82rem;
    color: #666;
    margin: 0;
    text-align: center;
    line-height: 1.4;
}

.org-field {
    width: 100%;
    margin-bottom: 13px;
    text-align: left;
}

.org-field label {
    display: block;
    font-size: 0.78rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 6px;
}

.org-input-wrap {
    position: relative;
}

.org-input-icon {
    position: absolute;
    left: 13px;
    top: 50%;
    transform: translateY(-50%);
    color: #9aa0a6;
    font-size: 0.95rem;
    pointer-events: none;
}

.org-input {
    width: 100%;
    box-sizing: border-box;
    height: 42px;
    padding: 0 12px;
    border-radius: 10px;
    border: 1px solid #d7d9dc;
    font-size: 0.88rem;
    color: #111;
    background: #fff;
}

.org-input-wrap .org-input {
    padding-left: 36px;
}

.org-input:focus {
    outline: none;
    border-color: #5b6bf5;
    box-shadow: 0 0 0 3px rgba(91, 107, 245, 0.15);
}

select.org-input {
    appearance: auto;
}

.pill-group {
    background: #f7f8fa;
    border-radius: 12px;
    padding: 12px;
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

.btn-continue {
    background: #111;
    color: #fff;
    border-radius: 25px;
    margin-top: 4px;
}

.connect-row {
    display: flex;
    flex-direction: row;
    gap: 12px;
}

@media (max-width: 480px) {
    .connect-row {
        flex-direction: column;
    }
}

.btn-connect {
    flex: 1 1 0;
    min-width: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 50px;
    padding: 0 14px;
    border-radius: 25px;
    border: none;
    color: #fff;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.15s ease;
}

.btn-connect i {
    font-size: 1.15rem;
}

.btn-connect-slack {
    background: #e11d48;
}

.btn-connect-slack:hover {
    background: #c81440;
}

.btn-connect-teams {
    background: #5b6bf5;
}

.btn-connect-teams:hover {
    background: #4756d6;
}

.back-row {
    text-align: center;
    margin: 18px 0 8px 0;
}

.back-link {
    background: none;
    border: none;
    padding: 0;
    color: #5b6bf5;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
}

.back-link:hover {
    text-decoration: underline;
}

.terms-text {
    font-size: 0.75rem;
    color: #555;
    line-height: 1.6;
    text-align: center;
    margin-top: 16px;
    padding-bottom: 4px;
}

.terms-text a {
    color: #555;
    text-decoration: underline;
}

@media (max-width: 576px) {
    .modal-dialog {
        margin: 12px;
    }
}
</style>

<style>
/* Unscoped on purpose -- Bootstrap mounts the dimmed backdrop as a sibling
in <body>, outside this component, so a scoped selector can't reach it.
Same navbar z-index (2000) issue as the panel itself: without this the
backdrop sat behind the navbar, leaving it undimmed while open. */
.modal-backdrop.show {
    z-index: 2050 !important;
}
</style>
