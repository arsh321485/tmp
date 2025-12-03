<template>
    <div id="top">
        <MainNavbar />

        <!-- HERO TOP -->
        <section class="hero-top">
            <div class="container">
                <div class="hero-top-inner">
                    <div class="hero-top-left">
                        <h1 class="hero-heading">
                            <span class="hero-heading-line">Incident Management</span>
                            <span class="hero-heading-line">
                                Preparedness
                                <span class="hero-word-gradient">testing as easy as</span>
                            </span>
                            <span class="hero-heading-line hero-word-gradient">
                                email
                            </span>
                        </h1>
                    </div>

                    <div class="hero-top-right">
                        <p class="hero-description">
                            Turn plans on paper into confident action. Run realistic drills, train teams, measure
                            readiness of your teams.
                        </p>

                        <p class="hero-description">
                            Don't let your first test be a real crisis. We turn static plans into involuntary muscle
                            memory with the our preparedness platform.
                        </p>
                        <button class="hero-cta-btn">
                            <!-- <span class="hero-cta-icon">✦</span> -->
                            <span>CTA</span>
                            <span class="hero-cta-icon"><i class="bi bi-arrow-right"></i></span>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- ========== UNIQUE SELLING POINTS ========== -->
        <section class="selling-section">
            <div class="container">
                <!-- big heading only -->
                <div class="selling-header">
                    <h2 class="selling-heading">
                        WHY TMP?
                    </h2>
                </div>

                <!-- Insert this right after .selling-header -->
                <div class="selling-painpoints-wrapper">
                    <ul class="selling-painpoints" id="sellingPainpoints">
                        <li class="painpoint">
                            <span class="pp-icon" aria-hidden="true">➤</span>
                            <div class="pp-text">Teams don’t know their roles or when to act.</div>
                        </li>
                        <li class="painpoint">
                            <span class="pp-icon" aria-hidden="true">➤</span>
                            <div class="pp-text">Recollection of what to do is fuzzy during stress.</div>
                        </li>
                        <li class="painpoint">
                            <span class="pp-icon" aria-hidden="true">➤</span>
                            <div class="pp-text">Managers lack a clear view of threats, causes, dependencies and
                                readiness.</div>
                        </li>
                        <li class="painpoint">
                            <span class="pp-icon" aria-hidden="true">➤</span>
                            <div class="pp-text">Running drills is manual, takes weeks or months.</div>
                        </li>
                        <li class="painpoint">
                            <span class="pp-icon" aria-hidden="true">➤</span>
                            <div class="pp-text">Effectiveness of tests is not measured.</div>
                        </li>
                    </ul>
                </div>


                <!-- 4-column features -->
                <div class="row selling-grid">
                    <!-- 1 -->
                    <div class="col-md-6 col-lg-3 selling-col">
                        <div>
                            <h3 class="selling-title">The "Dusty Binder" Syndrome</h3>
                            <p class="selling-text">
                                You have comprehensive plans for Cyber Security and Business Continuity. But if they sit
                                in a folder, they aren't plans—they are theories.
                            </p>
                        </div>
                        <div class="selling-icon-box">
                            <span class="selling-icon-inner">📁</span>
                        </div>
                    </div>

                    <!-- 2 -->
                    <div class="col-md-6 col-lg-3 selling-col">
                        <div>
                            <h3 class="selling-title">The 24/7 vs. 8x5 Disconnect</h3>
                            <p class="selling-text">
                                Attacks happen 24/7. Your response is likely 8x5. Most teams are unaware of their
                                specific roles when a crisis hits at 2 AM.
                            </p>
                        </div>
                        <div class="selling-icon-box">
                            <span class="selling-icon-inner">⏰</span>
                        </div>
                    </div>

                    <!-- 3 -->
                    <div class="col-md-6 col-lg-3 selling-col">
                        <div>
                            <h3 class="selling-title">The Compliance Gap</h3>
                            <p class="selling-text">
                                "Plans are not tested" is a top audit failure. Manual coordination takes weeks. We
                                measure effectiveness instantly, ensuring you never fail an audit on "Preparedness."

                            </p>
                        </div>
                        <div class="selling-icon-box">
                            <span class="selling-icon-inner">📋</span>
                        </div>
                    </div>

                    <!-- 4 -->
                    <div class="col-md-6 col-lg-3 selling-col">
                        <div>
                            <h3 class="selling-title">Proven track record</h3>
                            <p class="selling-text">
                                Showcase successful case studies or client testimonials that demonstrate
                                the effectiveness of your services.
                            </p>
                        </div>
                        <div class="selling-icon-box">
                            <span class="selling-icon-inner">📊</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!--  How it works -->
        <section class="steps-hero">
            <div class="container">
                <div class="row gy-4 align-items-center">
                    <!-- LEFT: Steps -->
                    <div class="col-12 col-lg-6 steps-left">
                        <div class="steps-title">How it works</div>

                        <ul class="steps-list" role="tablist" aria-orientation="vertical">
                            <li class="mb-2" v-for="step in steps" :key="step.id">
                                <button class="step-btn" :class="{ active: activePane === step.pane }"
                                    @click="activate(step.pane, $event)" :aria-expanded="activePane === step.pane"
                                    type="button">
                                    <span class="num">{{ step.num }}</span>
                                    <span class="label">
                                        <strong>{{ step.title }}</strong>
                                        <div class="d-none d-md-inline-block ms-2 small text-muted">— {{ step.sub }}
                                        </div>
                                    </span>
                                </button>

                            </li>
                        </ul>
                    </div>

                    <!-- RIGHT: Content panes -->
                    <div class="col-12 col-lg-6">
                        <div class="step-content">
                            <div v-for="step in steps" :key="step.pane" :id="step.pane" class="content-pane"
                                :class="{ active: activePane === step.pane }">
                                <div class="video-placeholder">
                                    <img :src="step.img" :alt="step.title" style="max-width:92%; border-radius:12px;" />
                                </div>

                                <div class="step-card-body">
                                    <div class="step-card-title">{{ step.num }}. {{ step.title }}</div>
                                    <div class="step-card-desc">{{ step.desc }}</div>
                                </div>
                            </div>
                        </div> <!-- step-content -->
                    </div>
                </div>
            </div>
        </section>

        <!-- modules details -->
        <section class="usecases-section">
            <div class="container">
                <div class="intro">
                    <!-- <div class="eyebrow">AI USE CASES</div> -->
                    <h1 class="heading">Module Details</h1>
                    <p class="sub">
                        Not sure where to start with AI and agents? These teams have AI handling real
                        work, right now.
                    </p>
                </div>

                <!-- Tabs -->
                <div class="tabs-row" role="tablist" aria-label="Use case categories">
                    <button v-for="tab in tabs" :key="tab.id" class="tab-btn" :class="{ active: activeTab === tab.id }"
                        role="tab" :aria-selected="activeTab === tab.id" :tabindex="activeTab === tab.id ? 0 : -1"
                        @click="activateTab(tab.id)">
                        {{ tab.label }}
                    </button>
                </div>

                <!-- Active content -->
                <div class="tab-content">
                    <div class="content-grid">
                        <div class="content-left">
                            <h2 class="content-title">{{ currentTab.title }}</h2>
                            <p class="content-lead">{{ currentTab.lead }}</p>

                            <ul class="content-points">
                                <li v-for="(p, i) in currentTab.points" :key="i">{{ p }}</li>
                            </ul>
                        </div>

                        <div class="content-right">
                            <img :src="currentTab.image" :alt="currentTab.title" class="content-media" />
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!-- Animation video tab Why it Works -->

      <section class="bp-section">
    <div class="container-fluid">
      <!-- headers row -->
      <div class="row bp-headers gx-0">
        <div class="col-6 bp-col">
          <div class="bp-header">Bear the bottleneck</div>
        </div>
        <div class="col-6 bp-col">
          <div class="bp-header">Or use Zapier</div>
        </div>
      </div>

      <!-- main content -->
      <div class="row bp-main gx-0">
        <!-- LEFT: animated scattered pile -->
        <div class="col-6 bp-column bp-left">
          <div class="bp-pile-area" ref="pileArea">
            <transition-group name="bp-left" tag="div" class="bp-pile">
              <button
                v-for="(p, idx) in leftPills"
                :key="p.id"
                v-show="show"
                class="bp-pill bp-pill-scattered"
                :style="pillStyle(p, idx)"
                type="button"
                aria-hidden="true"
              >
                <span class="bp-index">{{ p.num }}</span>
                <span class="bp-text">{{ p.text }}</span>
              </button>
            </transition-group>
          </div>
        </div>

        <!-- RIGHT: stacked pills -->
        <div class="col-6 bp-column bp-right">
          <div class="bp-stack-area">
            <transition-group name="bp-stack" tag="div" class="bp-stack">
              <button
                v-for="(t, i) in rightPills"
                :key="t"
                v-show="show"
                class="bp-pill bp-pill-stack-item"
                :style="{ transitionDelay: (i * 160) + 'ms' }"
                type="button"
                aria-hidden="true"
              >
                <span class="bp-index">{{ toCircled(i+1) }}</span>
                <span class="bp-text">{{ t }}</span>
              </button>
            </transition-group>
          </div>
        </div>
      </div>
    </div>

    <!-- sticky CTA like screenshot -->
    <div class="bp-cta-bar">
      <div class="container-fluid">
        <div class="row gx-0">
          <div class="col-9"></div>
          <div class="col-3 d-flex justify-content-end align-items-center">
            <button class="bp-cta-btn">Start automating today →</button>
          </div>
        </div>
      </div>
    </div>
  </section>

        <!-- ========== HERO BANNER STRIP ========== -->
        <section class="hero-banner-section">
            <div class="container">
                <div class="hero-banner-wrapper">
                    <!-- background image -->
                    <div class="hero-banner-image">
                        <img src="https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt="Neural pattern background" />
                    </div>

                    <!-- left controls -->
                    <div class="hero-banner-controls">
                        <div class="hero-banner-controls-inner">
                            <span>↰</span>
                            <span>↲</span>
                        </div>
                    </div>

                    <!-- center logo -->
                    <div class="hero-banner-center">
                        <div class="hero-banner-mark">
                            <span class="hero-banner-symbol">⋯</span>
                            <span class="hero-banner-wordmark">NEUROS</span>
                        </div>
                    </div>

                    <!-- right watch video pill -->
                    <div class="hero-banner-video">
                        <button class="hero-banner-video-btn" type="button">
                            <span class="hero-banner-video-icon-wrap">
                                <span class="hero-banner-video-icon">▶</span>
                            </span>
                            <span>Watch video</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- ========== HERO MAIN – UNLEASHING ========= -->
        <section class="hero-main">
            <!-- left abstract shapes -->
            <div class="hero-main-blob-big"></div>
            <div class="hero-main-circle"></div>
            <div class="hero-main-circle-small"></div>

            <div class="container">
                <div class="hero-main-inner">
                    <div class="hero-main-heading-wrapper">
                        <h2 class="hero-main-heading">
                            <span>Unleashing the</span>
                            <span>Potential of</span>
                            <span class="hero-main-gradient-line">Artificial</span>
                            <span class="hero-main-gradient-line">Inelegance</span>
                            <span>for</span>
                            <span>Intelligent</span>
                            <span>Solutions</span>
                        </h2>

                        <div class="hero-main-logos">
                            <div class="hero-main-logo">Metriks Data Center</div>
                            <div class="hero-main-logo">QUO Legal Firm</div>
                            <div class="hero-main-logo">AGRIMAX</div>
                            <div class="hero-main-logo">WS Studio</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <!-- ========== SPECIAL FEATURES GRID (NEW) ========== -->
        <section id="features" class="features-section">
            <div class="container">
                <!-- HEADER -->
                <div class="features-header d-flex flex-wrap justify-content-between align-items-end gap-3">
                    <div>
                        <div class="features-breadcrumb">/ services /</div>
                        <h2 class="features-title">
                            Special neural features<br />
                            for your services
                        </h2>
                    </div>
                    <button class="features-explore-btn">
                        Explore more
                    </button>
                </div>

                <!-- TOP GRID -->
                <div class="row g-4 align-items-stretch">
                    <!-- Left tall card -->
                    <div class="col-lg-4">
                        <article class="feature-card feature-card-tall">
                            <div class="feature-card-bg-cover">
                                <img src="https://images.pexels.com/photos/17483868/pexels-photo-17483868/free-photo-of-neon-lights-abstract.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                    alt="AI strategy background" />
                            </div>
                            <div class="feature-card-overlay"></div>
                            <div class="feature-card-inner feature-card-content">
                                <div>
                                    <h3 class="feature-card-title">AI Strategy and Consulting</h3>
                                    <p class="feature-card-text">
                                        Provide expert guidance on developing an AI strategy and
                                        integrating AI into your business processes.
                                    </p>
                                </div>
                            </div>
                            <div class="feature-card-arrow">›</div>
                        </article>
                    </div>

                    <!-- Middle tall card -->
                    <div class="col-lg-4">
                        <article class="feature-card feature-card-mid">
                            <div class="feature-card-bg-cover">
                                <img src="https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                    alt="Machine learning background" />
                            </div>
                            <div class="feature-card-overlay"></div>
                            <div class="feature-card-inner feature-card-content">
                                <div>
                                    <h3 class="feature-card-title">Machine Learning Solutions</h3>
                                    <p class="feature-card-text">
                                        Develop and deploy custom machine learning models to extract
                                        insights and make predictions from your data.
                                    </p>
                                </div>
                            </div>
                            <div class="feature-card-arrow">›</div>
                        </article>
                    </div>

                    <!-- Right column cards -->
                    <div class="col-lg-4">
                        <div class="features-right-col">
                            <!-- NLP card -->
                            <article class="feature-card-nlp">
                                <div class="feature-card-nlp-pattern"></div>
                                <h3 class="feature-card-nlp-title">Natural Language Processing</h3>
                                <p class="feature-card-nlp-text">
                                    Understand and generate human-like language across channels.
                                </p>
                                <div class="feature-card-nlp-count">250+</div>
                                <div class="feature-card-nlp-note">
                                    Active users every day
                                </div>
                                <div class="feature-card-arrow" style="background:#111827;color:#fff;">›</div>
                            </article>

                            <!-- slim gradient strip -->
                            <div class="feature-card-strip"></div>

                            <!-- OpenAI bar -->
                            <article class="feature-card-openai">
                                <span>OpenAI&nbsp;— Powered by</span>
                                <div class="feature-card-arrow" style="right:18px; bottom:14px;">›</div>
                            </article>
                        </div>
                    </div>
                </div>

                <!-- BOTTOM WIDE CARD -->
                <div class="row g-4 mt-3 align-items-stretch">
                    <div class="col-lg-8">
                        <article class="feature-card-wide">
                            <div class="feature-card-wide-bg">
                                <img src="https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                    alt="Integration background" />
                            </div>
                            <div class="feature-card-wide-inner">
                                <h3 class="feature-card-wide-title">
                                    AI Integration and Deployment
                                </h3>
                                <p class="feature-card-wide-text">
                                    Assist in seamlessly integrating AI solutions into your existing
                                    systems and deploying them at scale.
                                </p>
                                <div class="feature-card-wide-icons">
                                    <span>💬</span>
                                    <span>📞</span>
                                    <span>✉️</span>
                                    <span>🎮</span>
                                </div>
                            </div>
                            <div class="feature-card-wide-arrow">›</div>
                        </article>
                    </div>

                    <div class="col-lg-4 d-none d-lg-block">
                        <!-- optional blank column to mimic layout spacing -->
                    </div>
                </div>
            </div>

            <!-- ========== CROSS SCROLLING BANNERS ========== -->
            <section class="cross-banner-section">
                <div class="cross-banner banner-red">
                    <div class="scroll-text">
                        Building the future of technology. / Artificial Intelligence / Neural Networks /
                    </div>
                </div>

                <div class="cross-banner banner-dark">
                    <div class="scroll-text">
                        Building the future of technology. / Artificial Intelligence / Neural Networks /
                    </div>
                </div>
            </section>

        </section>


        <!-- ========== DARK NEURAL ABOUT HERO ========= -->
        <section class="neural-section">
            <div class="container">
                <div class="neural-card">
                    <!-- big outline word + AI tag -->
                    <div class="neural-word-mark">Neuro</div>
                    <div class="neural-word-tag">AI</div>

                    <!-- LEFT SIDE -->
                    <div class="neural-left">
                        <div class="neural-breadcrumb">/ about /</div>

                        <h2 class="neural-heading">
                            Welcome to new era
                            <br />
                            of Neural networks
                        </h2>

                        <!-- red stripes + person -->
                        <div class="neural-figure">
                            <div class="neural-figure-bg"></div>

                            <div class="neural-figure-person">
                                <img src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="AI specialist" />
                            </div>
                        </div>
                    </div>

                    <!-- RIGHT SIDE -->
                    <div class="neural-right">
                        <p>
                            Artificial Intelligence refers to the development of computer systems that can
                            perform tasks that would typically require human intelligence. It involves the
                            creation of algorithms and models that enable machines to learn, reason,
                            perceive, and make decisions.
                        </p>

                        <p>
                            There are generally two types of AI: Narrow or Weak AI, which is designed to
                            perform specific tasks, and General or Strong AI, which possesses human-level
                            intelligence and can handle a wide range of tasks.
                        </p>

                        <button class="neural-btn" type="button">
                            <span class="neural-btn-icon">›</span>
                            <span>Explore more</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>



        <!-- ========== PRICING ========= -->
        <section class="pricing-section" id="pricing">
            <div class="container">
                <div class="row gy-5 pricing-layout">
                    <!-- LEFT TEXT -->
                    <div class="col-lg-4">
                        <div class="pricing-eyebrow">/ pricing /</div>
                        <h2 class="pricing-title">
                            Simple and flexible.<br />
                            Only pay for<br />
                            what you use.
                        </h2>
                    </div>

                    <!-- RIGHT CARDS -->
                    <div class="col-lg-8">
                        <div class="pricing-cards-stack">
                            <!-- BASIC PLAN -->
                            <article class="pricing-card pricing-card-basic">
                                <div class="pricing-main-info">
                                    <div class="pricing-plan-heading">
                                        <h3 class="plan-name">Basic</h3>
                                        <p class="plan-tagline">Great for private individuals</p>
                                    </div>

                                    <ul class="pricing-features">
                                        <li>1 User</li>
                                        <li>Unlimited Projects</li>
                                        <li>Download prototypes</li>
                                        <li>1 Gb workspace</li>
                                    </ul>
                                </div>

                                <div class="pricing-price-block">
                                    <div class="plan-price">Free</div>
                                    <button type="button" class="btn-pricing-outline-pill">
                                        <span class="arrow">›</span>
                                        <span>Get started</span>
                                    </button>
                                </div>
                            </article>

                            <!-- PREMIUM PLAN -->
                            <article class="pricing-card pricing-card-premium">
                                <div class="pricing-popular-label">Popular</div>

                                <div class="pricing-main-info">
                                    <div class="pricing-plan-heading">
                                        <h3 class="plan-name">Premium</h3>
                                        <p class="plan-note">14 days free period</p>
                                    </div>

                                    <ul class="pricing-features">
                                        <li>3 Users</li>
                                        <li>Unlimited Projects</li>
                                        <li>Download prototypes</li>
                                        <li>100 Gb workspace</li>
                                    </ul>
                                </div>

                                <div class="pricing-price-block">
                                    <div class="plan-price">
                                        $99<span class="period">/mo</span>
                                    </div>
                                    <button type="button" class="btn-pricing-solid">
                                        <span class="arrow">›</span>
                                        <span>Get started</span>
                                    </button>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!-- ========== TESTIMONIAL ========= -->
        <section class="testimonial-section">
            <div class="container">
                <div class="testimonial-shell">
                    <div class="testimonial-content">
                        <!-- LEFT – QUOTE CARD -->
                        <article class="testimonial-quote-card">
                            <div>
                                <div class="testimonial-quote-icon">❝</div>
                                <p class="testimonial-quote-text">
                                    Working withNeuro has been a game-changer for our business. Their AI
                                    solutions have revolutionized our operations, enabling us to automate
                                    repetitive tasks and make data-driven decisions with ease. We couldn't
                                    be happier with the results."
                                </p>
                            </div>
                            <div class="testimonial-author">
                                – John Anderson, CEO of XYZ Company
                            </div>
                        </article>

                        <!-- RIGHT – HEADING + METRIC -->
                        <div class="testimonial-right">
                            <div>
                                <div class="testimonial-eyebrow">/ testimonials /</div>
                                <h3 class="testimonial-heading">
                                    Hear what our customers say about our AI solutions
                                </h3>
                            </div>

                            <div class="testimonial-metric">
                                <div class="testimonial-metric-number">250+</div>
                                <div class="testimonial-metric-label">Happy clients</div>
                            </div>
                        </div>
                    </div>

                    <!-- BOTTOM NAV BUTTONS -->
                    <div class="testimonial-nav">
                        <div class="testimonial-nav-inner">
                            <button type="button" class="testimonial-nav-btn">‹</button>
                            <button type="button" class="testimonial-nav-btn">›</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!-- ========== FAQ ========= -->
        <section class="faq-section" id="faq">
            <div class="container">
                <div class="faq-shell">
                    <!-- header -->
                    <div class="faq-header">
                        <div class="faq-eyebrow">/ faq /</div>
                        <h2 class="faq-title">Everything you need to know about</h2>
                    </div>

                    <!-- accordion -->
                    <div id="faqAccordion" class="faq-list">
                        <!-- Q1 -->
                        <div class="faq-item">
                            <button class="faq-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#faqOne"
                                aria-expanded="true" aria-controls="faqOne">
                                <span class="faq-number">01</span>
                                <span class="faq-question">What is Artificial Intelligence?</span>
                                <span class="faq-arrow">▴</span>
                            </button>
                            <div id="faqOne" class="collapse show" data-bs-parent="#faqAccordion">
                                <div class="faq-answer">
                                    Artificial Intelligence (AI) refers to systems that can perform
                                    tasks which usually require human intelligence: understanding
                                    language, recognizing patterns, making decisions, and learning
                                    from data. At Neuros we focus on practical, business-ready AI
                                    powered by modern neural networks.
                                </div>
                            </div>
                        </div>

                        <!-- Q2 -->
                        <div class="faq-item">
                            <button class="faq-toggle collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#faqTwo" aria-expanded="false" aria-controls="faqTwo">
                                <span class="faq-number">02</span>
                                <span class="faq-question">
                                    How does Machine Learning relate to Artificial Intelligence?
                                </span>
                                <span class="faq-arrow">▴</span>
                            </button>
                            <div id="faqTwo" class="collapse" data-bs-parent="#faqAccordion">
                                <div class="faq-answer">
                                    Machine Learning (ML) is a subset of AI focused on algorithms that
                                    learn from data rather than being explicitly programmed. Many of
                                    our solutions combine ML, large language models, and traditional
                                    software engineering to deliver robust systems.
                                </div>
                            </div>
                        </div>

                        <!-- Q3 -->
                        <div class="faq-item">
                            <button class="faq-toggle collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#faqThree" aria-expanded="false" aria-controls="faqThree">
                                <span class="faq-number">03</span>
                                <span class="faq-question">
                                    Is Artificial Intelligence replacing human jobs?
                                </span>
                                <span class="faq-arrow">▴</span>
                            </button>
                            <div id="faqThree" class="collapse" data-bs-parent="#faqAccordion">
                                <div class="faq-answer">
                                    Our philosophy is augmentation over replacement. We automate
                                    repetitive work so your teams can focus on strategic, creative and
                                    relationship-driven tasks. We design each deployment with humans
                                    in the loop and clear control mechanisms.
                                </div>
                            </div>
                        </div>

                        <!-- Q4 -->
                        <div class="faq-item">
                            <button class="faq-toggle collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#faqFour" aria-expanded="false" aria-controls="faqFour">
                                <span class="faq-number">04</span>
                                <span class="faq-question">
                                    What are the different types of Artificial Intelligence?
                                </span>
                                <span class="faq-arrow">▴</span>
                            </button>
                            <div id="faqFour" class="collapse" data-bs-parent="#faqAccordion">
                                <div class="faq-answer">
                                    Broadly, AI systems can be grouped into narrow AI designed for
                                    specific tasks, and more general AI that can handle a wide range
                                    of tasks with human-like flexibility. In practice, today’s
                                    business systems mostly use narrow AI tailored to particular
                                    problems.
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Explore more button -->
                    <div class="faq-more-wrap">
                        <button type="button" class="faq-more-btn">
                            <span class="faq-more-btn-icon">›</span>
                            <span>Explore more</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>


        <!-- ========== BLOG / INSIGHTS ========= -->
        <section class="blog-section" id="blog">
            <div class="container">
                <div class="row align-items-start blog-header-row">
                    <div class="col-lg-8">
                        <div class="blog-eyebrow">/ blog /</div>
                        <h2 class="blog-heading">
                            Exploring the frontiers of artificial Intelligence:
                            Insights, innovations and impact
                        </h2>
                    </div>
                    <div class="col-lg-4 blog-more-wrap mt-3 mt-lg-0">
                        <button type="button" class="blog-more-btn">
                            <span class="blog-more-icon">›</span>
                            <span>More articles</span>
                        </button>
                    </div>
                </div>

                <div class="row g-4">
                    <!-- Article 1 -->
                    <div class="col-md-6">
                        <article class="blog-card">
                            <div class="blog-thumb">
                                <img src="https://images.pexels.com/photos/17483868/pexels-photo-17483868/free-photo-of-neon-lights-abstract.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                    alt="Is Artificial Intelligence accessible to businesses of all sizes" />
                                <div class="blog-date-pill">5 Jan 2024 / andrew</div>
                            </div>
                            <div class="blog-body">
                                <h3 class="blog-title">
                                    Is Artificial Intelligence accessible to businesses of all sizes
                                </h3>
                                <p class="blog-excerpt">
                                    Yes, AI solutions are becoming increasingly accessible to businesses.
                                </p>
                                <div class="blog-meta">/ AI / Business /</div>
                            </div>
                        </article>
                    </div>

                    <!-- Article 2 -->
                    <div class="col-md-6">
                        <article class="blog-card">
                            <div class="blog-thumb">
                                <img src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                    alt="How can I get started with AI for my business?" />
                                <div class="blog-date-pill">19 Feb 2024 / andrew</div>
                            </div>
                            <div class="blog-body">
                                <h3 class="blog-title">
                                    How can I get started with Artificial Intelligence for my business?
                                </h3>
                                <p class="blog-excerpt">
                                    Practical steps to evaluate use-cases, choose tools and launch your first AI
                                    project.
                                </p>
                                <div class="blog-meta">/ AI / Business /</div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>


        <!-- ========== CONTACT / GET IN TOUCH ========= -->
        <section class="contact-section" id="contact">
            <div class="container">
                <div class="row gy-5 align-items-start">
                    <!-- LEFT SIDE -->
                    <div class="col-lg-6">
                        <div class="contact-left-eyebrow">/ get in touch /</div>
                        <h2 class="contact-left-title">
                            We are always ready to help you and answer your questions
                        </h2>
                        <p class="contact-left-text">
                            Pacific hake false trevally queen parrotfish black prickleback
                            mosshead warbonnet sweeper. Greenling sleeper.
                        </p>

                        <div class="contact-info-columns">
                            <div class="contact-info-block">
                                <div class="contact-info-block-title">Call Center</div>
                                <p>800 100 975 20 34</p>
                                <p>+ (123) 1800-234-5678</p>
                                <p style="margin-top: 10px;">800 100 975 20 34</p>
                                <p>+ (123) 1800-234-5678</p>
                            </div>

                            <div class="contact-info-block">
                                <div class="contact-info-block-title">Our Location</div>
                                <p>USA, New York – 1060</p>
                                <p>Str. First Avenue 1</p>
                                <p style="margin-top: 10px;">USA, New York – 1060</p>
                                <p>Str. First Avenue 1</p>
                            </div>

                            <div class="contact-info-block">
                                <div class="contact-info-block-title">Email</div>
                                <p><a href="mailto:neuros@mail.co">neuros@mail.co</a></p>
                            </div>

                            <div class="contact-info-block">
                                <div class="contact-info-block-title">Social network</div>
                                <p>f &nbsp; x &nbsp; in &nbsp; ⧉</p>
                            </div>
                        </div>
                    </div>

                    <!-- RIGHT SIDE – WHITE CARD -->
                    <div class="col-lg-6">
                        <div class="contact-panel">
                            <div class="contact-panel-title">Get in Touch</div>
                            <p class="contact-panel-text">
                                Define your goals and identify areas where AI can add value to
                                your business.
                            </p>

                            <form class="contact-form-modern">
                                <div class="mb-3">
                                    <input type="text" class="form-control" placeholder="Full name" />
                                </div>
                                <div class="mb-3">
                                    <input type="email" class="form-control" placeholder="Email" />
                                </div>
                                <div class="mb-3">
                                    <input type="text" class="form-control" placeholder="Subject" />
                                </div>
                                <div class="mb-1">
                                    <textarea rows="3" class="form-control" placeholder="Message"></textarea>
                                </div>

                                <div class="contact-submit-wrap">
                                    <button type="submit" class="contact-submit-btn">
                                        <span class="contact-submit-icon-wrap">›</span>
                                        <span>Send a message</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!-- FOOTER -->
        <MainFooter />
    </div>
