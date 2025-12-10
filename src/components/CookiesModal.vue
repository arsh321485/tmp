<!-- CookiesModal.vue -->
<template>
  <!-- ONLY the modal; no page wrapper so background page stays as-is -->
  <div
    class="modal fade cookie-modal"
    id="cookieModal"
    tabindex="-1"
    aria-labelledby="cookieModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <!-- HEADER -->
        <div class="modal-header">
          <h5 class="modal-title" id="cookieModalLabel">
            Cookies settings
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <!-- BODY -->
        <div class="modal-body">
          <p class="cookie-text">
           Testmyplan uses cookies to remember users’ custom preferences and to help users complete tasks without having to re-enter information when browsing from one page to another or when visiting the site later. This cookie policy explains what cookies are and how we use them on our website.
          </p>

          <div>
            <div class="cookie-section-title">What are cookies</div>
            <p class="cookie-text">
           A cookie is a small text file that a website saves on your computer or mobile device when you visit the site. It enables the website to remember your actions and preferences (such as login, language, font size and other display preferences) over a period of time, so you don’t have to keep re-entering them whenever you come back to the site or browse from one page to another.
            </p>

            <div class="cookie-section-title">How do we use cookies</div>
            <p class="cookie-text">
             Testmyplan uses cookies to remember users’ custom preferences and to help users complete tasks without having to re‑enter information when browsing from one page to another or when visiting the site later.
            </p>

            <div class="cookie-section-title">What type of cookies we use</div>
            <p class="cookie-text">
              Cookies can be in the form of session cookies or persistent
              cookies. Session cookies are deleted from your computer or device
              when you close your web-browser. Persistent cookies will remain
              stored on your computer or device until deleted or until they
              reach their expiry date.
            </p>
            <p class="cookie-text mb-2">We use the following cookies:</p>
          </div>

          <!-- CATEGORIES -->
          <div class="mt-3">
            <!-- Marketing -->
            <div class="cookie-switch-wrapper">
              <div>
                <div class="cookie-category-help">
              Analytical/performance cookies. These cookies allow us to recognise and count the number of visitors to our website and to see how visitors move around when they are using it. This helps us to improve the way our website works, for example, by ensuring that users find what they are looking for easily.
                </div>
              </div>

              <div class="form-check form-switch m-0">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="marketingCookies"
                  checked
                />
              </div>
            </div>

            <!-- Analytics -->
            <div class="cookie-switch-wrapper">
              <div>
               
                <div class="cookie-category-help">
                Functionality cookies. These cookies are used to recognize you when you return to our website.
                </div>
              </div>

              <div class="form-check form-switch m-0">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="analyticsCookies"
                  checked
                />
              </div>
            </div>

            <!-- Essential -->
            <div class="cookie-switch-wrapper">
              <div>
             
                <div class="cookie-category-help">
                 Targeting cookies. These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information for example to measure the effectiveness of a promotional campaign.
                </div>
              </div>

              <div class="text-end">
                <span class="cookie-always-active">Always active</span>
              </div>
            </div>
          </div>

          <!-- How to block -->
          <div class="mt-3">
            <div class="cookie-section-title">How do I block cookies</div>
            <p class="cookie-text mb-0">
           You can control and/or delete cookies as you wish – for details, see aboutcookies.org. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
              
            </p>
          </div>
        </div>

        <!-- FOOTER -->
        <div class="modal-footer">
          <div class="cookie-actions">
            <button type="button" class="btn btn-cookie-outline" id="rejectAllBtn">
              Reject All
            </button>

            <button type="button" class="btn btn-cookie-outline" id="allowAllBtn">
              Allow all cookies
            </button>

            <button
              type="button"
              class="btn btn-cookie-primary"
              id="confirmChoicesBtn"
            >
              Confirm my choices
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

declare global {
  interface Window {
    openCookiesModal?: () => void;
  }
}

interface BootstrapModalInstance {
  show(): void;
  hide(): void;
}

interface BootstrapWindow extends Window {
  bootstrap: {
    Modal: new (
      element: Element,
      options?: {
        backdrop?: boolean | "static";
        keyboard?: boolean;
      }
    ) => BootstrapModalInstance;
  };
}

export default defineComponent({
  name: "CookiesModal",

  setup() {
    onMounted(() => {
      const modalEl = document.getElementById("cookieModal");
      if (!modalEl) return;

      const win = window as unknown as BootstrapWindow;

      const cookieModal = new win.bootstrap.Modal(modalEl, {
        backdrop: "static",
        keyboard: false,
      });

      // 👇 expose a function on window so footer can call it
      window.openCookiesModal = () => {
        cookieModal.show();
      };
    });
  },
});
</script>



