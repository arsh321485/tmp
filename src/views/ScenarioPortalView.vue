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

          <!-- STEP: real scenario data, loaded fresh after a verified OTP -->
          <template v-else-if="stage === 'review'">
            <div class="review-header">
              <h1 class="title"><span class="title-plain">Phases, injects &amp;</span> <span class="title-accent">decisions</span></h1>
              <p class="step-para breadcrumb">
                {{ [scenario?.threat_label, scenario?.incident_name, scenario?.cause_name].filter(Boolean).join("  ›  ") }}
              </p>
            </div>

            <div v-if="approved" class="approved-banner">✅ Approved</div>

            <div class="phase-tabs">
              <button
                v-for="phase in phasesWithInjects"
                :key="phase.name"
                class="phase-tab"
                :class="{ 'phase-tab-active': activePhaseTab === phase.name }"
                @click="activePhaseTab = phase.name"
              >
                {{ phase.name }}
              </button>
              <button
                v-if="scenario?.consequence_injects?.length"
                class="phase-tab"
                :class="{ 'phase-tab-active': activePhaseTab === 'Consequences' }"
                @click="activePhaseTab = 'Consequences'"
              >
                Consequences
              </button>
            </div>

            <div v-if="activePhaseTab !== 'Consequences'" class="phase-block">
              <div v-for="inject in activePhaseInjects" :key="inject.inject_id" class="inject-card">
                <div class="inject-meta">
                  <span class="inject-num">{{ inject.seq }}.</span>
                  <span class="inject-title">{{ inject.title }}</span>
                </div>
                <p class="inject-sub">To: {{ inject.target_role }}</p>
                <p class="inject-message">{{ inject.inject_message }}</p>
                <p v-if="inject.decision_question" class="inject-question">{{ inject.decision_question }}</p>
                <div v-if="inject.options?.length" class="inject-options">
                  <div v-for="(opt, oi) in inject.options" :key="oi" class="inject-option">
                    <span class="option-tag" :class="`option-tag-${(opt.rating || '').toLowerCase()}`">
                      {{ opt.rating }} · {{ opt.score }}
                    </span>
                    <span class="option-text">{{ opt.option_text }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div v-else class="phase-block">
              <p class="step-para consequences-note">Triggered by a Poor choice during the drill.</p>
              <div v-for="inject in scenario?.consequence_injects || []" :key="inject.inject_id" class="inject-card">
                <div class="inject-meta">
                  <span class="inject-title">{{ inject.title }}</span>
                </div>
                <p class="inject-sub">To: {{ inject.target_role }}</p>
                <p class="inject-message">{{ inject.inject_message }}</p>
              </div>
            </div>

            <div v-if="!approved" class="review-actions">
              <p class="step-para approve-note">To approve, go back to Slack and click "Approve this scenario" in the command center.</p>
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

interface InjectOption {
  option: string;
  option_text: string;
  score: number;
  rating: string;
  feedback?: string;
  triggers_inject?: string;
}

interface Inject {
  inject_id: string;
  type: string;
  phase: string;
  seq: number;
  title: string;
  target_role: string;
  inject_message: string;
  decision_id?: string;
  decision_question?: string;
  options?: InjectOption[];
}

interface Scenario {
  id: string;
  threat_label: string;
  incident_name: string;
  cause_name: string;
  phases: string[];
  injects: Inject[];
  consequence_injects: Inject[];
  status: string;
}

export default defineComponent({
  name: "ScenarioPortal",
  data() {
    return {
      stage: "requesting" as "requesting" | "otp" | "review" | "need_slack" | "error",
      otpId: "",
      otpDigits: ["", "", "", "", "", ""] as string[],
      otpDigitRefs: [] as (HTMLInputElement | null)[],
      resendCooldown: 0,
      resendCooldownTimer: 0 as number | ReturnType<typeof setInterval>,
      verifying: false,
      resending: false,
      errorMessage: "",
      scenario: null as Scenario | null,
      activePhaseTab: "",
    };
  },
  mounted() {
    this.requestOtp();
  },
  beforeUnmount() {
    clearInterval(this.resendCooldownTimer as number);
  },
  computed: {
    otpCode(): string {
      return this.otpDigits.join("");
    },
    formattedCooldown(): string {
      const m = Math.floor(this.resendCooldown / 60);
      const s = this.resendCooldown % 60;
      return `${m}:${String(s).padStart(2, "0")}`;
    },
    approved(): boolean {
      return this.scenario?.status === "approved";
    },
    phasesWithInjects(): { name: string; injects: Inject[] }[] {
      if (!this.scenario) return [];
      return this.scenario.phases
        .map((name) => ({
          name,
          injects: this.scenario!.injects
            .filter((inj) => inj.phase === name)
            .sort((a, b) => (a.seq || 0) - (b.seq || 0)),
        }))
        .filter((p) => p.injects.length > 0);
    },
    activePhaseInjects(): Inject[] {
      return this.phasesWithInjects.find((p) => p.name === this.activePhaseTab)?.injects || [];
    },
  },
  methods: {
    apiBase(): string {
      return import.meta.env.VITE_API_BASE_URL as string;
    },
    apiFetch(path: string, options: RequestInit = {}): Promise<Response> {
      return fetch(`${this.apiBase()}${path}`, {
        ...options,
        headers: { ...(options.headers || {}), "ngrok-skip-browser-warning": "true" },
      });
    },
    async requestOtp() {
      const token = (this.$route.query.token as string) || "";
      if (!token) {
        this.stage = "need_slack";
        this.errorMessage = "To review this scenario, go to Slack and click \"View on website\" on the scenario card -- that link brings you here signed in.";
        return;
      }
      try {
        const resp = await this.apiFetch("/api/scenario-portal/otp/request/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });
        const data = await resp.json();
        if (!resp.ok) {
          this.stage = "error";
          this.errorMessage =
            data.error === "invalid_or_expired_token"
              ? "This link has expired -- go back to Slack and click \"View on website\" again."
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
      if (this.verifying) return;
      if (this.otpCode.length !== 6) {
        this.errorMessage = "Enter the full 6-digit code.";
        return;
      }
      this.verifying = true;
      this.errorMessage = "";
      try {
        const resp = await this.apiFetch("/api/scenario-portal/otp/verify/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ otp_id: this.otpId, code: this.otpCode }),
        });
        const data = await resp.json();
        if (!resp.ok) {
          this.errorMessage =
            data.error === "incorrect_code"
              ? "That code's wrong -- check your Slack DM and try again."
              : data.error === "expired_otp"
                ? "That code's expired -- request a new one."
                : data.error === "too_many_attempts"
                  ? "Too many wrong attempts -- request a new code."
                  : "Couldn't verify that code. Please try again.";
          return;
        }
        await this.loadScenario();
      } catch {
        this.errorMessage = "Couldn't reach TestMyPlan. Check your connection and try again.";
      } finally {
        this.verifying = false;
      }
    },
    async loadScenario() {
      const resp = await this.apiFetch("/api/scenario-portal/scenario/", { credentials: "include" });
      if (!resp.ok) {
        this.stage = "error";
        this.errorMessage = "Couldn't load this scenario. Please try again from Slack.";
        return;
      }
      const data = await resp.json();
      this.scenario = data.scenario;
      this.stage = "review";
      this.activePhaseTab = this.phasesWithInjects[0]?.name || (this.scenario?.consequence_injects.length ? "Consequences" : "");
    },
  },
});
</script>

<style scoped>
.auth-page {
  --bg-cream: #fdf2f3;
  --ink: #11181c;
  --muted: #6e767d;
  --teal: #0e6e69;
  --teal-bg: #dff1ee;
  --card-bg: #ffffff;
  --card-border: #f1d9db;
  --brand-red: #d31e28;
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
  max-width: 820px;
  margin: 0 auto;
  padding: 32px 24px 64px;
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

.title-accent {
  color: var(--brand-red);
}

.step-para {
  font-size: 16px;
  color: var(--muted);
  margin-bottom: 24px;
}

.breadcrumb {
  font-size: 14px;
  margin-bottom: 20px;
}

.consequences-note {
  font-size: 14px;
  margin-bottom: 12px;
}

.approve-note {
  margin-bottom: 0;
}

.form-error {
  color: var(--brand-red);
  font-size: 14px;
  margin-bottom: 12px;
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
  width: 260px;
  height: 52px;
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.otp-submit {
  width: 100%;
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

.resend-link-disabled {
  color: var(--muted) !important;
  cursor: default;
}

.review-header {
  margin-bottom: 8px;
}

.approved-banner {
  display: inline-block;
  background: var(--green-bg);
  color: var(--green);
  font-weight: 700;
  padding: 8px 16px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.phase-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.phase-tab {
  background: var(--card-bg);
  border: 1.5px solid var(--card-border);
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 700;
  color: var(--ink);
  cursor: pointer;
}

.phase-tab-active {
  background: var(--teal);
  border-color: var(--teal);
  color: #fff;
}

.phase-block {
  margin-bottom: 28px;
}

.phase-title {
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--brand-red);
  margin-bottom: 12px;
}

.inject-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  padding: 18px 20px;
  margin-bottom: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
}

.inject-meta {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 4px;
}

.inject-num {
  font-weight: 800;
  color: var(--brand-red);
}

.inject-title {
  font-weight: 700;
  color: var(--ink);
  font-size: 16px;
}

.inject-sub {
  font-size: 13px;
  color: var(--muted);
  margin-bottom: 8px;
}

.inject-message {
  font-size: 15px;
  color: var(--ink);
  margin-bottom: 10px;
  line-height: 1.5;
}

.inject-question {
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 10px;
}

.inject-options {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.inject-option {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.option-tag {
  flex-shrink: 0;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: 6px;
  background: var(--teal-bg);
  color: var(--teal);
}

.option-tag-best {
  background: var(--green-bg);
  color: var(--green);
}

.option-tag-partial {
  background: var(--orange-bg);
  color: var(--orange);
}

.option-tag-poor {
  background: #f1f3f4;
  color: var(--muted);
}

.option-text {
  font-size: 14px;
  color: var(--ink);
}

.review-actions {
  margin-top: 24px;
}
</style>
