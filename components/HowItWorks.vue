<template>
  <section class="w-full bg-gray-50 py-20">
    <div class="mx-auto max-w-[1200px] px-6">
      <!-- Eyebrow -->
      <div class="section-eyebrow">
        <span class="section-eyebrow__dot" aria-hidden="true"></span>
        <span class="section-eyebrow__label">Comment ça marche</span>
      </div>

      <!-- Heading -->
      <h2 class="section-heading-figma mx-auto mt-4 max-w-[660px]">
        Quelques minutes pour lever le voile sur la santé de votre acquisition
      </h2>

      <!-- Subtitle -->
      <p class="mx-auto mt-4 max-w-[560px] text-center text-base text-gray-500">
        Connectez vos comptes, Klyre synchronise et calcule. Aucune configuration technique.
      </p>

      <!-- Steps: 3 colonnes, chiffres filigrane, pastilles crème + icônes orange Figma -->
      <div class="mt-14 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10 lg:gap-14">
        <!-- Step 1 -->
        <div class="relative text-left">
          <span
            class="pointer-events-none absolute -left-0.5 -top-1 select-none font-archivo text-[clamp(3.5rem,8vw,5rem)] font-bold leading-[0.88] tracking-[-0.03em] text-[#E8E8E8]"
            aria-hidden="true"
          >01</span>
          <div class="relative z-10 pt-[clamp(2.75rem,6.5vw,3.75rem)]">
            <div
              class="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF9F0]"
            >
              <UIcon name="i-lucide-layers" class="size-5 text-[#FF8C00]" />
            </div>
            <h3 class="mt-5 font-archivo text-lg font-bold leading-snug text-[#0A0A0A]">
              Connectez HubSpot &amp; Google Ads
            </h3>
            <p class="mt-3 font-archivo text-sm font-normal leading-[1.5] text-[#6B7280]">
              Autorisez en 2 clics via OAuth. Accès en lecture seule — aucune modification de vos données.
            </p>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="relative text-left">
          <span
            class="pointer-events-none absolute -left-0.5 -top-1 select-none font-archivo text-[clamp(3.5rem,8vw,5rem)] font-bold leading-[0.88] tracking-[-0.03em] text-[#E8E8E8]"
            aria-hidden="true"
          >02</span>
          <div class="relative z-10 pt-[clamp(2.75rem,6.5vw,3.75rem)]">
            <div
              class="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF9F0]"
            >
              <UIcon name="i-lucide-cloud-download" class="size-5 text-[#FF8C00]" />
            </div>
            <h3 class="mt-5 font-archivo text-lg font-bold leading-snug text-[#0A0A0A]">
              Synchronisation automatique
            </h3>
            <p class="mt-3 font-archivo text-sm font-normal leading-[1.5] text-[#6B7280]">
              Pipeline quotidien à 3h du matin. Leads, campagnes, dépenses et réunions réconciliés automatiquement.
            </p>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="relative text-left">
          <span
            class="pointer-events-none absolute -left-0.5 -top-1 select-none font-archivo text-[clamp(3.5rem,8vw,5rem)] font-bold leading-[0.88] tracking-[-0.03em] text-[#E8E8E8]"
            aria-hidden="true"
          >03</span>
          <div class="relative z-10 pt-[clamp(2.75rem,6.5vw,3.75rem)]">
            <div
              class="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF9F0]"
            >
              <UIcon name="i-lucide-bell" class="size-5 text-[#FF8C00]" />
            </div>
            <h3 class="mt-5 font-archivo text-lg font-bold leading-snug text-[#0A0A0A]">
              Agissez sur les signaux
            </h3>
            <p class="mt-3 font-archivo text-sm font-normal leading-[1.5] text-[#6B7280]">
              Alertes automatiques si un taux de conversion chute, un coût explose ou la qualité se dégrade.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
