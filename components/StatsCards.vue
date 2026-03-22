<template>
  <section class="py-4">
    <div class="max-w-[1200px] mx-auto px-6">
      <p class="text-center text-sm text-gray-400 font-archivo">
        Concrètement, Klyre en termes de chiffres ça représente ça :
      </p>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="flex flex-col"
        >
          <!-- Top: value with gradient text -->
          <div
            class="border border-[#e6e6e6] rounded-t-[15px] px-4 py-4 flex items-center"
            style="background: linear-gradient(90deg, rgba(255,140,0,0.02) 0%, rgba(255,140,0,0.02) 100%), linear-gradient(90deg, #fff 0%, #fff 100%);"
          >
            <span class="font-archivo font-medium text-[24px] md:text-[32px] leading-normal stat-gradient-text">
              {{ stat.value }}
            </span>
          </div>

          <!-- Bottom: description -->
          <div class="bg-white border-l border-r border-b border-[#e6e6e6] rounded-b-[15px] px-[17px] py-4">
            <p class="text-[12px] leading-[18px] text-[#0a0a0a] font-archivo">
              {{ stat.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  {
    value: '5 Minutes',
    description: 'pour configurer l\'outil à votre business et connaitre la santé de votre acquisition',
  },
  {
    value: '35% - 50%',
    description: 'de budget publicitaires réinvesti sur des campagnes vraiment performantes.',
  },
  {
    value: '100%',
    description: 'de visibilité sur vos coûts réels et un suivi journalier de votre acquisition',
  },
  {
    value: '25k - 150k',
    description: 'de budget ads pour une utilisation optimale de l\'outil',
  },
]
</script>

<style scoped>
.stat-gradient-text {
  background-image: radial-gradient(ellipse at 50% 200%, rgba(255,187,50,0) 0%, rgba(255,164,25,0.5) 50%, rgba(255,140,0,1) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
