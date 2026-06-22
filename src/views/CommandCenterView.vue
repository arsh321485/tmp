<template>
  <div class="cc-layout">

    <!-- ══════════════════════════════════════
         SIDEBAR
    ══════════════════════════════════════ -->
    <aside class="cc-sidebar">

      <!-- Logo -->
      <div class="cc-logo">
        <div class="cc-logo-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="white" stroke-width="2"/>
            <circle cx="12" cy="12" r="6"  stroke="white" stroke-width="2"/>
            <circle cx="12" cy="12" r="2.5" fill="white"/>
          </svg>
        </div>
        <div>
          <p class="cc-logo-name">TestMyPlan</p>
          <p class="cc-logo-sub">COMMAND CENTER</p>
        </div>
      </div>

      <!-- Workspace -->
      <div class="cc-workspace">
        <div class="cc-ws-avatar">V</div>
        <div class="cc-ws-info">
          <p class="cc-ws-name">Veridian Health</p>
          <p class="cc-ws-tier">ENTERPRISE</p>
        </div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="rgba(255,255,255,0.4)" stroke-width="2" stroke-linecap="round"/></svg>
      </div>

      <!-- Nav -->
      <nav class="cc-nav">
        <a class="cc-nav-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/><rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/></svg>
          Command Center
        </a>
        <a class="cc-nav-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="2"/><line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" stroke-width="2"/><line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" stroke-width="2"/></svg>
          Plans
        </a>
        <a class="cc-nav-item cc-nav-drills">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>
          Drills
          <span class="cc-badge">1</span>
        </a>
        <a class="cc-nav-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/><line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" stroke-width="2"/><line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" stroke-width="2"/><line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" stroke-width="2"/></svg>
          Schedule
        </a>
        <a class="cc-nav-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2"/></svg>
          Team
        </a>
        <a class="cc-nav-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="2"/><polyline points="14,2 14,8 20,8" stroke="currentColor" stroke-width="2"/></svg>
          Reports
        </a>
        <a class="cc-nav-item cc-nav-active">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" stroke-width="1.5"/></svg>
          Integrations
        </a>
      </nav>

      <!-- Test channels -->
      <div class="cc-channels-label">TEST CHANNELS</div>
      <div class="cc-channel-item">
        <div class="cc-ch-avatar cc-ch-teams">T</div>
        <div class="cc-ch-info">
          <p class="cc-ch-name">Microsoft Teams</p>
          <p class="cc-ch-meta">9 channels · 142 members synced</p>
        </div>
        <span class="cc-online-dot"></span>
      </div>
      <div class="cc-channel-item">
        <div class="cc-ch-avatar cc-ch-slack">#</div>
        <div class="cc-ch-info">
          <p class="cc-ch-name">Slack</p>
          <p class="cc-ch-meta">6 channels · 118 members synced</p>
        </div>
        <span class="cc-online-dot"></span>
      </div>

      <!-- User -->
      <div class="cc-user">
        <div class="cc-user-avatar">DO</div>
        <div>
          <p class="cc-user-name">Dana Okafor</p>
          <p class="cc-user-role">Resilience Program Lead</p>
        </div>
      </div>
      <div class="cc-temp">🌤 34°C</div>
    </aside>

    <!-- ══════════════════════════════════════
         MAIN CONTENT
    ══════════════════════════════════════ -->
    <main class="cc-main">

      <!-- TOP BAR -->
      <div class="cc-topbar">
        <div class="cc-topbar-left">
          <p class="cc-topbar-breadcrumb">RESILIENCE COMMAND CENTER</p>
          <h1 class="cc-topbar-title">Readiness across every plan, in one view</h1>
        </div>
        <div class="cc-topbar-right">
          <div class="cc-search">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="#888" stroke-width="2"/><path d="M21 21l-4.35-4.35" stroke="#888" stroke-width="2"/></svg>
            <input type="text" placeholder="Search plans, drills, people..." />
            <span class="cc-search-slash">/</span>
          </div>
          <div class="cc-bell">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#555" stroke-width="2"/><path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#555" stroke-width="2"/></svg>
            <span class="cc-bell-dot"></span>
          </div>
          <button class="cc-launch-btn" @click="showLaunchModal = true">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><line x1="12" y1="5" x2="12" y2="19" stroke="white" stroke-width="2.5"/><line x1="5" y1="12" x2="19" y2="12" stroke="white" stroke-width="2.5"/></svg>
            Launch a test
          </button>
        </div>
      </div>

      <div class="cc-body">

        <!-- STATS ROW -->
        <div class="cc-stats-row">
          <div class="cc-stat-card">
            <p class="cc-stat-num">31</p>
            <p class="cc-stat-label">Plans under test</p>
            <p class="cc-stat-sub">across 5 domains</p>
          </div>
          <div class="cc-stat-card">
            <p class="cc-stat-num">21</p>
            <p class="cc-stat-label">Tested this quarter</p>
            <p class="cc-stat-sub">68% coverage</p>
          </div>
          <div class="cc-stat-card">
            <p class="cc-stat-num">3m 41s</p>
            <p class="cc-stat-label">Avg. response time</p>
            <p class="cc-stat-sub">MTTA across drills</p>
          </div>
          <div class="cc-stat-card">
            <p class="cc-stat-num">14</p>
            <p class="cc-stat-label">Open action items</p>
            <p class="cc-stat-sub">6 high severity</p>
          </div>
        </div>

        <!-- READINESS GRID (single grid, overall spans 2 rows) -->
        <div class="cc-readiness-grid">

          <!-- Overall Readiness -->
          <div class="cc-card cc-overall-card">
            <div class="cc-overall-top">
              <span class="cc-section-tiny">OVERALL READINESS</span>
              <span class="cc-improving-badge">↑ IMPROVING</span>
            </div>
            <div class="cc-gauge-large-wrap">
              <svg width="150" height="150" viewBox="0 0 150 150">
                <circle cx="75" cy="75" r="55" fill="none" stroke="#f0f0f0" stroke-width="11"
                  stroke-dasharray="259.2 86.4" stroke-dashoffset="0"
                  transform="rotate(135 75 75)" stroke-linecap="round"/>
                <circle cx="75" cy="75" r="55" fill="none" stroke="#d4a017" stroke-width="11"
                  stroke-dasharray="181.4 164.2" stroke-dashoffset="0"
                  transform="rotate(135 75 75)" stroke-linecap="round"/>
                <text x="75" y="70" text-anchor="middle" font-size="36" font-weight="500" fill="#111" font-family="Plus Jakarta Sans">74</text>
                <text x="75" y="90" text-anchor="middle" font-size="13" fill="#888" font-family="Plus Jakarta Sans">Grade B</text>
              </svg>
            </div>
            <div class="cc-overall-bottom">
              <p class="cc-pts-line"><span class="cc-pts-up">↑ 6 pts</span> <span class="cc-pts-gray">vs last quarter</span></p>
              <p class="cc-review-line">⏱ Last full review May 28, 2026</p>
            </div>
          </div>

          <!-- Cybersecurity -->
          <div class="cc-card cc-domain-card cc-border-teal">
            <div class="cc-domain-top">
              <div class="cc-domain-title-row">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2Z" stroke="#555" stroke-width="2"/></svg>
                <div>
                  <p class="cc-domain-name">Cybersecurity</p>
                  <p class="cc-domain-sub">8/9 plans tested</p>
                </div>
              </div>
              <span class="cc-status-badge cc-ready">● READY</span>
            </div>
            <div class="cc-domain-mid">
              <div class="cc-mini-gauge">
                <svg width="64" height="64" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="26" fill="none" stroke="#f0f0f0" stroke-width="5" stroke-dasharray="122.5 40.8" stroke-dashoffset="0" transform="rotate(135 32 32)" stroke-linecap="round"/>
                  <circle cx="32" cy="32" r="26" fill="none" stroke="#0d9488" stroke-width="5" stroke-dasharray="105.4 57.9" stroke-dashoffset="0" transform="rotate(135 32 32)" stroke-linecap="round"/>
                  <text x="32" y="37" text-anchor="middle" font-size="15" font-weight="600" fill="#111" font-family="Plus Jakarta Sans">86</text>
                </svg>
              </div>
              <div class="cc-domain-stats">
                <div class="cc-ds-row"><span class="cc-ds-label">TREND</span><span class="cc-ds-val cc-teal">↑ 4 pts</span></div>
                <div class="cc-ds-row"><span class="cc-ds-label">LAST TEST</span><span class="cc-ds-val">12 days ago</span></div>
                <div class="cc-ds-row"><span class="cc-ds-label">NEXT DUE</span><span class="cc-ds-val cc-teal">in 18 days</span></div>
              </div>
            </div>
            <p class="cc-domain-note">Ransomware &amp; phishing playbooks current.</p>
          </div>

          <!-- Data Privacy -->
          <div class="cc-card cc-domain-card cc-border-orange">
            <div class="cc-domain-top">
              <div class="cc-domain-title-row">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" stroke="#555" stroke-width="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#555" stroke-width="2"/></svg>
                <div>
                  <p class="cc-domain-name">Data Privacy</p>
                  <p class="cc-domain-sub">4/6 plans tested</p>
                </div>
              </div>
              <span class="cc-status-badge cc-due-soon">● DUE SOON</span>
            </div>
            <div class="cc-domain-mid">
              <div class="cc-mini-gauge">
                <svg width="64" height="64" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="26" fill="none" stroke="#f0f0f0" stroke-width="5" stroke-dasharray="122.5 40.8" stroke-dashoffset="0" transform="rotate(135 32 32)" stroke-linecap="round"/>
                  <circle cx="32" cy="32" r="26" fill="none" stroke="#f59e0b" stroke-width="5" stroke-dasharray="87 75.3" stroke-dashoffset="0" transform="rotate(135 32 32)" stroke-linecap="round"/>
                  <text x="32" y="37" text-anchor="middle" font-size="15" font-weight="600" fill="#111" font-family="Plus Jakarta Sans">71</text>
                </svg>
              </div>
              <div class="cc-domain-stats">
                <div class="cc-ds-row"><span class="cc-ds-label">TREND</span><span class="cc-ds-val cc-teal">↑ 8 pts</span></div>
                <div class="cc-ds-row"><span class="cc-ds-label">LAST TEST</span><span class="cc-ds-val">31 days ago</span></div>
                <div class="cc-ds-row"><span class="cc-ds-label">NEXT DUE</span><span class="cc-ds-val cc-orange">in 4 days</span></div>
              </div>
            </div>
            <p class="cc-domain-note">GDPR breach-notification drill due this week.</p>
          </div>

          <!-- Business Continuity -->
          <div class="cc-card cc-domain-card cc-border-red">
            <div class="cc-domain-top">
              <div class="cc-domain-title-row">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" stroke="#555" stroke-width="2" stroke-linejoin="round"/></svg>
                <div>
                  <p class="cc-domain-name">Business Continuity</p>
                  <p class="cc-domain-sub">3/7 plans tested</p>
                </div>
              </div>
              <span class="cc-status-badge cc-overdue">● OVERDUE</span>
            </div>
            <div class="cc-domain-mid">
              <div class="cc-mini-gauge">
                <svg width="64" height="64" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="26" fill="none" stroke="#f0f0f0" stroke-width="5" stroke-dasharray="122.5 40.8" stroke-dashoffset="0" transform="rotate(135 32 32)" stroke-linecap="round"/>
                  <circle cx="32" cy="32" r="26" fill="none" stroke="#ef4444" stroke-width="5" stroke-dasharray="77.2 86.1" stroke-dashoffset="0" transform="rotate(135 32 32)" stroke-linecap="round"/>
                  <text x="32" y="37" text-anchor="middle" font-size="15" font-weight="600" fill="#111" font-family="Plus Jakarta Sans">63</text>
                </svg>
              </div>
              <div class="cc-domain-stats">
                <div class="cc-ds-row"><span class="cc-ds-label">TREND</span><span class="cc-ds-val cc-red">↓ 3 pts</span></div>
                <div class="cc-ds-row"><span class="cc-ds-label">LAST TEST</span><span class="cc-ds-val">78 days ago</span></div>
                <div class="cc-ds-row"><span class="cc-ds-label">NEXT DUE</span><span class="cc-ds-val cc-red">overdue 12 days</span></div>
              </div>
            </div>
            <p class="cc-domain-note">Regional outage failover never validated.</p>
          </div>

          <!-- ESG (row 2, col 2) -->
          <div class="cc-card cc-domain-card cc-border-red">
            <div class="cc-domain-top">
              <div class="cc-domain-title-row">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z" fill="#555"/></svg>
                <div>
                  <p class="cc-domain-name">ESG</p>
                  <p class="cc-domain-sub">2/5 plans tested</p>
                </div>
              </div>
              <span class="cc-status-badge cc-overdue">● OVERDUE</span>
            </div>
            <div class="cc-domain-mid">
              <div class="cc-mini-gauge">
                <svg width="64" height="64" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="26" fill="none" stroke="#f0f0f0" stroke-width="5" stroke-dasharray="122.5 40.8" stroke-dashoffset="0" transform="rotate(135 32 32)" stroke-linecap="round"/>
                  <circle cx="32" cy="32" r="26" fill="none" stroke="#ef4444" stroke-width="5" stroke-dasharray="69.8 93.5" stroke-dashoffset="0" transform="rotate(135 32 32)" stroke-linecap="round"/>
                  <text x="32" y="37" text-anchor="middle" font-size="15" font-weight="600" fill="#111" font-family="Plus Jakarta Sans">57</text>
                </svg>
              </div>
              <div class="cc-domain-stats">
                <div class="cc-ds-row"><span class="cc-ds-label">TREND</span><span class="cc-ds-val cc-teal">↑ 2 pts</span></div>
                <div class="cc-ds-row"><span class="cc-ds-label">LAST TEST</span><span class="cc-ds-val">—</span></div>
                <div class="cc-ds-row"><span class="cc-ds-label">NEXT DUE</span><span class="cc-ds-val cc-red">overdue 6 days</span></div>
              </div>
            </div>
            <p class="cc-domain-note">Supply-chain disclosure scenario unscheduled.</p>
          </div>

          <!-- Crisis Comms -->
          <div class="cc-card cc-domain-card cc-border-teal">
            <div class="cc-domain-top">
              <div class="cc-domain-title-row">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#555" stroke-width="2"/><path d="M12 7v5l3 3" stroke="#555" stroke-width="2" stroke-linecap="round"/></svg>
                <div>
                  <p class="cc-domain-name">Crisis Comms</p>
                  <p class="cc-domain-sub">4/4 plans tested</p>
                </div>
              </div>
              <span class="cc-status-badge cc-ready">● READY</span>
            </div>
            <div class="cc-domain-mid">
              <div class="cc-mini-gauge">
                <svg width="64" height="64" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="26" fill="none" stroke="#f0f0f0" stroke-width="5" stroke-dasharray="122.5 40.8" stroke-dashoffset="0" transform="rotate(135 32 32)" stroke-linecap="round"/>
                  <circle cx="32" cy="32" r="26" fill="none" stroke="#0d9488" stroke-width="5" stroke-dasharray="110.3 53" stroke-dashoffset="0" transform="rotate(135 32 32)" stroke-linecap="round"/>
                  <text x="32" y="37" text-anchor="middle" font-size="15" font-weight="600" fill="#111" font-family="Plus Jakarta Sans">90</text>
                </svg>
              </div>
              <div class="cc-domain-stats">
                <div class="cc-ds-row"><span class="cc-ds-label">TREND</span><span class="cc-ds-val cc-teal">↑ 1 pt</span></div>
                <div class="cc-ds-row"><span class="cc-ds-label">LAST TEST</span><span class="cc-ds-val">6 days ago</span></div>
                <div class="cc-ds-row"><span class="cc-ds-label">NEXT DUE</span><span class="cc-ds-val cc-teal">in 41 days</span></div>
              </div>
            </div>
            <p class="cc-domain-note">Exec spokesperson tree verified.</p>
          </div>

        </div><!-- /cc-readiness-grid -->

        <!-- LIVE EXERCISE + RIGHT PANELS -->
        <div class="cc-bottom-row">

          <!-- Live Exercise Card -->
          <div class="cc-card cc-live-card">

            <!-- Header row -->
            <div class="cc-live-header">
              <div class="cc-live-title-row">
                <span class="cc-live-pill">● LIVE</span>
                <span class="cc-live-title">Ransomware Containment — Q2 Tabletop</span>
              </div>
              <div class="cc-live-timer-wrap">
                <span class="cc-live-time">21:41</span>
                <span class="cc-live-elapsed">ELAPSED</span>
              </div>
            </div>

            <!-- Meta row -->
            <div class="cc-live-meta">
              <div class="cc-ch-teams-badge">T</div>
              <span class="cc-live-channel">#ir-war-room</span>
              <span class="cc-live-dot-sep">·</span>
              <span class="cc-live-facilitator">Facilitated by Dana Okafor</span>
            </div>

            <!-- Progress steps bar -->
            <div class="cc-progress-bar">
              <div class="cc-pb-step cc-pb-done">
                <span class="cc-pb-num">01</span>
                <span class="cc-pb-label">Initial detection &amp; triage</span>
                <div class="cc-pb-line cc-pb-line-done"></div>
              </div>
              <div class="cc-pb-step cc-pb-done">
                <span class="cc-pb-num">02</span>
                <span class="cc-pb-label">Declare incident / activ...</span>
                <div class="cc-pb-line cc-pb-line-done"></div>
              </div>
              <div class="cc-pb-step cc-pb-done">
                <span class="cc-pb-num">03</span>
                <span class="cc-pb-label">Containment decis...</span>
                <div class="cc-pb-line cc-pb-line-done"></div>
              </div>
              <div class="cc-pb-step cc-pb-active">
                <span class="cc-pb-num">04</span>
                <span class="cc-pb-label">Stakeholder &amp; legal not</span>
                <div class="cc-pb-line cc-pb-line-active"></div>
              </div>
              <div class="cc-pb-step">
                <span class="cc-pb-num">05</span>
                <span class="cc-pb-label">Recovery &amp; validati...</span>
                <div class="cc-pb-line"></div>
              </div>
              <div class="cc-pb-step">
                <span class="cc-pb-num">06</span>
                <span class="cc-pb-label">Hot-wash debrief</span>
                <div class="cc-pb-line"></div>
              </div>
            </div>

            <!-- System notice -->
            <div class="cc-sys-notice">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="#aaa" stroke-width="2"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="#aaa" stroke-width="2"/></svg>
              <span>Exercise started on Microsoft Teams · #ir-war-room</span>
              <span class="cc-sys-time">00:00</span>
            </div>

            <!-- Chat + Participants -->
            <div class="cc-chat-section">
              <div class="cc-chat">

                <div class="cc-chat-msg">
                  <div class="cc-msg-avatar cc-av-teal">TK</div>
                  <div class="cc-msg-body">
                    <p class="cc-msg-meta">Tomas Kruger <span class="cc-msg-role">SOC ANALYST</span> <span class="cc-msg-time">01:40</span></p>
                    <div class="cc-msg-bubble">Confirmed – encryption signature matches a known variant. Isolating the 14 hosts from the network.</div>
                  </div>
                </div>
                <div class="cc-chat-divider"></div>

                <div class="cc-chat-msg">
                  <div class="cc-msg-avatar cc-av-red">SR</div>
                  <div class="cc-msg-body">
                    <p class="cc-msg-meta">Sofia Reyes <span class="cc-msg-role">IR LEAD</span> <span class="cc-msg-time">02:55</span></p>
                    <div class="cc-msg-bubble">Declaring a Sev-1. Activating the IR bridge. @James can we pull the Lab subnet without hitting clinical systems?</div>
                  </div>
                </div>
                <div class="cc-chat-divider"></div>

                <div class="cc-chat-msg">
                  <div class="cc-msg-avatar cc-av-blue">LB</div>
                  <div class="cc-msg-body">
                    <p class="cc-msg-meta">Lena Bianchi <span class="cc-msg-role">COMMS</span> <span class="cc-msg-time">05:22</span></p>
                    <div class="cc-msg-bubble">Drafting holding statement. Will not publish until containment is confirmed.</div>
                  </div>
                </div>

              </div>

              <!-- Participants -->
              <div class="cc-participants">
                <div class="cc-part-hdr">PARTICIPANTS <span class="cc-part-count">4/6 IN</span></div>
                <div class="cc-part-item">
                  <div class="cc-part-av cc-av-red">SR</div>
                  <div class="cc-part-info"><p>Sofia Reyes</p><p class="cc-part-role">IR Lead</p></div>
                  <div class="cc-part-stat"><span class="cc-dot-green"></span><span class="cc-stat-label">Responded</span><span class="cc-stat-time">41s</span></div>
                </div>
                <div class="cc-part-item">
                  <div class="cc-part-av cc-av-gray">MC</div>
                  <div class="cc-part-info"><p>Marco Castellanos</p><p class="cc-part-role">Privacy Counsel</p></div>
                  <div class="cc-part-stat"><span class="cc-dot-green"></span><span class="cc-stat-label">Responded</span><span class="cc-stat-time">73s</span></div>
                </div>
                <div class="cc-part-item">
                  <div class="cc-part-av cc-av-blue">JW</div>
                  <div class="cc-part-info"><p>James Whitfield</p><p class="cc-part-role">Infra / BC</p></div>
                  <div class="cc-part-stat"><span class="cc-typing-dots">•••</span><span class="cc-stat-label cc-typing">Typing...</span></div>
                </div>
                <div class="cc-part-item">
                  <div class="cc-part-av cc-av-blue">LB</div>
                  <div class="cc-part-info"><p>Lena Bianchi</p><p class="cc-part-role">Comms</p></div>
                  <div class="cc-part-stat"><span class="cc-dot-green"></span><span class="cc-stat-label">Responded</span><span class="cc-stat-time">58s</span></div>
                </div>
                <div class="cc-part-item">
                  <div class="cc-part-av cc-av-orange">PA</div>
                  <div class="cc-part-info"><p>Priya Adeyemi</p><p class="cc-part-role">Risk</p></div>
                  <div class="cc-part-stat"><span class="cc-dot-gray"></span><span class="cc-stat-label cc-awaiting">Awaiting</span></div>
                </div>
                <div class="cc-part-item">
                  <div class="cc-part-av cc-av-teal">TK</div>
                  <div class="cc-part-info"><p>Tomas Kruger</p><p class="cc-part-role">SOC Analyst</p></div>
                  <div class="cc-part-stat"><span class="cc-dot-green"></span><span class="cc-stat-label">Responded</span><span class="cc-stat-time">29s</span></div>
                </div>
              </div>
            </div>

            <!-- Footer -->
            <div class="cc-live-footer">
              <span class="cc-live-step-label">⚙ Step 4 of 6 · Cybersecurity</span>
              <div class="cc-live-actions">
                <button class="cc-end-btn">📄 End &amp; generate report</button>
                <button class="cc-inject-btn">⚡ Push next inject</button>
              </div>
            </div>
          </div>

          <!-- Right column -->
          <div class="cc-right-col">

            <!-- Needs Attention -->
            <div class="cc-card cc-attention-card">
              <div class="cc-attention-top">
                <span class="cc-section-tiny">NEEDS ATTENTION</span>
                <span class="cc-flagged-badge">4 FLAGGED</span>
              </div>
              <p class="cc-attention-title">Plans overdue for testing</p>
              <div class="cc-attention-list">

                <div class="cc-att-card">
                  <div class="cc-att-icon" style="background:#fff7ed"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2Z" fill="#f59e0b"/></svg></div>
                  <div class="cc-att-info">
                    <p class="cc-att-name">Regional Data-Center Failover</p>
                    <p class="cc-att-meta">Continuity · 8 participants</p>
                  </div>
                  <span class="cc-att-due cc-red">Overdue 12 days</span>
                  <button class="cc-test-btn" @click="showLaunchModal = true">▶ Test</button>
                </div>

                <div class="cc-att-card">
                  <div class="cc-att-icon" style="background:#fff1f0"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z" fill="#f87171"/></svg></div>
                  <div class="cc-att-info">
                    <p class="cc-att-name">Supply-Chain ESG Disclosure</p>
                    <p class="cc-att-meta">ESG · 6 participants</p>
                  </div>
                  <span class="cc-att-due cc-red">Overdue 6 days</span>
                  <button class="cc-test-btn" @click="showLaunchModal = true">▶ Test</button>
                </div>

                <div class="cc-att-card">
                  <div class="cc-att-icon" style="background:#eff6ff"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" fill="#93c5fd"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#3b82f6" stroke-width="2"/></svg></div>
                  <div class="cc-att-info">
                    <p class="cc-att-name">GDPR Breach Notification (72h)</p>
                    <p class="cc-att-meta">Privacy · 5 participants</p>
                  </div>
                  <span class="cc-att-due cc-orange">Due in 4 days</span>
                  <button class="cc-test-btn" @click="showLaunchModal = true">▶ Test</button>
                </div>

                <div class="cc-att-card">
                  <div class="cc-att-icon" style="background:#fefce8"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#eab308"/></svg></div>
                  <div class="cc-att-info">
                    <p class="cc-att-name">Insider Threat – Data Exfil</p>
                    <p class="cc-att-meta">Cyber · 7 participants</p>
                  </div>
                  <span class="cc-att-due cc-orange">Due in 9 days</span>
                  <button class="cc-test-btn" @click="showLaunchModal = true">▶ Test</button>
                </div>

              </div>
            </div>

            <!-- Scheduled Tests -->
            <div class="cc-card cc-scheduled-card">
              <div class="cc-sched-header">
                <div>
                  <p class="cc-section-tiny">UPCOMING</p>
                  <p class="cc-sched-title">Scheduled tests</p>
                </div>
                <a class="cc-calendar-link">Calendar ›</a>
              </div>
              <div class="cc-sched-list">
                <div class="cc-sched-item">
                  <div class="cc-sched-date"><p class="cc-sched-day">TUE</p><p class="cc-sched-num">9</p></div>
                  <div class="cc-sched-info">
                    <p class="cc-sched-name">GDPR Breach Notification</p>
                    <p class="cc-sched-ch"><span class="cc-sch-icon cc-sch-teams">T</span> #privacy-bridge · 10:00</p>
                  </div>
                  <span class="cc-tag cc-tag-privacy">PRIVACY</span>
                </div>
                <div class="cc-sched-item">
                  <div class="cc-sched-date"><p class="cc-sched-day">THU</p><p class="cc-sched-num">11</p></div>
                  <div class="cc-sched-info">
                    <p class="cc-sched-name">Regional Failover Tabletop</p>
                    <p class="cc-sched-ch"><span class="cc-sch-icon cc-sch-slack">#</span> #bc-warroom · 14:30</p>
                  </div>
                  <span class="cc-tag cc-tag-continuity">CONTINUITY</span>
                </div>
                <div class="cc-sched-item">
                  <div class="cc-sched-date"><p class="cc-sched-day">MON</p><p class="cc-sched-num">15</p></div>
                  <div class="cc-sched-info">
                    <p class="cc-sched-name">Phishing Wave Response</p>
                    <p class="cc-sched-ch"><span class="cc-sch-icon cc-sch-teams">T</span> #ir-war-room · 09:00</p>
                  </div>
                  <span class="cc-tag cc-tag-cyber">CYBER</span>
                </div>
                <div class="cc-sched-item">
                  <div class="cc-sched-date"><p class="cc-sched-day">WED</p><p class="cc-sched-num">17</p></div>
                  <div class="cc-sched-info">
                    <p class="cc-sched-name">Supply-Chain Disclosure</p>
                    <p class="cc-sched-ch"><span class="cc-sch-icon cc-sch-slack">#</span> #esg-council · 11:00</p>
                  </div>
                  <span class="cc-tag cc-tag-esg">ESG</span>
                </div>
              </div>
            </div>

          </div><!-- /right col -->
        </div><!-- /bottom row -->

        <!-- RECENT RESULTS -->
        <div class="cc-results-section">
          <div class="cc-card cc-results-card">
            <div class="cc-results-header">
              <div>
                <p class="cc-section-tiny">AFTER-ACTION</p>
                <p class="cc-results-title">Recent results</p>
              </div>
              <a class="cc-all-link">All reports ›</a>
            </div>

            <div class="cc-results-list">

              <div class="cc-result-row">
                <div class="cc-score-badge cc-score-teal">88</div>
                <div class="cc-result-info">
                  <p class="cc-result-name">Ransomware Containment</p>
                  <p class="cc-result-meta"><span class="cc-ri-icon cc-ri-teams">T</span> Cyber · May 25</p>
                </div>
                <div class="cc-result-right">
                  <div class="cc-rs-col">
                    <span class="cc-rs-val">3m 12s</span>
                    <span class="cc-rs-sub">MTTA</span>
                  </div>
                  <div class="cc-rs-col">
                    <span class="cc-rs-val cc-red">2</span>
                    <span class="cc-rs-sub">GAPS</span>
                  </div>
                </div>
              </div>

              <div class="cc-result-row">
                <div class="cc-score-badge cc-score-teal">94</div>
                <div class="cc-result-info">
                  <p class="cc-result-name">Exec Spokesperson Drill</p>
                  <p class="cc-result-meta"><span class="cc-ri-icon cc-ri-slack">#</span> Comms · May 31</p>
                </div>
                <div class="cc-result-right">
                  <div class="cc-rs-col">
                    <span class="cc-rs-val">1m 47s</span>
                    <span class="cc-rs-sub">MTTA</span>
                  </div>
                  <div class="cc-rs-col">
                    <span class="cc-rs-val cc-gray">0</span>
                    <span class="cc-rs-sub">GAPS</span>
                  </div>
                </div>
              </div>

              <div class="cc-result-row">
                <div class="cc-score-badge cc-score-orange">76</div>
                <div class="cc-result-info">
                  <p class="cc-result-name">Lost Device / PII Exposure</p>
                  <p class="cc-result-meta"><span class="cc-ri-icon cc-ri-teams">T</span> Privacy · May 6</p>
                </div>
                <div class="cc-result-right">
                  <div class="cc-rs-col">
                    <span class="cc-rs-val">6m 03s</span>
                    <span class="cc-rs-sub">MTTA</span>
                  </div>
                  <div class="cc-rs-col">
                    <span class="cc-rs-val cc-red">4</span>
                    <span class="cc-rs-sub">GAPS</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div><!-- /cc-body -->
    </main>

    <!-- ══════════════════════════════════════
         LAUNCH A TEST MODAL
    ══════════════════════════════════════ -->
    <transition name="modal-fade">
      <div v-if="showLaunchModal" class="lm-backdrop" @click.self="closeLaunchModal">
        <div class="lm-dialog">

          <!-- Modal Header -->
          <div class="lm-header">
            <div>
              <p class="lm-breadcrumb">LAUNCH A TEST</p>
              <h2 class="lm-title">New simulation exercise</h2>
            </div>
            <button class="lm-close" @click="closeLaunchModal">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="#555" stroke-width="2.2" stroke-linecap="round"/>
              </svg>
            </button>
          </div>

          <!-- Step Wizard -->
          <div class="lm-steps">
            <div class="lm-step lm-step-active">
              <span class="lm-step-num">1</span>
              <span class="lm-step-label">Domain</span>
            </div>
            <div class="lm-step-line"></div>
            <div class="lm-step">
              <span class="lm-step-num">2</span>
              <span class="lm-step-label">Scenario</span>
            </div>
            <div class="lm-step-line"></div>
            <div class="lm-step">
              <span class="lm-step-num">3</span>
              <span class="lm-step-label">Channel</span>
            </div>
            <div class="lm-step-line"></div>
            <div class="lm-step">
              <span class="lm-step-num">4</span>
              <span class="lm-step-label">Participants</span>
            </div>
          </div>

          <div class="lm-divider"></div>

          <!-- Domain Grid -->
          <div class="lm-domain-grid">

            <div
              class="lm-domain-card"
              :class="{ 'lm-selected': selectedDomain === 'cybersecurity' }"
              @click="selectedDomain = 'cybersecurity'"
            >
              <div class="lm-domain-icon" style="background:#f0fdfa">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2Z" stroke="#0d9488" stroke-width="2"/>
                </svg>
              </div>
              <p class="lm-domain-name">Cybersecurity</p>
              <p class="lm-domain-meta">9 plans · 86 score</p>
            </div>

            <div
              class="lm-domain-card"
              :class="{ 'lm-selected': selectedDomain === 'data-privacy' }"
              @click="selectedDomain = 'data-privacy'"
            >
              <div class="lm-domain-icon" style="background:#fff7ed">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="11" width="18" height="11" rx="2" stroke="#d97706" stroke-width="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#d97706" stroke-width="2"/>
                </svg>
              </div>
              <p class="lm-domain-name">Data Privacy</p>
              <p class="lm-domain-meta">6 plans · 71 score</p>
            </div>

            <div
              class="lm-domain-card"
              :class="{ 'lm-selected': selectedDomain === 'business-continuity' }"
              @click="selectedDomain = 'business-continuity'"
            >
              <div class="lm-domain-icon" style="background:#fff1f2">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" stroke="#e03030" stroke-width="2" stroke-linejoin="round"/>
                </svg>
              </div>
              <p class="lm-domain-name">Business Continuity</p>
              <p class="lm-domain-meta">7 plans · 63 score</p>
            </div>

            <div
              class="lm-domain-card"
              :class="{ 'lm-selected': selectedDomain === 'esg' }"
              @click="selectedDomain = 'esg'"
            >
              <div class="lm-domain-icon" style="background:#fff1f2">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.5 2 3 7 3 12c0 3 1.5 5.5 4 7 .5-3 2-5.5 5-7-3 1.5-4.5 4-4.5 7h9c0-3-1.5-5.5-4.5-7 3 1.5 4.5 4 5 7 2.5-1.5 4-4 4-7 0-5-3.5-10-9-10z" stroke="#e03030" stroke-width="1.8" fill="none"/>
                </svg>
              </div>
              <p class="lm-domain-name">ESG</p>
              <p class="lm-domain-meta">5 plans · 57 score</p>
            </div>

            <div
              class="lm-domain-card"
              :class="{ 'lm-selected': selectedDomain === 'crisis-comms' }"
              @click="selectedDomain = 'crisis-comms'"
            >
              <div class="lm-domain-icon" style="background:#f0fdfa">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3" stroke="#0d9488" stroke-width="2"/>
                  <path d="M6.3 6.3a8 8 0 0 0 0 11.4" stroke="#0d9488" stroke-width="2" stroke-linecap="round"/>
                  <path d="M17.7 6.3a8 8 0 0 1 0 11.4" stroke="#0d9488" stroke-width="2" stroke-linecap="round"/>
                  <path d="M3.5 3.5a15 15 0 0 0 0 17" stroke="#0d9488" stroke-width="1.5" stroke-linecap="round" opacity="0.4"/>
                  <path d="M20.5 3.5a15 15 0 0 1 0 17" stroke="#0d9488" stroke-width="1.5" stroke-linecap="round" opacity="0.4"/>
                </svg>
              </div>
              <p class="lm-domain-name">Crisis Comms</p>
              <p class="lm-domain-meta">4 plans · 90 score</p>
            </div>

          </div>

          <!-- Modal Footer -->
          <div class="lm-footer">
            <p class="lm-footer-hint">{{ selectedDomain ? domainLabels[selectedDomain] : 'Select a domain' }}</p>
            <button
              class="lm-continue-btn"
              :class="{ 'lm-continue-active': selectedDomain }"
              :disabled="!selectedDomain"
            >
              Continue
            </button>
          </div>

        </div>
      </div>
    </transition>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'CommandCenter',
  setup() {
    const showLaunchModal = ref(false)
    const selectedDomain  = ref<string | null>(null)

    const domainLabels: Record<string, string> = {
      'cybersecurity':       'Cybersecurity selected',
      'data-privacy':        'Data Privacy selected',
      'business-continuity': 'Business Continuity selected',
      'esg':                 'ESG selected',
      'crisis-comms':        'Crisis Comms selected',
    }

    function closeLaunchModal() {
      showLaunchModal.value = false
      selectedDomain.value  = null
    }

    return { showLaunchModal, selectedDomain, domainLabels, closeLaunchModal }
  }
})
</script>

