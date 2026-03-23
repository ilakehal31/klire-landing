<template>
  <header class="w-full pt-6 px-4 md:px-6 relative z-50">
    <nav
      class="mx-auto flex items-center justify-between max-w-[1200px] rounded-2xl border border-[#e6e6e6] bg-white/95 backdrop-blur-[8px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.04)] px-4 py-3 md:px-[17px] md:py-[17px] nav-animate"
      :class="{ 'nav-visible': mounted }"
    >
      <!-- Left: Logo -->
      <a href="/" class="shrink-0">
        <img src="/logo-klyre.png" alt="Klyre" class="h-[27px] w-auto" />
      </a>

      <!-- Center: Nav links (desktop) -->
      <ul class="hidden lg:flex items-center gap-8">
        <li v-for="link in navLinks" :key="link.label">
          <a
            :href="link.href"
            class="font-archivo font-medium text-sm text-[#575757] hover:text-dark transition-colors leading-[22.4px]"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- Right: Auth (desktop) -->
      <div class="hidden md:flex items-center gap-4">
        <a
          href="/login"
          class="font-archivo font-medium text-sm text-[#0a0a0a] underline leading-[22.4px]"
        >
          Connexion
        </a>
        <button
          class="cta-base cta-primary cta-nav"
          @click="openWaitlist"
        >
          Inscrivez-vous sur la liste d'attente
        </button>
      </div>

      <!-- Mobile: hamburger button -->
      <button
        class="md:hidden flex items-center justify-center w-10 h-10 rounded-lg"
        aria-label="Menu"
        @click="mobileOpen = !mobileOpen"
      >
        <UIcon :name="mobileOpen ? 'i-lucide-x' : 'i-lucide-menu'" class="size-5 text-[#0a0a0a]" />
      </button>
    </nav>

    <!-- Mobile menu overlay -->
    <div
      v-if="mobileOpen"
      class="md:hidden mx-auto max-w-[1200px] mt-2 rounded-2xl border border-[#e6e6e6] bg-white shadow-[0px_8px_24px_0px_rgba(0,0,0,0.08)] p-6"
    >
      <ul class="flex flex-col gap-4">
        <li v-for="link in navLinks" :key="link.label">
          <a
            :href="link.href"
            class="font-archivo font-medium text-base text-[#575757] hover:text-dark transition-colors"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
      <div class="mt-6 flex flex-col gap-3">
        <a
          href="/login"
          class="font-archivo font-medium text-sm text-[#0a0a0a] underline text-center"
        >
          Connexion
        </a>
        <button
          class="cta-base cta-primary text-center w-full"
          @click="openWaitlist(); mobileOpen = false"
        >
          Inscrivez-vous sur la liste d'attente
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const { open: openWaitlist } = useWaitlistModal()
const mounted = ref(false)
const mobileOpen = ref(false)

onMounted(() => {
  requestAnimationFrame(() => {
    mounted.value = true
  })
})

const navLinks = [
  { label: "Cas d'usage", href: '#cas-usage' },
  { label: 'Revenue Signals', href: '#revenue-signals' },
  { label: 'Comment ça marche', href: '#comment-ca-marche' },
  { label: 'Fonctionnalités', href: '#fonctionnalites' },
]
</script>

<style scoped>
.nav-animate {
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.nav-animate.nav-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
