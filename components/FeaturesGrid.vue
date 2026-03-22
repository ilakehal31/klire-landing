<template>
  <section class="bg-[#FAFAFA] py-20 font-archivo">
    <div class="mx-auto max-w-[1200px] px-6">
      <h2 class="section-heading-figma mx-auto max-w-[647px]">
        Identifiez ce qui impacte réellement votre acquisition
      </h2>
      <p
        class="mx-auto mt-4 max-w-[680px] text-center text-base leading-relaxed text-gray-500"
      >
        Klyre vous permet de comprendre ce qui influence réellement la performance de votre acquisition, du premier lead jusqu'au revenu.
      </p>

      <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:gap-8">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="rounded-2xl border border-[#E5E7EB] bg-white p-8 text-left shadow-[0_1px_3px_rgba(15,23,42,0.06)] md:p-10"
        >
          <div
            class="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF9F0]"
          >
            <UIcon :name="feature.icon" class="size-5 text-[#FF8C00]" />
          </div>
          <h3
            class="text-lg font-bold leading-snug tracking-[-0.02em] text-[#0A0A0A]"
          >
            {{ feature.title }}
          </h3>
          <p class="mt-3 text-sm font-normal leading-[1.65] text-[#6B7280]">
            {{ feature.description }}
          </p>
        </div>
      </div>

      <div class="mt-12 text-center md:mt-14">
        <button
          type="button"
          class="cta-base cta-primary"
        >
          Commencer l'analyse
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: 'i-lucide-activity',
    title: 'Où votre acquisition perd de la valeur',
    description:
      'Identifiez les points de friction dans votre funnel avant qu\'ils n\'impactent votre pipeline.',
  },
  {
    icon: 'i-lucide-bar-chart-3',
    title: 'Quels canaux génèrent réellement du revenu',
    description:
      'Distinguez les canaux qui contribuent au pipeline de ceux qui génèrent du volume sans valeur.',
  },
  {
    icon: 'i-lucide-activity',
    title: 'Comment votre acquisition évolue dans le temps',
    description:
      'Suivez les variations de la qualité des leads et anticipez les changements de performance.',
  },
  {
    icon: 'i-lucide-bell',
    title: 'Quand un signal critique apparaît',
    description:
      'Soyez alerté dès qu\'une anomalie impacte la performance de votre acquisition.',
  },
]
</script>
