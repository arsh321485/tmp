<template>
  <main class="auth-page">
    <div class="container">
      <div class="auth-wrapper">
        <div class="auth-left">
          <div class="logo">
            <img src="@/assets/images/tmp-new-logo.png" alt="TestMyPlan Logo" />
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
            <h1 class="title">Assign your teams</h1>
            <p class="step-para">Pick a primary and backup for each role. Saves instantly.</p>

            <div v-for="team in teams" :key="team.id" class="team-block">
              <h3>{{ team.name }}</h3>

              <div class="members-table">
                <div class="table-header">
                  <div>Role</div>
                  <div>Primary</div>
                  <div>Backup</div>
                  <div></div>
                </div>

                <div v-for="member in team.members" :key="member.role" class="table-row">
                  <div class="role-cell">{{ member.role }}</div>
                  <div>
                    <select v-model="member.primary_slack_user_ids[0]">
                      <option :value="undefined">— none —</option>
                      <option v-for="p in members" :key="p.i" :value="p.i">{{ p.n }}</option>
                    </select>
                  </div>
                  <div>
                    <select v-model="member.backup_slack_user_ids[0]">
                      <option :value="undefined">— none —</option>
                      <option v-for="p in members" :key="p.i" :value="p.i">{{ p.n }}</option>
                    </select>
                  </div>
                  <div>
                    <button class="save-btn" @click="saveAssignment(team, member)">
                      {{ savingKey === team.id + member.role ? "Saving…" : "Save" }}
                    </button>
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
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Member {
  i: string;
  n: string;
}

interface TeamMemberRow {
  role: string;
  primary_slack_user_ids: (string | undefined)[];
  backup_slack_user_ids: (string | undefined)[];
}

interface TeamDoc {
  id: string;
  module: string;
  slug: string;
  name: string;
  is_mandatory: boolean;
  members: TeamMemberRow[];
}

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
    };
  },
  mounted() {
    this.requestOtp();
  },
  methods: {
    apiBase(): string {
      return import.meta.env.VITE_API_BASE_URL as string;
    },
    async requestOtp() {
      const token = (this.$route.query.token as string) || "";
      if (!token) {
        this.stage = "error";
        this.errorMessage = "This link is missing its token -- open it again from the Slack button.";
        return;
      }
      try {
        const resp = await fetch(`${this.apiBase()}/api/teams-portal/otp/request/`, {
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
      if (this.otpCode.length !== 6) {
        this.errorMessage = "Enter the full 6-digit code.";
        return;
      }
      this.verifying = true;
      this.errorMessage = "";
      try {
        const resp = await fetch(`${this.apiBase()}/api/teams-portal/otp/verify/`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ otp_id: this.otpId, code: this.otpCode }),
        });
        const data = await resp.json();
        if (!resp.ok) {
          this.errorMessage =
            data.error === "incorrect_code"
              ? "That code's not right -- check Slack and try again."
              : data.error === "too_many_attempts"
              ? "Too many tries -- go back to Slack and request a new code."
              : "That code has expired -- go back to Slack and request a new one.";
          return;
        }
        await this.loadTeamsData();
      } finally {
        this.verifying = false;
      }
    },
    async loadTeamsData() {
      const [membersResp, teamsResp] = await Promise.all([
        fetch(`${this.apiBase()}/api/teams-portal/members/`, { credentials: "include" }),
        fetch(`${this.apiBase()}/api/teams-portal/teams/`, { credentials: "include" }),
      ]);
      const membersData = await membersResp.json();
      const teamsData = await teamsResp.json();
      this.members = membersData.members || [];
      this.teams = teamsData.teams || [];
      this.stage = "assign";
    },
    async saveAssignment(team: TeamDoc, member: TeamMemberRow) {
      this.savingKey = team.id + member.role;
      try {
        await fetch(`${this.apiBase()}/api/teams-portal/teams/assign/`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            team_doc_id: team.id,
            role: member.role,
            primary_slack_user_ids: member.primary_slack_user_ids.filter(Boolean),
            backup_slack_user_ids: member.backup_slack_user_ids.filter(Boolean),
          }),
        });
      } finally {
        this.savingKey = "";
      }
    },
  },
});
</script>

<style scoped>
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
  background: #ffffff;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.auth-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 0;
}

.title {
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #000;
}

.step-para {
  font-size: 16px;
  color: #333;
  margin-bottom: 24px;
}

.form-error {
  color: #d32929;
  font-size: 14px;
  margin-bottom: 12px;
}

.auth-form label {
  display: block;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #000;
}

.auth-form input {
  width: 220px;
  padding: 14px 16px;
  margin-bottom: 18px;
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  background: #f6f6f6;
  font-size: 24px;
  letter-spacing: 8px;
  text-align: center;
}

.btn-primary {
  background: #d32929;
  color: #fff;
  border: none;
  padding: 14px 22px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
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
  color: #d32929;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
}

.resend-link:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.team-block {
  margin-bottom: 32px;
}

.team-block h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #000;
}

.members-table {
  width: 100%;
}

.table-header,
.table-row {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr 100px;
  align-items: center;
  gap: 16px;
}

.table-header {
  color: #555;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 8px;
}

.table-row {
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
}

.role-cell {
  font-size: 15px;
  font-weight: 500;
  color: #000;
}

.table-row select {
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  background: #fff;
  font-size: 14px;
}

.save-btn {
  border: 1.4px solid #d32929;
  color: #d32929;
  background: transparent;
  border-radius: 8px;
  padding: 6px 14px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
}

.save-btn:hover {
  background: #fff5f5;
}
</style>
