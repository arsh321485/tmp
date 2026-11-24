<template>
  <main class="auth-page">
    <div class="container">
      <div class="auth-wrapper">
        <div class="auth-left">
          <div class="brand-header">
            <div class="logo">
              <img src="@/assets/images/tmp-new-logo.png" alt="TestMyPlan Logo" />
            </div>
            <span class="brand-badge">TEAMS PORTAL</span>
          </div>

          <!-- STEP: requesting the OTP (brief, auto-fires on page load) -->
          <template v-if="stage === 'requesting'">
            <h1 class="title">Confirming it's you…</h1>
            <p class="step-para">We're sending a code to your Slack DM.</p>
          </template>

          <!-- STEP: enter the OTP that was just DMed to them in Slack -->
          <template v-else-if="stage === 'otp'">
            <h1 class="title">Check Slack for your code</h1>
            <p class="step-para">
              We just sent a 6-digit code as a Slack DM from the TestMyPlan bot.
              Enter it below -- it expires in 10 minutes.
            </p>

            <div class="auth-form">
              <label>Code</label>
              <input
                v-model="otpCode"
                maxlength="6"
                inputmode="numeric"
                placeholder="••••••"
                :disabled="verifying"
                @keyup.enter="verifyCode"
              />
            </div>

            <p v-if="errorMessage" class="form-error">{{ errorMessage }}</p>

            <button class="btn-primary" :disabled="verifying" @click="verifyCode">
              {{ verifying ? "Checking…" : "Verify code" }}
            </button>

            <button class="resend-link" :disabled="resending" @click="resendCode">
              {{ resending ? "Sending a new code…" : "Didn't get it? Resend code" }}
            </button>
          </template>

          <!-- STEP: real Teams data, loaded fresh after a verified OTP -->
          <template v-else-if="stage === 'assign'">
            <div class="assign-header">
              <h1 class="title">Assign your teams</h1>
              <p class="step-para">Pick a primary and backup for each role. Saves instantly.</p>
            </div>

            <div class="tier-tabs">
              <button
                v-for="tier in tierOrder"
                :key="tier"
                class="tier-tab"
                :class="{ 'tier-tab-active': activeTier === tier }"
                @click="selectTier(tier)"
              >
                <span class="tier-dot" :style="{ background: tierColor(tier) }"></span>
                {{ tier }} ({{ teamsInTier(tier).length }})
              </button>
            </div>

            <div class="tier-divider"></div>

            <p class="tier-summary">
              {{ activeTier }} tier: {{ staffedCountInTier(activeTier) }} / {{ teamsInTier(activeTier).length }} staffed
            </p>

            <div class="select-wrap jump-select">
              <select v-model="activeTeamSlug">
                <option :value="''">Jump to a team…</option>
                <option v-for="team in teamsInTier(activeTier)" :key="team.slug" :value="team.slug">
                  {{ team.name }}
                </option>
              </select>
            </div>

            <div class="team-pills">
              <button
                v-for="team in teamsInTier(activeTier)"
                :key="team.slug"
                class="team-pill"
                :class="{ 'team-pill-active': activeTeamSlug === team.slug }"
                @click="activeTeamSlug = team.slug"
              >
                {{ isTeamStaffed(team) ? "✅" : "⏳" }} {{ team.name }}
              </button>
            </div>

            <div v-if="activeTeam" class="team-card">
              <div class="team-card-head">
                <h3>{{ activeTeam.name }}</h3>
                <span class="team-count-pill">
                  {{ filledCount(activeTeam) }} / {{ activeTeam.members.length }} staffed
                </span>
              </div>

              <div class="status-badge" :class="{ 'status-badge-done': isTeamStaffed(activeTeam) }">
                {{ isTeamStaffed(activeTeam) ? "✅ Complete" : "⏳ Pending" }}
              </div>

              <div class="info-fields">
                <div class="info-field">
                  <div class="info-label">Purpose</div>
                  <div class="info-value">{{ activeTeam.purpose }}</div>
                </div>
                <div class="info-field">
                  <div class="info-label">Primary IR phases</div>
                  <div class="info-value">{{ activeTeam.phases }}</div>
                </div>
                <div class="info-field">
                  <div class="info-label">Team type</div>
                  <div class="info-value">{{ activeTeam.type }}</div>
                </div>
                <div class="info-field">
                  <div class="info-label">Can be outsourced</div>
                  <div class="info-value">{{ activeTeam.outsource }}</div>
                </div>
              </div>

              <!-- Same split Slack itself uses (cards/teams_v2_data.py's
              _team_block): only one priority's roles shown at a time,
              sub-tabs only appear when a team actually has more than
              one -- a role under a tab you haven't clicked isn't
              "missing", it's just not the active one yet. -->
              <div v-if="rolePriorities(activeTeam).length > 1" class="priority-tabs">
                <button
                  v-for="p in rolePriorities(activeTeam)"
                  :key="p"
                  class="priority-tab"
                  :class="{ 'priority-tab-active': activePriority === p }"
                  @click="activePriority = p"
                >
                  {{ p }} roles ({{ activeTeam.members.filter(m => m.priority === p).length }})
                </button>
              </div>

              <div
                v-for="member in rolesForActivePriority(activeTeam)"
                :key="member.role"
                class="role-block"
              >
                <div class="role-block-head">
                  <h4>{{ member.role }}</h4>
                  <span class="status-tags">
                    <span v-if="member.primary_status" class="status-tag" :class="statusTagClass(member.primary_status)">
                      Primary {{ statusTagLabel(member.primary_status) }}
                    </span>
                    <span v-if="member.backup_status" class="status-tag" :class="statusTagClass(member.backup_status)">
                      Backup {{ statusTagLabel(member.backup_status) }}
                    </span>
                  </span>
                </div>

                <div class="members-table role-picker-table">
                  <div class="table-header">
                    <div>Primary</div>
                    <div>Backup</div>
                    <div></div>
                  </div>
                  <div class="table-row">
                    <div class="select-wrap">
                      <select v-model="member.primary_slack_user_ids[0]">
                        <option :value="undefined">— none —</option>
                        <option v-for="p in members" :key="p.i" :value="p.i">{{ p.n }}</option>
                      </select>
                    </div>
                    <div class="select-wrap">
                      <select v-model="member.backup_slack_user_ids[0]">
                        <option :value="undefined">— none —</option>
                        <option v-for="p in members" :key="p.i" :value="p.i">{{ p.n }}</option>
                      </select>
                    </div>
                    <div>
                      <button
                        class="save-btn"
                        :class="{ 'save-btn-saved': savedKey === activeTeam.slug + member.role }"
                        :disabled="savingKey === activeTeam.slug + member.role"
                        @click="saveAssignment(activeTeam, member)"
                      >
                        {{
                          savingKey === activeTeam.slug + member.role
                            ? "Saving…"
                            : savedKey === activeTeam.slug + member.role
                            ? "✓ Saved"
                            : "Save"
                        }}
                      </button>
                    </div>
                  </div>
                </div>

                <div v-if="member.responsibility" class="responsibility-block">
                  <div class="info-label">Responsibility</div>
                  <div class="info-value">{{ member.responsibility }}</div>
                </div>

                <div v-if="member.activities.length" class="activity-table">
                  <div class="activity-header">
                    <div>Activity</div>
                    <div>Phase</div>
                  </div>
                  <div v-for="(a, idx) in member.activities" :key="idx" class="activity-row">
                    <div>{{ a.activity }}</div>
                    <div>{{ a.phase }}</div>
                  </div>
                </div>
              </div>
            </div>
          </template>

          <!-- STEP: anything that stops the flow (bad/expired link, etc.) -->
          <template v-else-if="stage === 'error'">
            <h1 class="title">Something's not right</h1>
            <p class="step-para">{{ errorMessage }}</p>
          </template>
        </div>
      </div>
      <div class="brand-footer-bar">
        <span></span><span></span><span></span>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Member {
  i: string;
  n: string;
}

