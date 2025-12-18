<template>
    <main class="auth-page email-confirm-page">
        <div class="container">
            <div class="auth-wrapper">

                <!-- LEFT -->
                <div class="auth-left">
                    <!-- <div class="logo">*</div> -->

                    <div class="logo">
                        <img src="@/assets/images/logo-small.png" alt="TestMyPlan Logo" />
                    </div>


                    <h1 class="title">Welcome to Testmyplan!</h1>



                    <p class="step-text mb-2">3/5 Integrate Mattermost</p>

                    <!-- Stepper -->
                    <welcome-stepper :totalSteps="5" :current="3" />

                    <p class="step-para mt-4">Please setup your email with Mattermost to continue:</p>

                    <!-- MATTERMOST SECTION -->
                    <div class="mattermost-section">

                        <!-- Connect Button -->
                        <button class="mattermost-btn mb-4">
                            <i class="bi bi-arrow-repeat me-2"></i>
                            Connect to Mattermost
                        </button>

                        <!-- Status Card -->
                        <div class="mattermost-status-card centered">


                            <div class="status-icon">
                                <div class="status-icon-inner">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>

                            <h4>Status: Pending</h4>
                            <p>You haven’t set up your email with Mattermost yet.</p>
                        </div>


                    </div>


                    <router-link to="/location"
                        class="btn-primary d-inline-flex align-items-center justify-content-center">
                        Next: Add locations
                        <i class="bi bi-arrow-right-circle-fill ps-2"></i>
                    </router-link>



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

                    <!-- <img src="@/assets/images/laptop-img.png" alt="Security Illustration" class="illustration" /> -->
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
    name: "MattermostView",
    components: { WelcomeStepper }
}

</script>


<style scoped>
* {
    box-sizing: border-box;
    font-family: "Inter", system-ui, "Suisse Intl", sans-serif;
}

.email-confirm-page {
    align-items: flex-start;
    /* top align */

}

.email-confirm-page .auth-wrapper {
    align-items: flex-start;
}

.auth-page {
    min-height: 100vh;
    background: #ffffff;
    display: flex;
    align-items: center;
}


/* .logo {
  margin-bottom: 32px;
} */

.logo img {
    height: 44.94px;
    width: 43.55px;
    top: 98px;
    left: 64px;
    display: block;
}


/* ========================= */
/* MAIN LAYOUT */
/* ========================= */
.auth-wrapper {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    gap: 60px;
    align-items: center;
}

/* ========================= */
/* LEFT PANEL */
/* ========================= */
/* .auth-left {
    flex: 1;
    padding: 15px 0;
} */

.auth-left {
    flex: 1;
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    min-height: 100%;
}


.logo {
    color: #e63946;
    font-size: 36px;
    margin-bottom: 0px;
}

.title {
    font-size: 44px;
    font-weight: 500;
    margin-bottom: 20px;
    color: #000000DE;
    line-height: 80px;
    letter-spacing: -2.1%;
}

/* STEPPER */
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
    /* line-height: 28px; */
    /* line-height: 6px; */
    letter-spacing: -0.7%;
}

.step-para {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0%;
    color: #000000;
    margin-bottom: 6px;
}

/* FORM */
.auth-form label {
    display: block;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 10px;
    line-height: 32px;
    letter-spacing: -0.6%;
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

.btn-primary {
    /* margin-top: 8px; */
    margin-top: 22px;
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
    letter-spacing: -0.7%;
}

/* .domain-section .btn-primary {
    margin-top: auto;   
    align-self: flex-start;
} */

@media (max-width: 767px) {
    .domain-section .btn-primary {
        margin-top: 50px;
        align-self: stretch;
    }
}


/* ========================= */
/* MATTERMOST SECTION */
/* ========================= */
.mattermost-section {
    margin-top: 24px;
    max-width: 520px;
}

/* CONNECT BUTTON */
.mattermost-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #4A69AC;
    color: #ffffff;
    border: none;
    padding: 12px 18px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    /* margin-bottom: 40px; */
}

.mattermost-btn:hover {
    background: #4A69AC;
}

/* STATUS CARD */
/* ========================= */
/* MATTERMOST STATUS – CENTERED (MATCH IMAGE 1) */
/* ========================= */

.mattermost-status-card.centered {
    border: 1px solid #E6E6E6;
    border-radius: 24px;
    padding: 32px 24px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 520px;
}


/* OUTER CIRCLE */
.status-icon {
    width: 64px;
    height: 64px;
    background: #FFE5E5;
    /* light pink */
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
}

/* INNER RED CIRCLE */
.status-icon-inner {
    width: 30px;
    height: 30px;
    background: #D32929;
    /* solid red */
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
}

/* WHITE DOTS */
.status-icon-inner span {
    width: 4px;
    height: 4px;
    background: #ffffff;
    border-radius: 50%;
    display: block;
}


