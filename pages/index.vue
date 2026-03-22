<template>
  <div ref="root" class="bg-[#FAFAFA] text-dark min-h-screen">
    <NavBar />
    <HeroSection />
    <div class="scroll-reveal"><StatsCards /></div>
    <div class="scroll-reveal"><ProblemSection /></div>
    <div class="scroll-reveal"><HowItWorks /></div>
    <div class="scroll-reveal"><FunnelSection /></div>
    <div class="scroll-reveal"><PersonasSection /></div>
    <div class="scroll-reveal"><FeaturesGrid /></div>
    <div class="scroll-reveal"><WhyKlyre /></div>
    <div class="scroll-reveal"><DetailedFeatures /></div>
    <div class="scroll-reveal"><CtaSection /></div>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
const { root } = useScrollReveal(0.1)

useHead({
  title: 'Klyre - Détectez les anomalies dans votre cycle d\'acquisition',
  meta: [
    { 
      name: 'description', 
      content: 'Connectez Google Ads et HubSpot pour détecter les anomalies dans votre cycle d\'acquisition avant qu\'elles n\'impactent votre pipeline ou votre revenu.' 
    }
  ]
})
</script>
