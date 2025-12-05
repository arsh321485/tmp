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
                            Don’t wait for a real incident to discover gaps. Convert your plans into involuntary,
                            repeatable muscle memory with our preparedness platform.
                        </p>

                        <button class="hero-cta-btn">
                            <!-- <span class="hero-cta-icon">✦</span> -->
                            <span>Start Preparedness Now</span>
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
                    <!-- <h2 class="selling-heading wow fadeInUp" data-wow-delay="0.1s">
                        WHY TMP?
                    </h2> -->
                    <h2 class="selling-heading wow animate__animated animate__fadeInUp" data-wow-delay="2s">
                        WHY Test My Plan (TMP) ?
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
                            <h3 class="selling-title">The False Sense of Security Problem</h3>
                            <p class="selling-text">
                                Organizations believe they are prepared because plans exist. But without real-world
                                validation, leadership has no visibility into actual readiness, hidden dependencies, or
                                team performance under pressure.

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

                <!-- DESKTOP HEADERS ROW: visible on md+ only -->
                <div class="row bp-headers gx-0 d-none d-md-flex">
                    <div class="col-6 bp-col">
                        <div class="bp-header"> Manual → Bottleneck</div>
                    </div>
                    <div class="col-6 bp-col">
                        <div class="bp-header">Automated → Orchestrated</div>
                    </div>
                </div>

                <!-- MAIN: both columns present; note mobile-only headers inside columns below -->
                <div class="row bp-main gx-0">
                    <!-- LEFT: will be full width on small screens -->
                    <div class="col-12 col-md-6 bp-column bp-left">
                        <!-- MOBILE HEADER (shown only on small screens) -->
                        <div class="bp-header d-block d-md-none text-center mb-2">Manual → Bottleneck</div>

                        <div class="bp-pile-area">
                            <div class="bp-pile" aria-hidden="true">
                                <button class="pill" data-order="1"><span class="idx">①</span><span
                                        class="text">External coordination testing</span></button>
                                <button class="pill" data-order="2"><span class="idx">②</span><span class="text">Paper
                                        plans</span></button>
                                <button class="pill" data-order="3"><span class="idx">③</span><span
                                        class="text">Continual testing of plans</span></button>
                                <button class="pill" data-order="4"><span class="idx">④</span><span class="text">Not
                                        aware</span></button>
                                <button class="pill" data-order="5"><span class="idx">⑤</span><span class="text">No
                                        clear dependencies</span></button>
                                <button class="pill" data-order="6"><span class="idx">⑥</span><span class="text">Lack of
                                        matrics</span></button>
                                <button class="pill" data-order="7"><span class="idx">⑦</span><span class="text">Team
                                        unaware of roles</span></button>
                                <button class="pill" data-order="8"><span class="idx">⑧</span><span
                                        class="text">Communication issues</span></button>
                                <button class="pill" data-order="9"><span class="idx">⑨</span><span class="text">Peocess
                                        steps</span></button>
                            </div>
                        </div>
                    </div>

                    <!-- RIGHT: on mobile this column appears below left content so its mobile header will be after left pills -->
                    <div class="col-12 col-md-6 bp-column bp-right">
                        <!-- MOBILE HEADER (only on small screens) -->
                        <div class="bp-header d-block d-md-none text-center mb-2">Automated → Orchestrated</div>

                        <div class="bp-stack-area">
                            <div class="bp-stack" aria-hidden="true">
                                <div class="stack-item"><span class="idx">①</span><span>Executable Plans</span></div>
                                <div class="stack-item"><span class="idx">②</span><span>Clear Roles</span></div>
                                <div class="stack-item"><span class="idx">③</span><span>Communication Real Readiness
                                        Insights</span></div>
                            </div>
                        </div>
                    </div>
                </div> <!-- /bp-main -->
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
                                <span class="faq-question">What is TestMyPlan (TMP)?</span>
                                <span class="faq-arrow">▴</span>
                            </button>
                            <div id="faqOne" class="collapse show" data-bs-parent="#faqAccordion">
                                <div class="faq-answer">
                                    TMP is an automated incident preparedness platform that converts your Cybersecurity,
                                    Business Continuity, Data Privacy, and ESG plans into executable workflows,
                                    real-world scenarios, and measurable readiness insights.
                                </div>
                            </div>
                        </div>

                        <!-- Q2 -->
                        <div class="faq-item">
                            <button class="faq-toggle collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#faqTwo" aria-expanded="false" aria-controls="faqTwo">
                                <span class="faq-number">02</span>
                                <span class="faq-question">
                                    How is TMP different from traditional tabletop drills?
                                </span>
                                <span class="faq-arrow">▴</span>
                            </button>
                            <div id="faqTwo" class="collapse" data-bs-parent="#faqAccordion">
                                <div class="faq-answer">
                                    Tabletops rely on manual coordination, static documents, and subjective evaluations.
                                    TMP automates the entire process — from scenario execution to communication, role
                                    assignment, and reporting — making preparedness continuous, measurable, and
                                    repeatable.
                                </div>
                            </div>
                        </div>

                        <!-- Q3 -->
                        <div class="faq-item">
                            <button class="faq-toggle collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#faqThree" aria-expanded="false" aria-controls="faqThree">
                                <span class="faq-number">03</span>
                                <span class="faq-question">
                                    Do I need to upload my plans to get started?
                                </span>
                                <span class="faq-arrow">▴</span>
                            </button>
                            <div id="faqThree" class="collapse" data-bs-parent="#faqAccordion">
                                <div class="faq-answer">
                                    No. You can upload your plans or start with our pre-built threat and incident
                                    templates. TMP’s Threat Agent can also guide you in selecting scenarios based on
                                    your industry and technology environment.
                                </div>
                            </div>
                        </div>

                        <!-- Q4 -->
                        <div class="faq-item">
                            <button class="faq-toggle collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#faqFour" aria-expanded="false" aria-controls="faqFour">
                                <span class="faq-number">04</span>
                                <span class="faq-question">
                                    We already have documented plans. Why do we need TMP?
                                </span>
                                <span class="faq-arrow">▴</span>
                            </button>
                            <div id="faqFour" class="collapse" data-bs-parent="#faqAccordion">
                                <div class="faq-answer">
                                    Most plans are never tested or are tested only annually. TMP ensures your plans are
                                    validated continuously, uncovering gaps, clarifying roles, and showing how your
                                    teams actually respond under pressure.
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

        <!-- Banner with aimation -->
        <div class="container-fluid">
            <section id="heroSection"
                class="hero-banner position-relative d-flex align-items-center justify-content-center text-center"
                style="--bg-url: url('https://ethiqual.co.in/wp-content/uploads/2025/03/Emergency-Preparedness-768x692.png?utm_source=chatgpt.com');">
                <div class="overlay"></div>

                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-10 col-lg-8">

                            <h1 class="hero-title">
                                Plans on paper don’t save you. Practice does.
                            </h1>

                            <a href="#drill" class="btn  hero-cta">
                                Launch a 2-minute drill
                            </a>

                        </div>
                    </div>
                </div>
            </section>
        </div>








        <MainContact />
        <!-- FOOTER -->
        <MainFooter />
    </div>
