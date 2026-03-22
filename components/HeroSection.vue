<template>
  <section class="pt-28 md:pt-40 pb-16 font-archivo">
    <div class="max-w-content mx-auto px-4 md:px-6 flex flex-col items-center">

      <!-- 1. Top banner pill: tight dot+text, thin NE arrow SVG, nested CTA -->
      <div
        class="klyre-info-strip mx-auto max-w-fit py-2 pl-3 md:pl-4 pr-1.5 flex-wrap md:flex-nowrap gap-y-2 hero-animate hero-delay-1"
        :class="{ 'hero-visible': mounted }"
      >
        <span class="klyre-glow-dot" aria-hidden="true">
          <span class="klyre-glow-dot__halo"></span>
          <span class="klyre-glow-dot__core"></span>
        </span>
        <span class="text-[13px] md:text-[15px] font-medium leading-5 tracking-[-0.01em] text-[#0A0A0A]">
          Stoppez les fuites qui brûlent votre budget ads.
        </span>
        <a
          href="#"
          class="hidden sm:inline-flex flex-shrink-0 items-center gap-1 rounded-full bg-[#FFFBEB] px-3 py-1 text-[13px] font-medium leading-[20.8px] tracking-normal text-[#FF8C00] transition-colors hover:bg-[#FFF7D6]"
        >
          En savoir plus
          <UIcon name="i-lucide-arrow-up-right" class="size-3.5 shrink-0 text-[#FF8C00]" />
        </a>
      </div>

      <!-- 2. Main heading -->
      <h1
        class="hero-headline-figma mt-6 text-center max-w-[920px] hero-animate hero-delay-2"
        :class="{ 'hero-visible': mounted }"
      >
        Détectez les signaux qui impactent votre revenu avant qu'il ne soit trop tard
      </h1>

      <!-- 3. Subtitle -->
      <p
        class="mt-6 text-base text-gray-500 text-center max-w-[640px] hero-animate hero-delay-3"
        :class="{ 'hero-visible': mounted }"
      >
        Klyre surveille l'ensemble de votre acquisition et détecte les pertes de valeur avant qu'elles n'impactent votre pipeline et votre revenu.
      </p>

      <!-- 4. CTA Buttons -->
      <div
        class="mt-8 flex items-center gap-3 flex-wrap justify-center hero-animate hero-delay-4"
        :class="{ 'hero-visible': mounted }"
      >
        <button class="cta-base cta-primary cta-glow">
          Inscrivez-vous sur la liste d'attente
        </button>
        <button class="cta-base cta-secondary cta-secondary-muted">
          Analyser mon acquisition
        </button>
      </div>

      <!-- 5. Sub-text -->
      <p
        class="mt-4 text-sm text-gray-400 text-center hero-animate hero-delay-5"
        :class="{ 'hero-visible': mounted }"
      >
        Connectez vos données et obtenez une première analyse en quelques minutes, sans configuration complexe.
      </p>

      <!-- 6. App Preview -->
      <div
        class="mt-10 w-full max-w-[1000px] relative hidden md:block hero-animate hero-delay-6"
        :class="{ 'hero-visible': mounted }"
      >
        <!-- Orange gradient glow behind preview -->
        <div class="absolute inset-x-0 -top-8 h-[120px] bg-primary-400/20 blur-3xl rounded-full pointer-events-none"></div>

        <!-- Browser window mockup -->
        <div class="mockup-border relative rounded-[16px] p-[2px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.03),0px_24px_68px_0px_rgba(0,0,0,0.12),0px_8px_20px_0px_rgba(0,0,0,0.06)]">
          <div class="bg-white rounded-[14px] overflow-hidden relative z-10">

            <!-- Browser chrome -->
            <div class="bg-[#fafafa] border-b border-[#e6e6e6] flex items-center gap-2 px-4 py-3">
              <div class="w-2.5 h-2.5 rounded-[5px] bg-[#ff5f57]"></div>
              <div class="w-2.5 h-2.5 rounded-[5px] bg-[#febc2e]"></div>
              <div class="w-2.5 h-2.5 rounded-[5px] bg-[#28c840]"></div>
              <div class="flex-1 flex justify-center">
                <span class="text-[12px] font-medium text-[#a5a5a5]">app.klyre.com/dashboard</span>
              </div>
            </div>

            <!-- Content area -->
            <div class="flex" style="height: 479px;">

              <!-- Sidebar -->
              <div class="w-[200px] flex-shrink-0 bg-[#fafafa] border-r border-[#e6e6e6] hidden lg:block">
                <div class="px-5 pt-4 pb-2">
                  <img src="/klyre-logo-sidebar.svg" alt="Klyre" class="h-[16px] w-[55px]" />
                </div>

                <nav class="px-3 mt-5 flex flex-col gap-0.5">
                  <!-- Dashboard (active) -->
                  <a href="#" class="flex items-center gap-2 bg-[#f5f5f5] rounded-lg px-2.5 py-2 text-[13px] font-semibold text-[#0a0a0a]">
                    <UIcon name="i-lucide-layout-dashboard" class="size-4 shrink-0" />
                    Dashboard
                  </a>

                  <!-- Campagnes -->
                  <a href="#" class="flex items-center gap-2 px-2.5 py-2 text-[13px] font-medium text-[#575757] rounded-lg">
                    <UIcon name="i-lucide-flag" class="size-4 shrink-0 opacity-60" />
                    Campagnes
                  </a>

                  <!-- Tendances -->
                  <a href="#" class="flex items-center gap-2 px-2.5 py-2 text-[13px] font-medium text-[#575757] rounded-lg">
                    <UIcon name="i-lucide-trending-up" class="size-4 shrink-0 opacity-60" />
                    Tendances
                  </a>

                  <!-- Alertes -->
                  <a href="#" class="flex items-center gap-2 px-2.5 py-2 text-[13px] font-medium text-[#575757] rounded-lg">
                    <UIcon name="i-lucide-bell" class="size-4 shrink-0 opacity-60" />
                    Alertes
                  </a>

                  <!-- Divider -->
                  <div class="h-px bg-[#e6e6e6] mx-1 my-2"></div>

                  <!-- Paramètres -->
                  <a href="#" class="flex items-center gap-2 px-2.5 py-2 text-[13px] font-medium text-[#575757] rounded-lg">
                    <UIcon name="i-lucide-settings" class="size-4 shrink-0 opacity-60" />
                    Paramètres
                  </a>
                </nav>
              </div>

              <!-- Main content -->
              <div class="flex-1 flex flex-col gap-5 px-6 py-5 overflow-hidden">

                <!-- Dashboard header -->
                <div class="flex items-center justify-between">
                  <h2 class="text-[16px] font-bold text-[#0a0a0a]">Dashboard</h2>
                  <div class="flex items-center gap-2">
                    <span class="text-[12px] font-medium text-[#575757] bg-[#fafafa] border border-[#e6e6e6] rounded-[6px] px-3.5 py-[7px]">12 derniers mois</span>
                    <span class="text-[12px] font-medium text-[#575757] bg-[#fafafa] border border-[#e6e6e6] rounded-[6px] px-3.5 py-[7px]">Toutes les campagnes</span>
                  </div>
                </div>

                <!-- KPI Row with integrated funnel -->
                <div class="relative flex-1">
                  <div class="flex h-full">
                    <div
                      v-for="(kpi, index) in kpis"
                      :key="kpi.label"
                      class="flex-1 border border-black/10 flex flex-col gap-[5px] p-6"
                      :class="[
                        index === 0 ? 'rounded-l-[5px]' : '',
                        index === kpis.length - 1 ? 'rounded-r-[5px]' : '',
                      ]"
                    >
                      <div class="flex items-center gap-3">
                        <span class="text-[16px] text-black">{{ kpi.label }}</span>
                        <UIcon name="i-lucide-info" class="size-3 text-gray-400" />
                      </div>
                      <span class="text-[24px] font-medium text-black">{{ kpi.value }}</span>
                      <div class="flex items-center gap-px">
                        <span class="text-[16px] text-black">{{ kpi.change }}</span>
                        <UIcon name="i-lucide-arrow-up-right" class="size-4 text-black" />
                      </div>
                    </div>
                  </div>

                  <!-- Funnel overlay -->
                  <div class="absolute left-0 right-0 bottom-0" style="top: 34%;">
                    <img
                      src="/funnel-chart.svg"
                      alt=""
                      class="w-full h-full"
                      style="transform: scaleY(-1);"
                    />
                  </div>

                  <!-- Percentage badges -->
                  <div class="absolute left-0 right-0 pointer-events-none" style="top: 58%;">
                    <div class="flex">
                      <div v-for="badge in badges" :key="badge" class="flex-1 flex justify-center">
                        <div class="bg-white border border-[#e6e6e6] rounded-[5px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] px-2 py-1.5 text-[12px] text-black">
                          {{ badge }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const mounted = ref(false)

onMounted(() => {
  // Small delay to ensure DOM is painted before triggering animation
  requestAnimationFrame(() => {
    mounted.value = true
  })
})

const kpis = [
  { label: 'Leads', value: '1.274', change: '+ 12%' },
  { label: 'MQLs', value: '834', change: '+ 8%' },
  { label: 'SQLs', value: '343', change: '+ 3%' },
  { label: 'Meetings', value: '289', change: '+ 15%' },
  { label: 'Closing', value: '24', change: '+ 15%' },
]

const badges = ['66.9%', '41.2%', '23.2%', '8.4%']
</script>

<style scoped>
/* --- Slide-down entrance --- */
.hero-animate {
  opacity: 0;
  transform: translateY(-30px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-animate.hero-visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-delay-1 { transition-delay: 0ms; }
.hero-delay-2 { transition-delay: 100ms; }
.hero-delay-3 { transition-delay: 200ms; }
.hero-delay-4 { transition-delay: 300ms; }
.hero-delay-5 { transition-delay: 400ms; }
.hero-delay-6 { transition-delay: 500ms; }

/* --- CTA glow pulse --- */
.cta-glow {
  position: relative;
}

.cta-glow::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(180deg, #ef903c 0%, #f9bc6a 100%);
  opacity: 0;
  filter: blur(16px);
  z-index: -1;
  animation: glow-pulse 2.5s ease-in-out 1s infinite;
}

@keyframes glow-pulse {
  0%, 100% { opacity: 0; transform: scale(1); }
  50% { opacity: 0.45; transform: scale(1.05); }
}

/* --- Rotating gradient border on mockup --- */
.mockup-border {
  background: #e6e6e6; /* fallback border color */
  overflow: hidden;
}

.mockup-border::before {
  content: '';
  position: absolute;
  /* Square element centered, sized to the diagonal so it covers all sides evenly */
  width: 150%;
  aspect-ratio: 1;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  background: conic-gradient(
    from 0deg,
    transparent 0%,
    transparent 44%,
    rgba(255, 140, 0, 0.15) 46%,
    #ff8c00 49%,
    #ffab40 50%,
    #ff8c00 51%,
    rgba(255, 140, 0, 0.15) 54%,
    transparent 56%,
    transparent 100%
  );
  animation: border-spin 10s linear infinite;
  z-index: 0;
}

@keyframes border-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