interface Activity {
  activity: string;
  phase: string;
}

interface TeamMemberRow {
  role: string;
  priority: string;
  primary_slack_user_ids: (string | undefined)[];
  backup_slack_user_ids: (string | undefined)[];
  primary_status: string | null;
  backup_status: string | null;
  responsibility: string;
  activities: Activity[];
}

const PRIORITY_ORDER = ["Mandatory", "Recommended", "Optional"];

interface TeamDoc {
  id: string;
  slug: string;
  tier: string;
  name: string;
  is_mandatory: boolean;
  purpose: string;
  phases: string;
  type: string;
  outsource: string;
  members: TeamMemberRow[];
}

const TIER_ORDER = ["Mandatory", "Recommended", "Optional", "External"];
// Same brand colors as the rest of this page's CSS vars (kept as a
// plain object since the colored dot is bound via inline :style, not
// a CSS class, and can't reach a scoped CSS custom property there).
const TIER_COLORS: Record<string, string> = {
  Mandatory: "#d31e28",
  Recommended: "#963e16",
  Optional: "#0e6e69",
  External: "#6e767d",
};

export default defineComponent({
  name: "TeamsPortal",
  data() {
    return {
      stage: "requesting" as "requesting" | "otp" | "assign" | "error",
      otpId: "",
      otpCode: "",
      verifying: false,
      resending: false,
      errorMessage: "",
      members: [] as Member[],
      teams: [] as TeamDoc[],
      savingKey: "",
      savedKey: "",
      tierOrder: TIER_ORDER,
      activeTier: "Mandatory",
      activeTeamSlug: "",
      activePriority: "",
    };
  },
  mounted() {
    this.requestOtp();
  },
  computed: {
    activeTeam(): TeamDoc | undefined {
      return this.teams.find((t) => t.slug === this.activeTeamSlug);
    },
  },
  watch: {
    activeTeamSlug() {
      // Switching teams always resets to that team's own first present
      // priority (Mandatory > Recommended > Optional), same default
      // Slack's own _team_block uses -- never carries over the last
      // team's active sub-tab onto a team that may not even have it.
      const team = this.activeTeam;
      this.activePriority = team ? this.rolePriorities(team)[0] || "" : "";
    },
  },
  methods: {
    apiBase(): string {
      return import.meta.env.VITE_API_BASE_URL as string;
    },
    apiFetch(path: string, options: RequestInit = {}): Promise<Response> {
      // Every call through the free ngrok tunnel was silently hitting its
      // "you are about to visit..." browser-warning page instead of our
      // API (confirmed by opening the URL directly) -- that warning page
      // has no CORS headers at all, which is what actually caused every
      // "CORS error"/"missing Access-Control-Allow-Origin" symptom.
      // ngrok's own fix: send this header to skip the warning entirely.
      return fetch(`${this.apiBase()}${path}`, {
        ...options,
        headers: { ...(options.headers || {}), "ngrok-skip-browser-warning": "true" },
      });
    },
    async requestOtp() {
      const token = (this.$route.query.token as string) || "";
      if (!token) {
        this.stage = "error";
        this.errorMessage = "This link is missing its token -- open it again from the Slack button.";
        return;
      }
      try {
        const resp = await this.apiFetch("/api/teams-portal/otp/request/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });
        const data = await resp.json();
        if (!resp.ok) {
          this.stage = "error";
          this.errorMessage =
            data.error === "invalid_or_expired_token"
              ? "This link has expired -- go back to Slack and click \"Assign on website\" again."
              : "Couldn't send your code. Please try again from Slack.";
          return;
        }
        this.otpId = data.otp_id;
        this.stage = "otp";
      } catch {
        this.stage = "error";
        this.errorMessage = "Couldn't reach TestMyPlan. Check your connection and try again.";
      }
    },
    async resendCode() {
      this.resending = true;
      this.otpCode = "";
      this.errorMessage = "";
      try {
        await this.requestOtp();
      } finally {
        this.resending = false;
      }
    },
    async verifyCode() {
      // Guards against a double-submit (e.g. pressing Enter and then
      // also clicking the button before Vue's :disabled re-render lands)
      // firing verify TWICE -- the first call would genuinely succeed,
      // but the second then hit the "already verified" guard and show a
      // confusing error over what was actually a success.
      if (this.verifying) return;
      if (this.otpCode.length !== 6) {
        this.errorMessage = "Enter the full 6-digit code.";
        return;
      }
      this.verifying = true;
      this.errorMessage = "";
      try {
        const resp = await this.apiFetch("/api/teams-portal/otp/verify/", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ otp_id: this.otpId, code: this.otpCode }),
        });
        const data = await resp.json();
        if (!resp.ok) {
          // Each real backend error gets its own accurate message --
          // previously anything not "incorrect_code"/"too_many_attempts"
          // (including "invalid_otp", e.g. a stale/already-used code)
          // was shown as "expired" even when that wasn't the real reason.
          if (data.error === "incorrect_code") {
            this.errorMessage = "That code's not right -- check Slack and try again.";
          } else if (data.error === "too_many_attempts") {
            this.errorMessage = "Too many tries -- go back to Slack and request a new code.";
          } else if (data.error === "expired_otp") {
            this.errorMessage = "That code has expired -- click \"Resend code\" below for a new one.";
          } else if (data.error === "invalid_otp") {
            this.errorMessage = "That code isn't valid any more -- click \"Resend code\" below for a new one.";
          } else {
            this.errorMessage = "Something went wrong verifying that code -- try \"Resend code\" below.";
          }
          return;
        }
        await this.loadTeamsData();
      } finally {
        this.verifying = false;
      }
    },
    async loadTeamsData() {
      // Sequential, not Promise.all -- firing both at once was hitting a
      // real wall every time on the free ngrok tunnel (consistently
      // blocked as a CORS/connection failure only when both landed
      // simultaneously), even though each one is correct and fast on
      // its own (confirmed directly against the backend).
      const membersResp = await this.apiFetch("/api/teams-portal/members/", { credentials: "include" });
      const teamsResp = await this.apiFetch("/api/teams-portal/teams/", { credentials: "include" });
      if (!membersResp.ok || !teamsResp.ok) {
        // Session cookie didn't make it (e.g. a privacy-strict browser
        // refusing a cross-site cookie) -- loading silently with empty
        // data would look like "no teams exist" instead of the real
        // "you're not actually logged in" problem.
        this.errorMessage = "Couldn't load your teams -- your session may not have carried over. Try \"Resend code\" below.";
        return;
      }
      const membersData = await membersResp.json();
      const teamsData = await teamsResp.json();
      this.members = membersData.members || [];
      this.teams = teamsData.teams || [];
      const firstInTier = this.teamsInTier(this.activeTier)[0];
      this.activeTeamSlug = firstInTier ? firstInTier.slug : "";
      this.stage = "assign";
    },
    async saveAssignment(team: TeamDoc, member: TeamMemberRow) {
      const key = team.slug + member.role;
      this.savingKey = key;
      try {
        await this.apiFetch("/api/teams-portal/teams/assign/", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            team_slug: team.slug,
            role: member.role,
            primary_slack_user_ids: member.primary_slack_user_ids.filter(Boolean),
            backup_slack_user_ids: member.backup_slack_user_ids.filter(Boolean),
          }),
        });
        this.savedKey = key;
        setTimeout(() => {
          if (this.savedKey === key) this.savedKey = "";
        }, 2000);
      } finally {
        this.savingKey = "";
      }
    },
    filledCount(team: TeamDoc): number {
      return team.members.filter((m) => m.primary_slack_user_ids[0]).length;
    },
    teamsInTier(tier: string): TeamDoc[] {
      return this.teams.filter((t) => t.tier === tier);
    },
    staffedCountInTier(tier: string): number {
      return this.teamsInTier(tier).filter((t) => this.isTeamStaffed(t)).length;
    },
    isTeamStaffed(team: TeamDoc): boolean {
      // Same rule Slack's own _team_is_staffed uses: every Mandatory-
      // priority role needs BOTH a primary and a backup, not just a
      // primary -- falls back to "at least one fully-filled role" if
      // this team has no Mandatory-priority roles at all.
      const mandatoryRoles = team.members.filter((m) => m.priority === "Mandatory");
      const roles = mandatoryRoles.length > 0 ? mandatoryRoles : team.members;
      return roles.length > 0 && roles.every((m) => m.primary_slack_user_ids[0] && m.backup_slack_user_ids[0]);
    },
    tierColor(tier: string): string {
      return TIER_COLORS[tier] || "#9ca3af";
    },
    selectTier(tier: string) {
      this.activeTier = tier;
      const firstInTier = this.teamsInTier(tier)[0];
      this.activeTeamSlug = firstInTier ? firstInTier.slug : "";
    },
    rolePriorities(team: TeamDoc): string[] {
      const present = new Set(team.members.map((m) => m.priority));
      return PRIORITY_ORDER.filter((p) => present.has(p));
    },
    rolesForActivePriority(team: TeamDoc): TeamMemberRow[] {
      return team.members.filter((m) => m.priority === this.activePriority);
    },
    statusTagLabel(status: string): string {
      if (status === "acknowledged") return "✓ Acknowledged";
      if (status === "sent") return "✉ Card sent";
      if (status === "failed") return "⚠ Failed to send";
      return "";
    },
    statusTagClass(status: string): string {
      if (status === "acknowledged") return "status-tag-ack";
      if (status === "failed") return "status-tag-failed";
      return "status-tag-sent";
    },
  },
});
</script>

