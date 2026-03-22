<template>
  <section class="w-full bg-[#F5F5F5] py-20 font-archivo">
    <div class="mx-auto max-w-[1200px] px-6">
      <!-- Eyebrow -->
      <div class="section-eyebrow">
        <span class="section-eyebrow__dot" aria-hidden="true"></span>
        <span class="section-eyebrow__label">Pourquoi Klyre</span>
      </div>

      <!-- Heading -->
      <h2 class="section-heading-figma mx-auto mt-4 max-w-[720px]">
        L'angle mort du marketing B2B, résolu
      </h2>

      <!-- Comparison cards -->
      <div class="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        <!-- Sans Klyre -->
        <div
          class="overflow-hidden rounded-2xl border border-[#E8E8E8] bg-[#F9F9F9] shadow-[0_1px_3px_rgba(15,23,42,0.05)]"
        >
          <div class="px-10 pb-2 pt-10">
            <h3 class="text-xl font-bold tracking-tight text-[#0A0A0A]">
              Sans Klyre
            </h3>
          </div>
          <ul class="divide-y divide-[rgba(0,0,0,0.06)]">
            <li
              v-for="item in withoutKlyre"
              :key="item"
              class="flex items-center gap-4 px-10 py-4"
            >
              <span
                class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FEE2E2]"
              >
                <UIcon name="i-lucide-x" class="size-[11px] text-[#EF4444]" />
              </span>
              <span class="text-sm font-normal leading-snug text-[#374151]">
                {{ item }}
              </span>
            </li>
          </ul>
        </div>

        <!-- Avec Klyre -->
        <div
          class="overflow-hidden rounded-2xl border border-[#E8D089] bg-[#FFFBEB] shadow-[0_1px_3px_rgba(180,140,40,0.08)]"
        >
          <div class="px-10 pb-2 pt-10">
            <h3 class="text-xl font-bold tracking-tight text-[#0A0A0A]">
              Avec Klyre
            </h3>
          </div>
          <ul class="divide-y divide-[rgba(232,208,137,0.35)]">
            <li
              v-for="item in withKlyre"
              :key="item"
              class="flex items-center gap-4 px-10 py-4"
            >
              <span
                class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D1FAE5]"
              >
                <UIcon name="i-lucide-check" class="size-[11px] text-[#16A34A]" />
              </span>
              <span class="text-sm font-normal leading-snug text-[#374151]">
                {{ item }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const withoutKlyre = [
  'Google Ads et HubSpot ne communiquent pas',
  '6 à 12 semaines pour détecter une dégradation',
  '1 à 3 mois de budget gaspillé avant réaction',
  'Suivi manuel via spreadsheets, obsolète en jours',
  'Alternatives à 400-1 000 €/mois trop complexes',
]

const withKlyre = [
  'Réconciliation automatique CRM ↔ Ads',
  'Détection en moins de 24h via sync quotidien',
  'Alertes proactives avant impact sur le revenu',
  'Dashboard live, metrics toujours à jour',
  'Un prix adapté à votre budget publicitaire',
]
</script>
