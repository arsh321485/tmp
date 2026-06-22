<template>
  <main class="participant-page">
    <div class="page-content">

      <!-- ── TOP HEADER ── -->
      <div class="page-header">
        <div class="header-left">
          <p class="breadcrumb">TESTMYPLAN &nbsp;·&nbsp; PARTICIPANT EXPERIENCE</p>
          <h1 class="page-title">Taking part in a live drill — Ransomware Containment</h1>
        </div>

        <div class="header-controls">
          <div class="view-toggle">
            <button
              :class="{ active: activeView === 'phone' }"
              @click="activeView = 'phone'"
            >Phone</button>
            <button
              :class="{ active: activeView === 'desktop' }"
              @click="activeView = 'desktop'"
            >Desktop</button>
          </div>

          <button class="restart-btn" @click="restartFlow">
            <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor">
              <path d="M0 0L10 6L0 12V0Z"/>
            </svg>
            Restart
          </button>
        </div>
      </div>

      <!-- ── MOCKUP AREA ── -->
      <div class="mockup-wrapper">

        <!-- PHONE VIEW -->
        <div v-if="activeView === 'phone'" class="phone-outer">
            <div class="phone-frame">

              <!-- Dynamic Island -->
              <div class="dynamic-island"></div>

              <!-- Status Bar -->
              <div class="status-bar">
                <span class="status-time">{{ currentTime }}</span>
                <div class="status-icons">
                  <!-- Signal bars -->
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="white">
                    <rect x="0"   y="8"   width="3.2" height="4"   rx="0.6" fill="white" opacity="0.45"/>
                    <rect x="4.8" y="5.5" width="3.2" height="6.5" rx="0.6" fill="white" opacity="0.65"/>
                    <rect x="9.6" y="3"   width="3.2" height="9"   rx="0.6" fill="white" opacity="0.85"/>
                    <rect x="14.4" y="0"  width="3.2" height="12"  rx="0.6" fill="white"/>
                  </svg>

                  <!-- WiFi -->
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="white">
                    <circle cx="8" cy="11" r="1.3" fill="white"/>
                    <path d="M4.8 7.8A4.6 4.6 0 0 1 8 6.6c1.27 0 2.42.48 3.28 1.27" stroke="white" stroke-width="1.4" fill="none" stroke-linecap="round"/>
                    <path d="M2.2 5.2A7.6 7.6 0 0 1 8 2.8c2.23 0 4.24.9 5.7 2.36" stroke="white" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0.7"/>
                  </svg>

                  <!-- Battery -->
                  <svg width="26" height="13" viewBox="0 0 26 13" fill="none">
                    <rect x="0.75" y="0.75" width="21.5" height="11.5" rx="2.5" stroke="white" stroke-width="1.2" opacity="0.45"/>
                    <rect x="2" y="2" width="18" height="9" rx="1.6" fill="white"/>
                    <rect x="23" y="4.2" width="2.2" height="4.6" rx="1.1" fill="white" opacity="0.45"/>
                  </svg>
                </div>
              </div>

              <!-- ── SCREEN TRANSITION WRAPPER ── -->
              <div class="phone-screens">

                <!-- LOCK SCREEN -->
                <transition name="screen-push">
                  <div v-if="phoneScreen === 'lockscreen'" class="lock-screen" key="lock">
                    <!-- Big Clock -->
                    <div class="clock-area">
                      <div class="big-clock">{{ currentTime }}</div>
                      <div class="lock-date">{{ currentDate }}</div>
                    </div>

                    <!-- Notification Card (clickable) -->
                    <transition name="notif-slide">
                      <div
                        v-if="showNotification"
                        class="notif-card"
                        @click="openExercise"
                      >
                        <div class="notif-row-top">
                          <div class="app-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="12" r="11" stroke="white" stroke-width="1.8" opacity="0.9"/>
                              <circle cx="12" cy="12" r="7"  stroke="white" stroke-width="1.8" opacity="0.9"/>
                              <circle cx="12" cy="12" r="2.8" fill="white"/>
                            </svg>
                          </div>
                          <span class="notif-app-label">TESTMYPLAN</span>
                          <span class="notif-badge-time">now</span>
                        </div>
                        <div class="notif-body">
                          <p class="notif-title">Exercise starting: Ransomware Containment</p>
                          <p class="notif-text">
                            You've been added to #ir-war-room as Incident Response Lead. Tap to take part.
                          </p>
                        </div>
                      </div>
                    </transition>

                    <!-- Bottom Hint -->
                    <div class="bottom-hint" v-if="showNotification">
                      <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
                        <path d="M1 1L7 7L13 1" stroke="white" stroke-width="1.6" stroke-linecap="round"/>
                      </svg>
                      <span>Tap the alert to open</span>
                    </div>
                  </div>
                </transition>

                <!-- EXERCISE APP SCREEN -->
                <transition name="screen-slide-up">
                  <div v-if="phoneScreen === 'exercise'" class="app-screen" key="app">

                    <!-- Channel Header -->
                    <div class="ch-header">
                      <button class="app-back-btn" @click="phoneScreen = 'lockscreen'">
                        <svg width="9" height="15" viewBox="0 0 9 15" fill="none">
                          <path d="M8 1L1.5 7.5L8 14" stroke="#555" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </button>
                      <div class="ch-header-info">
                        <p class="ch-name">#ir-war-room</p>
                        <p class="ch-meta">Veridian Health &middot; 6 members</p>
                      </div>
                      <div class="ch-header-actions">
                        <div class="ch-icon-btn">
                          <svg width="16" height="12" viewBox="0 0 18 14" fill="none">
                            <rect y="0" width="18" height="2" rx="1" fill="#444"/>
                            <rect y="6" width="18" height="2" rx="1" fill="#444"/>
                            <rect y="12" width="18" height="2" rx="1" fill="#444"/>
                          </svg>
                        </div>
                        <div class="ch-icon-btn">
                          <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="#444" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <!-- Live Exercise Banner -->
                    <div class="live-banner">
                      <div class="live-banner-left">
                        <span class="live-dot"></span>
                        <span class="live-label">LIVE EXERCISE</span>
                        <span class="live-desc">This is a drill &mdash; do not action externally</span>
                      </div>
                      <span class="live-timer">{{ liveTimer }}</span>
                    </div>

                    <!-- Channel feed -->
                    <div class="ch-feed">

                      <!-- TestMyPlan bot message -->
                      <div class="tmp-message">
                        <div class="tmp-msg-header">
                          <div class="tmp-msg-icon">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="12" r="10" stroke="white" stroke-width="2"/>
                              <circle cx="12" cy="12" r="6"  stroke="white" stroke-width="2"/>
                              <circle cx="12" cy="12" r="2.5" fill="white"/>
                            </svg>
                          </div>
                          <span class="tmp-msg-name">TestMyPlan</span>
                          <span class="tmp-msg-badge">EXERCISE</span>
                          <span class="tmp-msg-time">{{ liveTimer }}</span>
                        </div>

                        <!-- Exercise card -->
                        <div class="ex-card">
                          <!-- Card header row -->
                          <div class="ex-card-top">
                            <div class="ex-card-cat">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2Z" stroke="#555" stroke-width="2" fill="none"/>
                              </svg>
                              <span>CYBERSECURITY</span>
                            </div>
                            <span class="ex-live-badge">LIVE EXERCISE</span>
                          </div>

                          <!-- Exercise name -->
                          <h3 class="ex-name">Ransomware Containment</h3>

                          <!-- Breadcrumb -->
                          <div class="ex-breadcrumb">
                            <span>External attacker</span>
                            <svg width="6" height="10" viewBox="0 0 6 10"><path d="M1 1l4 4-4 4" stroke="#999" stroke-width="1.4" fill="none" stroke-linecap="round"/></svg>
                            <span>Ransomware outbreak</span>
                            <svg width="6" height="10" viewBox="0 0 6 10"><path d="M1 1l4 4-4 4" stroke="#999" stroke-width="1.4" fill="none" stroke-linecap="round"/></svg>
                          </div>
                          <p class="ex-scenario">Phishing email with weaponized attachment</p>

                          <!-- Role -->
                          <p class="ex-section-label">YOUR ROLE</p>
                          <div class="ex-role-row">
                            <div class="ex-role-avatar">SR</div>
                            <span class="ex-role-name">Incident Response Lead</span>
                            <span class="ex-you-badge">YOU</span>
                          </div>

                          <!-- Objectives -->
                          <p class="ex-section-label" style="margin-top:14px">YOUR OBJECTIVES</p>
                          <div class="ex-objectives">
                            <div class="ex-obj-item">
                              <span class="ex-obj-num">1</span>
                              <span>Declare the incident and stand up the IR bridge</span>
                            </div>
                            <div class="ex-obj-item">
                              <span class="ex-obj-num">2</span>
                              <span>Make the containment call on the affected endpoints</span>
                            </div>
                            <div class="ex-obj-item">
                              <span class="ex-obj-num">3</span>
                              <span>Keep Legal &amp; Comms informed at every step</span>
                            </div>
                          </div>

                          <!-- Footer stats -->
                          <div class="ex-card-footer">
                            <span class="ex-stat">
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#888" stroke-width="2"/><circle cx="9" cy="7" r="4" stroke="#888" stroke-width="2"/><path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#888" stroke-width="2"/></svg>
                              6 in channel
                            </span>
                            <span class="ex-stat">
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2"/><path d="M12 6v6l4 2" stroke="#888" stroke-width="2" stroke-linecap="round"/></svg>
                              ~25 min
                            </span>
                            <span class="ex-stat">
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#888" stroke-width="2" stroke-linejoin="round"/></svg>
                              Dana Okafor
                            </span>
                          </div>

                          <!-- Join button inside card -->
                          <button class="ch-join-btn">
                            <svg width="10" height="12" viewBox="0 0 10 12" fill="white"><path d="M0 0L10 6L0 12V0Z"/></svg>
                            Join the exercise
                          </button>
                          <p class="ex-no-install">No app to install, no login &mdash; just reply right here.</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </transition>

              </div><!-- /phone-screens -->

              <!-- Home Indicator -->
              <div class="home-bar"></div>
            </div>
          </div>

        <!-- DESKTOP VIEW -->
        <div v-if="activeView === 'desktop'" class="desktop-outer">
            <div class="desktop-frame">

              <!-- macOS window chrome -->
              <div class="desktop-chrome">
                <div class="chrome-dots">
                  <span class="dot red"></span>
                  <span class="dot yellow"></span>
                  <span class="dot green"></span>
                </div>
                <div class="chrome-title">Veridian Health — Team Chat</div>
              </div>

              <!-- Window body -->
              <div class="desktop-body">

                <!-- ── SIDEBAR ── -->
                <div class="desktop-sidebar">
                  <!-- Workspace header -->
                  <div class="ws-header">
                    <div class="ws-avatar">V</div>
                    <span class="ws-name">Veridian Health</span>
                  </div>

                  <!-- Channels -->
                  <p class="sidebar-section-label">CHANNELS</p>
                  <div class="sidebar-item">
                    <span class="hash">#</span> incident-response
                  </div>
                  <div class="sidebar-item active">
                    <span class="hash">#</span> ir-war-room
                    <span class="active-dot"></span>
                  </div>
                  <div class="sidebar-item">
                    <span class="hash">#</span> privacy-bridge
                  </div>
                  <div class="sidebar-item">
                    <span class="hash">#</span> crisis-comms
                  </div>
                  <div class="sidebar-item">
                    <span class="hash">#</span> esg-council
                  </div>

                  <!-- Apps -->
                  <p class="sidebar-section-label" style="margin-top:24px">APPS</p>
                  <div class="sidebar-item sidebar-app">
                    <div class="app-sidebar-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="white" stroke-width="2"/>
                        <circle cx="12" cy="12" r="6"  stroke="white" stroke-width="2"/>
                        <circle cx="12" cy="12" r="2.5" fill="white"/>
                      </svg>
                    </div>
                    TestMyPlan
                  </div>
                </div>

                <!-- ── MAIN CONTENT ── -->
                <div class="desktop-main">

                  <!-- ── SCREEN 1: Welcome card (initial state) ── -->
                  <transition name="dk-screen-fade">
                    <div v-if="desktopScreen === 'welcome'" class="dk-welcome" key="welcome">
                      <transition name="notif-slide">
                        <div v-if="showNotification" class="dk-welcome-card">
                          <div class="dk-welcome-icon">
                            <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="12" r="10" stroke="white" stroke-width="2"/>
                              <circle cx="12" cy="12" r="6"  stroke="white" stroke-width="2"/>
                              <circle cx="12" cy="12" r="2.5" fill="white"/>
                            </svg>
                          </div>
                          <h2 class="dk-welcome-title">You've been added to an exercise</h2>
                          <p class="dk-welcome-desc">
                            Dana Okafor started <strong>Ransomware Containment</strong> in
                            #ir-war-room. You're in as <strong>Incident Response Lead</strong>.
                          </p>
                          <button class="dk-welcome-btn" @click="openDesktopChannel">
                            <svg width="10" height="12" viewBox="0 0 10 12" fill="white"><path d="M0 0L10 6L0 12V0Z"/></svg>
                            Open exercise
                          </button>
                          <p class="dk-welcome-sub">It runs right here in your team chat &mdash; nothing to install.</p>
                        </div>
                      </transition>
                    </div>
                  </transition>

                  <!-- ── SCREEN 2: Full channel view (after Open exercise) ── -->
                  <transition name="dk-screen-slide">
                    <div v-if="desktopScreen === 'channel'" class="dk-channel-wrap" key="channel">

                      <!-- Channel header -->
                      <div class="dk-ch-header">
                        <button class="dk-back-btn" @click="desktopScreen = 'welcome'">
                          <svg width="9" height="15" viewBox="0 0 9 15" fill="none">
                            <path d="M8 1L1.5 7.5L8 14" stroke="#555" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </button>
                        <div class="dk-ch-info">
                          <p class="dk-ch-name">#ir-war-room</p>
                          <p class="dk-ch-meta">Veridian Health &middot; 6 members</p>
                        </div>
                        <div class="dk-ch-actions">
                          <div class="dk-icon-btn">
                            <svg width="16" height="13" viewBox="0 0 18 14" fill="none">
                              <rect y="0" width="18" height="2" rx="1" fill="#444"/>
                              <rect y="6" width="18" height="2" rx="1" fill="#444"/>
                              <rect y="12" width="18" height="2" rx="1" fill="#444"/>
                            </svg>
                          </div>
                          <div class="dk-icon-btn">
                            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="#444" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                          </div>
                        </div>
                      </div>

                      <!-- Live banner -->
                      <div class="dk-live-banner">
                        <div class="dk-live-left">
                          <span class="live-dot"></span>
                          <span class="live-label">LIVE EXERCISE</span>
                          <span class="dk-live-desc">This is a drill &mdash; do not action externally</span>
                        </div>
                        <span class="live-timer">{{ liveTimer }}</span>
                      </div>

                      <!-- Feed -->
                      <div class="dk-feed">
                        <div class="dk-tmp-message">
                          <div class="dk-tmp-header">
                            <div class="dk-tmp-icon">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="white" stroke-width="2"/>
                                <circle cx="12" cy="12" r="6"  stroke="white" stroke-width="2"/>
                                <circle cx="12" cy="12" r="2.5" fill="white"/>
                              </svg>
                            </div>
                            <span class="dk-tmp-name">TestMyPlan</span>
                            <span class="dk-tmp-badge">EXERCISE</span>
                            <span class="dk-tmp-time">{{ liveTimer }}</span>
                          </div>

                          <div class="dk-ex-card">
                            <div class="dk-ex-top">
                              <div class="dk-ex-cat">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                                  <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2Z" stroke="#555" stroke-width="2"/>
                                </svg>
                                CYBERSECURITY
                              </div>
                              <span class="dk-live-badge">LIVE EXERCISE</span>
                            </div>

                            <h3 class="dk-ex-name">Ransomware Containment</h3>

                            <div class="dk-ex-breadcrumb">
                              <span>External attacker</span>
                              <svg width="6" height="10" viewBox="0 0 6 10"><path d="M1 1l4 4-4 4" stroke="#999" stroke-width="1.4" fill="none" stroke-linecap="round"/></svg>
                              <span>Ransomware outbreak</span>
                              <svg width="6" height="10" viewBox="0 0 6 10"><path d="M1 1l4 4-4 4" stroke="#999" stroke-width="1.4" fill="none" stroke-linecap="round"/></svg>
                              <span>Phishing email with weaponized attachment</span>
                            </div>

                            <p class="dk-ex-section-label">YOUR ROLE</p>
                            <div class="dk-ex-role-row">
                              <div class="dk-ex-avatar">SR</div>
                              <span class="dk-ex-role-name">Incident Response Lead</span>
                              <span class="dk-ex-you">YOU</span>
                            </div>

                            <p class="dk-ex-section-label" style="margin-top:18px">YOUR OBJECTIVES</p>
                            <div class="dk-ex-objectives">
                              <div class="dk-ex-obj"><span class="dk-obj-num">1</span><span>Declare the incident and stand up the IR bridge</span></div>
                              <div class="dk-ex-obj"><span class="dk-obj-num">2</span><span>Make the containment call on the affected endpoints</span></div>
                              <div class="dk-ex-obj"><span class="dk-obj-num">3</span><span>Keep Legal &amp; Comms informed at every step</span></div>
                            </div>

                            <div class="dk-ex-footer">
                              <span class="dk-stat"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#888" stroke-width="2"/><circle cx="9" cy="7" r="4" stroke="#888" stroke-width="2"/><path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#888" stroke-width="2"/></svg> 6 in channel</span>
                              <span class="dk-stat"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2"/><path d="M12 6v6l4 2" stroke="#888" stroke-width="2" stroke-linecap="round"/></svg> ~25 min</span>
                              <span class="dk-stat"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#888" stroke-width="2" stroke-linejoin="round"/></svg> Dana Okafor</span>
                            </div>

                            <button class="dk-join-btn">
                              <svg width="10" height="12" viewBox="0 0 10 12" fill="white"><path d="M0 0L10 6L0 12V0Z"/></svg>
                              Join the exercise
                            </button>
                            <p class="dk-no-install">No app to install, no login &mdash; just reply right here.</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </transition>

                </div>

              </div>
            </div>
          </div>

      </div><!-- /mockup-wrapper -->
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted, onBeforeUnmount } from 'vue'

