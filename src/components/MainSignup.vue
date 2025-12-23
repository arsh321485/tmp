<template>
    <div class="signup-page">
        <div class="container h-100">
            <div class="row h-100 align-items-start justify-content-between">

                <!-- LEFT CONTENT -->
                <div class="col-12 col-lg-7 d-flex justify-content-center">
                    <div class="left-wrapper">
                        <!-- Logo -->
                        <div class="brand">
                            <img src="../assets/images/testmyplan-logo.jpg" alt="logo" class="brand-logo" />
                            <!-- <span class="brand-text">TESTMYPLAN</span> -->
                        </div>

                        <!-- Heading -->
                        <h1 class="main-title">
                            Let’s make your organisation incident ready.
                        </h1>

                        <!-- Divider -->
                        <hr class="divider" />

                        <!-- Testimonial -->
                        <div class="testimonial d-flex align-items-start">
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Clarissa Fair"
                                class="testimonial-avatar" />
                            <div class="ms-3">
                                <p class="testimonial-text mb-1">
                                    “Testmyplan completely changed how we respond to incidents.
                                    What used to take hours to coordinate now happens in minutes—with
                                    clear ownership, real-time updates, and zero confusion.”
                                </p>
                                <small class="testimonial-author">
                                    Clarissa Fair, Palantir
                                </small>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- RIGHT SIGNUP CARD -->
                <div class="col-12 col-lg-5 d-flex justify-content-center">
                    <div class="signup-card shadow-sm">


                       

                        <button class="btn btn-slack w-100 mb-3 d-inline-flex align-items-center justify-content-center"
                            @click="signup('slack')">
                            <i class="bi bi-slack me-2"></i>
                            Signup with Slack
                        </button>

                        <button class="btn btn-teams w-100 mb-3 d-inline-flex align-items-center justify-content-center"
                            @click="signup('teams')">
                            <i class="bi bi-microsoft-teams me-2"></i>
                            Signup with Teams
                        </button>

                         <div class="divider my-3">
                            <span>OR</span>
                        </div>

                        <button class="btn btn-email w-100 mb-4 d-flex align-items-center justify-content-center"
                            @click="signup('email')">
                            <i class="bi bi-envelope-fill me-2"></i>
                            Signup with Email
                        </button>



                        

                        <div class="terms-text text-black">
                            By signing up, you agree to Testmyplan
                            <a href="#">Terms of Service</a> and acknowledge the
                            <a href="#">Privacy Statement</a>.
                        </div>
                    </div>
                </div>

                <!-- TRUST + LOGOS -->
                <div class="trust-block">
                    <p class="trust-text">
                        More than <strong>20,000 tests</strong> run by
                        <strong>500+ organisations.</strong>
                    </p>

                    <div class="logos">
                        <img v-for="logo in logos" :key="logo.name" :src="logo.src" :alt="logo.name" class="logo-img" />
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>



<script lang="ts">
import type { Router } from "vue-router";

export default {
  name: "MainSignup",

  data() {
    return {
      logos: [
        { name: "Decagon", src: "https://upload.wikimedia.org/wikipedia/commons/5/59/Placeholder_logo.png" },
        { name: "Palantir", src: "https://upload.wikimedia.org/wikipedia/commons/5/59/Placeholder_logo.png" },
        { name: "Windsurf", src: "https://upload.wikimedia.org/wikipedia/commons/5/59/Placeholder_logo.png" },
        { name: "Hightouch", src: "https://upload.wikimedia.org/wikipedia/commons/5/59/Placeholder_logo.png" },
        { name: "Augment Code", src: "https://upload.wikimedia.org/wikipedia/commons/5/59/Placeholder_logo.png" },
        { name: "Nooks", src: "https://upload.wikimedia.org/wikipedia/commons/5/59/Placeholder_logo.png" },
        { name: "Scale", src: "https://upload.wikimedia.org/wikipedia/commons/5/59/Placeholder_logo.png" },
        { name: "Persona", src: "https://upload.wikimedia.org/wikipedia/commons/5/59/Placeholder_logo.png" },
      ],
    };
  },

  methods: {
    signup(this: { $router?: Router }, provider: "slack" | "teams" | "email") {
      const router = this.$router;

      // EMAIL → email page first
      if (provider === "email") {
        router?.push({
          path: "/email",
          query: { provider }
        });
        return;
      }

      // SLACK / TEAMS → directly to organisation
      router?.push({
        path: "/organisation",
        query: { provider }
      });
    }
  }
};
</script>



