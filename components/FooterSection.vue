<template>
  <footer class="border-t border-[#e6e6e6]">
    <div class="max-w-[1200px] mx-auto px-6">
      <!-- Top part -->
      <div class="flex flex-col md:flex-row pt-12 md:pt-16 pb-12 gap-10 md:gap-0">
        <!-- Left: Brand -->
        <div class="md:w-[300px] shrink-0">
          <span class="text-[20px] font-bold text-[#0a0a0a] tracking-[-0.4px] leading-[32px]">Klyre</span>
          <p class="mt-4 text-[14px] text-[#575757] leading-[22.4px] max-w-[260px]">
            Détectez les signaux qui impactent votre revenu avant qu'il ne soit trop tard.
          </p>
          <div class="mt-6 flex gap-4 items-center">
            <a href="#" class="text-[#575757] hover:text-[#0a0a0a] transition-colors">
              <UIcon name="i-simple-icons-linkedin" class="size-[18px]" />
            </a>
            <a href="#" class="text-[#575757] hover:text-[#0a0a0a] transition-colors">
              <UIcon name="i-simple-icons-x" class="size-4" />
            </a>
            <a href="mailto:contact@klyre.io" class="text-[#575757] hover:text-[#0a0a0a] transition-colors">
              <UIcon name="i-lucide-mail" class="size-[18px]" />
            </a>
          </div>
        </div>

        <!-- Navigation columns -->
        <div class="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-0 md:flex md:justify-between">
          <!-- Produit -->
          <div>
            <p class="text-[13px] font-semibold text-[#0a0a0a] leading-[20.8px] mb-5">Produit</p>
            <div class="flex flex-col gap-3">
              <a href="#" class="text-[14px] text-[#575757] leading-[22.4px] hover:text-[#0a0a0a] transition-colors">Revenue Signals</a>
              <a href="#" class="text-[14px] text-[#575757] leading-[22.4px] hover:text-[#0a0a0a] transition-colors">Diagnostic</a>
              <a href="#" class="text-[14px] text-[#575757] leading-[22.4px] hover:text-[#0a0a0a] transition-colors">Intégrations</a>
              <a href="#" class="text-[14px] text-[#575757] leading-[22.4px] hover:text-[#0a0a0a] transition-colors">Tarifs</a>
            </div>
          </div>

          <!-- Solutions -->
          <div>
            <p class="text-[13px] font-semibold text-[#0a0a0a] leading-[20.8px] mb-5">Solutions</p>
            <div class="flex flex-col gap-3">
              <a href="#" class="text-[14px] text-[#575757] leading-[22.4px] hover:text-[#0a0a0a] transition-colors">Marketing Leaders</a>
              <a href="#" class="text-[14px] text-[#575757] leading-[22.4px] hover:text-[#0a0a0a] transition-colors">Growth Teams</a>
              <a href="#" class="text-[14px] text-[#575757] leading-[22.4px] hover:text-[#0a0a0a] transition-colors">Revenue Teams</a>
            </div>
          </div>

          <!-- Ressources -->
          <div>
            <p class="text-[13px] font-semibold text-[#0a0a0a] leading-[20.8px] mb-5">Ressources</p>
            <div class="flex flex-col gap-3">
              <a href="#" class="text-[14px] text-[#575757] leading-[22.4px] hover:text-[#0a0a0a] transition-colors">Blog</a>
              <a href="#" class="text-[14px] text-[#575757] leading-[22.4px] hover:text-[#0a0a0a] transition-colors">Documentation</a>
              <a href="#" class="text-[14px] text-[#575757] leading-[22.4px] hover:text-[#0a0a0a] transition-colors">Centre d'aide</a>
              <a href="#" class="text-[14px] text-[#575757] leading-[22.4px] hover:text-[#0a0a0a] transition-colors">Changelog</a>
            </div>
          </div>

          <!-- Entreprise -->
          <div>
            <p class="text-[13px] font-semibold text-[#0a0a0a] leading-[20.8px] mb-5">Entreprise</p>
            <div class="flex flex-col gap-3">
              <a href="#" class="text-[14px] text-[#575757] leading-[22.4px] hover:text-[#0a0a0a] transition-colors">À propos</a>
              <a href="#" class="text-[14px] text-[#575757] leading-[22.4px] hover:text-[#0a0a0a] transition-colors">Carrières</a>
              <a href="#" class="text-[14px] text-[#575757] leading-[22.4px] hover:text-[#0a0a0a] transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom part -->
      <div class="border-t border-[#e6e6e6] flex flex-col sm:flex-row justify-between items-center gap-3 py-5">
        <span class="text-[12px] text-[#a5a5a5] leading-[19.2px]">© 2026 Klyre. Tous droits réservés.</span>
        <div class="flex flex-wrap justify-center gap-4 sm:gap-6">
          <NuxtLink to="/legal/privacy" class="text-[12px] text-[#a5a5a5] leading-[19.2px] hover:text-[#575757] transition-colors">
            Politique de confidentialité
          </NuxtLink>
          <NuxtLink to="/legal/terms" class="text-[12px] text-[#a5a5a5] leading-[19.2px] hover:text-[#575757] transition-colors">
            Mentions légales
          </NuxtLink>
          <NuxtLink to="/legal/cgu" class="text-[12px] text-[#a5a5a5] leading-[19.2px] hover:text-[#575757] transition-colors">
            CGV
          </NuxtLink>
          <NuxtLink to="/legal/privacy#cookies" class="text-[12px] text-[#a5a5a5] leading-[19.2px] hover:text-[#575757] transition-colors">
            Cookies
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