</template>




<!-- 
<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "../components/MainNavbar.vue";
import MainFooter from "../components/MainFooter.vue";

/** Step shape */
interface Step {
    id: number;
    num: string;
    pane: string;
    title: string;
    sub: string;
    img: string;
    desc: string;
}


/** Component instance extension for typed access to runtime props & observer */
interface HomeViewInstance {
    _sellingObserver?: IntersectionObserver;
    steps: Step[];
    activePane: string;
}

export default defineComponent({
    name: "HomeView",

    components: {
        MainNavbar,
        MainFooter,
    },

    data() {
        const steps: Step[] = [
            {
                id: 1,
                num: "01",
                pane: "pane-1",
                title: "Record once",
                sub: "Record in app or upload",
                img: "https://via.placeholder.com/640x360.png?text=Video+Placeholder",
                desc:
                    "Find a great light source, angle, and talking points. Record directly in-app or upload pre-recorded videos. Use the recorded clip multiple times across templates.",
            },
            {
                id: 2,
                num: "02",
                pane: "pane-2",
                title: "Choose",
                sub: "Choose templates & clips",
                img: "https://via.placeholder.com/640x360.png?text=Choose+Placeholder",
                desc:
                    "Pick templates and styles that match your brand. Preview how your recorded clip maps into different formats.",
            },
            {
                id: 3,
                num: "03",
                pane: "pane-3",
                title: "Build",
                sub: "Combine & edit",
                img: "https://via.placeholder.com/640x360.png?text=Build+Placeholder",
                desc:
                    "Drag & drop components, add captions and CTAs. No-code editing with instant previews.",
            },
            {
                id: 4,
                num: "04",
                pane: "pane-4",
                title: "Share",
                sub: "Publish instantly",
                img: "https://via.placeholder.com/640x360.png?text=Share+Placeholder",
                desc:
                    "Publish to multiple channels, or export video files. Track delivery from one dashboard.",
            },
            {
                id: 5,
                num: "05",
                pane: "pane-5",
                title: "Streamline",
                sub: "Automate workflows",
                img: "https://via.placeholder.com/640x360.png?text=Streamline+Placeholder",
                desc:
                    "Automate recurring tasks and schedule content. Optimize repeatable workflows for scale.",
            },
        ];

        return {
            steps,
            activePane: "pane-1",
        };
    },

    mounted(): void {
        // --- Selling-points IntersectionObserver logic ---
        const list = document.getElementById("sellingPainpoints");
        if (list) {
            if (!("IntersectionObserver" in window)) {
                // fallback: add class immediately
                list.classList.add("in-view");
            } else {
                const observer = new IntersectionObserver(
                    (entries, obs) => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                list.classList.add("in-view");
                                obs.unobserve(entry.target);
                            }
                        }
                    },
                    { threshold: 0.18 }
                );

                observer.observe(list);

                // store typed observer on the instance for cleanup
                (this as unknown as HomeViewInstance)._sellingObserver = observer;
            }
        }

        // --- Steps: handle hash deep link if present ---
        const hash = window.location.hash.replace("#", "");
        if (hash) {
            const instance = this as unknown as HomeViewInstance;
            const exists = instance.steps.find((s) => s.pane === hash);
            if (exists) {
                instance.activePane = hash;
            }
        }
    },

    beforeUnmount(): void {
        const instance = this as unknown as HomeViewInstance;
        if (instance._sellingObserver) {
            instance._sellingObserver.disconnect();
            instance._sellingObserver = undefined;
        }
    },

    methods: {
        /**
         * Activate a content pane (steps)
         * @param targetId string id of the pane, e.g. "pane-2"
         * @param e optional Event (click)
         */
        activate(targetId: string, e?: Event): void {
            const instance = this as unknown as HomeViewInstance;
            instance.activePane = targetId;

            // On small screens scroll content into view for better UX
            if (window.innerWidth < 992) {
                this.$nextTick(() => {
                    const pane = document.getElementById(targetId);
                    if (pane) {
                        pane.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                });
            }

            // update the hash without jumping
            try {
                history.replaceState(null, "", `#${targetId}`);
            } catch {
                // ignore if history API blocked
            }

            // prevent default navigation if event present
            e?.preventDefault();
        },
    },
});
</script> -->


