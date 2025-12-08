<template>
  <header class="nav-area" role="banner">
    <div class="nav-wrapper">
      <div class="nav-shell">
        <!-- LEFT ICONS -->
        <!-- <div class="nav-left-icons">
          <div class="logo-mark">TM</div>
        
        </div> -->

        <div class="nav-left-icons">
          <img src="@/assets/images/testmyplan-logo.jpg" alt="TestMyPlan Logo" class="nav-logo" />
        </div>

        <!--  -->
        <!-- CENTER MENU -->
        <div class="nav-center">
          <ul class="main-menu" :class="{ 'is-open': isMobileMenuOpen }">

            <!-- HOME -->
            <li>
              <RouterLink to="/home" class="menu-link active-pill" @click="closeMobileMenu">
                HOME
              </RouterLink>
            </li>

            <!-- Modules with submenu -->
            <li class="menu-item modules" @mouseenter="openModules" @mouseleave="closeModules">

              <a href="#!" class="menu-link" @click.prevent="toggleModules($event)" :aria-expanded="modulesOpen">
                Modules <span class="caret" :class="{ open: modulesOpen }">▾</span>
              </a>

              <ul class="submenu" :class="{ open: modulesOpen }" @click.stop>

                <li>
                  <RouterLink to="/cyber-security" class="submenu-link" @click="closeMobileMenu">
                    Cybersecurity
                  </RouterLink>
                </li>

                <li>
                  <RouterLink to="/business-continuity" class="submenu-link" @click="closeMobileMenu">
                    Business Continuity
                  </RouterLink>
                </li>

                <li>
                  <RouterLink to="/data-privacy" class="submenu-link" @click="closeMobileMenu">
                    Data Privacy
                  </RouterLink>
                </li>

                <li>
                  <RouterLink to="/esg" class="submenu-link" @click="closeMobileMenu">
                    ESG
                  </RouterLink>
                </li>

              </ul>
            </li>

            <!-- Industries -->
            <li>
              <RouterLink to="/industries" class="menu-link" @click="closeMobileMenu">
                Industries
              </RouterLink>
            </li>

            <!-- Badge Verification -->
            <li>
              <RouterLink to="/badge-verification" class="menu-link" @click="closeMobileMenu">
                Badge Verification
              </RouterLink>
            </li>

            <!-- About -->
            <li>
              <RouterLink to="/about" class="menu-link" @click="closeMobileMenu">
                About Us
              </RouterLink>
            </li>

            <!-- Pricing -->
            <li>
              <RouterLink to="/pricing" class="menu-link" @click="closeMobileMenu">
                Pricing
              </RouterLink>
            </li>

            <!-- FAQ -->
            <li>
              <RouterLink to="/faq" class="menu-link" @click="closeMobileMenu">
                FAQ
              </RouterLink>
            </li>

          </ul>
        </div>

        <!-- RIGHT SIDE -->
        <div class="nav-right">
          <div class="d-flex auth-buttons">
            <button class="btn link-btn m-0 p-0" @click.prevent>Signup /</button>
            <!-- <span class="slash">/</span> -->
            <button class="btn link-btn m-0 p-0" @click.prevent>Login /</button>
            <button class="btn link-btn m-0 p-0" @click.prevent>Partner</button>
          </div>

          <button class="nav-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
            <span v-if="!isMobileMenuOpen">☰</span>
            <span v-else>✕</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainNavbar",

  data() {
    return {
      isMobileMenuOpen: false as boolean,
      modulesOpen: false as boolean,
    };
  },

  mounted(): void {
    // Close menu when clicking outside (mobile)
    document.addEventListener("click", this.handleDocumentClick, true);
    window.addEventListener("resize", this.handleResize, { passive: true });
  },

  beforeUnmount(): void {
    document.removeEventListener("click", this.handleDocumentClick, true);
    window.removeEventListener("resize", this.handleResize);
  },

  methods: {
    toggleModules(e?: Event): void {
      e?.stopPropagation();
      this.modulesOpen = !this.modulesOpen;

      // On small screens ensure main menu is open so submenu is visible
      if (!this.isMobileMenuOpen && window.innerWidth < 992) {
        this.isMobileMenuOpen = true;
      }
    },

    openModules(): void {
      if (window.innerWidth >= 992) {
        this.modulesOpen = true;
      }
    },

    closeModules(): void {
      if (window.innerWidth >= 992) {
        this.modulesOpen = false;
      }
    },

    toggleMobileMenu(): void {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      // always reset submenu to avoid stale open state
      this.modulesOpen = false;
    },

    closeMobileMenu(): void {
      this.isMobileMenuOpen = false;
      this.modulesOpen = false;
    },

    handleDocumentClick(event: MouseEvent): void {
      if (!this.isMobileMenuOpen) return;
      const shell = document.querySelector(".nav-shell");
      if (!shell) return;
      if (shell.contains(event.target as Node)) return;
      this.isMobileMenuOpen = false;
      this.modulesOpen = false;
    },

    handleResize(): void {
      // when switching to desktop, reset mobile states
      if (window.innerWidth >= 992) {
        this.isMobileMenuOpen = false;
        this.modulesOpen = false;
      }
    },
  },
});
</script>