<style scoped>
/* Exact TestMyPlan brand palette, same values as the backend's
   cards/card_image_common.py (BG/INK/MUTED/TEAL/TEAL_BG/CARD_BORDER/
   BRAND_RED/FOOTER_TEAL) -- so this website page reads as the same
   product as every Slack card, not a separately-styled page. */
.auth-page {
  --bg-cream: #faf8f5;
  --ink: #11181c;
  --muted: #6e767d;
  --teal: #0e6e69;
  --teal-bg: #dff1ee;
  --footer-teal: #4ac7b7;
  --card-bg: #ffffff;
  --card-border: #e1ded8;
  --brand-red: #d31e28;
  --brand-black: #141414;
  --draft-bg: #fae0d5;
  --draft-fg: #963e16;
  --urgent-bg: #fadddd;
  --urgent-fg: #be2832;
}

* {
  box-sizing: border-box;
  font-family: "Inter", system-ui, sans-serif;
}

.logo img {
  height: 52px;
  width: 48px;
  display: block;
}

.auth-page {
  min-height: 100vh;
  background: var(--bg-cream);
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.auth-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 0;
}

.brand-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.brand-badge {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--teal);
  background: var(--teal-bg);
  border-radius: 999px;
  padding: 6px 16px;
}

.title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--ink);
}

