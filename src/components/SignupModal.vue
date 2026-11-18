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
                        <label>Sub-industry</label>
                        <div class="org-input-wrap">
                            <input type="text" class="org-input" v-model="orgProfile.sub_industry" placeholder="e.g. Capital Markets, Retail Banking" />
                        </div>
                    </div>

                    <div class="org-field">
                        <label>Company size</label>
                        <select class="org-input" v-model="orgProfile.company_size">
                            <option value="" disabled>Select…</option>
                            <option v-for="opt in companySizeOptions" :key="opt" :value="opt">{{ opt }}</option>
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
                        <label>Which countries do you operate in?</label>
                        <div class="country-dropdown" ref="countryDropdown">
                            <div class="org-input country-input-field" @click="focusCountrySearch">
                                <span v-for="r in orgProfile.regions" :key="r" class="country-tag">
                                    {{ r }}
                                    <button type="button" class="country-tag-remove" @click.stop="togglePill(orgProfile.regions, r)">×</button>
                                </span>
                                <input
                                    type="text"
                                    ref="countrySearchInput"
                                    class="country-inline-input"
                                    v-model="countrySearch"
                                    :placeholder="orgProfile.regions.length === 0 ? 'Select countries…' : ''"
                                    @focus="countryDropdownOpen = true"
                                />
                            </div>
                            <div class="country-dropdown-panel" v-if="countryDropdownOpen">
                                <div class="country-option-list">
                                    <div
                                        v-for="r in filteredRegionOptions"
                                        :key="r"
                                        class="country-option-plain"
                                        @click="selectCountry(r)"
                                    >
                                        {{ r }}
                                    </div>
                                    <div v-if="filteredRegionOptions.length === 0" class="country-option-empty">No matches</div>
                                </div>
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
                sub_industry: "",
                company_size: "",
                website_url: "",
                regions: [] as string[],
                regulations: [] as string[],
            },
            industryOptions: [
                "Healthcare", "Financial Services", "Retail", "Manufacturing", "Technology",
                "Legal", "Education", "Government", "Energy", "Other",
            ],
            companySizeOptions: ["1-50", "51-200", "201-1000", "1000+"],
            GLOBAL_REGION: "Global (All Countries)",
            regionOptions: [
                "United States", "Canada", "United Kingdom", "Ireland", "Germany", "France", "Netherlands",
                "Spain", "Italy", "Switzerland", "Sweden", "Norway", "Denmark", "Finland", "Poland",
                "Belgium", "Austria", "Portugal", "Greece", "Czech Republic", "Romania",
                "Saudi Arabia", "United Arab Emirates", "Qatar", "Kuwait", "Bahrain", "Oman", "Egypt",
                "Jordan", "Israel", "Turkey", "South Africa", "Nigeria", "Kenya",
                "India", "Pakistan", "Bangladesh", "Sri Lanka", "China", "Japan", "South Korea",
                "Singapore", "Malaysia", "Indonesia", "Philippines", "Vietnam", "Thailand",
                "Australia", "New Zealand", "Hong Kong", "Taiwan",
                "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Peru",
                "Other",
            ],
            regulationOptions: ["GDPR", "HIPAA", "NIS2", "DSPT", "SOC 2", "PCI DSS", "Not sure yet"],
            formError: "",
            countryDropdownOpen: false,
            countrySearch: "",
        };
    },

    computed: {
        filteredRegionOptions(this: any): string[] {
            // Once "Global (All Countries)" is picked, it replaces the
            // whole list (sir's call -- operating everywhere shouldn't
            // mean clicking every country one by one), so no point
            // offering individual countries underneath it anymore.
            if (this.orgProfile.regions.includes(this.GLOBAL_REGION)) return [];

            const q = this.countrySearch.trim().toLowerCase();
            const notYetSelected = this.regionOptions.filter((r: string) => !this.orgProfile.regions.includes(r));
            const withGlobal = q ? [] : [this.GLOBAL_REGION];
            if (!q) return [...withGlobal, ...notYetSelected];
            return notYetSelected.filter((r: string) => r.toLowerCase().includes(q));
        },
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

        document.addEventListener("mousedown", this.handleCountryDropdownOutsideClick);
    },

    beforeUnmount() {
        document.removeEventListener("mousedown", this.handleCountryDropdownOutsideClick);
    },

    methods: {
        handleCountryDropdownOutsideClick(this: any, e: MouseEvent) {
            const el = this.$refs.countryDropdown as HTMLElement | undefined;
            if (el && !el.contains(e.target as Node)) {
                this.countryDropdownOpen = false;
            }
        },

        focusCountrySearch(this: any) {
            this.countryDropdownOpen = true;
            this.$nextTick(() => (this.$refs.countrySearchInput as HTMLInputElement | undefined)?.focus());
        },

        selectCountry(this: any, country: string) {
            if (country === this.GLOBAL_REGION) {
                // Exclusive -- replaces any individual countries already
                // picked instead of sitting alongside them as just one
                // more tag.
                this.orgProfile.regions = [this.GLOBAL_REGION];
            } else {
                this.orgProfile.regions.push(country);
            }
            this.countrySearch = "";
            this.$nextTick(() => (this.$refs.countrySearchInput as HTMLInputElement | undefined)?.focus());
        },

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

.country-dropdown {
    position: relative;
}

.country-input-field {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
    min-height: 42px;
    height: auto;
    cursor: text;
    padding: 6px 8px;
}

.country-tag {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background: #eef0ff;
    color: #3a46c4;
    border-radius: 6px;
    padding: 3px 6px 3px 10px;
    font-size: 0.82rem;
    font-weight: 500;
    white-space: nowrap;
}

.country-tag-remove {
    background: none;
    border: none;
    color: #3a46c4;
    font-size: 1rem;
    line-height: 1;
    padding: 0 2px;
    cursor: pointer;
}

.country-tag-remove:hover {
    color: #c81440;
}

.country-inline-input {
    flex: 1 1 80px;
    min-width: 80px;
    border: none;
    outline: none;
    font-size: 0.88rem;
    color: #111;
    background: transparent;
    height: 28px;
}

.country-dropdown-panel {
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    right: 0;
    z-index: 10;
    background: #fff;
    border: 1px solid #d7d9dc;
    border-radius: 10px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    padding: 8px;
}

.country-option-list {
    max-height: 200px;
    overflow-y: auto;
}

.country-option-plain {
    padding: 8px 10px;
    border-radius: 6px;
    font-size: 0.85rem;
    color: #333;
    cursor: pointer;
}

.country-option-plain:hover {
    background: #f7f8fa;
}

.country-option-empty {
    padding: 8px;
    font-size: 0.82rem;
    color: #9aa0a6;
    text-align: center;
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