<style scoped>
/* Your existing layout untouched */
.signup-page {
    min-height: 100vh;
    background: #ffffff;
    padding-top: 24px;
}

.left-wrapper {
    max-width: 520px;
}

.brand {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
}

.brand-logo {
    height: 46px;
}

.brand-text {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1.2px;
    color: #111;
}

.main-title {

    font-weight: 400;
    font-size: 59px;
    line-height: 70px;
    letter-spacing: -2.1%;
    word-break: break-word;
    max-width: 100%;
}

.content-divider {
    width: 80px;
    border-top: 2px solid #e5e7eb;
    margin: 24px 0;
}

.testimonial {
    margin-bottom: 40px;
}

.testimonial-avatar {
    width: 74px;
    height: 74px;
    object-fit: cover;
}

.testimonial-text {
    font-size: 0.75rem;
    color: #444;
}

.testimonial-author {
    color: #666;
}

.signup-card {
    width: 100%;
    max-width: 400px;
    padding: 52px;
    border-radius: 12px;
    border: 3px solid #e5e7eb;
    background: #fff;
    margin-top: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
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

.btn-slack {
    background: #e11d48;
    color: #fff;
    border-radius: 25px;
}

.btn-teams {
    background: #5b6bf5;
    color: #fff;
    border-radius: 25px;
}

.btn-email {
    background: #000;
    color: #fff;
    border-radius: 25px;
}

/* Divider in signup */
.divider {
    position: relative;
    text-align: center;
    width: 100%;
    font-weight: 700;
}

.divider span {
    background: #fff;
    padding: 0 10px;
    font-size: 0.8rem;
    color: #1b1b1b;
    position: relative;
    z-index: 1;
}

.divider::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: #b1b1b3;
    z-index: 0;
}

.terms-text {
    font-size: 0.75rem;
    color: #555;
    line-height: 1.6;
}

.terms-text a {
    color: #555;
    text-decoration: underline;
}

/* Trust Block — unchanged margins */
.trust-block {
    margin-top: 80px;
}

.trust-text {
    /* max-width: 360px; */
    font-size: 0.85rem;
    color: #444;
    line-height: 1.5;
    margin: 0 0 24px 120px;
    font-weight: 600;
}

.logos {
    display: flex;
    flex-wrap: wrap;
    gap: 60px;
    justify-content: center;
    align-items: center;
}

.logo-img {
    height: 30px;
    filter: grayscale(100%);
    opacity: 0.75;
    transition: opacity 0.3s ease;
}

.logo-img:hover {
    opacity: 1;
}



/* RESPONSIVE ENHANCEMENTS — without touching margins or paddings */
@media screen and (width: 1920px) and (height: 1080px) {
    .signup-page {
        min-height: 100vh;
        background: #ffffff;
        padding-top: 74px;
    }

    .trust-block {
        margin-top: 300px;
    }

    .brand-logo {
        height: 56px;
    }

    .main-title {

        font-weight: 600;
        font-size: 59px;
        line-height: 70px;
        letter-spacing: -2.1%;
        word-break: break-word;
        max-width: 100%;
    }

    .testimonial-text {
        font-size: 0.95rem;
        color: #444;
    }

}

@media (max-width: 1200px) {
    .main-title {
        font-size: 58px;
        line-height: 70px;
    }

    .brand-logo {
        height: 48px;
    }
}

@media (max-width: 992px) {
    .main-title {
        font-size: 46px;
        line-height: 46px;
    }

    .signup-card {
        max-width: 360px;
    }

    .logo-img {
        height: 26px;
    }
}

@media (max-width: 768px) {
    .main-title {
        font-size: 34px;
        line-height: 42px;
    }

    .brand-logo {
        height: 32px;
    }

    .trust-text {
        margin: 0 auto 24px auto;
        text-align: center;
    }

    .trust-block {
        margin-top: 8rem;
    }
}

@media (max-width: 576px) {
    .main-title {
        font-size: 28px;
        line-height: 36px;
    }

    .testimonial-avatar {
        width: 56px;
        height: 56px;
    }

    .logo-img {
        height: 22px;
    }

    .logos {
        gap: 30px;
    }
}
</style>