.step-para {
  font-size: 16px;
  color: var(--muted);
  margin-bottom: 24px;
}

.form-error {
  color: var(--brand-red);
  font-size: 14px;
  margin-bottom: 12px;
}

.auth-form label {
  display: block;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  color: var(--ink);
}

.auth-form input {
  width: 220px;
  padding: 14px 16px;
  margin-bottom: 18px;
  border-radius: 8px;
  border: 1px solid var(--card-border);
  background: var(--card-bg);
  font-size: 24px;
  letter-spacing: 8px;
  text-align: center;
  color: var(--ink);
}

.auth-form input:focus {
  outline: none;
  border-color: var(--brand-red);
}

.btn-primary {
  background: var(--brand-red);
  color: #fff;
  border: none;
  padding: 14px 22px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  width: 220px;
  height: 52px;
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.resend-link {
  display: block;
  margin-top: 14px;
  background: none;
  border: none;
  color: var(--brand-red);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
}

.resend-link:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.assign-header {
  margin-bottom: 20px;
}

.tier-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.tier-tab {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 16px;
  border-radius: 999px;
  border: 1px solid var(--card-border);
  background: var(--card-bg);
  color: var(--ink);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}

.tier-tab:hover {
  border-color: var(--teal);
}

.tier-tab-active {
  background: var(--teal);
  border-color: var(--teal);
  color: #fff;
}

.tier-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  flex-shrink: 0;
}

