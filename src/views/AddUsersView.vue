<template>
    <main class="auth-page">
        <div class="container">
            <div class="auth-wrapper">

                <!-- LEFT SIDE -->
                <div class="auth-left">

                    <div class="logo">
                        <img src="@/assets/images/logo-small.png" alt="TestMyPlan Logo" />
                    </div>


                    <h1 class="title">Welcome to Testmyplan!</h1>

                    <p class="step-text">5/5 Add users</p>

                    <!-- Stepper -->
                    <welcome-stepper :totalSteps="5" :current="5" />

                    <!-- FORM -->
                    <form class="auth-form" @submit.prevent>
                        <label>Add users</label>

                        <div class="form-grid">
                            <input type="text" placeholder="First name" v-model="newUser.firstName" />
                            <input type="text" placeholder="Last name" v-model="newUser.lastName" />
                            <input type="email" placeholder="Email address" v-model="newUser.email" />
                            <select v-model="newUser.location">
                                <option disabled value="">Location</option>
                                <option>New York</option>
                                <option>London</option>
                                <option>Toronto</option>
                                <option>Remote</option>
                            </select>
                        </div>

                        <button type="button" class="add-user-btn" @click="addUser">
                            <i class="bi bi-plus-lg"></i> Add user
                        </button>
                    </form>

                    <button class="btn-primary">
                        Next: Configure teams <i class="bi bi-arrow-right-circle-fill ps-2"></i>
                    </button>
                </div>

                <!-- RIGHT SIDE -->
                <div class="auth-right user-list-card">
                    <h5 class="list-title">Added users ({{ users.length }})</h5>

                    <div v-for="(user, index) in users" :key="index" class="user-row">
                        <div class="user-info">
                            <strong>{{ user.firstName }} {{ user.lastName }}</strong>
                            <span class="user-email">{{ user.email }}</span>
                        </div>

                        <div class="user-actions">
                            <!-- ✅ Updated Badge -->
                            <div class="status-pill">
                                <span class="circle black-circle">SO</span>
                                <span class="circle green-circle">O</span>
                            </div>
                            <i class="bi bi-trash-fill delete-icon" @click="removeUser(index)"></i>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>
</template>

<script lang="ts">
import WelcomeStepper from '@/components/WelcomeStepper.vue';



export default {
    name: 'AddUsersPage',
    components: { WelcomeStepper },
    data() {
        return {
            users: [
                { firstName: 'Clarissa', lastName: 'Ferry', email: 'clarissaferry@acmecorp.com' },
                { firstName: 'Clarissa', lastName: 'Ferry', email: 'clarissaferry@acmecorp.com' },
            ],
            newUser: { firstName: '', lastName: '', email: '', location: '' },
        };
    },
    methods: {
        addUser() {
            if (this.newUser.firstName && this.newUser.email) {
                this.users.push({ ...this.newUser });
                this.newUser = { firstName: '', lastName: '', email: '', location: '' };
            }
        },
        removeUser(index: number) {
            this.users.splice(index, 1);
        },
    },
};
</script>

<style scoped>
/* ========================= */
/* BASE PAGE LAYOUT */
/* ========================= */
.auth-page {
    min-height: 100vh;
    background: #ffffff;
    display: flex;
    align-items: flex-start;
    padding-top: 20px;
}

.auth-wrapper {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    gap: 60px;
    align-items: flex-start;
}

.auth-left {
    flex: 1;
    padding: 15px 0;
}

.logo img {
    height: 44px;
    width: auto;
    display: block;
}

/* ========================= */
/* TEXT STYLES */
/* ========================= */
.title {
    font-size: 44px;
    font-weight: 500;
    color: #000000;
    margin-bottom: 20px;
    line-height: 1.3;
}

.step-text {
    font-size: 20px;
    font-weight: 500;
    color: #000000;
    margin-bottom: 20px;
}

/* ========================= */
/* STEPPER */
/* ========================= */
.stepper {
    display: flex;
    gap: 8px;
    margin-bottom: 8px;
}

.step {
    width: 70px;
    height: 5px;
    background: #f3f0f0;
    border-radius: 4px;
}

.step.active {
    background: #d32929;
}

/* ========================= */
/* FORM */
/* ========================= */
.auth-form label {
    display: block;
    font-size: 18px;
    font-weight: 400;
    color: #000000;
    margin-bottom: 12px;
}

.form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 22px;
}

.auth-form input,
.auth-form select {
    width: 100%;
    padding: 10px 16px;
    border-radius: 8px;
    border: 1px solid #f6f6f6;
    background: #f6f6f6;
    font-size: 16px;
    color: #000000;
    font-weight: 400;
}

.auth-form input:focus,
.auth-form select:focus {
    outline: none;
    border-color: #d32929;
}

/* ADD USER BUTTON */
.add-user-btn {
    width: 40%;
    height: 50px;
    border: 1.5px solid #d32929;
    color: #d32929;
    background: transparent;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.add-user-btn:hover {
    background: #fff5f5;
}

/* NEXT BUTTON */
.btn-primary {
    margin-top: 80px;
    width: 328px;
    height: 52px;
    background: #d32929;
    color: #ffffff;
    border: none;
    padding: 14px 22px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 24px;
}

/* ========================= */
/* RIGHT USERS CARD */
/* ========================= */
.user-list-card {
    flex: 1;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    padding: 24px 32px;
    /* min-height: 450px; */
    min-height: 610px;
}

.list-title {
    font-size: 16px;
    font-weight: 600;
    color: #000000;
    margin-bottom: 24px;
}

.user-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 0;
    border-bottom: 1px solid #f0f0f0;
}

.user-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.user-info strong {
    color: #000000;
    font-size: 15px;
}

.user-email {
    font-size: 14px;
    color: #444;
}

.user-actions {
    display: flex;
    align-items: center;
    gap: 14px;
}

/* ✅ FINAL "S" (BLACK) + "O" (GREEN) BADGE */
.status-pill {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 60px;
    height: 32px;
}

.circle {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
}

.black-circle {
    background: #000000;
    color: #ffffff;
    z-index: 2;
    margin-right: -8px;
    /* overlap */
}

.green-circle {
    background: #8dbf9e;
    color: #000000;
    z-index: 1;
}

/* RED DELETE ICON */
.delete-icon {
    color: #d32929;
    cursor: pointer;
    font-size: 20px;
    transition: color 0.2s;
}

.delete-icon:hover {
    color: #a11919;
}

/* ========================= */
/* RESPONSIVE */
/* ========================= */
@media (max-width: 992px) {
    .auth-wrapper {
        flex-direction: column;
        gap: 40px;
    }

    .user-list-card {
        width: 100%;
    }

    .btn-primary {
        width: 100%;
        margin-top: 40px;
    }
}

@media (max-width: 768px) {
    .form-grid {
        grid-template-columns: 1fr;
    }

    .add-user-btn {
        width: 100%;
    }

    .title {
        font-size: 28px;
    }

    .auth-right {
        padding: 20px;
    }
}

@media (max-width: 480px) {
    .status-pill {
        width: 50px;
        height: 26px;
    }

    .circle {
        width: 24px;
        height: 24px;
        font-size: 12px;
    }
}
</style>