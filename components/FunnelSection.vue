<script setup lang="ts">
/** Étapes funnel — bordure qui tourne (design Figma), pas confondre avec HowItWorks */
const funnelSteps = [
  {
    n: 1,
    title: 'Connectez vos données',
    body:
      "Connectez votre CRM et vos outils marketing : plateformes publicitaires, analytics et outils d'acquisition.",
  },
  {
    n: 2,
    title: 'Analyse de votre acquisition',
    body:
      "Klyre analyse votre funnel, la performance des canaux et l'évolution de la qualité des leads.",
  },
  {
    n: 3,
    title: 'Détection et signalement des anomalies',
    body:
      'Klyre détecte et vous notifie automatiquement à la détection les variations et les anomalies qui indiquent une perte de valeur dans votre acquisition.',
  },
] as const

const activeFunnelStep = ref(0)
let funnelIntervalId: ReturnType<typeof setInterval> | undefined

function stopFunnelRotation() {
  if (funnelIntervalId !== undefined) {
    clearInterval(funnelIntervalId)
    funnelIntervalId = undefined
  }
}

function startFunnelRotation() {
  if (import.meta.server) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  stopFunnelRotation()
  funnelIntervalId = setInterval(() => {
    activeFunnelStep.value = (activeFunnelStep.value + 1) % funnelSteps.length
  }, 3000)
}

onMounted(() => {
  startFunnelRotation()
})

onUnmounted(() => {
  stopFunnelRotation()
})

function onEnterFunnelCard(i: number) {
  stopFunnelRotation()
  activeFunnelStep.value = i
}

function onLeaveFunnelGrid() {
  startFunnelRotation()
}
</script>

