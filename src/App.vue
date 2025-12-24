
<script lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import CookiesModal from "@/components/CookiesModal.vue";
import ScrollToTop from "@/components/ScrollToTop.vue";

export default defineComponent({
  name: "App",
  components: {
    RouterView,
    CookiesModal,
    ScrollToTop,
  },
});
</script>


<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  

  <RouterView />
   <ScrollToTop />
    <CookiesModal />
</template>

