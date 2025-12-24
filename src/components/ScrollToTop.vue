<template>
  <button
    v-show="visible"
    class="scroll-top"
    @click="scrollToTop"
    aria-label="Scroll to top"
  >
    ↑
  </button>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";

export default defineComponent({
  name: "ScrollToTop",

  setup() {
    const visible = ref(false);

    const onScroll = () => {
      visible.value = window.scrollY > 400;
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    onMounted(() => {
      window.addEventListener("scroll", onScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", onScroll);
    });

    return {
      visible,
      scrollToTop,
    };
  },
});
</script>

<style scoped>
.scroll-top {
  position: fixed;
  right: 28px;
  bottom: 28px;
  width: 54px;
  height: 54px;
  border-radius: 28px;

  /* background: #ff4d4d;  */
  background: linear-gradient(90deg, #6b5dbf, #5473e8, #b156a5, #e35b5c);
  color: #fff;
  font-size: 22px;
  font-weight: 700;

  border: none;
  cursor: pointer;
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  /* box-shadow: 0 10px 30px rgba(255, 77, 77, 0.35); */
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.scroll-top:hover {
  transform: translateY(-4px);
}
</style>
