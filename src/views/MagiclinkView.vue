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



                    <p class="step-text">Magic link sent!</p>

                    <!-- Stepper -->
                    <!-- <div class="stepper">
                        <span class="step active"></span>
                        <span class="step"></span>
                        <span class="step"></span>
                        <span class="step"></span>
                        <span class="step"></span>
                    </div> -->

                    <p class="step-para">We’ve sent you a magic link to confirm your email address.Please click on the link and start your Testmyplan journey.</p>
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

export default {
    name: "EmailConfirm",
}

</script>


<style scoped>
* {
    box-sizing: border-box;
    font-family: "Inter", system-ui, "Suisse Intl", sans-serif;
}

.email-confirm-page {
  align-items: flex-start; /* top align */
      
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
.auth-left {
    flex: 1;
    /* padding: 80px 0; */
    padding: 15px 0;
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

.step-para{
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0%;
    color: #000000;
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
    margin-top: 8px;
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
    sepia(1)
    hue-rotate(-20deg)
    saturate(3)
    brightness(0.95);
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
