<template>
  <div class="stepper">
    <span
      v-for="(step, index) in totalSteps"
      :key="index"
      class="step"
      :class="{ active: index < current }"
    ></span>
  </div>
</template>

<script lang="ts">
export default {
  name: " WelcomeStepper",
  props: {
    // number of steps to show
    totalSteps: {
      type: Number,
      default: 5,
    },
    // current active step (1-based)
    current: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style scoped>
/* STEPPER */
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
  transition: background 0.3s ease;
}

.step.active {
  background: #d32929;
}
</style>