</template>







<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "../components/MainNavbar.vue";
import MainFooter from "../components/MainFooter.vue";
import MainContact from "@/components/MainContact.vue";

/** Step shape */
interface Step {
    id: number;
    num: string;
    pane: string;
    title: string;
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
        MainContact
    },

    data() {
        const steps: Step[] = [
            {
                id: 1,
                num: "01",
                pane: "pane-1",
                title: "Sign up",
                img: "https://via.placeholder.com/640x360.png?text=Video+Placeholder",
                desc:
                    "Create your workspace in seconds using SSO or email. No setup barriers — just log in and get started instantly.",
            },
            {
                id: 2,
                num: "02",
                pane: "pane-2",
                title: "Configure users & teams",
                img: "https://via.placeholder.com/640x360.png?text=Choose+Placeholder",
                desc:
                    "Add your teams and assign them to communication channels like Slack, Teams, or Mattermost. Everyone is mapped, reachable, and ready for action.",
            },
            {
                id: 3,
                num: "03",
                pane: "pane-3",
                title: " Configure threats",
                img: "https://via.placeholder.com/640x360.png?text=Build+Placeholder",
                desc:
                    "Use the built-in Threat Agent to identify what needs testing. It recommends relevant threats and helps you configure precise, context-aware scenarios.",
            },
            {
                id: 4,
                num: "04",
                pane: "pane-4",
                title: "Initiate preparedness",
                img: "https://via.placeholder.com/640x360.png?text=Share+Placeholder",
                desc:
                    "Launch tests with just a few clicks. TMP orchestrates the entire workflow — notifications, tasks, timing, escalations — automatically.",
            },
            {
                id: 5,
                num: "05",
                pane: "pane-5",
                title: "Report & improve",
                img: "https://via.placeholder.com/640x360.png?text=Streamline+Placeholder",
                desc:
                    "Access analytics that show real-world readiness. Get compliance-ready reports aligned to regulatory standards, complete with insights and actionable gaps.",
            },
        ];

        const tabs: Tab[] = [
            {
                id: "marketing",
                label: "Cybersecurity",
                title: "Raise your organization’s cyber readiness before attackers test it for you",
                lead:
                    "Cyber incidents strike in minutes — but detection, coordination, and decision-making often take hours. TMP transforms static cyber plans into automated, repeatable, measurable preparedness exercises tailored to your tech stack.",
                points: [
                    "Simulate real-world threats: ransomware, phishing, supply chain, insider abuse",
                    "Automated drills across SOC, IR, IAM, AppSec & Cloud teams",
                    "Role-mapped task execution with time-bound decision prompts",
                    "Compliance-ready reporting aligned with ISO 27001, NIST CSF, SOC 2, RBI, NIS2",
                ],
                image: "https://via.placeholder.com/720x420.png?text=Marketing+Image",
            },
            {
                id: "sales",
                label: "Business Continuity",
                title: "Ensure your business keeps running — no matter what breaks",
                lead:
                    "Downtime destroys customer trust, revenue, and reputation. TMP brings life to your Business Continuity Plans with realistic, coordinated drills that test people, processes, vendors, and technology across the company.",
                points: [
                    "Stress-test continuity processes across departments & critical services",
                    "Measure recovery readiness for RTO, RPO, dependencies & escalation chains",
                    "Automate communication workflows for executives, teams & vendors",
                    "Evidence packs aligned with ISO 22301 and enterprise audit needs",
                ],
                image: "https://via.placeholder.com/720x420.png?text=Sales+Image",
            },
            {
                id: "product",
                label: "Data Privacy",
                title: "Protect customer data and prove compliance — with confidence",
                lead:
                    "Breaches are inevitable; mishandling them is not. TMP helps privacy, legal, and security teams rehearse breach-handling workflows, ensuring a fast, compliant response across global regulations.",
                points: [
                    "Run data breach simulations that test legal, DPO, IT & comms workflows",
                    "Validate regulatory response timelines (KSA PDPL, GDPR, CCPA, PDPB, HIPAA)",
                    "Prebuilt privacy incident templates: unauthorized access, misdelivery, deletion failures",
                    "Generate audit-ready evidence for investigations, reporting & post-incident reviews",
                ],
                image: "https://via.placeholder.com/720x420.png?text=Product+Image",
            },
            {
                id: "it",
                label: "Environmental Security & Governance",
                title: "Strengthen resilience across environmental, operational & governance risks",
                lead:
                    "Modern ESG expectations demand operational integrity, transparency and preparedness. TMP helps organizations test their ESG policies, crisis responses, and governance structures with clarity and accountability.",
                points: [
                    "Simulate ESG events: environmental disruptions, safety failures, supplier risks",
                    "Test governance workflows: board escalations, whistleblowing, third-party risk",
                    "Validate response alignment with sustainability and compliance frameworks",
                    "Produce assurance-ready reports for auditors, regulators & stakeholders",
                ],
                image: "https://via.placeholder.com/720x420.png?text=IT+Image",
            },
        ];



        return {
            steps,
            activePane: "pane-1",
            tabs,
            activeTab: "sales", // default selected tab
            // show toggles entrance animation
            show: false as boolean,


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
        // use native DOM lookup — no ts-plugin complaints
        const section = document.getElementById("heroSection");
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const el = entry.target; // Element; safe to use .classList

                    if (entry.isIntersecting) {
                        el.classList.add("show");
                    } else {
                        el.classList.remove("show");
                    }
                });
            },
            { threshold: 0.4 }
        );

        observer.observe(section); // no red line now
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

    },
});
</script>