export default defineComponent({
  name: 'ParticipantFlow',

  setup() {
    const activeView      = ref<'phone' | 'desktop'>('phone')
    const phoneScreen      = ref<'lockscreen' | 'exercise'>('lockscreen')
    const desktopScreen    = ref<'welcome' | 'channel'>('welcome')
    const showNotification = ref(false)
    const currentTime      = ref('')
    const currentDate      = ref('')
    const liveTimer        = ref('00:00')

    let clockTimer: ReturnType<typeof setInterval> | null = null
    let notifTimer:  ReturnType<typeof setTimeout>  | null = null
    let liveTimerInterval: ReturnType<typeof setInterval> | null = null
    let liveSeconds = 0

    function updateClock() {
      const now = new Date()
      const hh  = now.getHours().toString().padStart(2, '0')
      const mm  = now.getMinutes().toString().padStart(2, '0')
      currentTime.value = `${hh}:${mm}`

      const days   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
      const months = ['January','February','March','April','May','June',
                      'July','August','September','October','November','December']
      currentDate.value = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`
    }

    function startNotificationDelay() {
      showNotification.value = false
      if (notifTimer) clearTimeout(notifTimer)
      notifTimer = setTimeout(() => {
        showNotification.value = true
      }, 800)
    }

    function openExercise() {
      // Phone notification click → show phone exercise screen
      phoneScreen.value = 'exercise'
      startLiveTimer()
    }

    function openDesktopChannel() {
      desktopScreen.value = 'channel'
      startLiveTimer()
    }

    function startLiveTimer() {
      liveSeconds = 0
      liveTimer.value = '00:00'
      if (liveTimerInterval) clearInterval(liveTimerInterval)
      liveTimerInterval = setInterval(() => {
        liveSeconds++
        const m = Math.floor(liveSeconds / 60).toString().padStart(2, '0')
        const s = (liveSeconds % 60).toString().padStart(2, '0')
        liveTimer.value = `${m}:${s}`
      }, 1000)
    }

    function restartFlow() {
      phoneScreen.value = 'lockscreen'
      desktopScreen.value = 'welcome'
      activeView.value = activeView.value // keep current view
      if (liveTimerInterval) clearInterval(liveTimerInterval)
      liveTimer.value = '00:00'
      liveSeconds = 0
      startNotificationDelay()
    }

    watch(activeView, (val) => {
      if (val === 'desktop') {
        // Phone exercise open tha → desktop pe bhi channel view dikhao
        if (phoneScreen.value === 'exercise') {
          desktopScreen.value = 'channel'
          // timer already running, don't restart
        }
      } else if (val === 'phone') {
        // Phone lockscreen pe tha → timer reset karo
        if (phoneScreen.value === 'lockscreen') {
          if (liveTimerInterval) clearInterval(liveTimerInterval)
          liveTimer.value = '00:00'
          liveSeconds = 0
        }
      }
    })

    onMounted(() => {
      updateClock()
      clockTimer = setInterval(updateClock, 1000)
      startNotificationDelay()
    })

    onBeforeUnmount(() => {
      if (clockTimer) clearInterval(clockTimer)
      if (notifTimer) clearTimeout(notifTimer)
      if (liveTimerInterval) clearInterval(liveTimerInterval)
    })

    return { activeView, phoneScreen, desktopScreen, showNotification, currentTime, currentDate, liveTimer, openExercise, openDesktopChannel, restartFlow }
  }
})
</script>

<style scoped>
/* ────────────────────────────────────────────
   PAGE LAYOUT
──────────────────────────────────────────── */
* { box-sizing: border-box; }

.participant-page {
  min-height: 100vh;
  background: #e8e4de;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-family: 'Inter', system-ui, sans-serif;
}

.page-content {
  width: 100%;
  max-width: 1200px;
  padding: 48px 60px 60px;
}

/* ────────────────────────────────────────────
   HEADER
──────────────────────────────────────────── */
.page-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 52px;
  flex-wrap: wrap;
}

.breadcrumb {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #d93025;
  text-transform: uppercase;
  margin: 0 0 10px;
}

.page-title {
  font-size: 28px;
  font-weight: 700;
  color: #111;
  margin: 0;
  line-height: 1.25;
  max-width: 560px;
}

/* Controls: toggle + restart */
.header-controls {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  padding-top: 26px;
}

.view-toggle {
  display: flex;
  background: #f0ede8;
  border-radius: 50px;
  padding: 4px;
  border: 1px solid #ddd8d0;
}

.view-toggle button {
  padding: 7px 20px;
  border: none;
  border-radius: 50px;
  background: transparent;
  font-size: 14px;
  font-weight: 500;
  color: #888;
  cursor: pointer;
  transition: all 0.2s ease;
}

.view-toggle button.active {
  background: #fff;
  color: #111;
  box-shadow: 0 1px 4px rgba(0,0,0,0.12);
}

.restart-btn {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 8px 18px;
  border: 1.5px solid #ccc8c0;
  border-radius: 50px;
  background: transparent;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;
}

.restart-btn:hover {
  background: #fff;
  border-color: #aaa;
}

/* ────────────────────────────────────────────
   MOCKUP WRAPPER
──────────────────────────────────────────── */
.mockup-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 680px;
  position: relative;
}

/* ────────────────────────────────────────────
   PHONE MOCKUP
──────────────────────────────────────────── */
.phone-outer {
  position: relative;
}

.phone-frame {
  position: relative;
  width: 340px;
  height: 720px;
  background: #0a0a0a;
  border-radius: 54px;
  box-shadow:
    0 0 0 1px #2a2a2a,
    0 0 0 3px #1a1a1a,
    0 30px 80px rgba(0,0,0,0.35),
    0 8px 24px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Side buttons (decorative) */
.phone-frame::before {
  content: '';
  position: absolute;
  left: -3px;
  top: 120px;
  width: 3px;
  height: 36px;
  background: #2a2a2a;
  border-radius: 2px 0 0 2px;
  box-shadow: 0 50px 0 #2a2a2a, 0 90px 0 #2a2a2a;
}

.phone-frame::after {
  content: '';
  position: absolute;
  right: -3px;
  top: 150px;
  width: 3px;
  height: 60px;
  background: #2a2a2a;
  border-radius: 0 2px 2px 0;
}

/* Dynamic Island */
.dynamic-island {
  position: absolute;
  top: 14px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 34px;
  background: #000;
  border-radius: 20px;
  z-index: 10;
}

/* Status Bar */
.status-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 28px 0;
  position: relative;
  z-index: 5;
  margin-top: 4px;
}

.status-time {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.02em;
}

.status-icons {
  display: flex;
  align-items: center;
  gap: 6px;
}

/* Screens wrapper */
.phone-screens {
  flex: 1;
  position: relative;
  overflow: hidden;
}

/* Lock Screen */
.lock-screen {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px 18px 0;
}

/* Big Clock */
.clock-area {
  text-align: center;
  margin-bottom: 48px;
}

.big-clock {
  font-size: 86px;
  font-weight: 300;
  color: #fff;
  line-height: 1;
  letter-spacing: -2px;
}

.lock-date {
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  margin-top: 6px;
  letter-spacing: 0.01em;
}

/* Notification Card */
.notif-card {
  width: 100%;
  background: rgba(58, 58, 60, 0.92);
  backdrop-filter: blur(20px);
  border-radius: 18px;
  padding: 14px 16px 16px;
  cursor: pointer;
  transition: transform 0.15s ease, opacity 0.15s ease;
}

.notif-card:hover {
  transform: scale(1.015);
  opacity: 0.95;
}

.notif-card:active {
  transform: scale(0.98);
}

.notif-row-top {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}

.app-icon {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #ff5f3f 0%, #e03030 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.notif-app-label {
  font-size: 11px;
  font-weight: 700;
  color: rgba(255,255,255,0.75);
  letter-spacing: 0.08em;
  flex: 1;
}

.notif-badge-time {
  font-size: 12px;
  color: rgba(255,255,255,0.5);
}

.notif-body {
  padding-left: 0;
}

.notif-title {
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 4px;
  line-height: 1.3;
}

.notif-text {
  font-size: 13px;
  color: rgba(255,255,255,0.82);
  margin: 0;
  line-height: 1.45;
}

/* Bottom Hint */
.bottom-hint {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-top: auto;
  padding-bottom: 14px;
  color: rgba(255,255,255,0.55);
  font-size: 13px;
}

/* ────────────────────────────────────────────
   EXERCISE APP SCREEN (inside phone)
──────────────────────────────────────────── */
.app-screen {
  position: absolute;
  inset: 0;
  background: #f4f4f5;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Channel Header */
.ch-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px 10px;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  flex-shrink: 0;
}

.app-back-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 6px 4px 0;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.ch-header-info {
  flex: 1;
}

.ch-name {
  font-size: 14px;
  font-weight: 700;
  color: #111;
  margin: 0;
  line-height: 1.2;
}

.ch-meta {
  font-size: 11px;
  color: #888;
  margin: 0;
}

.ch-header-actions {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;
}

.ch-icon-btn {
  width: 32px;
  height: 32px;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  cursor: pointer;
}

/* Live Banner */
.live-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff5f5;
  border-bottom: 1px solid #fdd;
  padding: 7px 12px;
  flex-shrink: 0;
}

.live-banner-left {
  display: flex;
  align-items: center;
  gap: 6px;
  flex: 1;
  min-width: 0;
}

.live-dot {
  width: 8px;
  height: 8px;
  background: #e03030;
  border-radius: 50%;
  flex-shrink: 0;
  animation: pulse-dot 1.5s infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.live-label {
  font-size: 11px;
  font-weight: 800;
  color: #e03030;
  letter-spacing: 0.06em;
  flex-shrink: 0;
}

.live-desc {
  font-size: 10px;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.live-timer {
  font-size: 12px;
  font-weight: 700;
  color: #e03030;
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
  margin-left: 8px;
}

/* Channel feed */
.ch-feed {
  flex: 1;
  overflow-y: auto;
  padding: 10px 10px 6px;
}

/* TestMyPlan bot message */
.tmp-message {
  background: transparent;
}

.tmp-msg-header {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
}

.tmp-msg-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #ff5f3f, #e03030);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.tmp-msg-name {
  font-size: 13px;
  font-weight: 700;
  color: #111;
}

.tmp-msg-badge {
  font-size: 9px;
  font-weight: 700;
  background: #eee;
  color: #666;
  padding: 2px 6px;
  border-radius: 4px;
  letter-spacing: 0.06em;
}

.tmp-msg-time {
  font-size: 10px;
  color: #aaa;
  margin-left: 2px;
}

/* Exercise card */
.ex-card {
  background: #fff;
  border-radius: 12px;
  border: 1px solid #e8e8e8;
  padding: 14px;
  margin-left: 0;
}

.ex-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.ex-card-cat {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 10px;
  font-weight: 700;
  color: #555;
  letter-spacing: 0.06em;
}

.ex-live-badge {
  font-size: 9px;
  font-weight: 700;
  background: #fde8e8;
  color: #e03030;
  padding: 3px 8px;
  border-radius: 20px;
  letter-spacing: 0.05em;
}

.ex-name {
  font-size: 18px;
  font-weight: 800;
  color: #111;
  margin: 0 0 8px;
  line-height: 1.2;
}

.ex-breadcrumb {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
  margin-bottom: 4px;
}

.ex-breadcrumb span {
  font-size: 11px;
  color: #e03030;
}

.ex-scenario {
  font-size: 12px;
  font-weight: 600;
  color: #e03030;
  margin: 0 0 12px;
}

.ex-section-label {
  font-size: 10px;
  font-weight: 700;
  color: #aaa;
  letter-spacing: 0.1em;
  margin: 0 0 6px;
}

.ex-role-row {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f5f5f6;
  border-radius: 10px;
  padding: 10px 12px;
  margin-bottom: 4px;
}

.ex-role-avatar {
  width: 28px;
  height: 28px;
  background: #1a1a1a;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
}

.ex-role-name {
  flex: 1;
  font-size: 13px;
  font-weight: 700;
  color: #111;
  line-height: 1.25;
}

.ex-you-badge {
  font-size: 10px;
  font-weight: 700;
  background: #1a1a1a;
  color: #fff;
  padding: 3px 8px;
  border-radius: 20px;
  flex-shrink: 0;
}

.ex-objectives {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
}

.ex-obj-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 12px;
  color: #333;
  line-height: 1.4;
}

.ex-obj-num {
  width: 20px;
  height: 20px;
  background: #e03030;
  color: #fff;
  border-radius: 50%;
  font-size: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;
}

.ex-card-footer {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 10px;
  border-top: 1px solid #f0f0f0;
  flex-wrap: wrap;
}

.ex-stat {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: #888;
}

/* Join button (inside card) */
.ch-join-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  background: #e03030;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 13px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 14px;
  box-shadow: 0 4px 14px rgba(224,48,48,0.28);
  transition: background 0.2s;
}

.ch-join-btn:hover {
  background: #c92828;
}

.ex-no-install {
  font-size: 11px;
  color: #aaa;
  text-align: center;
  margin: 8px 0 0;
}

/* Home Bar */
.home-bar {
  width: 130px;
  height: 5px;
  background: rgba(255,255,255,0.55);
  border-radius: 3px;
  margin: 0 auto 10px;
}

/* ────────────────────────────────────────────
   DESKTOP MOCKUP
──────────────────────────────────────────── */
.desktop-outer {
  width: 100%;
  max-width: 1080px;
}

.desktop-frame {
  background: #fff;
  border-radius: 14px;
  box-shadow:
    0 0 0 1px rgba(0,0,0,0.08),
    0 30px 80px rgba(0,0,0,0.18),
    0 8px 24px rgba(0,0,0,0.10);
  overflow: hidden;
}

/* Window chrome (title bar) */
.desktop-chrome {
  background: #f3f2f2;
  border-bottom: 1px solid #e0dede;
  padding: 12px 18px;
  display: flex;
  align-items: center;
  position: relative;
}

.chrome-dots { display: flex; gap: 7px; }
.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.dot.red    { background: #ff5f57; }
.dot.yellow { background: #febc2e; }
.dot.green  { background: #28c840; }

.chrome-title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 13px;
  font-weight: 500;
  color: #555;
}

/* Window body */
.desktop-body {
  display: flex;
  height: 500px;
}

/* ── SIDEBAR ── */
.desktop-sidebar {
  width: 250px;
  background: #1e2124;
  padding: 16px 8px 16px 8px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  flex-shrink: 0;
}

.ws-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 10px 16px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  margin-bottom: 12px;
}

.ws-avatar {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #ff5f3f, #e03030);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
}

.ws-name {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
}

.sidebar-section-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: rgba(255,255,255,0.38);
  padding: 4px 12px 6px;
  margin: 0;
}

.sidebar-item {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 7px 12px;
  border-radius: 6px;
  font-size: 14px;
  color: rgba(255,255,255,0.52);
  cursor: default;
  font-weight: 400;
  position: relative;
  transition: background 0.15s;
}

.sidebar-item .hash {
  color: rgba(255,255,255,0.35);
  font-size: 15px;
}

.sidebar-item.active {
  background: rgba(255,255,255,0.10);
  color: rgba(255,255,255,0.92);
  font-weight: 500;
}

.active-dot {
  width: 8px;
  height: 8px;
  background: #e03030;
  border-radius: 50%;
  margin-left: auto;
  flex-shrink: 0;
}

.sidebar-app {
  gap: 10px;
}

.app-sidebar-icon {
  width: 26px;
  height: 26px;
  background: linear-gradient(135deg, #ff5f3f, #e03030);
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* ── MAIN CONTENT ── */
.desktop-main {
  flex: 1;
  background: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}

/* Welcome screen */
.dk-welcome {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}

.dk-welcome-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 460px;
  padding: 20px;
}

.dk-welcome-icon {
  width: 84px;
  height: 84px;
  background: linear-gradient(135deg, #ff5f3f, #e03030);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  box-shadow: 0 8px 24px rgba(224,48,48,0.28);
}

.dk-welcome-title {
  font-size: 26px;
  font-weight: 800;
  color: #111;
  margin: 0 0 14px;
  line-height: 1.2;
}

.dk-welcome-desc {
  font-size: 15px;
  color: #666;
  line-height: 1.6;
  margin: 0 0 28px;
}

.dk-welcome-desc strong { color: #111; font-weight: 700; }

.dk-welcome-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #e03030;
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 16px;
  box-shadow: 0 4px 16px rgba(224,48,48,0.3);
  transition: background 0.2s, transform 0.15s;
}

.dk-welcome-btn:hover {
  background: #c92828;
  transform: translateY(-1px);
}

.dk-welcome-sub {
  font-size: 13px;
  color: #aaa;
  margin: 0;
}

/* Channel wrap (screen 2) */
.dk-channel-wrap {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #fff;
}

.dk-back-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 8px 4px 0;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

/* Screen transitions */
.dk-screen-fade-enter-active,
.dk-screen-fade-leave-active {
  transition: opacity 0.3s ease;
}
.dk-screen-fade-enter-from,
.dk-screen-fade-leave-to {
  opacity: 0;
}

.dk-screen-slide-enter-active {
  transition: transform 0.38s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease;
}
.dk-screen-slide-enter-from {
  transform: translateX(40px);
  opacity: 0;
}
.dk-screen-slide-leave-active {
  transition: transform 0.28s ease, opacity 0.25s ease;
}
.dk-screen-slide-leave-to {
  transform: translateX(40px);
  opacity: 0;
}

/* Desktop channel header */
.dk-ch-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  border-bottom: 1px solid #ebebeb;
  background: #fff;
  flex-shrink: 0;
}

.dk-ch-info { flex: 1; }

.dk-ch-name {
  font-size: 16px;
  font-weight: 700;
  color: #111;
  margin: 0;
}

.dk-ch-meta {
  font-size: 12px;
  color: #888;
  margin: 2px 0 0;
}

.dk-ch-actions {
  display: flex;
  gap: 8px;
}

.dk-icon-btn {
  width: 36px;
  height: 36px;
  border: 1.5px solid #e0e0e0;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #fff;
}

/* Desktop live banner */
.dk-live-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff5f5;
  border-bottom: 1px solid #fdd;
  padding: 8px 20px;
  flex-shrink: 0;
}

.dk-live-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dk-live-desc {
  font-size: 13px;
  color: #555;
}

/* Desktop feed */
.dk-feed {
  flex: 1;
  overflow-y: auto;
  padding: 20px 20px;
}

.dk-tmp-message {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.dk-tmp-header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.dk-tmp-icon {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #ff5f3f, #e03030);
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.dk-tmp-name {
  font-size: 15px;
  font-weight: 700;
  color: #111;
}

.dk-tmp-badge {
  font-size: 10px;
  font-weight: 700;
  background: #eee;
  color: #666;
  padding: 2px 7px;
  border-radius: 4px;
  letter-spacing: 0.06em;
}

.dk-tmp-time {
  font-size: 12px;
  color: #aaa;
}

/* Desktop exercise card */
.dk-ex-card {
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 14px;
  padding: 20px 24px;
}

.dk-ex-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.dk-ex-cat {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 700;
  color: #555;
  letter-spacing: 0.07em;
}

.dk-live-badge {
  font-size: 11px;
  font-weight: 700;
  background: #fde8e8;
  color: #e03030;
  padding: 4px 12px;
  border-radius: 20px;
  letter-spacing: 0.04em;
}

.dk-ex-name {
  font-size: 24px;
  font-weight: 800;
  color: #111;
  margin: 0 0 10px;
  line-height: 1.2;
}

.dk-ex-breadcrumb {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.dk-ex-breadcrumb span {
  font-size: 13px;
  color: #e03030;
}

.dk-ex-section-label {
  font-size: 11px;
  font-weight: 700;
  color: #aaa;
  letter-spacing: 0.1em;
  margin: 0 0 8px;
}

.dk-ex-role-row {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #f6f6f7;
  border-radius: 12px;
  padding: 12px 16px;
  margin-bottom: 4px;
}

.dk-ex-avatar {
  width: 34px;
  height: 34px;
  background: #111;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
}

.dk-ex-role-name {
  flex: 1;
  font-size: 15px;
  font-weight: 700;
  color: #111;
}

.dk-ex-you {
  font-size: 11px;
  font-weight: 700;
  background: #111;
  color: #fff;
  padding: 4px 10px;
  border-radius: 20px;
}

.dk-ex-objectives {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 16px;
}

.dk-ex-obj {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 14px;
  color: #222;
  line-height: 1.45;
}

.dk-obj-num {
  width: 22px;
  height: 22px;
  background: #e03030;
  color: #fff;
  border-radius: 50%;
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;
}

.dk-ex-footer {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 0 14px;
  border-top: 1px solid #f0f0f0;
  flex-wrap: wrap;
}

.dk-stat {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  color: #888;
}

.dk-join-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  background: #e03030;
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 15px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 10px;
  box-shadow: 0 4px 16px rgba(224,48,48,0.28);
  transition: background 0.2s;
}

.dk-join-btn:hover { background: #c92828; }

.dk-no-install {
  font-size: 12px;
  color: #aaa;
  text-align: center;
  margin: 0;
}

/* ────────────────────────────────────────────
   TRANSITIONS
──────────────────────────────────────────── */
.fade-up-enter-active,
.fade-up-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(14px);
}

.notif-slide-enter-active {
  transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.notif-slide-enter-from {
  opacity: 0;
  transform: translateY(-18px) scale(0.96);
}
.notif-slide-leave-active {
  transition: opacity 0.25s ease;
}
.notif-slide-leave-to {
  opacity: 0;
}

/* Lock screen pushes out to left when exercise opens */
.screen-push-leave-active {
  transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  inset: 0;
}
.screen-push-leave-to {
  opacity: 0;
  transform: scale(0.94);
}

/* Exercise screen slides up from bottom (iOS-style) */
.screen-slide-up-enter-active {
  transition: transform 0.42s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease;
}
.screen-slide-up-enter-from {
  transform: translateY(100%);
  opacity: 0.6;
}
.screen-slide-up-leave-active {
  transition: transform 0.32s cubic-bezier(0.4, 0, 0.6, 1), opacity 0.28s ease;
}
.screen-slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

/* ────────────────────────────────────────────
   RESPONSIVE
──────────────────────────────────────────── */
@media (max-width: 768px) {
  .page-content {
    padding: 28px 20px 40px;
  }

  .page-header {
    flex-direction: column;
    gap: 18px;
    margin-bottom: 36px;
  }

  .page-title {
    font-size: 22px;
  }

  .header-controls {
    padding-top: 0;
  }

  .phone-frame {
    width: 300px;
    height: 640px;
    border-radius: 46px;
  }

  .big-clock {
    font-size: 72px;
  }
}
</style>
