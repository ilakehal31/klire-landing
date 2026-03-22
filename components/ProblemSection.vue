<template>
  <section class="py-20">
    <div class="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-start gap-8 lg:gap-12">

      <!-- Left Column -->
      <div class="w-full lg:w-7/12">
        <h2 class="section-heading-figma-left max-w-[475px]">
          Votre acquisition génère des leads. Mais génère-t-elle vraiment du revenu&nbsp;?
        </h2>

        <p class="mt-4 text-base text-gray-500 max-w-[530px] leading-relaxed font-archivo">
          La plupart des équipes pilotent leur acquisition avec des indicateurs comme le CPL, le volume de leads ou les MQL. Ces métriques mesurent l'activité marketing mais elles ne mesurent pas la valeur qui entre réellement dans le pipeline.
        </p>

        <p class="mt-4 text-base text-gray-500 max-w-[530px] leading-relaxed font-archivo">
          Certains canaux produisent beaucoup de leads mais peu d'opportunités qualifiées. D'autres semblent performants alors que la qualité se dégrade progressivement, en silence.
        </p>

        <p class="mt-4 text-base text-gray-500 max-w-[530px] leading-relaxed font-archivo">
          Sans lecture sur ces écarts, les décisions budgétaires reposent sur des signaux partiels. Et les problèmes n'apparaissent qu'une fois que le revenu les confirme.
        </p>

        <button class="cta-base cta-primary mt-8">
          Commencer l'analyse
        </button>
      </div>

      <!-- Right Column -->
      <div class="w-full lg:w-5/12 flex flex-col gap-4">

        <!-- Card 1: Budget des campagnes -->
        <div class="bg-white rounded-[12px] border border-[#f0f0f0] p-[25px] flex flex-col gap-2">
          <!-- Title row -->
          <div class="flex items-center gap-1.5">
            <span class="text-[14px] font-medium text-[#525252]">Budget des campagnes</span>
            <span class="w-[14px] h-[16px] rounded-[7px] border border-[#a3a3a3] text-[#a3a3a3] text-[9px] font-bold flex items-center justify-center">i</span>
          </div>

          <!-- Value -->
          <p class="text-[24px] font-bold text-[#0a0a0a] tracking-[-1.08px] leading-[36px]">€36.834</p>

          <!-- Change row -->
          <div class="flex items-center gap-2">
            <span class="text-[14px] font-semibold text-[#ef4444] inline-flex items-center gap-0.5">-2.1 % <UIcon name="i-lucide-arrow-down" class="size-3.5 shrink-0" /></span>
            <span class="text-[12px] text-[#a3a3a3]">vs. 34.493 sur les 30 derniers jours</span>
          </div>

          <!-- Objective label -->
          <p class="text-[14px] font-medium text-[#525252]">Objectif à €50.000</p>

          <!-- Progress bar -->
          <div class="bg-[#f0f0f0] rounded-[6px] h-4 overflow-hidden">
            <div class="h-full rounded-[6px] bg-gradient-to-r from-[#ff8c00] to-[#ffab40]" style="width: 74%;"></div>
          </div>

          <!-- Mini bar chart -->
          <div class="flex items-end gap-[1.5px] h-4">
            <div
              v-for="(bar, i) in miniBarHeights"
              :key="i"
              class="flex-1 bg-[#e5e5e5] rounded-t-[1px]"
              :style="{ height: bar + 'px' }"
            ></div>
          </div>

          <!-- Scale labels -->
          <div class="flex items-start justify-between">
            <span class="text-[11px] text-[#a3a3a3]">0</span>
            <span class="text-[11px] text-[#a3a3a3]">25k</span>
            <span class="text-[11px] text-[#a3a3a3]">50k</span>
          </div>
        </div>

        <!-- Card 2: Conversion rates grid -->
        <div class="rounded-[12px] overflow-hidden">
          <!-- Top row -->
          <div class="flex flex-col sm:flex-row">
            <!-- Leads à MQLs -->
            <div class="flex-1 border border-[#f0f0f0] sm:rounded-tl-[12px] rounded-t-[12px] sm:rounded-tr-none bg-white p-4 flex flex-col gap-1">
              <div class="flex items-center gap-1">
                <span class="text-[12px] font-medium text-[#a3a3a3]">Leads à MQLs</span>
                <span class="w-[14px] h-[16px] rounded-[7px] border border-[#a3a3a3] text-[#a3a3a3] text-[9px] font-bold flex items-center justify-center">i</span>
                <div class="flex-1 flex justify-end">
                  <span class="bg-[#fef2f2] text-[#ef4444] text-[10px] font-bold tracking-[0.4px] uppercase rounded-[4px] px-2 py-0.5">Critique</span>
                </div>
              </div>
              <p class="text-[22px] font-bold text-[#0a0a0a] tracking-[-0.44px] leading-[33px]">66.9%</p>
              <span class="text-[12px] font-semibold text-[#ef4444] inline-flex items-center gap-0.5">-2.1 % <UIcon name="i-lucide-arrow-down" class="size-3 shrink-0" /></span>
              <span class="text-[10px] text-[#a3a3a3]">vs. 69% sur les 30 derniers jours</span>
              <div class="flex flex-col gap-1 mt-1">
                <div class="bg-[#f0f0f0] rounded-[4px] h-2 overflow-visible relative">
                  <div class="absolute inset-y-0 left-0 rounded-[4px] bg-[#ff8c00]" style="right: 33.1%;"></div>
                  <div class="absolute bg-[#0a0a0a] rounded-[2px] h-4 -top-1" style="left: 65%; width: 1.5%;"></div>
                </div>
                <span class="text-[11px] text-[#a3a3a3]">Objectif à 65%</span>
              </div>
            </div>

            <!-- MQLs à SQLs -->
            <div class="flex-1 border-l border-r border-b sm:border-t sm:border-l-0 border-[#f0f0f0] sm:rounded-tr-[12px] bg-white p-4 flex flex-col gap-1">
              <div class="flex items-center gap-1">
                <span class="text-[12px] font-medium text-[#a3a3a3]">MQLs à SQLs</span>
                <span class="w-[14px] h-[16px] rounded-[7px] border border-[#a3a3a3] text-[#a3a3a3] text-[9px] font-bold flex items-center justify-center">i</span>
              </div>
              <p class="text-[22px] font-bold text-[#0a0a0a] tracking-[-0.44px] leading-[33px]">41.2%</p>
              <span class="text-[12px] font-semibold text-[#22c55e] inline-flex items-center gap-0.5">0.5 % <UIcon name="i-lucide-arrow-up" class="size-3 shrink-0" /></span>
              <span class="text-[10px] text-[#a3a3a3]">vs. 40.7% sur les 30 derniers jours</span>
              <div class="flex flex-col gap-1 mt-1">
                <div class="bg-[#f0f0f0] rounded-[4px] h-2 overflow-visible relative">
                  <div class="absolute inset-y-0 left-0 rounded-[4px] bg-[#ff8c00]" style="right: 58.8%;"></div>
                  <div class="absolute bg-[#0a0a0a] rounded-[2px] h-4 -top-1" style="left: 45%; width: 1.5%;"></div>
                </div>
                <span class="text-[11px] text-[#a3a3a3]">Objectif à 45%</span>
              </div>
            </div>
          </div>

          <!-- Bottom row -->
          <div class="flex flex-col sm:flex-row">
            <!-- SQLs à Meetings -->
            <div class="flex-1 border-l border-r border-b border-[#f0f0f0] sm:rounded-bl-[12px] bg-white p-4 flex flex-col gap-1">
              <div class="flex items-center gap-1">
                <span class="text-[12px] font-medium text-[#a3a3a3]">SQLs à Meetings</span>
                <span class="w-[14px] h-[16px] rounded-[7px] border border-[#a3a3a3] text-[#a3a3a3] text-[9px] font-bold flex items-center justify-center">i</span>
              </div>
              <p class="text-[22px] font-bold text-[#0a0a0a] tracking-[-0.44px] leading-[33px]">23.2%</p>
              <span class="text-[12px] font-semibold text-[#22c55e] inline-flex items-center gap-0.5">0.5 % <UIcon name="i-lucide-arrow-up" class="size-3 shrink-0" /></span>
              <span class="text-[10px] text-[#a3a3a3]">vs. 22.7% sur les 30 derniers jours</span>
              <div class="flex flex-col gap-1 mt-1">
                <div class="bg-[#f0f0f0] rounded-[4px] h-2 overflow-visible relative">
                  <div class="absolute inset-y-0 left-0 rounded-[4px] bg-[#ff8c00]" style="right: 76.8%;"></div>
                  <div class="absolute bg-[#0a0a0a] rounded-[2px] h-4 -top-1" style="left: 25%; width: 1.5%;"></div>
                </div>
                <span class="text-[11px] text-[#a3a3a3]">Objectif à 25%</span>
              </div>
            </div>

            <!-- Meetings à Closing -->
            <div class="flex-1 border-r border-b sm:border-l-0 border-[#f0f0f0] rounded-b-[12px] sm:rounded-bl-none sm:rounded-br-[12px] bg-white p-4 flex flex-col gap-1">
              <div class="flex items-center gap-1">
                <span class="text-[12px] font-medium text-[#a3a3a3]">Meetings à Closing</span>
                <span class="w-[14px] h-[16px] rounded-[7px] border border-[#a3a3a3] text-[#a3a3a3] text-[9px] font-bold flex items-center justify-center">i</span>
              </div>
              <p class="text-[22px] font-bold text-[#0a0a0a] tracking-[-0.44px] leading-[33px]">8.4%</p>
              <span class="text-[12px] font-semibold text-[#22c55e] inline-flex items-center gap-0.5">0.5 % <UIcon name="i-lucide-arrow-up" class="size-3 shrink-0" /></span>
              <span class="text-[10px] text-[#a3a3a3]">vs. 7.9% sur les 30 derniers jours</span>
              <div class="flex flex-col gap-1 mt-1">
                <div class="bg-[#f0f0f0] rounded-[4px] h-2 overflow-visible relative">
                  <div class="absolute inset-y-0 left-0 rounded-[4px] bg-[#ff8c00]" style="right: 91.6%;"></div>
                  <div class="absolute bg-[#0a0a0a] rounded-[2px] h-4 -top-1" style="left: 20%; width: 1.5%;"></div>
                </div>
                <span class="text-[11px] text-[#a3a3a3]">Objectif à 20%</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const miniBarHeights = [
  16, 12, 8, 8, 8, 8, 8, 8,
  10, 10, 10, 10, 10, 10, 12, 16,
  12, 10, 10, 10, 10, 10, 10, 10,
  8, 8, 8, 8, 8, 8, 12, 16,
]
</script>