<style scoped>
/* Top-level header: use fixed so it's always visible and does not rely on ancestor overflow */
.nav-logo {
  height: 36px;
  /* same height as old circular logo */
  width: auto;
  /* keeps aspect ratio */
  object-fit: contain;
}

.nav-area {
  position: fixed;
  left: 0;
  right: 0;
  top: 14px;
  /* small offset from top */
  z-index: 2000;
  pointer-events: none;
  /* allow clicks only on inner shell */
}

/* wrapper centers the shell and allows horizontal padding */
.nav-wrapper {
  pointer-events: auto;
  /* enable clicks inside */
  display: flex;
  justify-content: center;
  padding: 0 16px;
}

/* the white pill (centered) */
.nav-shell {
  width: 100%;
  max-width: 1315px;
  /* control width of pill */
  background: linear-gradient(180deg, #fff, #fbfdff);
  border-radius: 999px;
  box-shadow: 0 12px 35px rgba(15, 23, 42, 0.06);
  padding: 15px 28px;
  display: flex;
  align-items: center;
  gap: 28px;
  justify-content: space-between;
  pointer-events: auto;
}

/* left icons */
.nav-left-icons {
  display: flex;
  align-items: center;
  gap: 16px;
}

.logo-mark {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: radial-gradient(circle at 0 0, #ff5b5b, #6a5bff);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
}

/* center menu */
.nav-center {
  flex: 1;
  display: flex;
  justify-content: center;
}

.main-menu {
  display: flex;
  align-items: center;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .04em;
}

.menu-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #0f1724;
  padding: 8px 12px;
  border-radius: 20px;
  text-decoration: none;
}

.menu-link.active-pill {
  background: #0f1724;
  color: #fff;
  padding: 9px 24px;
  border-radius: 999px;
}

/* submenu caret */
.caret {
  font-size: 10px;
  transition: transform .18s;
}

.caret.open {
  transform: rotate(180deg);
}

/* right */
.nav-right {
  display: flex;
  align-items: center;
  gap: 18px;
}

/* auth small buttons */
.auth-buttons {
  align-items: center;
  gap: 6px;
}

.link-btn {
  background: transparent;
  border: none;
  font-weight: 600;
  color: #111827;
  cursor: pointer;
  padding: 4px 8px;
}

/* .slash { color: #6b7280; padding:0 4px; } */

/* hamburger */
.nav-toggle {
  display: none !important;
  /* border:1px solid #e5e7eb; background:#fff; width:36px; height:36px; border-radius:999px; */
  /* display:inline-flex; align-items:center; justify-content:center; font-size:18px; cursor:pointer; */
}

/* desktop-specific submenu/display (keeps your previous submenu CSS working) */
.nav-center .main-menu>li {
  position: relative;
}

/* mobile behavior */
@media (max-width: 991.98px) {
  .nav-area {
    top: 8px;
  }

  /* slightly smaller top offset on mobile */
  .nav-shell {
    padding: 10px 16px;
    border-radius: 28px;
    max-width: none;
    width: 100%;
  }

  .nav-toggle {
    display: inline-flex !important;
  }

  .main-menu {
    display: none;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    padding-top: 12px;
    border-top: 1px solid #eef2f7;
    margin-top: 12px;
    width: 100%;
  }

  .main-menu.is-open {
    display: flex;
  }

  .main-menu li {
    width: 100%;
  }

  .menu-link {
    padding: 8px 6px;
    display: block;
    width: 100%;
  }
}
</style>