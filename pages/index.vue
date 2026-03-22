<template>
  <div class="bg-[#FAFAFA] text-dark min-h-screen">
    <NavBar />
    <HeroSection />
    <StatsCards />
    <ProblemSection />
    <HowItWorks />
    <FunnelSection />
    <PersonasSection />
    <FeaturesGrid />
    <WhyKlyre />
    <DetailedFeatures />
    <CtaSection />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
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