.tier-divider {
  border-top: 1px solid var(--card-border);
  margin-bottom: 16px;
}

.tier-summary {
  font-size: 14px;
  color: var(--muted);
  margin-bottom: 14px;
}

.jump-select {
  max-width: 320px;
  margin-bottom: 18px;
}

.jump-select select {
  color: var(--brand-red);
  font-weight: 600;
  background: var(--card-bg);
}

.team-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 24px;
}

.team-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 14px;
  border-radius: 8px;
  border: 1px solid var(--card-border);
  background: var(--card-bg);
  color: var(--ink);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
}

.team-pill:hover {
  border-color: var(--teal);
}

.team-pill-active {
  background: var(--teal);
  border-color: var(--teal);
  color: #fff;
}

.team-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 14px;
  padding: 20px 24px;
  margin-bottom: 20px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}

.team-card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}

.priority-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.priority-tab {
  padding: 7px 14px;
  border-radius: 8px;
  border: 1px solid var(--card-border);
  background: var(--card-bg);
  color: var(--ink);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
}

.priority-tab:hover {
  border-color: var(--teal);
}

.priority-tab-active {
  background: var(--teal);
  border-color: var(--teal);
  color: #fff;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 700;
  color: var(--draft-fg);
  background: var(--draft-bg);
  border-radius: 999px;
  padding: 5px 14px;
  margin-bottom: 18px;
}

