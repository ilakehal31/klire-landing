<template>
  <section class="w-full bg-[#F9F9F9] py-20 font-archivo">
    <div class="mx-auto max-w-[1200px] px-6">
      <h2 class="section-heading-figma mx-auto max-w-[677px] px-2">
        Comprenez où votre acquisition perd de la valeur
      </h2>

      <div class="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
        <div
          v-for="card in cards"
          :key="card.badge"
          class="flex flex-col rounded-2xl border border-[#E5E7EB] bg-white px-8 py-10 text-center shadow-[0_1px_3px_rgba(15,23,42,0.06)]"
        >
          <p
            class="text-[11px] font-bold uppercase leading-4 tracking-[0.06em] text-[#FF8C00]"
          >
            {{ card.badge }}
          </p>
          <h3
            class="mt-6 text-xl font-bold leading-snug tracking-[-0.02em] text-[#0A0A0A]"
          >
            {{ card.title }}
          </h3>
          <p
            class="mt-4 text-sm font-normal leading-[1.65] text-[#4B5563]"
          >
            {{ card.description }}
          </p>
        </div>
      </div>

      <div class="mt-12 text-center md:mt-14">
        <button type="button" class="cta-base cta-primary">
          Demander une démo
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const cards = [
  {
    badge: 'Marketing Leaders',
    title: 'Identifiez les canaux qui génèrent réellement du revenu',
    description:
      'Comprenez quels canaux contribuent au pipeline et lesquels génèrent du volume sans valeur, afin d\'allouer votre budget plus efficacement.',
  },
  {
    badge: 'Growth Teams',
    title: 'Détectez rapidement une dégradation de la qualité des leads',
    description:
      'Repérez les variations dans votre acquisition avant qu\'elles n\'impactent vos performances et ajustez vos campagnes en conséquence.',
  },
  {
    badge: 'Revenue Teams',
    title: 'Identifiez les frictions dans votre funnel',
    description:
      'Analysez où les opportunités se perdent et ce qui ralentit la conversion pour améliorer la performance commerciale.',
  },
]
</script>