/* TITLE */
.mattermost-status-card.centered h4 {
    font-size: 24px;
    font-weight: 600;
    color: #000000DE;
    margin-bottom: 6px;
}

/* DESCRIPTION */
.mattermost-status-card.centered p {
    font-size: 13px;
    font-weight: 500;
    color: #00000099;
    margin: 0;
    max-width: 360px;
}

/* ========================= */
/* RESPONSIVE */
/* ========================= */
@media (max-width: 767px) {
    .mattermost-status-card.centered {
        padding: 24px 16px;
        max-width: 100%;
    }
}

/* ========================= */
/* RESPONSIVE */
/* ========================= */
@media (max-width: 767px) {
    .mattermost-section {
        max-width: 100%;
    }

    /* .mattermost-status-card {
        padding: 16px;
    } */

    .mattermost-btn {
        width: 100%;
        justify-content: center;
    }
}



/* ========================= */
/* RIGHT PANEL */
/* ========================= */
.auth-right {
    flex: 1;
    background: #FFEFEF;
    /* padding: 80px 70px; */
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
    letter-spacing: -0.7%;
}

/* RIGHT STEPPER */
.right-stepper {
    display: flex;
    gap: 10px;
    margin-bottom: 50px;
}

.right-stepper .step {
    width: 57px;
}

/* IMAGE */
.illustration {
    width: 85%;
    max-width: 420px;
    margin: 0 auto;
    display: block;
}

.red-tint {
    filter:
        sepia(1) hue-rotate(-20deg) saturate(3) brightness(0.95);
}


/* DOMAIN SELECT */
.domain-section {
    margin-top: 24px;
}

.domain-row {
    display: flex;
    gap: 12px;
    margin-bottom: 12px;
    flex-wrap: wrap;
}

.domain-pill {
    padding: 15px 18px;
    /* width: 164px;
    height: 52px; */
    /* top: 404px;
    left: 60px; */
    border-radius: 42px;
    border: 1px solid #0000001F;
    background: #ffffff;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: -1%;
    color: #000000DE;
    cursor: pointer;
    transition: all 0.2s ease;
}

.domain-pill:hover {
    border-color: 1px solid #D32929;
    color: #D32929;
}

.domain-pill.active {
    border-color: #D32929;
    color: #D32929;
    background: #FFFFFF;
}



/* ========================= */
/* RESPONSIVE */
/* ========================= */
@media (max-width: 1024px) {
    .auth-wrapper {
        flex-direction: column;
        padding: 40px 0;
    }

    .auth-right {
        width: 100%;
    }
}

@media (max-width: 600px) {
    .auth-right {
        display: none;
    }

    .title {
        font-size: 28px;
    }

    .auth-left {
        padding: 40px 0;
    }
}

/* ========================= */
/* LARGE DESKTOP (1400px+) */
/* ========================= */
@media (min-width: 1400px) {
    .auth-wrapper {
        max-width: 1320px;
    }
}

/* ========================= */
/* LAPTOPS (992px – 1199px) */
/* ========================= */
@media (max-width: 1199px) {
    .title {
        font-size: 38px;
        line-height: 64px;
    }

    .auth-right h2 {
        font-size: 36px;
        line-height: 48px;
    }

    .illustration {
        max-width: 380px;
    }
}

/* ========================= */
/* TABLETS & IPADS */
/* ========================= */
@media (max-width: 991px) {
    .auth-wrapper {
        flex-direction: column;
        gap: 40px;
    }

    .auth-left,
    .auth-right {
        width: 100%;
    }

    .auth-right {
        padding: 60px 24px;
    }

    .auth-right h2 {
        text-align: center;
    }

    .right-stepper {
        justify-content: center;
    }

    .illustration {
        width: 70%;
    }
}

/* ========================= */
/* MOBILE DEVICES */
/* ========================= */
@media (max-width: 767px) {
    .auth-page {
        align-items: flex-start;
    }

    .auth-left {
        padding: 32px 0;
    }

    .title {
        font-size: 28px;
        line-height: 40px;
    }

    .step-text {
        font-size: 16px;
        line-height: 24px;
    }

    .auth-form label {
        font-size: 16px;
    }

    .auth-form input {
        font-size: 16px;
        padding: 10px 14px;
    }

    .btn-primary {
        width: 100%;
    }

    /* Hide right panel on mobile (UX best practice) */
    .auth-right {
        display: none;
    }
}

/* ========================= */
/* SMALL MOBILES (320px) */
/* ========================= */
@media (max-width: 375px) {
    .title {
        font-size: 24px;
        line-height: 34px;
    }

    .step-text {
        font-size: 14px;
    }

    .logo img {
        height: 36px;
        width: auto;
    }
}
</style>