.status-badge-done {
  color: var(--teal);
  background: var(--teal-bg);
}

.info-fields {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 32px;
  margin-bottom: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--card-border);
}

.info-label {
  font-size: 13px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 4px;
}

.info-value {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.5;
}

@media (max-width: 600px) {
  .info-fields {
    grid-template-columns: 1fr;
  }
}

.team-card-head h3 {
  font-size: 17px;
  font-weight: 700;
  color: var(--ink);
  margin: 0;
}

.team-count-pill {
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 700;
  color: var(--teal);
  background: var(--teal-bg);
  border-radius: 999px;
  padding: 4px 12px;
  white-space: nowrap;
}

.members-table {
  width: 100%;
}

.table-header,
.table-row {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr 96px;
  align-items: center;
  gap: 16px;
}

.table-header {
  color: var(--muted);
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--card-border);
  margin-bottom: 4px;
}

.table-row {
  padding: 12px 0;
  border-bottom: 1px solid var(--card-border);
}

.table-row:last-child {
  border-bottom: none;
}

.role-block {
  padding: 18px 0;
  border-bottom: 1px solid var(--card-border);
}

.role-block:last-child {
  border-bottom: none;
}

.role-block-head {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
}

.role-block-head h4 {
  font-size: 15px;
  font-weight: 700;
  color: var(--ink);
  margin: 0;
}

.status-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.status-tag {
  font-size: 12px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 999px;
}

.status-tag-ack {
  background: var(--teal-bg);
  color: var(--teal);
}

.status-tag-sent {
  background: var(--draft-bg);
  color: var(--draft-fg);
}

.status-tag-failed {
  background: var(--urgent-bg);
  color: var(--urgent-fg);
}

.role-picker-table .table-header,
.role-picker-table .table-row {
  grid-template-columns: 1fr 1fr 96px;
}

.responsibility-block {
  margin: 14px 0;
}

.activity-table {
  margin-top: 12px;
}

.activity-header,
.activity-row {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 16px;
  padding: 6px 0;
  font-size: 13px;
}

.activity-header {
  color: var(--muted);
  font-weight: 700;
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 0.03em;
}

.activity-row {
  color: var(--ink);
}

.role-cell {
  font-size: 14px;
  font-weight: 500;
  color: var(--ink);
}

.select-wrap select {
  width: 100%;
  padding: 9px 12px;
  border-radius: 8px;
  border: 1px solid var(--card-border);
  background: var(--bg-cream);
  font-size: 14px;
  color: var(--ink);
  transition: border-color 0.15s ease, background 0.15s ease;
}

.select-wrap select:hover {
  border-color: var(--teal);
}

.select-wrap select:focus {
  outline: none;
  border-color: var(--brand-red);
  background: var(--card-bg);
}

.save-btn {
  border: 1.4px solid var(--brand-red);
  color: var(--brand-red);
  background: transparent;
  border-radius: 8px;
  padding: 8px 0;
  width: 100%;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}

.save-btn:hover {
  background: var(--draft-bg);
}

.save-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.save-btn-saved {
  border-color: var(--teal);
  color: var(--teal);
  background: var(--teal-bg);
}

.brand-footer-bar {
  display: flex;
  width: 100%;
  height: 10px;
  margin-top: 32px;
}

.brand-footer-bar span {
  flex: 1;
  background: var(--brand-red);
}

.brand-footer-bar span:nth-child(2) {
  flex: 0.6;
  background: var(--footer-teal);
}

@media (max-width: 720px) {
  .table-header {
    display: none;
  }

  .table-row {
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 16px 0;
  }

  .role-cell {
    font-weight: 600;
  }
}
</style>
