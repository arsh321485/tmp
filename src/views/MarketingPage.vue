<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { openSignupModal } from "@/utils/signup";

const PAGES: Record<string, string> = {
  "Landing Page.html": "/home",
  "How It Works.html": "/home/how-it-works",
  "Live Threats.html": "/home/live-threats",
  "Knowledge Base.html": "/home/knowledge-base",
  "Partners.html": "/home/partners",
  "Support.html": "/home/support",
  "Privacy.html": "/home/privacy",
  "Terms.html": "/home/terms",
  "DPA.html": "/home/dpa",
  "Sub-processors.html": "/home/sub-processors",
};

const route = useRoute();
const router = useRouter();
const frame = ref<HTMLIFrameElement | null>(null);

const src = computed(() => String(route.meta.marketingSrc || "") + (route.hash || ""));

const frameName = computed(() => {
  const page = String(route.meta.frameName || "tmp||").split("|")[1] || "";
  const hash = route.hash.startsWith("#") ? route.hash.slice(1) : route.hash;
  return `tmp|${page}|${hash}`;
});

function attachSignup(loaded: HTMLIFrameElement | null) {
  const doc = loaded?.contentDocument;
  if (!doc || doc.readyState !== "complete") return;
  if (doc.documentElement.dataset.signupHook === "1") return;
  doc.documentElement.dataset.signupHook = "1";
  if (doc.title) document.title = doc.title;
  const script = doc.createElement("script");
  script.textContent = `
    document.addEventListener("click", function (event) {
      var target = event.target && event.target.closest && event.target.closest("[data-signup]");
      if (!target) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      parent.postMessage({ tmpSignup: true }, "*");
    }, true);
  `;
  doc.documentElement.appendChild(script);
}

function onLoad(event: Event) {
  attachSignup(event.target as HTMLIFrameElement);
}

function onMessage(event: MessageEvent) {
  const data = event.data as { tmpGo?: string; hash?: string; tmpSignup?: boolean } | null;
  if (!data) return;
  if (data.tmpSignup) {
    if (frame.value && event.source !== frame.value.contentWindow) return;
    openSignupModal();
    return;
  }
  if (typeof data.tmpGo !== "string") return;
  if (frame.value && event.source !== frame.value.contentWindow) return;
  const path = PAGES[data.tmpGo];
  if (!path) return;
  const hash = data.hash ? `#${data.hash}` : "";
  if (route.path === path && route.hash === hash) return;
  router.push(path + hash);
}

onMounted(() => {
  attachSignup(frame.value);
  window.addEventListener("message", onMessage);
});
onUnmounted(() => window.removeEventListener("message", onMessage));
</script>

<template>
  <iframe
    ref="frame"
    :key="src"
    class="marketing-frame"
    :src="src"
    :name="frameName"
    title="TestMyPlan"
    @load="onLoad"
  />
</template>

<style scoped>
.marketing-frame {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
  background: #fbf9f8;
  z-index: 20;
}
</style>
