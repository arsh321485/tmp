<template>
  <footer>
    <div class="container">
      <div class="footer-top row gy-4">
        <div class="col-lg-6">
          <div class="footer-tagline">
            It’s blow your mind! <span>Meet Neural Networks</span>
          </div>
          <div class="footer-sub">
            Neuros helps future-focused teams build intelligent products
            and workflows powered by modern AI.
          </div>
        </div>
        <div class="col-lg-6">
          <div class="row gy-4">
            <div class="col-6 col-md-4 footer-links-group">
              <h6>Company</h6>
              <ul>
                <li><a href="#top">About</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
              </ul>
            </div>
            <div class="col-6 col-md-4 footer-links-group">
              <h6>Resources</h6>
              <ul>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#!">Documentation</a></li>
              </ul>
            </div>
            <div class="col-12 col-md-4 footer-links-group">
              <h6>Follow</h6>
              <ul>
                <li><a href="#!">Twitter</a></li>
                <li><a href="#!">LinkedIn</a></li>
                <li><a href="#!">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom mt-3">
        <div>© {{ currentYear }} Neuros. All rights reserved.</div>
        <div class="d-flex align-items-center gap-2">
          <span>Terms</span>
          <span>·</span>
          <span>Privacy</span>
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
