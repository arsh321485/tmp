<template>
  <header class="nav-area">
    <div class="container">
      <div class="nav-shell">
        <!-- LEFT ICONS -->
        <div class="nav-left-icons">
          <div class="icon-pill">▦</div>
          <div class="logo-mark">N</div>
        </div>

        <!-- CENTER MENU -->
        <div class="nav-center">
          <ul class="main-menu" :class="{ 'is-open': isMobileMenuOpen }">
            <li><a href="#top" class="menu-link active-pill" @click="closeMobileMenu">HOME<span class="caret">▾</span></a></li>
            <li><a href="#!" class="menu-link" @click="closeMobileMenu">PAGES<span class="caret">▾</span></a></li>
            <li><a href="#features" class="menu-link" @click="closeMobileMenu">SERVICES<span class="caret">▾</span></a></li>
            <li><a href="#!" class="menu-link" @click="closeMobileMenu">SHOP<span class="caret">▾</span></a></li>
            <li><a href="#blog" class="menu-link" @click="closeMobileMenu">BLOG<span class="caret">▾</span></a></li>
            <li><a href="#contact" class="menu-link" @click="closeMobileMenu">CONTACTS</a></li>
          </ul>
        </div>

        <!-- RIGHT SIDE -->
        <div class="nav-right">
          <div class="search-icon">🔍</div>
          <button class="btn-outline-gradient">Get in touch</button>
          <button class="nav-toggle" @click="toggleMobileMenu">
            <span v-if="!isMobileMenuOpen">☰</span>
            <span v-else>✕</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: "MainNavbar",
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    }
  }
};
</script>