<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "../components/MainNavbar.vue";
import MainFooter from "../components/MainFooter.vue";

/** Step shape */
interface Step {
    id: number;
    num: string;
    pane: string;
    title: string;
    sub: string;
    img: string;
    desc: string;
}

/** Tab shape */
interface Tab {
    id: string;
    label: string;
    title: string;
    lead: string;
    points: string[];
    image: string;
}
/** single pill for left pile */
/** single pill for left pile */
interface LeftPill {
  id: string;
  num: string;
  text: string;
  // final placement (px) relative to pile container: left (x) and bottom (y)
  left: number;
  bottom: number;
  rot: number;
}
/** Component instance extension for typed access to runtime props & observer */
interface HomeViewInstance {
    _sellingObserver?: IntersectionObserver;
    steps: Step[];
    activePane: string;
    tabs: Tab[];
    activeTab: string;
}

export default defineComponent({
    name: "HomeView",

    components: {
        MainNavbar,
        MainFooter,
    },

    data() {
        const steps: Step[] = [
            {
                id: 1,
                num: "01",
                pane: "pane-1",
                title: "Record once",
                sub: "Record in app or upload",
                img: "https://via.placeholder.com/640x360.png?text=Video+Placeholder",
                desc:
                    "Find a great light source, angle, and talking points. Record directly in-app or upload pre-recorded videos. Use the recorded clip multiple times across templates.",
            },
            {
                id: 2,
                num: "02",
                pane: "pane-2",
                title: "Choose",
                sub: "Choose templates & clips",
                img: "https://via.placeholder.com/640x360.png?text=Choose+Placeholder",
                desc:
                    "Pick templates and styles that match your brand. Preview how your recorded clip maps into different formats.",
            },
            {
                id: 3,
                num: "03",
                pane: "pane-3",
                title: "Build",
                sub: "Combine & edit",
                img: "https://via.placeholder.com/640x360.png?text=Build+Placeholder",
                desc:
                    "Drag & drop components, add captions and CTAs. No-code editing with instant previews.",
            },
            {
                id: 4,
                num: "04",
                pane: "pane-4",
                title: "Share",
                sub: "Publish instantly",
                img: "https://via.placeholder.com/640x360.png?text=Share+Placeholder",
                desc:
                    "Publish to multiple channels, or export video files. Track delivery from one dashboard.",
            },
            {
                id: 5,
                num: "05",
                pane: "pane-5",
                title: "Streamline",
                sub: "Automate workflows",
                img: "https://via.placeholder.com/640x360.png?text=Streamline+Placeholder",
                desc:
                    "Automate recurring tasks and schedule content. Optimize repeatable workflows for scale.",
            },
        ];

        const tabs: Tab[] = [
            {
                id: "marketing",
                label: "CS",
                title: "Drive campaigns with smarter creative",
                lead:
                    "Automate A/B tests, generate tailored ad copy, and use data-driven insights to optimize channel performance.",
                points: [
                    "Generate 10+ ad variants from one brief",
                    "Personalize creatives by audience segments",
                    "Measure uplift automatically and iterate fast",
                ],
                image: "https://via.placeholder.com/720x420.png?text=Marketing+Image",
            },
            {
                id: "sales",
                label: "BC ",
                title: "Coach your team to close more deals",
                lead:
                    "Give your sales team a leg up with personalized, data-driven coaching after every call—helping them close more deals without expanding your team.",
                points: [
                    "Automated call summarization and coaching tips",
                    "Deal-risk signals surfaced in real time",
                    "Follow-up automation with calibrated messaging",
                ],
                image: "https://via.placeholder.com/720x420.png?text=Sales+Image",
            },
            {
                id: "product",
                label: "DP",
                title: "Ship features faster and smarter",
                lead:
                    "Use AI to prioritize bugs, synthesize user feedback, and expedite prototyping cycles so your product team moves from insight to iteration faster.",
                points: [
                    "Auto-prioritize backlog by impact",
                    "Generate user-story drafts from research",
                    "Prototype concepts with AI-driven suggestions",
                ],
                image: "https://via.placeholder.com/720x420.png?text=Product+Image",
            },
            {
                id: "it",
                label: "ES",
                title: "Make ops and support proactive",
                lead:
                    "Reduce toil with auto-triage, root-cause suggestions, and runbooks that update themselves when your system changes.",
                points: [
                    "Auto-triage incidents and suggest fixes",
                    "Self-updating runbooks for common outages",
                    "Predictive alerts to avoid downtime",
                ],
                image: "https://via.placeholder.com/720x420.png?text=IT+Image",
            },
        ];

        const leftPills: LeftPill[] = [
      { id: "p1", num: "①", text: "Have an idea", left: 18, bottom: 12, rot: -2 },
      { id: "p2", num: "②", text: "Submit a ticket to IT", left: 86, bottom: 26, rot: -6 },
      { id: "p3", num: "③", text: "Wait (they're swamped)", left: 150, bottom: 42, rot: 8 },
      { id: "p4", num: "④", text: "Follow up (they're still swamped).", left: 220, bottom: 64, rot: -8 },
      { id: "p5", num: "⑤", text: "Meet to clarify requirements.", left: 280, bottom: 86, rot: 6 },
      { id: "p6", num: "⑥", text: "Add it to the backlog", left: 340, bottom: 108, rot: -14 },
      { id: "p7", num: "⑦", text: "Wait weeks (or months)", left: 180, bottom: 128, rot: 14 },
      { id: "p8", num: "⑧", text: "See a prototype (it's not quite right)", left: 80, bottom: 148, rot: -18 },
      { id: "p9", num: "⑨", text: "Repeat", left: 260, bottom: 170, rot: 28 }
    ];

        
    const rightPills: string[] = [
      "Have an idea",
      "IT says go for it",
      "You go for it"
    ];

        return {
            steps,
            activePane: "pane-1",
            tabs,
            activeTab: "sales", // default selected tab
            // show toggles entrance animation
            show: false as boolean,
            leftPills,
            rightPills,

        };
    },

    computed: {
        // return current tab; always produces a Tab (fallback to first)
        currentTab(): Tab {
            const instance = this as unknown as HomeViewInstance;
            const found = instance.tabs.find((t) => t.id === instance.activeTab);
            // cast is safe because tabs array is defined in data() and non-empty
            return (found ?? instance.tabs[0]) as Tab;
        },
    },

    mounted(): void {
        // --- Selling-points IntersectionObserver logic ---
        const list = document.getElementById("sellingPainpoints");
        if (list) {
            if (!("IntersectionObserver" in window)) {
                list.classList.add("in-view");
            } else {
                const observer = new IntersectionObserver(
                    (entries, obs) => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                list.classList.add("in-view");
                                obs.unobserve(entry.target);
                            }
                        }
                    },
                    { threshold: 0.18 }
                );

                observer.observe(list);
                (this as unknown as HomeViewInstance)._sellingObserver = observer;
            }
        }

        // read hash for initial selection (tabs or steps)
        const hash = window.location.hash.replace("#", "");
        if (hash) {
            const instance = this as unknown as HomeViewInstance;

            // if matches a step pane
            const stepExists = instance.steps.some((s) => s.pane === hash);
            if (stepExists) instance.activePane = hash;

            // if matches a tab id
            const tabExists = instance.tabs.some((t) => t.id === hash);
            if (tabExists) instance.activeTab = hash;
        }
        // you can increase delay if you want a slower start
        setTimeout(() => {
            this.show = true;
        }, 110);
    },

    beforeUnmount(): void {
        const instance = this as unknown as HomeViewInstance;
        if (instance._sellingObserver) {
            instance._sellingObserver.disconnect();
            instance._sellingObserver = undefined;
        }
    },

    methods: {
        /**
         * Activate a content pane (steps)
         */
        activate(targetId: string, e?: Event): void {
            const instance = this as unknown as HomeViewInstance;
            instance.activePane = targetId;

            if (window.innerWidth < 992) {
                this.$nextTick(() => {
                    const pane = document.getElementById(targetId);
                    if (pane) pane.scrollIntoView({ behavior: "smooth", block: "start" });
                });
            }

            try {
                history.replaceState(null, "", `#${targetId}`);
            } catch {
                /* ignore */
            }

            e?.preventDefault();
        },

        /**
         * Activate a tab (Marketing / Sales / ...)
         */
        activateTab(tabId: string): void {
            const instance = this as unknown as HomeViewInstance;
            instance.activeTab = tabId;

            try {
                history.replaceState(null, "", `#${tabId}`);
            } catch {
                /* ignore */
            }

            if (window.innerWidth < 992) {
                this.$nextTick(() => {
                    const el = this.$el as HTMLElement;
                    const content = el.querySelector(".tab-content");
                    if (content) (content as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
                });
            }
        },
        // style object for left scattered pill final transform + stagger
  pillStyle(p: LeftPill, idx: number): Record<string, string> {
      const style: Record<string, string> = {
        left: `${p.left}px`,
        bottom: `${p.bottom}px`,
        // we set initial transform to translateY(-260px) so pills fly in from above
        transform: `translateY(-260px) rotate(0deg)`,
        // final rotation passed in custom property
        "--rot": `${p.rot}deg`,
        // stagger entrance
        transitionDelay: `${idx * 120}ms`,
      };

      return style;
    },


    // helper: convert 1,2,3 to circled numbers (① ② ③)
    toCircled(n: number): string {
      const map: Record<number, string> = { 1: "①", 2: "②", 3: "③", 4: "④", 5: "⑤" };
      return map[n] ?? `${n}`;
    }
    },
});
</script>
