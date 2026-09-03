<template>
  <main class="dashboard-page">
    <div class="dashboard-card">
      <div class="logo">
        <img src="@/assets/images/tmp-new-logo.png" alt="TestMyPlan Logo" />
      </div>

      <div class="check-icon">
        <i class="bi bi-check-circle-fill"></i>
      </div>

      <h1 class="title">You're signed in{{ errorMessage ? "" : "!" }}</h1>

      <p v-if="!errorMessage" class="subtitle">
        Open Slack or Microsoft Teams to see your drills, actions and
        readiness -- that's where TestMyPlan actually lives, not here.
      </p>

      <p v-else class="error-text">
        {{ errorMessage }}
      </p>

      <router-link to="/" class="btn-primary">
        Back to home
      </router-link>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  name: "DashboardView",
  data() {
    return {
      errorMessage: "" as string,
    };
  },
  created() {
    const error = this.$route.query.error;
    if (typeof error === "string" && error) {
      this.errorMessage = `Sign-in didn't complete (${error}). Please try again.`;
    }
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: "Inter", system-ui, "Suisse Intl", sans-serif;
}

.dashboard-page {
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.dashboard-card {
  max-width: 480px;
  width: 100%;
  text-align: center;
}

.logo img {
  height: 52px;
  width: 48px;
  margin: 0 auto 24px;
  display: block;
}

.check-icon {
  font-size: 56px;
  color: #22c55e;
  margin-bottom: 20px;
}

.error-text + .btn-primary,
.check-icon + .title {
  margin-top: 0;
}

.title {
  font-size: 32px;
  font-weight: 500;
  color: #000000de;
  margin-bottom: 16px;
  letter-spacing: -2.1%;
}

.subtitle {
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 32px;
}

.error-text {
  font-size: 16px;
  color: #d32929;
  line-height: 1.6;
  margin-bottom: 32px;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 0 28px;
  background: #d32929;
  color: #ffffff;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
}
</style>