<style scoped>
* { box-sizing: border-box; margin: 0; padding: 0; }

.cc-layout {
  display: flex;
  min-height: 100vh;
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: 400;
  color: var(--text-main);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f4f5f7;
}

/* ═══════════════════════════════════════
   SIDEBAR
═══════════════════════════════════════ */
.cc-sidebar {
  width: 240px;
  min-width: 240px;
  background: #16171d;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  padding-bottom: 16px;
}

.cc-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 18px 16px 14px;
  border-bottom: 1px solid rgba(255,255,255,0.07);
}
.cc-logo-icon {
  width: 38px; height: 38px;
  background: linear-gradient(135deg, #ff5f3f, #e03030);
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.cc-logo-name { font-size: 14px; font-weight: 600; color: #fff; }
.cc-logo-sub  { font-size: var(--h6);  font-weight: 600; color: rgba(255,255,255,0.35); letter-spacing: 0.1em; margin-top: 1px; }

.cc-workspace {
  display: flex;
  align-items: center;
  gap: 9px;
  margin: 10px 10px 4px;
  padding: 9px 10px;
  background: rgba(255,255,255,0.06);
  border-radius: 8px;
  cursor: pointer;
}
.cc-ws-avatar {
  width: 30px; height: 30px;
  background: linear-gradient(135deg, #ff5f3f, #e03030);
  border-radius: 7px;
  display: flex; align-items: center; justify-content: center;
  font-size: var(--text-sm); font-weight: 600; color: #fff;
  flex-shrink: 0;
}
.cc-ws-info { flex: 1; }
.cc-ws-name { font-size: var(--text-sm); font-weight: 600; color: #fff; }
.cc-ws-tier { font-size: var(--h6); font-weight: 600; color: rgba(255,255,255,0.35); letter-spacing: 0.1em; }

.cc-nav { display: flex; flex-direction: column; gap: 1px; padding: 8px 8px; }
.cc-nav-item {
  display: flex; align-items: center; gap: 10px;
  padding: 9px 10px;
  border-radius: 7px;
  font-size: var(--text-sm); font-weight: 500;
  color: rgba(255,255,255,0.5);
  cursor: pointer;
  text-decoration: none;
  transition: background 0.15s, color 0.15s;
}
.cc-nav-item:hover { background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.8); }
.cc-nav-drills { position: relative; }
.cc-badge {
  margin-left: auto;
  background: #e03030; color: #fff;
  font-size: var(--text-xs); font-weight: 600;
  width: 18px; height: 18px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
}
.cc-nav-active {
  background: rgba(255,255,255,0.07);
  color: #fff !important;
  border-left: 3px solid #e03030;
  padding-left: 7px;
}

.cc-channels-label {
  font-size: var(--text-xs); font-weight: 600;
  color: rgba(255,255,255,0.3); letter-spacing: 0.1em;
  padding: 14px 18px 6px;
}
.cc-channel-item {
  display: flex; align-items: center; gap: 9px;
  padding: 8px 12px;
  cursor: pointer;
}
.cc-ch-avatar {
  width: 30px; height: 30px; border-radius: 7px;
  display: flex; align-items: center; justify-content: center;
  font-size: var(--text-sm); font-weight: 600; color: #fff; flex-shrink: 0;
}
.cc-ch-teams { background: #5059c9; }
.cc-ch-slack { background: #4a154b; }
.cc-ch-info { flex: 1; }
.cc-ch-name { font-size: var(--text-xs); font-weight: 600; color: rgba(255,255,255,0.8); }
.cc-ch-meta { font-size: var(--text-xs); color: rgba(255,255,255,0.35); margin-top: 1px; }
.cc-online-dot {
  width: 8px; height: 8px; background: #22c55e;
  border-radius: 50%; flex-shrink: 0;
}

.cc-user {
  display: flex; align-items: center; gap: 9px;
  padding: 12px 12px 4px;
  margin-top: auto;
  border-top: 1px solid rgba(255,255,255,0.07);
}
.cc-user-avatar {
  width: 32px; height: 32px; border-radius: 50%;
  background: #3a3b44;
  display: flex; align-items: center; justify-content: center;
  font-size: var(--text-xs); font-weight: 600; color: rgba(255,255,255,0.7);
}
.cc-user-name  { font-size: var(--text-xs); font-weight: 600; color: rgba(255,255,255,0.85); }
.cc-user-role  { font-size: var(--text-xs); color: rgba(255,255,255,0.4); }
.cc-temp { font-size: var(--text-xs); color: rgba(255,255,255,0.35); padding: 4px 12px 8px; }

/* ═══════════════════════════════════════
   MAIN
═══════════════════════════════════════ */
.cc-main { flex: 1; display: flex; flex-direction: column; min-width: 0; overflow-y: auto; }

.cc-topbar {
  display: flex; align-items: flex-start; justify-content: space-between;
  padding: 18px 24px 14px;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  gap: 16px; flex-wrap: wrap;
  position: sticky; top: 0; z-index: 10;
}
.cc-topbar-breadcrumb { font-size: var(--h6); font-weight: 700; color: #e03030; letter-spacing: 0.1em; margin-bottom: 4px; }
.cc-topbar-title { font-size: var(--h4); font-weight: 500; color: #111; }
.cc-topbar-right { display: flex; align-items: center; gap: 10px; padding-top: 22px; }
.cc-search {
  display: flex; align-items: center; gap: 8px;
  background: #f4f5f7; border: 1px solid #e0e0e0;
  border-radius: 8px; padding: 8px 12px; min-width: 240px;
}
.cc-search input {
  background: none; border: none; outline: none;
  font-size: var(--text-sm); color: #555; flex: 1; font-family: inherit;
}
.cc-search-slash {
  font-size: var(--text-xs); color: #aaa; background: #e8e8e8;
  padding: 1px 5px; border-radius: 3px;
}
.cc-bell {
  position: relative; width: 38px; height: 38px;
  background: #f4f5f7; border: 1px solid #e0e0e0;
  border-radius: 8px; display: flex; align-items: center; justify-content: center;
  cursor: pointer;
}
.cc-bell-dot {
  position: absolute; top: 7px; right: 7px;
  width: 8px; height: 8px; background: #e03030; border-radius: 50%;
  border: 2px solid #f4f5f7;
}
.cc-launch-btn {
  display: flex; align-items: center; gap: 7px;
  background: #e03030; color: #fff; border: none;
  border-radius: 8px; padding: 9px 18px;
  font-size: var(--text-sm); font-weight: 600; cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s;
}
.cc-launch-btn:hover { background: #c92828; }

.cc-body { padding: 20px 24px; }

/* STATS */
.cc-stats-row {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px;
  margin-bottom: 16px;
}
.cc-stat-card {
  background: #fff; border-radius: 12px;
  padding: 18px 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.07);
}
.cc-stat-num   { font-size: 30px; font-weight: 500; color: #111; line-height: 1; margin-bottom: 6px; }
.cc-stat-label { font-size: var(--text-sm); font-weight: 500; color: #333; margin-bottom: 3px; }
.cc-stat-sub   { font-size: var(--text-xs); color: #999; }

/* READINESS GRID — Overall spans 2 rows, 5 domain cards fill remaining cells */
.cc-readiness-grid {
  display: grid;
  grid-template-columns: 220px 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 14px;
  margin-bottom: 16px;
}

.cc-card {
  background: #fff; border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.07);
}

/* Overall Readiness — spans both grid rows */
.cc-overall-card {
  padding: 16px 18px;
  grid-row: span 2;
}
.cc-overall-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
.cc-section-tiny { font-size: var(--h6); font-weight: 700; color: #aaa; letter-spacing: 0.1em; }
.cc-improving-badge {
  font-size: var(--text-xs); font-weight: 600; background: #dcfce7; color: #16a34a;
  padding: 3px 8px; border-radius: 20px;
}
.cc-gauge-large-wrap { display: flex; justify-content: center; margin: 4px 0 8px; }
.cc-overall-bottom {}
.cc-pts-line { font-size: var(--text-xs); margin-bottom: 4px; }
.cc-pts-up   { color: #16a34a; font-weight: 600; }
.cc-pts-gray { color: #888; }
.cc-review-line { font-size: var(--text-xs); color: #888; }

/* Domain cards */
.cc-domain-card { padding: 14px; }
.cc-border-teal  { border-left: 3px solid #0d9488; }
.cc-border-orange{ border-left: 3px solid #f59e0b; }
.cc-border-red   { border-left: 3px solid #ef4444; }

.cc-domain-top { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 10px; }
.cc-domain-title-row { display: flex; align-items: flex-start; gap: 8px; }
.cc-domain-name { font-size: var(--text-sm); font-weight: 600; color: #111; }
.cc-domain-sub  { font-size: var(--text-xs); color: #888; margin-top: 1px; }

.cc-status-badge { font-size: var(--h6); font-weight: 600; padding: 3px 8px; border-radius: 20px; white-space: nowrap; }
.cc-ready    { background: #dcfce7; color: #16a34a; }
.cc-due-soon { background: #fef3c7; color: #d97706; }
.cc-overdue  { background: #fee2e2; color: #dc2626; }

.cc-domain-mid { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
.cc-mini-gauge { flex-shrink: 0; }
.cc-domain-stats { flex: 1; display: flex; flex-direction: column; gap: 4px; }
.cc-ds-row { display: flex; justify-content: space-between; align-items: center; }
.cc-ds-label { font-size: var(--h6); font-weight: 600; color: #aaa; letter-spacing: 0.07em; }
.cc-ds-val   { font-size: var(--text-xs); font-weight: 600; color: #333; }
.cc-teal     { color: #0d9488 !important; }
.cc-orange   { color: #d97706 !important; }
.cc-red      { color: #dc2626 !important; }
.cc-gray     { color: #888 !important; }

.cc-domain-note { font-size: var(--text-xs); color: #777; line-height: 1.4; }

/* ═══════════════════════════════════════
   BOTTOM ROW
═══════════════════════════════════════ */
.cc-bottom-row {
  display: grid; grid-template-columns: 1fr 380px; gap: 16px; margin-bottom: 16px;
}

/* LIVE EXERCISE */
.cc-live-card { padding: 18px 20px; }

.cc-live-header {
  display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 8px;
}
.cc-live-title-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.cc-live-pill {
  background: #dc2626; color: #fff; font-size: var(--text-xs); font-weight: 600;
  padding: 3px 10px; border-radius: 20px; white-space: nowrap;
  animation: live-pulse 1.5s infinite;
}
@keyframes live-pulse { 0%,100% { opacity:1; } 50% { opacity:0.7; } }
.cc-live-title { font-size: var(--text-md); font-weight: 600; color: #111; }
.cc-live-timer-wrap { text-align: right; flex-shrink: 0; }
.cc-live-time  { font-size: 26px; font-weight: 500; color: #111; display: block; line-height: 1; }
.cc-live-elapsed { font-size: var(--text-xs); color: #888; letter-spacing: 0.07em; }

.cc-live-meta { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; }
.cc-ch-teams-badge {
  width: 20px; height: 20px; background: #5059c9; border-radius: 5px;
  display: flex; align-items: center; justify-content: center;
  font-size: var(--text-xs); font-weight: 600; color: #fff; flex-shrink: 0;
}
.cc-live-channel { font-size: var(--text-sm); font-weight: 600; color: #3b82f6; }
.cc-live-dot-sep { color: #ccc; }
.cc-live-facilitator { font-size: var(--text-xs); color: #888; }

/* Progress bar steps */
.cc-progress-bar {
  display: flex; gap: 0; margin-bottom: 0;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 0;
}
.cc-pb-step {
  flex: 1; display: flex; flex-direction: column;
  align-items: flex-start; padding: 8px 8px 0;
  position: relative;
  min-width: 0;
}
.cc-pb-num {
  font-size: var(--text-xs); font-weight: 600; color: #bbb; margin-bottom: 2px;
}
.cc-pb-label {
  font-size: var(--text-xs); color: #888; white-space: nowrap;
  overflow: hidden; text-overflow: ellipsis; max-width: 100%;
  margin-bottom: 8px;
}
.cc-pb-line {
  position: absolute; bottom: 0; left: 0; right: 0;
  height: 3px; background: #e8e8e8; border-radius: 2px;
}
.cc-pb-line-done   { background: #0d9488; }
.cc-pb-line-active { background: #e03030; }
.cc-pb-done .cc-pb-num   { color: #0d9488; }
.cc-pb-done .cc-pb-label { color: #555; }
.cc-pb-active .cc-pb-num   { color: #e03030; font-weight: 500; }
.cc-pb-active .cc-pb-label { color: #111; font-weight: 600; }

/* System notice */
.cc-sys-notice {
  display: flex; align-items: center; gap: 8px;
  padding: 8px 0;
  border-bottom: 1px solid #f4f5f7;
  margin-bottom: 12px;
}
.cc-sys-notice span { font-size: var(--text-xs); color: #aaa; flex: 1; }
.cc-sys-time { font-size: var(--text-xs); color: #ccc; flex: none !important; }

/* Chat */
.cc-chat-section { display: flex; gap: 14px; margin-bottom: 14px; }
.cc-chat { flex: 1; display: flex; flex-direction: column; gap: 0; min-width: 0; }
.cc-chat-msg { display: flex; gap: 12px; padding: 12px 0; }
.cc-chat-divider { height: 1px; background: #f0f0f0; }
.cc-msg-avatar {
  width: 38px; height: 38px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: var(--text-xs); font-weight: 600; color: #fff; flex-shrink: 0;
  background: #e8e8e8;
}
.cc-av-teal   { background: #0d9488; }
.cc-av-red    { background: #e03030; }
.cc-av-blue   { background: #3b82f6; }
.cc-av-orange { background: #f59e0b; }
.cc-av-gray   { background: #6b7280; }
.cc-msg-body  { flex: 1; min-width: 0; }
.cc-msg-meta  { font-size: var(--text-xs); color: #111; font-weight: 600; margin-bottom: 6px; display: flex; align-items: center; gap: 8px; }
.cc-msg-role  { font-size: var(--h6); color: #aaa; font-weight: 500; letter-spacing: 0.07em; }
.cc-msg-time  { font-size: var(--text-xs); color: #bbb; font-weight: 400; }
.cc-msg-bubble {
  font-size: var(--text-sm); color: #333; line-height: 1.5;
  background: #f8f8f8; border-radius: 0 10px 10px 10px;
  padding: 10px 14px;
}

/* Participants */
.cc-participants {
  width: 230px; flex-shrink: 0;
  background: #f9f9f9; border-radius: 12px;
  padding: 12px 14px;
  border: 1px solid #efefef;
}
.cc-part-hdr {
  font-size: var(--h6); font-weight: 600; color: #aaa;
  letter-spacing: 0.08em; margin-bottom: 10px;
  display: flex; justify-content: space-between;
}
.cc-part-count { color: #0d9488; }
.cc-part-item {
  display: flex; align-items: center; gap: 10px;
  padding: 8px 0; border-bottom: 1px solid #efefef;
}
.cc-part-item:last-child { border-bottom: none; }
.cc-part-av {
  width: 38px; height: 38px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: var(--text-xs); font-weight: 600; color: #fff; flex-shrink: 0;
}
.cc-part-info { flex: 1; min-width: 0; }
.cc-part-info p { font-size: var(--text-xs); font-weight: 600; color: #222; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.cc-part-role { font-size: var(--text-xs); color: #888; font-weight: 400; }
.cc-part-stat { display: flex; flex-direction: column; align-items: flex-end; gap: 1px; flex-shrink: 0; }
.cc-dot-green, .cc-dot-gray {
  width: 8px; height: 8px; border-radius: 50%; display: inline-block; margin-bottom: 1px;
}
.cc-dot-green { background: #22c55e; }
.cc-dot-gray  { background: #d1d5db; }
.cc-stat-label { font-size: var(--text-xs); color: #22c55e; font-weight: 600; }
.cc-stat-time  { font-size: var(--text-xs); color: #888; }
.cc-typing-dots { color: #3b82f6; font-weight: 600; font-size: var(--text-sm); letter-spacing: 1px; }
.cc-stat-label.cc-typing  { color: #3b82f6; }
.cc-stat-label.cc-awaiting { color: #9ca3af; }

/* Live footer */
.cc-live-footer {
  display: flex; align-items: center; justify-content: space-between;
  padding-top: 14px; border-top: 1px solid #f0f0f0; margin-top: 4px;
}
.cc-live-step-label { font-size: var(--text-xs); color: #888; }
.cc-live-actions { display: flex; gap: 8px; }
.cc-end-btn {
  padding: 9px 16px; font-size: var(--text-xs); font-weight: 600;
  border: 1.5px solid #d0d0d0; border-radius: 8px;
  background: #fff; color: #333; cursor: pointer;
}
.cc-inject-btn {
  padding: 9px 16px; font-size: var(--text-xs); font-weight: 600;
  border: none; border-radius: 8px;
  background: #e03030; color: #fff; cursor: pointer;
  display: flex; align-items: center; gap: 6px;
}

/* RIGHT COLUMN */
.cc-right-col { display: flex; flex-direction: column; gap: 14px; }

/* Needs Attention */
.cc-attention-card { padding: 16px 18px; }
.cc-attention-top  { display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px; }
.cc-flagged-badge  {
  background: #fee2e2; color: #dc2626;
  font-size: var(--text-xs); font-weight: 600; padding: 3px 10px; border-radius: 20px;
}
.cc-attention-title { font-size: var(--text-md); font-weight: 600; color: #111; margin-bottom: 14px; }
.cc-attention-list { display: flex; flex-direction: column; gap: 8px; }
.cc-att-card {
  display: flex; align-items: center; gap: 12px;
  background: #fff; border: 1px solid #efefef;
  border-radius: 12px; padding: 12px 14px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}
.cc-att-icon {
  width: 38px; height: 38px; border-radius: 10px;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.cc-att-info { flex: 1; min-width: 0; }
.cc-att-name { font-size: var(--text-sm); font-weight: 600; color: #111; line-height: 1.3; }
.cc-att-meta { font-size: var(--text-xs); color: #888; margin-top: 2px; }
.cc-att-due  { font-size: var(--text-xs); font-weight: 600; white-space: nowrap; flex-shrink: 0; }
.cc-test-btn {
  font-size: var(--text-xs); font-weight: 600; padding: 6px 12px;
  border: 1.5px solid #e0e0e0; border-radius: 8px;
  background: #fff; cursor: pointer; white-space: nowrap;
  color: #444; display: flex; align-items: center; gap: 4px; flex-shrink: 0;
}
.cc-test-btn:hover { background: #f8f8f8; }

/* Scheduled */
.cc-scheduled-card { padding: 16px 18px; }
.cc-sched-header   { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px; }
.cc-sched-title    { font-size: var(--text-md); font-weight: 600; color: #111; margin-top: 3px; }
.cc-calendar-link  { font-size: var(--text-xs); color: #3b82f6; cursor: pointer; text-decoration: none; white-space: nowrap; padding-top: 22px; }
.cc-sched-list     { display: flex; flex-direction: column; gap: 12px; }
.cc-sched-item     { display: flex; align-items: center; gap: 12px; }
.cc-sched-date     { text-align: center; min-width: 36px; }
.cc-sched-day      { font-size: var(--h6); font-weight: 600; color: #aaa; letter-spacing: 0.05em; }
.cc-sched-num      { font-size: 20px; font-weight: 500; color: #111; line-height: 1; }
.cc-sched-info     { flex: 1; }
.cc-sched-name     { font-size: var(--text-sm); font-weight: 600; color: #111; }
.cc-sched-ch       { font-size: var(--text-xs); color: #888; margin-top: 2px; display: flex; align-items: center; gap: 5px; }
.cc-sch-icon {
  width: 16px; height: 16px; border-radius: 4px;
  display: inline-flex; align-items: center; justify-content: center;
  font-size: var(--h6); font-weight: 600; color: #fff; flex-shrink: 0;
}
.cc-sch-teams { background: #5059c9; }
.cc-sch-slack { background: #4a154b; }
.cc-tag { font-size: var(--text-xs); font-weight: 600; padding: 4px 10px; border-radius: 6px; white-space: nowrap; background: #f0f0f0; color: #555; }
.cc-tag-privacy    { background: #f3e8ff; color: #7c3aed; }
.cc-tag-continuity { background: #ffe4e6; color: #e11d48; }
.cc-tag-cyber      { background: #dbeafe; color: #1d4ed8; }
.cc-tag-esg        { background: #dcfce7; color: #15803d; }

/* ═══════════════════════════════════════
   LAUNCH A TEST MODAL
═══════════════════════════════════════ */
.lm-backdrop {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.45);
  display: flex; align-items: center; justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(2px);
}

.lm-dialog {
  background: #fff;
  border-radius: 20px;
  width: 780px;
  max-width: 94vw;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 24px 80px rgba(0,0,0,0.22), 0 8px 24px rgba(0,0,0,0.12);
  display: flex;
  flex-direction: column;
}

/* Header */
.lm-header {
  display: flex; align-items: flex-start; justify-content: space-between;
  padding: 28px 28px 20px;
}
.lm-breadcrumb {
  font-size: var(--h6); font-weight: 700; color: #e03030;
  letter-spacing: 0.12em; margin-bottom: 6px;
}
.lm-title {
  font-size: var(--h4); font-weight: 500; color: #111;
}
.lm-close {
  width: 36px; height: 36px;
  background: #f4f5f7; border: none;
  border-radius: 9px; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  transition: background 0.15s;
}
.lm-close:hover { background: #e8e8e8; }

/* Steps */
.lm-steps {
  display: flex; align-items: center;
  padding: 0 28px 20px;
  gap: 0;
}
.lm-step {
  display: flex; align-items: center; gap: 8px;
  flex-shrink: 0;
}
.lm-step-num {
  width: 26px; height: 26px; border-radius: 50%;
  background: #f0f0f0; color: #aaa;
  font-size: var(--text-xs); font-weight: 600;
  display: flex; align-items: center; justify-content: center;
}
.lm-step-label {
  font-size: var(--text-sm); color: #aaa; font-weight: 500;
}
.lm-step-active .lm-step-num {
  background: #e03030; color: #fff;
}
.lm-step-active .lm-step-label {
  color: #111; font-weight: 600;
}
.lm-step-line {
  flex: 1; height: 1px; background: #e8e8e8;
  margin: 0 12px;
}

.lm-divider {
  height: 1px; background: #f0f0f0;
  margin: 0 0 24px;
}

/* Domain grid */
.lm-domain-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding: 0 28px 24px;
}

.lm-domain-card {
  border: 1.5px solid #e8e8e8;
  border-radius: 14px;
  padding: 20px;
  cursor: pointer;
  transition: border-color 0.18s, box-shadow 0.18s, background 0.18s;
  background: #fff;
}
.lm-domain-card:hover {
  border-color: #d0d0d0;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
}
.lm-domain-card.lm-selected {
  border-color: #e03030;
  background: #fff8f8;
  box-shadow: 0 0 0 3px rgba(224,48,48,0.08);
}

.lm-domain-icon {
  width: 46px; height: 46px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 14px;
}
.lm-domain-name {
  font-size: var(--text-md); font-weight: 600; color: #111; margin-bottom: 5px;
}
.lm-domain-meta {
  font-size: var(--text-xs); color: #888;
}

/* Footer */
.lm-footer {
  display: flex; align-items: center; justify-content: space-between;
  padding: 16px 28px 24px;
  border-top: 1px solid #f0f0f0;
  background: #fafafa;
  border-radius: 0 0 20px 20px;
}
.lm-footer-hint {
  font-size: var(--text-sm); color: #aaa;
}
.lm-continue-btn {
  padding: 11px 28px;
  border-radius: 10px;
  border: none;
  font-size: 14px; font-weight: 600;
  background: #e8e8e8; color: #aaa;
  cursor: not-allowed;
  transition: background 0.2s, color 0.2s;
}
.lm-continue-btn.lm-continue-active {
  background: #e03030; color: #fff;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(224,48,48,0.3);
}
.lm-continue-btn.lm-continue-active:hover {
  background: #c92828;
}

/* Modal transition */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}
.modal-fade-enter-active .lm-dialog,
.modal-fade-leave-active .lm-dialog {
  transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-from .lm-dialog {
  transform: translateY(20px) scale(0.97);
}
.modal-fade-leave-to .lm-dialog {
  transform: translateY(10px);
  opacity: 0;
}

/* RECENT RESULTS */
.cc-results-section { margin-bottom: 20px; }
.cc-results-card { padding: 20px 24px; }
.cc-results-header {
  display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px;
}
.cc-results-title { font-size: var(--text-lg); font-weight: 600; color: #111; margin-top: 4px; }
.cc-all-link { font-size: var(--text-sm); color: #555; cursor: pointer; padding-top: 26px; }
.cc-all-link:hover { color: #111; }
.cc-results-list { display: flex; flex-direction: column; }

.cc-result-row {
  display: flex; align-items: center; gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid #f0f0f0;
}
.cc-result-row:last-child { border-bottom: none; padding-bottom: 0; }
.cc-result-row:first-child { padding-top: 0; }

.cc-score-badge {
  width: 52px; height: 52px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  font-size: 19px; font-weight: 500; flex-shrink: 0;
  border: 2.5px solid;
}
.cc-score-teal   { border-color: #0d9488; color: #0d9488; background: #f0fdfa; }
.cc-score-orange { border-color: #f59e0b; color: #f59e0b; background: #fffbeb; }

.cc-result-info  { flex: 1; }
.cc-result-name  { font-size: var(--text-base); font-weight: 600; color: #111; margin-bottom: 4px; }
.cc-result-meta  { font-size: var(--text-xs); color: #888; display: flex; align-items: center; gap: 5px; }
.cc-ri-icon {
  width: 16px; height: 16px; border-radius: 4px;
  display: inline-flex; align-items: center; justify-content: center;
  font-size: var(--h6); font-weight: 600; color: #fff; flex-shrink: 0;
}
.cc-ri-teams { background: #5059c9; }
.cc-ri-slack  { background: #4a154b; }

.cc-result-right {
  display: flex; gap: 28px; align-items: center; flex-shrink: 0;
}
.cc-rs-col {
  text-align: right; display: flex; flex-direction: column; gap: 2px;
}
.cc-rs-val   { font-size: 17px; font-weight: 600; color: #111; line-height: 1; }
.cc-rs-sub   { font-size: var(--text-xs); color: #aaa; letter-spacing: 0.08em; font-weight: 600; }
</style>
