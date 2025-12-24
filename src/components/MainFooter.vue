<template>
  <footer>
    <div class="container">
      <div class="footer-top row gy-4">
        <div class="col-lg-6">

          <div class="d-flex gap-4">
            <img src="../assets/images/iso27001.png" alt="">
            <img src="../assets/images/iso27701.png" alt="">
            <img src="../assets/images/iso22301.png" alt="">

          </div>
        </div>
        <div class="col-lg-6">
          <div class="row gy-4">
            <div class="col-6 col-md-4 footer-links-group">
              <h6>Company</h6>
             

              <ul>
                <li>
                  <router-link to="/industries">Industries</router-link>
                </li>
                <li>
                  <router-link to="/badge">Badge Verification</router-link>
                </li>
                <li>
                  <router-link to="/about">About Us</router-link>
                </li>
                <li>
                  <router-link to="/pricing">Pricing</router-link>
                </li>
                <li>
                  <router-link to="/faq">FAQ</router-link>
                </li>
              </ul>

            </div>
            <div class="col-6 col-md-4 footer-links-group">
              <h6>Modules</h6>
              <ul>
                <li><a href="#faq">Cybersecurity</a></li>
                <li><a href="#contact">Business Continuity</a></li>
                <li><a href="#!">Data Privacy</a></li>
                <li><a href="#!">ESG</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div class="footer-bottom mt-3">
        <div>© {{ currentYear }} TestMyPlan. All rights reserved.</div>
        <div class="d-flex align-items-center gap-2">

          <!-- <router-link to="/cookies">
            <span>Cookies</span>
          </router-link> -->

          <a href="javascript:void(0)" @click="openCookies">
            <span>Cookies</span>
          </a>


          <router-link to="/privacy-policy">
            <span>Privacy Policy</span>
          </router-link>

          
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();

function openCookies() {
  window.openCookiesModal?.();
}
</script>

