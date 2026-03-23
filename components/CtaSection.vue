<template>
  <section class="py-28 relative overflow-hidden">

    <!-- Background glow -->
    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary-400/20 blur-3xl rounded-full"></div>

    <!-- Content -->
    <div class="max-w-[1200px] mx-auto px-6 text-center relative z-10">
      <div class="section-eyebrow">
        <span class="section-eyebrow__dot" aria-hidden="true"></span>
        <span class="section-eyebrow__label">Prêt à démarrer ?</span>
      </div>
      <h2 class="section-heading-figma mt-4 max-w-[720px] mx-auto">
        Stoppez les dégradations silencieuses
      </h2>
      <p class="mt-4 text-base text-gray-500 max-w-[660px] mx-auto">
        Première analyse disponible en moins de 10 minutes, sans configuration complexe.
      </p>
      <div class="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
        <button class="cta-base cta-primary" @click="openWaitlist">
          Rejoindre la liste d'attente
        </button>
        <button class="cta-base cta-secondary">
          Voir la démo
        </button>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
const { open: openWaitlist } = useWaitlistModal()
</script>
