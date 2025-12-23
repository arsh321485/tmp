<template>
    <main class="auth-page">
        <div class="container">
            <div class="auth-wrapper">
                <div class="auth-left">
                    <!-- LOGO -->
                    <div class="logo">
                        <img src="@/assets/images/tmp-new-logo.png" alt="TestMyPlan Logo" />
                    </div>


                    <!-- TITLE -->
                    <h1 class="title">Welcome to Testmyplan!</h1>
                    <p class="step-text">5/5 Configure teams</p>

                    <!-- STEPPER -->
                    <div class="stepper">
                        <span v-for="n in 5" :key="n" class="step" :class="{ active: n <= 5 }"></span>
                    </div>

                    <!-- TEAMS + LOCATION INLINE -->
                    <div class="teams-section">
                        <div class="teams-inline">
                            <!-- Available Teams -->
                            <div class="teams-column">
                                <h3>Available teams</h3>
                                <div class="teams-buttons">
                                    <button v-for="(team, index) in teams" :key="index" class="team-btn"
                                        :class="{ active: activeTeam === team }" @click="setActiveTeam(team)">
                                        {{ team }}
                                    </button>
                                </div>
                            </div>

                            <!-- Locations -->
                            <div class="location-column">
                                <h3>Locations</h3>
                                <div class="location-select">
                                    <select v-model="selectedLocation">
                                        <option>Greece</option>
                                        <option>India</option>
                                        <option>United States</option>
                                    </select>
                                    <i class="bi bi-chevron-down"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr class="divider" />

                    <!-- MEMBERS TABLE -->
                    <div class="members-section">
                        <h3>Available members</h3>

                        <div class="members-table">
                            <div class="table-header">
                                <div>Role</div>
                                <div>Member</div>
                                <div>Backup member</div>
                                <div>Location</div>
                                <div></div>
                            </div>

                            <div class="table-row" v-for="i in 2" :key="i">
                                <div>
                                    <select>
                                        <option>Owner</option>
                                        <option>Admin</option>
                                        <option>Member</option>
                                    </select>
                                </div>
                                <div>
                                    <select>
                                        <option>Amit Sharma</option>
                                        <option>John Doe</option>
                                    </select>
                                </div>
                                <div>
                                    <select>
                                        <option>Sara Khan</option>
                                        <option>Jane Doe</option>
                                    </select>
                                </div>
                                <div class="location-cell">Greece</div>
                                <div>
                                    <button class="remove-btn">
                                        <i class="bi bi-x-lg me-1"></i> Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- CTA BUTTON -->
                    <button class="btn-primary mt-5">
                        Start your Testmyplan journey
                        <i class="bi bi-arrow-right-circle-fill ps-2"></i>
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "ConfigureTeams",
    setup() {
        const teams = ref(["CTMD", "Security Operations", "Security Operations"]);
        const activeTeam = ref("CTMD");
        const selectedLocation = ref("Greece");

        function setActiveTeam(team: string) {
            activeTeam.value = team;
        }

        return {
            teams,
            activeTeam,
            selectedLocation,
            setActiveTeam,
        };
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
    top: 98px;
    left: 64px;
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
    /* padding: 40px 0; */
}

.title {
    font-size: 44px;
    font-weight: 500;
    margin-bottom: 10px;
    color: #000;
    line-height: 60px;
}

.step-text {
    font-size: 18px;
    color: #000;
    margin-bottom: 12px;
    font-weight: 500;
}

/* STEPPER */
.stepper {
    display: flex;
    gap: 8px;
    margin-bottom: 32px;
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

/* TEAMS SECTION */


.teams-inline {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 40px;
}

.teams-column,
.location-column {
    display: flex;
    flex-direction: column;
}

.teams-column h3,
.location-column h3 {
    font-size: 16px;
    font-weight: 500;
    color: #000;
    margin-bottom: 10px;
}

/* TEAMS BUTTONS */
.teams-buttons {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
}

.team-btn {
    padding: 8px 20px;
    border-radius: 50px;
    border: 1.4px solid #d9d9d9;
    background: white;
    font-weight: 500;
    color: #000;
    cursor: pointer;
    transition: all 0.2s ease;
}

.team-btn.active {
    background: #ffeaea;
    color: #d32929;
    border: 1.4px solid #ffd3d3;
}

/* LOCATION DROPDOWN */
.location-select {
    position: relative;
    width: 160px;
}

.location-select select {
    appearance: none;
    border: 1.4px solid #e0e0e0;
    border-radius: 8px;
    padding: 8px 34px 8px 14px;
    font-size: 15px;
    font-weight: 500;
    background: #fff;
    color: #000;
    cursor: pointer;
    height: 42px;
    width: 100%;
}

.location-select i {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #000;
    font-size: 14px;
}

/* DIVIDER */
.divider {
    border: none;
    border-top: 1px solid #e0e0e0;
    /* margin: 32px 0; */
}

/* MEMBERS SECTION */
.members-section h3 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 20px;
}

.members-table {
    width: 100%;
}

.table-header,
.table-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 120px;
    align-items: center;
    gap: 16px;
}

.table-header {
    color: #555;
    font-weight: 500;
    font-size: 15px;
    margin-bottom: 10px;
}

.table-row {
    padding: 10px 0;
    border-bottom: 1px solid #f0f0f0;
}

.table-row select {
    width: 100%;
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid #e6e6e6;
    background: #fff;
    font-size: 15px;
    font-weight: 500;
}

.location-cell {
    font-size: 15px;
    font-weight: 500;
    color: #000;
}

/* REMOVE BUTTON */
.remove-btn {
    border: 1.4px solid #d32929;
    color: #d32929;
    background: transparent;
    border-radius: 8px;
    padding: 6px 16px;
    font-weight: 500;
    font-size: 15px;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: all 0.3s ease;
}

.remove-btn:hover {
    background: #fff5f5;
}

/* CTA BUTTON */
.btn-primary {
    margin-top: 80px;
    background: #d32929;
    color: #fff;
    border: none;
    padding: 14px 22px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    width: 330px;
    height: 52px;
}

/* RESPONSIVE */
@media (max-width: 992px) {
    .teams-inline {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }

    .auth-wrapper {
        padding: 20px;
    }

    .table-header,
    .table-row {
        grid-template-columns: 1fr 1fr;
    }

    .btn-primary {
        width: 100%;
    }
}
</style>