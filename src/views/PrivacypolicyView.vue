
<template>
  <div id="top">
    <MainNavbar />

     <RegulatoryWidget />

    <!-- PRIVACY POLICY -->
    <section class="privacy-wrapper">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-10">
            <div class="privacy-heading animate delay-1">
              <h1 class="privacy-title pt-5">Privacy Policy</h1>
              <p class="privacy-meta pt-4">Last updated on 5 December 2024</p>
            </div>

            <div class="privacy-block  animate delay-2">
              <h2>Introduction</h2>
              <p>
                At <strong><a href="">testmyplan.io</a>
                </strong>, we value your privacy and are committed to
                protecting your personal information. This Privacy Policy explains how we
                collect, use, and disclose information when you use our website.
              </p>
            </div>

            <div class="privacy-block  animate delay-3">
              <h2>Information We Collect</h2>
              <p>
                We may collect personal information from you when you use our website,
                such as your name, email address, and other contact information. We may
                also collect non-personal information, such as your IP address, browser
                type, and operating system.
              </p>
            </div>

            <div class="privacy-block  animate delay-4">
              <h2>How We Use Your Information</h2>
              <p>
                We use the information we collect to provide you with our services, respond
                to your inquiries, and improve our website. We may also use your information
                for marketing purposes, such as sending you promotional emails or
                newsletters.
              </p>
              <p>
                You can opt-out of receiving marketing communications from us at any time
                by following the instructions in the communication.
              </p>
            </div>

            <div class="privacy-block  animate delay-5">
              <h2>Disclosure of Your Information</h2>
              <p>
                We may disclose your information to third-party service providers who help
                us operate our website, such as hosting providers and payment processors.
                We may also disclose your information if required by law, or if we believe
                that disclosure is necessary to protect our rights, property, or safety,
                or the rights, property, or safety of others.
              </p>
            </div>

            <div class="privacy-block  animate delay-6">
              <h2>Security of Your Information</h2>
              <p>
                We take reasonable steps to protect your personal information from
                unauthorized access, disclosure, or misuse. However, no data transmission
                over the internet or storage system can be guaranteed to be 100% secure.
              </p>
              <p>
                Please note that we cannot guarantee the security of any information you
                transmit to us or that we store on our servers.
              </p>
            </div>

            <div class="privacy-block  animate delay-7">
              <h2>Links to Third-Party Websites</h2>
              <p>
                Our website may contain links to third-party websites. Please note that we
                are not responsible for the privacy practices of these websites. We
                encourage you to read the privacy policies of these websites before
                providing them with your personal information.
              </p>
            </div>

            <div class="privacy-block  animate delay-8">
              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time by posting a new
                version on our website. We encourage you to review this Privacy Policy
                periodically to stay informed about our information practices.
              </p>
            </div>

            <div class="privacy-block  animate delay-9">
              <h2>Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy, please
                contact us at :
              </p>
              <p><a href="mailto:privacy@testmyplan.io">privacy@testmyplan.io</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <MainContact />
    <MainFooter />
  </div>
</template>

<script lang="ts">
import MainNavbar from "../components/MainNavbar.vue";
import MainFooter from "../components/MainFooter.vue";
import MainContact from "@/components/MainContact.vue";
import RegulatoryWidget from "@/components/RegulatoryWidget.vue";

export default {
  name: "PrivacypolicyView",
  components: {
    MainNavbar,
    MainFooter,
    MainContact,
    RegulatoryWidget
  },
};
</script>

