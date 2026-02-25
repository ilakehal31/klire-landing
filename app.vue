<template>
  <div class="page">
    <!-- Decorative dots -->
    <div class="dot dot-top-right dot-light" />
    <div class="dot dot-top-right-2 dot-orange" />
    <div class="dot dot-bottom-left dot-light" />
    <div class="dot dot-bottom-left-2 dot-orange" />

    <!-- Logo -->
    <header class="logo">
      <img src="/kliresvg.svg" alt="Klire" class="logo-img">
    </header>

    <!-- Main content -->
    <main class="content">
      <p class="coming-soon">COMING SOON</p>
      <div class="orange-line" />

      <h1 class="headline">Monitor your lead acquisition quality.</h1>

      <p class="description">
        Klyre connects to Google Ads and HubSpot CRM to help marketing teams
        analyze cost-per-lead and campaign attribution.
      </p>
      <p class="description">
        It reads campaign performance data and matches it with CRM lead data
        to surface quality signals on a single dashboard.
      </p>

      <!-- Email form -->
      <form class="email-form" @submit.prevent>
        <input
          type="email"
          placeholder="Enter your email"
          class="email-input"
        >
        <button type="submit" class="notify-btn">
          Get notified
        </button>
      </form>

      <p class="disclaimer">We'll let you know when Klyre is ready. No spam.</p>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-line" />
      <p class="footer-text">&copy; 2026 Klyre. All rights reserved.</p>
    </footer>
  </div>
</template>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Archivo', sans-serif;
  background: #fafafa;
  color: #1a1a1a;
  -webkit-font-smoothing: antialiased;
}

.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
}

/* Decorative dots */
.dot {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.dot-light {
  background: #e8e4df;
}

.dot-orange {
  background: #e8a84c;
}

.dot-top-right {
  top: 60px;
  right: 80px;
}

.dot-top-right-2 {
  top: 68px;
  right: 64px;
}

.dot-bottom-left {
  bottom: 120px;
  left: 60px;
}

.dot-bottom-left-2 {
  bottom: 128px;
  left: 76px;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 80px;
}

.logo-img {
  height: 100px;
  width: auto;
}

/* Content */
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 640px;
  margin-top: 100px;
  padding: 0 24px;
  flex: 1;
}

.coming-soon {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 3px;
  color: #999;
}

.orange-line {
  width: 40px;
  height: 3px;
  background: #e8873c;
  border-radius: 2px;
  margin-top: 12px;
}

.headline {
  font-size: 32px;
  font-weight: 700;
  line-height: 1.3;
  margin-top: 32px;
}

.description {
  font-size: 16px;
  line-height: 1.6;
  color: #777;
  margin-top: 16px;
}

/* Email form */
.email-form {
  display: flex;
  gap: 12px;
  margin-top: 40px;
}

.email-input {
  font-family: 'Archivo', sans-serif;
  font-size: 15px;
  padding: 14px 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 320px;
  outline: none;
  background: #fff;
  transition: border-color 0.2s;
}

.email-input:focus {
  border-color: #999;
}

.email-input::placeholder {
  color: #bbb;
}

.notify-btn {
  font-family: 'Archivo', sans-serif;
  font-size: 15px;
  font-weight: 600;
  padding: 14px 28px;
  background: #1a1a1a;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
}

.notify-btn:hover {
  background: #333;
}

.disclaimer {
  font-size: 13px;
  color: #aaa;
  margin-top: 16px;
}

/* Footer */
.footer {
  width: 100%;
  padding: 0 60px 40px;
  margin-top: auto;
}

.footer-line {
  height: 1px;
  background: #e5e5e5;
  margin-bottom: 24px;
}

.footer-text {
  font-size: 13px;
  color: #aaa;
  text-align: center;
}
</style>