<template>
  <section class="w-full bg-white py-20">
    <div class="mx-auto max-w-[1200px] px-6">

      <!-- Eyebrow -->
      <div class="section-eyebrow">
        <span class="section-eyebrow__dot" aria-hidden="true"></span>
        <span class="section-eyebrow__label">Le funnel b2b</span>
      </div>

      <!-- Heading -->
      <h2 class="section-heading-figma mt-4 max-w-[700px] mx-auto">
        Surveillez votre stratégie d'acquisition en continu
      </h2>

      <!-- Subtitle -->
      <p class="mt-4 text-base text-gray-500 text-center max-w-[600px] mx-auto">
        Klyre analyse vos données marketing et commerciales pour révéler les signaux qui indiquent comment votre acquisition se transforme réellement en revenu.
      </p>

      <!--
        3 étapes funnel — design Figma :
        - Active : 1px #E5E7EB, radius 24px, fond blanc, p ~40px (pas de layout shift)
        - Inactive : bordure transparente, fond transparent (fond section = blanc)
        - Pastille : #FFFBEB + bordure ambre très légère, chiffre #B45309
        - Auto : bordure tourne toutes les 3s ; survol = pause + carte active ; sortie grille = reprise
      -->
      <div
        class="mt-14 grid grid-cols-1 items-start gap-8 md:grid-cols-3 md:gap-10 lg:gap-12"
        role="list"
        aria-label="Étapes du funnel"
        @mouseleave="onLeaveFunnelGrid"
      >
        <div
          v-for="(step, i) in funnelSteps"
          :key="step.n"
          role="listitem"
          class="funnel-step-card flex h-fit w-full flex-col items-center rounded-[24px] border px-10 py-10 text-center motion-reduce:transition-none"
          :class="
            activeFunnelStep === i
              ? 'border-[#E5E7EB] bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)]'
              : 'border-transparent bg-transparent shadow-none'
          "
          @mouseenter="onEnterFunnelCard(i)"
        >
          <div
            class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#FDE68A] bg-[#FFFBEB] font-archivo text-base font-bold leading-none text-[#B45309]"
            aria-hidden="true"
          >
            {{ step.n }}
          </div>
          <h3
            class="mt-6 max-w-[320px] font-archivo text-lg font-bold leading-snug tracking-tight text-[#111827]"
          >
            {{ step.title }}
          </h3>
          <p
            class="mt-3 max-w-[320px] font-archivo text-sm font-normal leading-[1.6] text-[#6B7280]"
          >
            {{ step.body }}
          </p>
        </div>
      </div>

      <!-- Data Connectors Diagram - Figma scattered layout (desktop only) -->
      <div class="mt-12 relative mx-auto hidden md:block" style="max-width: 927px; height: 520px;">

        <!-- HubSpot card outline (border only) -->
        <div class="absolute border border-[#e6e6e6] rounded-[16px]" style="left: 62px; top: 0; width: 280px; height: 380px;">
          <!-- Header inside the outline -->
          <div class="p-5">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2.5">
                <div class="bg-[rgba(255,140,0,0.04)] p-[7px] rounded">
                  <img src="/hubspot-logo.svg" alt="HubSpot" class="w-[22px] h-[22px]" />
                </div>
                <div>
                  <p class="font-archivo font-bold text-[14px] text-[#111827]">HubSpot</p>
                  <p class="font-archivo text-[11px] text-[#9ca3af]">Contacts CRM, KPI, CAC</p>
                </div>
              </div>
              <div class="flex items-center gap-[5px]">
                <span class="w-1.5 h-1.5 rounded-full bg-[#059669]"></span>
                <span class="font-archivo text-[11px] text-[#059669]">Actif</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Google Ads card outline -->
        <div class="absolute border border-[#e6e6e6] rounded-[16px]" style="left: 538px; top: 7px; width: 280px; height: 380px;">
          <!-- Header inside the outline -->
          <div class="p-5">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2.5">
                <div class="bg-[rgba(255,140,0,0.04)] p-[7px] rounded">
                  <img src="/google-ads-logo.svg" alt="Google Ads" class="w-[22px] h-[22px]" />
                </div>
                <div>
                  <p class="font-archivo font-bold text-[14px] text-[#111827]">Google Ads</p>
                  <p class="font-archivo text-[11px] text-[#9ca3af]">Indicateurs de coûts (campagnes,etc...)</p>
                </div>
              </div>
              <div class="flex items-center gap-[5px]">
                <span class="w-1.5 h-1.5 rounded-full bg-[#059669]"></span>
                <span class="font-archivo text-[11px] text-[#059669]">Actif</span>
              </div>
            </div>
          </div>
        </div>

        <!-- HubSpot data items (inside card) -->
        <div class="data-item" style="left: 82px; top: 95px; width: 240px;">
          <UIcon name="i-lucide-user" class="size-4 text-[#6b7280] shrink-0" />
          <span>Fiches de contact</span>
        </div>

        <div class="data-item" style="left: 82px; top: 155px; width: 240px;">
          <UIcon name="i-lucide-sparkles" class="size-4 text-[#6b7280] shrink-0" />
          <span>Origine source de la donnée</span>
        </div>

        <div class="data-item" style="left: 82px; top: 215px; width: 240px;">
          <UIcon name="i-lucide-message-square" class="size-4 text-[#6b7280] shrink-0" />
          <span>Résultats des Meetings</span>
        </div>

        <!-- HubSpot overflow items (outside card, with rotation) -->
        <div class="data-item" style="left: 0; top: 285px; transform: rotate(3.55deg);">
          <UIcon name="i-lucide-refresh-cw" class="size-4 text-[#6b7280] shrink-0" />
          <span>Propriétés des cycles de vies</span>
        </div>

        <div class="data-item" style="left: 96px; top: 348px; transform: rotate(-1.32deg);">
          <UIcon name="i-lucide-clipboard" class="size-4 text-[#6b7280] shrink-0" />
          <span>Horodatages (création, qualification, conversion)</span>
        </div>

        <!-- Google Ads data items (inside card) -->
        <div class="data-item" style="left: 558px; top: 95px; width: 240px;">
          <UIcon name="i-lucide-user" class="size-4 text-[#6b7280] shrink-0" />
          <span>Détails des campagnes</span>
        </div>

        <div class="data-item" style="left: 558px; top: 155px; width: 240px;">
          <UIcon name="i-lucide-sparkles" class="size-4 text-[#6b7280] shrink-0" />
          <span>Statut de la campagne</span>
        </div>

        <div class="data-item" style="left: 558px; top: 215px; width: 240px;">
          <UIcon name="i-lucide-clipboard" class="size-4 text-[#6b7280] shrink-0" />
          <span>Dépenses publicitaires</span>
        </div>

        <!-- Google Ads overflow items (outside card, with rotation) -->
        <div class="data-item" style="left: 476px; top: 285px; transform: rotate(4deg);">
          <UIcon name="i-lucide-refresh-cw" class="size-4 text-[#6b7280] shrink-0" />
          <span>Mappage des paramètres UTM</span>
        </div>

        <div class="data-item" style="left: 668px; top: 355px; transform: rotate(-2deg);">
          <UIcon name="i-lucide-message-square" class="size-4 text-[#6b7280] shrink-0" />
          <span>Nombres de clic et d'impressions</span>
        </div>

        <!-- Klyre disclaimer — même style que le bandeau Hero (pill + pastille halo) -->
        <div
          class="klyre-info-strip absolute bottom-3 left-1/2 z-10 w-[min(calc(100%-1.5rem),40rem)] -translate-x-1/2 px-5 py-3 font-archivo"
        >
          <span class="klyre-glow-dot self-center" aria-hidden="true">
            <span class="klyre-glow-dot__halo"></span>
            <span class="klyre-glow-dot__core"></span>
          </span>
          <p
            class="min-w-0 flex-1 text-center text-[12px] font-medium leading-[1.5] tracking-[-0.01em] text-[#0A0A0A]"
          >
            Ni plus ni moins, ce sont les données que Klyre synchronisent uniquement pour du croisement de données et de l'affichage
          </p>
        </div>

      </div>

      <!-- Mobile: simplified connectors cards -->
      <div class="mt-12 md:hidden flex flex-col gap-6">
        <!-- HubSpot -->
        <div class="border border-[#e6e6e6] rounded-[16px] p-5">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-2.5">
              <div class="bg-[rgba(255,140,0,0.04)] p-[7px] rounded">
                <img src="/hubspot-logo.svg" alt="HubSpot" class="w-[22px] h-[22px]" />
              </div>
              <div>
                <p class="font-archivo font-bold text-[14px] text-[#111827]">HubSpot</p>
                <p class="font-archivo text-[11px] text-[#9ca3af]">Contacts CRM, KPI, CAC</p>
              </div>
            </div>
            <div class="flex items-center gap-[5px]">
              <span class="w-1.5 h-1.5 rounded-full bg-[#059669]"></span>
              <span class="font-archivo text-[11px] text-[#059669]">Actif</span>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <div class="data-item-mobile"><UIcon name="i-lucide-user" class="size-4 text-[#6b7280] shrink-0" /><span>Fiches de contact</span></div>
            <div class="data-item-mobile"><UIcon name="i-lucide-sparkles" class="size-4 text-[#6b7280] shrink-0" /><span>Origine source de la donnée</span></div>
            <div class="data-item-mobile"><UIcon name="i-lucide-message-square" class="size-4 text-[#6b7280] shrink-0" /><span>Résultats des Meetings</span></div>
            <div class="data-item-mobile"><UIcon name="i-lucide-refresh-cw" class="size-4 text-[#6b7280] shrink-0" /><span>Propriétés des cycles de vies</span></div>
            <div class="data-item-mobile"><UIcon name="i-lucide-clipboard" class="size-4 text-[#6b7280] shrink-0" /><span>Horodatages</span></div>
          </div>
        </div>
        <!-- Google Ads -->
        <div class="border border-[#e6e6e6] rounded-[16px] p-5">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-2.5">
              <div class="bg-[rgba(255,140,0,0.04)] p-[7px] rounded">
                <img src="/google-ads-logo.svg" alt="Google Ads" class="w-[22px] h-[22px]" />
              </div>
              <div>
                <p class="font-archivo font-bold text-[14px] text-[#111827]">Google Ads</p>
                <p class="font-archivo text-[11px] text-[#9ca3af]">Indicateurs de coûts</p>
              </div>
            </div>
            <div class="flex items-center gap-[5px]">
              <span class="w-1.5 h-1.5 rounded-full bg-[#059669]"></span>
              <span class="font-archivo text-[11px] text-[#059669]">Actif</span>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <div class="data-item-mobile"><UIcon name="i-lucide-user" class="size-4 text-[#6b7280] shrink-0" /><span>Détails des campagnes</span></div>
            <div class="data-item-mobile"><UIcon name="i-lucide-sparkles" class="size-4 text-[#6b7280] shrink-0" /><span>Statut de la campagne</span></div>
            <div class="data-item-mobile"><UIcon name="i-lucide-clipboard" class="size-4 text-[#6b7280] shrink-0" /><span>Dépenses publicitaires</span></div>
            <div class="data-item-mobile"><UIcon name="i-lucide-refresh-cw" class="size-4 text-[#6b7280] shrink-0" /><span>Mappage des paramètres UTM</span></div>
            <div class="data-item-mobile"><UIcon name="i-lucide-message-square" class="size-4 text-[#6b7280] shrink-0" /><span>Clics et impressions</span></div>
          </div>
        </div>
      </div>

      <!-- CTAs -->
      <div class="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
        <button class="cta-base cta-primary">
          Inscrivez-vous gratuitement
        </button>
        <button class="cta-base cta-secondary">
          Voir la démo
        </button>
      </div>

      <!-- Check Items -->
      <div class="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center sm:items-start flex-wrap">
        <div class="flex items-center gap-2">
          <div class="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0">
            <UIcon name="i-lucide-check" class="size-3 text-green-600" />
          </div>
          <span class="text-sm text-gray-500">Connecté à HubSpot, Google Ads et vos outils marketing</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0">
            <UIcon name="i-lucide-check" class="size-3 text-green-600" />
          </div>
          <span class="text-sm text-gray-500">Analyse disponible en quelques minutes</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0">
            <UIcon name="i-lucide-check" class="size-3 text-green-600" />
          </div>
          <span class="text-sm text-gray-500">Aucune configuration complexe requise</span>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Transitions douces bordure / fond / ombre — hauteur = contenu (grid items-start) */
.funnel-step-card {
  transition:
    border-color 0.55s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.55s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.55s cubic-bezier(0.4, 0, 0.2, 1);
}

@media (prefers-reduced-motion: reduce) {
  .funnel-step-card {
    transition-duration: 0.01ms;
  }
}

.data-item {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: #f6f6f6;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  white-space: nowrap;
}
.data-item span {
  font-family: 'Archivo', sans-serif;
  font-size: 14px;
  color: #1a1a1a;
  letter-spacing: -0.42px;
}
.data-item-mobile {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  background: #f6f6f6;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
}
.data-item-mobile span {
  font-family: 'Archivo', sans-serif;
  font-size: 14px;
  color: #1a1a1a;
  letter-spacing: -0.42px;
}
</style>
