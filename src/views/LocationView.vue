<template>
  <main class="auth-page">
    <div class="container">
      <div class="auth-wrapper">
        <!-- LEFT -->
        <div class="auth-left">
           <div class="logo">
                        <img src="@/assets/images/logo-small.png" alt="TestMyPlan Logo" />
                    </div>

          <h1 class="title">Welcome to Testmyplan!</h1>

          <p class="step-text">4/5 Add locations</p>

          <!-- Stepper -->
          <welcome-stepper :totalSteps="5" :current="4" />

          <!-- FORM -->
          <form class="auth-form">
            <div class="form-header">
              <label>Add locations:</label>
              <span class="limit-text">Up to 10 locations allowed</span>
            </div>

            <input type="text" placeholder="Search for a location" />

            <button type="button" class="add-location-btn">
              <i class="bi bi-plus-lg"></i> Add location
            </button>

            <button type="submit" class="btn-primary subt-btn">
              Next: Add locations
              <i class="bi bi-arrow-right-circle-fill ps-2"></i>
            </button>
          </form>
        </div>

        <!-- RIGHT -->
        <div class="auth-right">
          <h2>
            Run simulated tests<br />
            for top threats.
          </h2>

          <div class="right-stepper">
            <span class="step active"></span>
            <span class="step"></span>
            <span class="step"></span>
          </div>

          <img src="@/assets/images/laptop-img.png" alt="Security Illustration"
                        class="illustration red-tint" />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import WelcomeStepper from '@/components/welcomeStepper.vue';



export default {
  name: "LocationView",
  components: {WelcomeStepper}
};
</script>

<style scoped>
/* Base styling (unchanged from your design) */
* {
  box-sizing: border-box;
  font-family: "Inter", system-ui, "Suisse Intl", sans-serif;
}

.auth-page {
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.auth-wrapper {
  display: flex;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  gap: 60px;
  align-items: center;
  justify-content: center;
}

.auth-left {
  flex: 1;
  padding: 15px 0;
}

.logo img {
  height: 44.94px;
  width: 43.55px;
  display: block;
}

.title {
  font-size: 44px;
  font-weight: 500;
  margin-bottom: 20px;
  color: #000000DE;
  line-height: 80px;
  letter-spacing: -2.1%;
}

/* Stepper */
.stepper {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
}

.step {
  width: 70px;
  height: 5px;
  background: #FFC5C5;
  border-radius: 4px;
}

.step.active {
  background: #D32929;
}

.step-text {
  font-size: 20px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 20px;
}

/* FORM */
.auth-form {
  width: 100%;
}

.auth-form label {
  display: block;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
  color: #000000;
}

.auth-form input {
  width: 100%;
  padding: 10px 16px;
  margin-bottom: 22px;
  border-radius: 8px;
  border: 1px solid #F6F6F6;
  background: #F6F6F6;
  font-size: 18px;
  font-weight: 400;
}

.auth-form ::placeholder {
  font-size: 16px;
  color: #00000099;
  font-weight: 500;
}

.auth-form input:focus {
  outline: none;
  border-color: #e63946;
}

.form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.limit-text {
  font-size: 14px;
  color: #00000099;
}

/* BUTTONS */
.add-location-btn {
  width: 57%;
  height: 52px;
  border: 1.4px solid #D32929;
  background: transparent;
  color: #D32929;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 22px;
  transition: all 0.3s ease;
}

.add-location-btn:hover {
  background: #fff5f5;
}

.btn-primary {
  width: 328px;
  height: 52px;
  background: #D32929;
  color: #FFFFFF;
  border: none;
  padding: 14px 22px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  line-height: 24px;
  align-items: center;
}

/* ✅ Only the Next:Add locations button gets 280px top margin */
.subt-btn {
  margin-top: 150px;
}

/* RIGHT PANEL */
.auth-right {
  flex: 1;
  background: #FFEFEF;
  padding: 95px 21px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.auth-right h2 {
  font-size: 42px;
  font-weight: 500;
  margin-bottom: 14px;
  line-height: 54px;
}

.right-stepper {
  display: flex;
  gap: 10px;
  margin-bottom: 50px;
}

.right-stepper .step {
  width: 57px;
}

.illustration {
  width: 85%;
  max-width: 420px;
  margin: 0 auto;
  display: block;
}

.red-tint {
  filter: sepia(1) hue-rotate(-20deg) saturate(3) brightness(0.95);
}

/* ========================= */
/* RESPONSIVE ENHANCEMENTS */
/* ========================= */

/* Tablets */
@media (max-width: 1024px) {
  .auth-wrapper {
    flex-direction: column;
    padding: 40px 20px;
  }

  .auth-right {
    width: 100%;
    margin-top: 40px;
  }

  .btn-primary {
    width: 100%;
  }

  .add-location-btn {
    width: 100%;
  }

  /* make margin smaller on tablet */
  .subt-btn {
    margin-top: 180px;
  }
}

/* Phones */
@media (max-width: 600px) {
  .auth-right {
    display: none;
  }

  .title {
    font-size: 26px;
    line-height: 38px;
  }

  .step-text {
    font-size: 16px;
  }

  .auth-form label {
    font-size: 16px;
  }

  .auth-form input {
    font-size: 16px;
    padding: 10px 14px;
  }

  .add-location-btn,
  .btn-primary {
    width: 100%;
    height: 48px;
  }

  /* smaller top margin for phone */
  .subt-btn {
    margin-top: 100px;
  }
}

/* Very small screens */
@media (max-width: 375px) {
  .title {
    font-size: 22px;
    line-height: 34px;
  }

  .auth-page {
    padding: 10px;
  }

  .subt-btn {
    margin-top: 60px;
  }
}
</style>