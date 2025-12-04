<template>
  <footer>
    <div class="container">
      <div class="footer-top row gy-4">
        <div class="col-lg-6">
          <!-- <div class="footer-tagline">
            It’s blow your mind! <span>Meet Neural Networks</span>
          </div>
          <div class="footer-sub">
            Neuros helps future-focused teams build intelligent products
            and workflows powered by modern AI.
          </div> -->
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
                <li><a href="#industries">Industries</a></li>
                <li><a href="#badge">Badge Verification</a></li>
                <li><a href="#about-us">About Us</a></li>
                 <li><a href="#pricing">Pricing</a></li>
                  <li><a href="#faq">FAQ</a></li>
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
            <!-- <div class="col-12 col-md-4 footer-links-group">
              <h6>Follow</h6>
              <ul>
                <li><a href="#!">Twitter</a></li>
                <li><a href="#!">LinkedIn</a></li>
                <li><a href="#!">GitHub</a></li>
              </ul>
            </div> -->
          </div>
        </div>
      </div>

      <div class="footer-bottom mt-3">
        <div>© {{ currentYear }} TestMyPlan. All rights reserved.</div>
        <div class="d-flex align-items-center gap-2">
          <!-- <span>Terms</span>
          <span>·</span> -->
          <span>Privacy Policy</span>
          <div class="footer-mini-btn">↑</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: "MainFooter",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
