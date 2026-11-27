<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

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

function onLoad(event: Event) {
  const loaded = event.target as HTMLIFrameElement;
  const title = loaded.contentDocument?.title;
  if (title) document.title = title;
}

function onMessage(event: MessageEvent) {
  const data = event.data as { tmpGo?: string; hash?: string } | null;
  if (!data || typeof data.tmpGo !== "string") return;
  if (frame.value && event.source !== frame.value.contentWindow) return;
  const path = PAGES[data.tmpGo];
  if (!path) return;
  const hash = data.hash ? `#${data.hash}` : "";
  if (route.path === path && route.hash === hash) return;
  router.push(path + hash);
}

onMounted(() => window.addEventListener("message", onMessage));
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
