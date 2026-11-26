<template>
  <main class="auth-page">
    <div class="top-bar">
      <div class="top-bar-inner">
        <div class="top-bar-logo">
          <img src="@/assets/images/tmp-app-icon.png" alt="TestMyPlan" class="top-bar-logo-mark" />
          <span class="top-bar-logo-text">TestMyPlan</span>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="auth-wrapper">
        <div class="auth-left">

          <!-- STEP: requesting the OTP (brief, auto-fires on page load) -->
          <template v-if="stage === 'requesting'">
            <h1 class="title">Confirming it's you…</h1>
            <p class="step-para">We're sending a code to your Slack DM.</p>
          </template>

          <!-- STEP: enter the OTP that was just DMed to them in Slack -->
          <template v-else-if="stage === 'otp'">
            <div class="otp-card">
              <span class="otp-icon">🛡️</span>
              <h1 class="otp-title">Verify your identity</h1>
              <p class="otp-subtitle">A one-time password (OTP) has been sent to your Slack Bot.</p>

              <div class="otp-digits">
                <input
                  v-for="(d, i) in otpDigits"
                  :key="i"
                  :ref="el => setOtpDigitRef(el, i)"
                  v-model="otpDigits[i]"
                  class="otp-digit"
                  maxlength="1"
                  inputmode="numeric"
                  :disabled="verifying"
                  @input="onOtpDigitInput(i)"
                  @keydown="onOtpDigitKeydown($event, i)"
                  @paste="onOtpPaste($event)"
                />
              </div>

              <p v-if="errorMessage" class="form-error">{{ errorMessage }}</p>

              <p class="resend-row">
                <button v-if="resendCooldown > 0" class="resend-link resend-link-disabled" disabled>
                  Resend OTP in {{ formattedCooldown }}
                </button>
                <button v-else class="resend-link" :disabled="resending" @click="resendCode">
                  {{ resending ? "Sending a new code…" : "Resend OTP" }}
                </button>
              </p>

              <button class="btn-primary otp-submit" :disabled="verifying || otpCode.length !== 6" @click="verifyCode">
                {{ verifying ? "Checking…" : "Verify & Continue →" }}
              </button>
            </div>
          </template>

          <!-- STEP: real Teams data, loaded fresh after a verified OTP -->
          <template v-else-if="stage === 'assign'">
            <div class="assign-header">
              <div class="assign-header-left">
                <span class="assign-header-icon">👥</span>
                <div>
                  <h1 class="title"><span class="title-plain">Manage</span> <span class="title-accent">Team Assignments</span></h1>
                  <p class="step-para">Assign primary, backup and team members with roles and responsibilities.</p>
                </div>
              </div>
            </div>

            <div class="progress-summary">
              <div class="progress-fraction">
                <span class="progress-num">{{ staffedCountInTier('Mandatory') }}</span>
                <span class="progress-denom">/{{ teamsInTier('Mandatory').length }}</span>
                <div class="progress-caption">Mandatory teams staffed</div>
              </div>
              <div class="progress-bar-track">
                <div
                  class="progress-bar-fill"
                  :style="{ width: progressPercent() + '%' }"
                ></div>
              </div>
              <div class="progress-people">
                <span class="progress-people-icon">👥</span>
                <span class="progress-people-count">{{ totalMembersAdded() }}</span>
                <span class="progress-people-label">members added</span>
              </div>
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

            <div class="team-pills">
              <button
                v-for="team in teamsInTier(activeTier)"
                :key="team.slug"
                class="team-pill"
                :class="{ 'team-pill-active': activeTeamSlug === team.slug }"
                @click="activeTeamSlug = team.slug"
              >
                <span class="team-pill-icon">{{ activeTeamSlug === team.slug ? "✓" : teamIcon(team) }}</span>
                {{ team.name }}
              </button>
            </div>

            <div v-if="activeTeam" class="team-card">
              <div class="team-card-head">
                <span class="team-card-icon">👥</span>
                <h3>{{ activeTeam.name }}</h3>
                <span class="team-count-pill">
                  {{ filledCount(activeTeam) }} / {{ activeTeam.members.length }} staffed
                </span>
              </div>

              <div class="team-meta-badges">
                <span class="meta-badge">{{ activeTeam.tier }}</span>
                <span class="meta-badge-sep">·</span>
                <span class="meta-badge">{{ activeTeam.type }}</span>
              </div>

              <div class="status-badge" :class="{ 'status-badge-done': isTeamStaffed(activeTeam) }">
                <span class="status-badge-dot">{{ isTeamStaffed(activeTeam) ? "✓" : "⏳" }}</span>
                {{ isTeamStaffed(activeTeam) ? "Complete" : "Pending" }}
              </div>

              <div class="info-fields">
                <div class="info-field">
                  <span class="info-icon">ⓘ</span>
                  <div>
                    <div class="info-label">Purpose</div>
                    <div class="info-value">{{ activeTeam.purpose }}</div>
                  </div>
                </div>
                <div class="info-field">
                  <span class="info-icon">🚩</span>
                  <div>
                    <div class="info-label">Primary IR phases</div>
                    <div class="info-value">{{ activeTeam.phases }}</div>
                  </div>
                </div>
                <div class="info-field">
                  <span class="info-icon">👥</span>
                  <div>
                    <div class="info-label">Team type</div>
                    <div class="info-value">{{ activeTeam.type }}</div>
                  </div>
                </div>
                <div class="info-field">
                  <span class="info-toggle" :class="{ 'info-toggle-on': outsourceIsYes(activeTeam) }"><span class="info-toggle-knob"></span></span>
                  <div>
                    <div class="info-label">Can be outsourced</div>
                    <div class="info-value">{{ activeTeam.outsource }}</div>
                  </div>
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
                <div class="role-block-head" @click="toggleRole(member.role)">
                  <span class="role-block-icon">👥</span>
                  <h4>{{ member.role }}</h4>
                  <span class="status-tags">
                    <span v-if="member.primary_status" class="status-tag" :class="statusTagClass(member.primary_status)">
                      Primary {{ statusTagLabel(member.primary_status) }}
                    </span>
                    <span v-if="member.backup_status" class="status-tag" :class="statusTagClass(member.backup_status)">
                      Backup {{ statusTagLabel(member.backup_status) }}
                    </span>
                  </span>
                  <span class="role-block-chevron">{{ expandedRole === member.role ? "▲" : "▼" }}</span>
                </div>

                <div v-show="expandedRole === member.role" class="role-block-body">
                  <div class="members-table role-picker-table">
                    <div class="table-header">
                      <div>Primary</div>
                      <div>Backup</div>
                      <div></div>
                    </div>
                    <div class="table-row">
                      <div class="select-wrap">
                        <select
                          v-model="member.primary_slack_user_ids[0]"
                          @change="saveAssignment(activeTeam, member)"
                        >
                          <option :value="undefined">— none —</option>
                          <option v-for="p in members" :key="p.i" :value="p.i">{{ p.n }}</option>
                        </select>
                      </div>
                      <div class="select-wrap">
                        <select
                          v-model="member.backup_slack_user_ids[0]"
                          @change="saveAssignment(activeTeam, member)"
                        >
                          <option :value="undefined">— none —</option>
                          <option v-for="p in members" :key="p.i" :value="p.i">{{ p.n }}</option>
                        </select>
                      </div>
                      <div class="role-buttons">
                        <span v-if="savingKey === activeTeam.slug + member.role" class="save-status">Saving…</span>
                        <span v-else-if="savedKey === activeTeam.slug + member.role" class="save-status save-status-saved">✓ Saved & sent</span>
                        <button
                          v-if="member.primary_slack_user_ids[0] || member.backup_slack_user_ids[0]"
                          class="remove-btn"
                          :disabled="removingKey === activeTeam.slug + member.role"
                          @click="removeAssignment(activeTeam, member)"
                        >
                          {{ removingKey === activeTeam.slug + member.role ? "Removing…" : "🗑 Remove" }}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div v-if="member.responsibility" class="responsibility-block">
                    <div class="info-label">📄 Responsibility</div>
                    <div class="info-value">{{ member.responsibility }}</div>
                  </div>

                  <div v-if="member.activities.length" class="activity-table">
                    <div class="activity-header">
                      <div>☰ Activity</div>
                      <div>▤ Phase</div>
                    </div>
                    <div v-for="(a, idx) in member.activities" :key="idx" class="activity-row">
                      <div><span class="activity-check">✓</span>{{ a.activity }}</div>
                      <div>{{ a.phase }}</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- "Apply same user to other teams" -- moved here from
              the Slack Teams card per sir's call, same real logic
              (cards/team_copy_modal_v2.apply_to_other_teams), just a
              website panel instead of a Slack modal. -->
              <div v-if="staffedRoles(activeTeam).length" class="apply-same-user">
                <button class="apply-toggle" @click="applyOpen = !applyOpen">
                  🔁 Apply same user to other teams
                </button>

                <div v-if="applyOpen" class="apply-panel">
                  <label class="apply-label">Apply this person</label>
                  <div class="select-wrap">
                    <select v-model="applySourceRole">
                      <option value="">Select a staffed role…</option>
                      <option v-for="m in staffedRoles(activeTeam)" :key="m.role" :value="m.role">
                        {{ m.role }} ({{ nameFor(m.primary_slack_user_ids[0]) }}
                        <template v-if="m.backup_slack_user_ids[0]"> · backup {{ nameFor(m.backup_slack_user_ids[0]) }}</template>)
                      </option>
                    </select>
                  </div>

                  <label class="apply-label">Apply to</label>
                  <div class="apply-targets">
                    <label v-for="t in siblingTeams(activeTeam)" :key="t.slug" class="apply-target-checkbox">
                      <input type="checkbox" :value="t.slug" v-model="applyTargets" />
                      {{ t.name }}
                    </label>
                    <p v-if="!siblingTeams(activeTeam).length" class="info-value">No other team in this tier.</p>
                  </div>

                  <p class="apply-hint">Fills every still-open role on the selected team(s) -- doesn't overwrite existing assignments.</p>

                  <p v-if="applyMessage" class="apply-message">{{ applyMessage }}</p>

                  <button
                    class="btn-primary apply-submit"
                    :disabled="applying || !applySourceRole || !applyTargets.length"
                    @click="applySameUser(activeTeam)"
                  >
                    {{ applying ? "Applying…" : "Apply" }}
                  </button>
                </div>
              </div>
            </div>

            <div class="submit-section">
              <p v-if="submitMessage" class="submit-message">{{ submitMessage }}</p>
              <button class="btn-primary submit-btn" :disabled="submitting" @click="submitToSlack">
                {{ submitting ? "Updating Slack…" : "Submit" }}
              </button>
              <p class="submit-hint">Every change already saved as you went -- this pushes a live refresh of the Teams card in Slack too, so it matches right away.</p>
            </div>
          </template>

          <!-- STEP: came here directly, not via the Slack link -->
          <template v-else-if="stage === 'need_slack'">
            <h1 class="title">Open this from Slack</h1>
            <p class="step-para">{{ errorMessage }}</p>
          </template>

          <!-- STEP: anything that stops the flow (bad/expired link, etc.) -->
          <template v-else-if="stage === 'error'">
            <h1 class="title">Something's not right</h1>
            <p class="step-para">{{ errorMessage }}</p>
          </template>
        </div>
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
      otpDigits: ["", "", "", "", "", ""] as string[],
      otpDigitRefs: [] as (HTMLInputElement | null)[],
      resendCooldown: 0,
      resendCooldownTimer: 0 as number | ReturnType<typeof setInterval>,
      verifying: false,
      resending: false,
      errorMessage: "",
      members: [] as Member[],
      teams: [] as TeamDoc[],
      savingKey: "",
      savedKey: "",
      removingKey: "",
      tierOrder: TIER_ORDER,
      activeTier: "Mandatory",
      activeTeamSlug: "",
      activePriority: "",
      expandedRole: "",
      applyOpen: false,
      applySourceRole: "",
      applyTargets: [] as string[],
      applying: false,
      applyMessage: "",
      submitting: false,
      submitMessage: "",
    };
  },
  mounted() {
    this.requestOtp();
  },
  beforeUnmount() {
    clearInterval(this.resendCooldownTimer as number);
  },
  computed: {
    activeTeam(): TeamDoc | undefined {
      return this.teams.find((t) => t.slug === this.activeTeamSlug);
    },
    otpCode(): string {
      return this.otpDigits.join("");
    },
    formattedCooldown(): string {
      const m = Math.floor(this.resendCooldown / 60);
      const s = this.resendCooldown % 60;
      return `${m}:${String(s).padStart(2, "0")}`;
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
      this.expandedRole = team ? this.rolesForActivePriority(team)[0]?.role || "" : "";
      this.applyOpen = false;
      this.applySourceRole = "";
      this.applyTargets = [];
      this.applyMessage = "";
    },
    activePriority() {
      // Switching priority sub-tab (Mandatory/Recommended/Optional)
      // defaults to that tab's own first role expanded, same reasoning
      // as the team switch above.
      const team = this.activeTeam;
      this.expandedRole = team ? this.rolesForActivePriority(team)[0]?.role || "" : "";
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
        this.stage = "need_slack";
        this.errorMessage = "To manage your team assignments, go to Slack and click \"Assign on testmyplan.ai\" -- that link brings you here signed in.";
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
        this.otpDigits = ["", "", "", "", "", ""];
        this.startResendCooldown();
        this.$nextTick(() => this.otpDigitRefs[0]?.focus());
      } catch {
        this.stage = "error";
        this.errorMessage = "Couldn't reach TestMyPlan. Check your connection and try again.";
      }
    },
    async resendCode() {
      this.resending = true;
      this.errorMessage = "";
      try {
        await this.requestOtp();
      } finally {
        this.resending = false;
      }
    },
    startResendCooldown() {
      clearInterval(this.resendCooldownTimer as number);
      this.resendCooldown = 30;
      this.resendCooldownTimer = setInterval(() => {
        if (this.resendCooldown <= 1) {
          this.resendCooldown = 0;
          clearInterval(this.resendCooldownTimer as number);
        } else {
          this.resendCooldown -= 1;
        }
      }, 1000);
    },
    setOtpDigitRef(el: unknown, i: number) {
      this.otpDigitRefs[i] = el as HTMLInputElement | null;
    },
    onOtpDigitInput(i: number) {
      // Only ever keep the last typed character (covers a stray IME/
      // double-key edge case), and auto-advance to the next box so
      // typing flows straight through all 6 without clicking each one.
      const value = this.otpDigits[i] || "";
      if (value.length > 1) {
        this.otpDigits[i] = value.slice(-1);
      }
      if (this.otpDigits[i] && i < 5) {
        this.otpDigitRefs[i + 1]?.focus();
      }
    },
    onOtpDigitKeydown(event: KeyboardEvent, i: number) {
      if (event.key === "Backspace" && !this.otpDigits[i] && i > 0) {
        this.otpDigitRefs[i - 1]?.focus();
      }
    },
    onOtpPaste(event: ClipboardEvent) {
      // Pasting the whole 6-digit code at once (common when copying it
      // straight from the Slack DM) fills every box instead of just
      // dumping it all into whichever one was focused.
      const pasted = (event.clipboardData?.getData("text") || "").replace(/\D/g, "").slice(0, 6);
      if (!pasted) return;
      event.preventDefault();
      for (let i = 0; i < 6; i++) {
        this.otpDigits[i] = pasted[i] || "";
      }
      const lastIndex = Math.min(pasted.length, 6) - 1;
      if (lastIndex >= 0) this.otpDigitRefs[lastIndex]?.focus();
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
    async removeAssignment(team: TeamDoc, member: TeamMemberRow) {
      // Same real confirm Slack's own "Remove" button had -- clears
      // BOTH Primary and Backup, not reversible from here.
      if (!window.confirm(`This clears Primary and Backup for "${member.role}". You'll need to reassign both. Remove?`)) {
        return;
      }
      const key = team.slug + member.role;
      this.removingKey = key;
      try {
        await this.apiFetch("/api/teams-portal/teams/remove/", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ team_slug: team.slug, role: member.role }),
        });
        member.primary_slack_user_ids = [undefined];
        member.backup_slack_user_ids = [undefined];
        member.primary_status = null;
        member.backup_status = null;
      } finally {
        this.removingKey = "";
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
    progressPercent(): number {
      const total = this.teamsInTier("Mandatory").length;
      if (total === 0) return 0;
      return Math.round((this.staffedCountInTier("Mandatory") / total) * 100);
    },
    totalMembersAdded(): number {
      // Matches Slack's own real definition exactly (teams_v2_data.py's
      // "total_members = sum(len(m) for m in teams.values())") -- every
      // STAFFED ROLE-SLOT across every team, not distinct people. The
      // same person filling 3 different roles counts as 3 here, same
      // as it always has in Slack.
      let count = 0;
      for (const team of this.teams) {
        for (const m of team.members) {
          if (m.primary_slack_user_ids[0] || m.backup_slack_user_ids[0]) count++;
        }
      }
      return count;
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
    toggleRole(role: string) {
      this.expandedRole = this.expandedRole === role ? "" : role;
    },
    teamIcon(team: TeamDoc): string {
      // Purely decorative, picked from the team's real name/type -- no
      // new data, just a nicer glance than a bare checkmark/hourglass.
      const name = team.name.toLowerCase();
      if (name.includes("legal") || name.includes("regulatory")) return "⚖️";
      if (name.includes("communications") || name.includes("pr")) return "📣";
      if (name.includes("executive") || name.includes("crisis")) return "👑";
      if (name.includes("it ") || name.includes("infrastructure") || name.includes("technical")) return "💻";
      if (name.includes("legal counsel") || name.includes("breach coach")) return "⚖️";
      if (name.includes("insurance")) return "🛡️";
      if (name.includes("law enforcement") || name.includes("cert")) return "🚓";
      if (team.type === "External") return "🤝";
      return "🛡️";
    },
    outsourceIsYes(team: TeamDoc): boolean {
      const v = (team.outsource || "").toLowerCase();
      return v.startsWith("yes") || v.startsWith("partially");
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
    nameFor(id: string | undefined): string {
      if (!id) return "?";
      return this.members.find((p) => p.i === id)?.n || "?";
    },
    staffedRoles(team: TeamDoc): TeamMemberRow[] {
      return team.members.filter((m) => m.primary_slack_user_ids[0]);
    },
    siblingTeams(team: TeamDoc): TeamDoc[] {
      return this.teams.filter((t) => t.tier === team.tier && t.slug !== team.slug);
    },
    async applySameUser(team: TeamDoc) {
      this.applying = true;
      this.applyMessage = "";
      try {
        const resp = await this.apiFetch("/api/teams-portal/teams/apply-same-user/", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            source_team_slug: team.slug,
            source_role: this.applySourceRole,
            target_team_slugs: this.applyTargets,
          }),
        });
        const data = await resp.json();
        if (!resp.ok) {
          this.applyMessage = "Couldn't apply -- please try again.";
          return;
        }
        const count = (data.filled || []).length;
        const message = count
          ? `Applied to ${count} open role${count === 1 ? "" : "s"} -- they've been sent their Welcome card.`
          : "Nothing to apply -- those teams' roles are already staffed.";
        this.applyTargets = [];
        // Refresh so the sibling teams' now-filled roles (and this
        // page's own "staffed" counts) reflect it immediately -- the
        // activeTeamSlug watcher clears applyMessage as a side effect
        // of switching teams, so it's restored after settling back on
        // this same team.
        await this.loadTeamsData();
        this.activeTeamSlug = team.slug;
        this.applyOpen = true;
        this.applyMessage = message;
      } finally {
        this.applying = false;
      }
    },
    async submitToSlack() {
      this.submitting = true;
      this.submitMessage = "";
      try {
        const resp = await this.apiFetch("/api/teams-portal/teams/submit/", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        });
        const data = await resp.json();
        if (!resp.ok) {
          this.submitMessage = "Couldn't reach Slack -- your assignments are still saved, just try Submit again.";
          return;
        }
        this.submitMessage = data.updated_in_slack
          ? "✓ Done -- the Teams card in Slack now shows everything you assigned."
          : "Saved, but there's no live Teams card in Slack to refresh yet -- it'll show this the next time it's opened.";
      } finally {
        this.submitting = false;
      }
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
  --bg-cream: #fdf2f3;
  --ink: #11181c;
  --muted: #6e767d;
  --teal: #0e6e69;
  --teal-bg: #dff1ee;
  --footer-teal: #4ac7b7;
  --card-bg: #ffffff;
  --card-border: #f1d9db;
  --brand-red: #d31e28;
  --brand-black: #141414;
  --draft-bg: #fae0d5;
  --draft-fg: #963e16;
  --urgent-bg: #fadddd;
  --urgent-fg: #be2832;
  --pink-bg: #fdecee;
  --green: #16a34a;
  --green-bg: #dcfce7;
  --orange: #c2650a;
  --orange-bg: #fef0dc;
}

* {
  box-sizing: border-box;
  font-family: "Inter", system-ui, sans-serif;
}

.auth-page {
  min-height: 100vh;
  background: linear-gradient(180deg, var(--bg-cream) 0%, #fdfaf9 60%);
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.top-bar {
  background: var(--card-bg);
  border-bottom: 1px solid var(--card-border);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.top-bar-inner {
  max-width: 1300px;
  margin: 0 auto;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.top-bar-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.top-bar-logo-mark {
  height: 34px;
  width: auto;
  border-radius: 8px;
  display: block;
}

.top-bar-logo-text {
  font-weight: 700;
  font-size: 17px;
  color: var(--ink);
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.auth-wrapper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 24px;
}

.brand-badge::before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--ink);
}

.title-accent {
  color: var(--brand-red);
}

.progress-summary {
  display: flex;
  align-items: center;
  gap: 28px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.progress-fraction {
  flex-shrink: 0;
}

.progress-num {
  font-size: 34px;
  font-weight: 800;
  color: var(--brand-red);
}

.progress-denom {
  font-size: 20px;
  font-weight: 700;
  color: var(--muted);
}

.progress-caption {
  font-size: 13px;
  color: var(--muted);
  margin-top: 2px;
}

.progress-bar-track {
  flex: 1;
  min-width: 140px;
  height: 14px;
  border-radius: 999px;
  background: #e6e3dd;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background: var(--brand-red);
  border-radius: 999px;
  transition: width 0.3s ease;
}

.progress-people {
  display: flex;
  align-items: baseline;
  gap: 6px;
  flex-shrink: 0;
}

.progress-people-icon {
  font-size: 18px;
}

.progress-people-count {
  font-size: 20px;
  font-weight: 800;
  color: var(--ink);
}

.progress-people-label {
  font-size: 14px;
  color: var(--muted);
}

@media (max-width: 700px) {
  .progress-summary {
    flex-direction: column;
    align-items: flex-start;
  }

  .progress-bar-track {
    width: 100%;
  }
}

.otp-card {
  max-width: 400px;
  margin: 40px auto 0;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 16px;
  padding: 36px 32px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
}

.otp-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: var(--pink-bg);
  font-size: 32px;
  margin-bottom: 20px;
}

.otp-title {
  font-size: 24px;
  font-weight: 800;
  color: var(--ink);
  margin-bottom: 10px;
}

.otp-subtitle {
  font-size: 14px;
  color: var(--muted);
  margin-bottom: 24px;
  line-height: 1.5;
}

.otp-digits {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 18px;
}

.otp-digit {
  width: 44px;
  height: 52px;
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  border: 1.5px solid var(--card-border);
  border-radius: 10px;
  color: var(--ink);
}

.otp-digit:focus {
  outline: none;
  border-color: var(--brand-red);
}

.resend-row {
  margin-bottom: 20px;
}

.resend-link-disabled {
  color: var(--muted) !important;
  cursor: default;
}

.title {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 6px;
  color: var(--ink);
}

.title-plain {
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

.otp-submit {
  width: 100%;
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
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 20px;
}

.assign-header-left {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.assign-header-icon {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: var(--pink-bg);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
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
  border-color: var(--brand-red);
}

.tier-tab-active {
  background: var(--brand-red);
  border-color: var(--brand-red);
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
  border-color: var(--brand-red);
}

.team-pill-active {
  background: var(--brand-red);
  border-color: var(--brand-red);
  color: #fff;
}

.team-pill-icon {
  font-size: 13px;
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
  border-color: var(--brand-red);
}

.priority-tab-active {
  background: var(--brand-red);
  border-color: var(--brand-red);
  color: #fff;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 700;
  color: var(--orange);
  background: var(--orange-bg);
  border-radius: 999px;
  padding: 5px 14px;
  margin-bottom: 18px;
}

.status-badge-dot {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.status-badge-done {
  color: var(--green);
  background: var(--green-bg);
}

.team-card-head {
  gap: 10px;
}

.team-card-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--pink-bg);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
}

.info-icon,
.info-toggle {
  flex-shrink: 0;
  margin-top: 2px;
}

.info-icon {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--pink-bg);
  color: var(--brand-red);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.info-toggle {
  width: 36px;
  height: 20px;
  border-radius: 999px;
  background: #e2e2e2;
  position: relative;
  display: inline-block;
}

.info-toggle-on {
  background: var(--brand-red);
}

.info-toggle-knob {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  transition: left 0.15s ease;
}

.info-toggle-on .info-toggle-knob {
  left: 18px;
}

.info-field {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.role-block-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--pink-bg);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  flex-shrink: 0;
}

.role-block-chevron {
  margin-left: auto;
  color: var(--muted);
  font-size: 11px;
}

.role-block-body {
  padding-top: 4px;
}

.activity-check {
  color: var(--brand-red);
  margin-right: 8px;
  font-weight: 700;
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
  color: var(--green);
  background: var(--green-bg);
  border-radius: 999px;
  padding: 4px 12px;
  white-space: nowrap;
}

.team-meta-badges {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 6px 0 14px;
}

.meta-badge {
  font-size: 12px;
  font-weight: 600;
  font-family: ui-monospace, "SFMono-Regular", Menlo, monospace;
  color: var(--text-muted, #6b7280);
  background: var(--surface-muted, #f3f4f6);
  border-radius: 6px;
  padding: 2px 8px;
}

.meta-badge-sep {
  color: var(--text-muted, #6b7280);
  font-size: 12px;
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
  cursor: pointer;
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
  background: var(--green-bg);
  color: var(--green);
}

.status-tag-sent {
  background: var(--orange-bg);
  color: var(--orange);
}

.status-tag-failed {
  background: var(--urgent-bg);
  color: var(--urgent-fg);
}

.role-picker-table .table-header,
.role-picker-table .table-row {
  grid-template-columns: 220px 220px 110px;
  justify-content: start;
  gap: 12px;
}

.role-buttons {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.save-status {
  font-size: 12px;
  font-weight: 700;
  color: var(--muted);
}

.save-status-saved {
  color: var(--green);
}

.remove-btn {
  border: 1.4px solid var(--brand-red);
  color: #fff;
  background: var(--brand-red);
  border-radius: 8px;
  padding: 8px 0;
  width: 100%;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
  transition: opacity 0.15s ease;
}

.remove-btn:hover {
  opacity: 0.9;
}

.remove-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
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
  max-width: 220px;
  padding: 7px 10px;
  border-radius: 8px;
  border: 1px solid var(--card-border);
  background: var(--bg-cream);
  font-size: 13px;
  color: var(--ink);
  transition: border-color 0.15s ease, background 0.15s ease;
}

.select-wrap select:hover {
  border-color: var(--brand-red);
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
  border-color: var(--green);
  color: var(--green);
  background: var(--green-bg);
}

.apply-same-user {
  margin-top: 8px;
  padding-top: 20px;
  border-top: 1px solid var(--card-border);
}

.apply-toggle {
  background: none;
  border: 1px solid var(--card-border);
  border-radius: 8px;
  padding: 9px 16px;
  font-size: 14px;
  font-weight: 700;
  color: var(--ink);
  cursor: pointer;
}

.apply-toggle:hover {
  border-color: var(--brand-red);
}

.apply-panel {
  margin-top: 16px;
  background: var(--bg-cream);
  border: 1px solid var(--card-border);
  border-radius: 10px;
  padding: 16px;
}

.apply-label {
  display: block;
  font-size: 13px;
  font-weight: 700;
  color: var(--ink);
  margin: 12px 0 6px;
}

.apply-label:first-child {
  margin-top: 0;
}

.apply-targets {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.apply-target-checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--ink);
  cursor: pointer;
}

.apply-hint {
  font-size: 12px;
  color: var(--muted);
  margin: 12px 0;
}

.apply-message {
  font-size: 13px;
  color: var(--green);
  font-weight: 600;
  margin-bottom: 12px;
}

.apply-submit {
  width: auto;
  height: auto;
  padding: 10px 20px;
}

.submit-section {
  margin-top: 12px;
  padding-top: 24px;
  border-top: 2px solid var(--card-border);
  text-align: left;
}

.submit-btn {
  width: auto;
  height: auto;
  padding: 14px 32px;
}

.submit-hint {
  font-size: 13px;
  color: var(--muted);
  margin-top: 10px;
}

.submit-message {
  font-size: 14px;
  font-weight: 600;
  color: var(--green);
  margin-bottom: 12px;
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

  .role-picker-table .table-header,
  .role-picker-table .table-row {
    grid-template-columns: 1fr;
  }
}
</style>
