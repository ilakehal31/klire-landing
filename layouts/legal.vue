<template>
  <div class="min-h-screen bg-white font-archivo antialiased">
    <!-- NavBar -->
    <NavBar />

    <!-- Header: breadcrumb + title + date -->
    <div class="max-w-[1200px] mx-auto px-6 pt-8">
      <div class="pl-[304px]">
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#a5a5a5] hover:text-[#575757] transition-colors mb-3"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" class="rotate-180">
            <path d="M5.25 3.5L8.75 7L5.25 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Retour à l'accueil
        </NuxtLink>

        <h1 class="font-bold text-[40px] leading-[46px] tracking-[-0.8px] text-[#0a0a0a]">
          {{ title }}
        </h1>

        <p class="text-[15px] text-[#a5a5a5] leading-[24px] mt-3">
          {{ siteName }} — {{ lastUpdated }}
        </p>
      </div>
    </div>

    <!-- Sidebar + Content -->
    <div class="max-w-[1200px] mx-auto px-6 flex gap-16 items-start mt-10 pb-20">
      <!-- Sidebar TOC -->
      <aside class="w-[240px] shrink-0 sticky top-8">
        <p class="text-[11px] font-semibold text-[#a5a5a5] uppercase tracking-[0.88px] mb-4">
          Sommaire
        </p>
        <nav class="flex flex-col gap-0.5">
          <a
            v-for="(item, index) in tableOfContents"
            :key="index"
            :href="`#${item.id}`"
            :class="[
              'block py-[7px] pl-[14px] pr-3 text-[13px] rounded-[6px] border-l-2 transition-colors',
              activeSection === item.id
                ? 'bg-[#fffbec] border-[#ff8c00] text-[#ff8c00] font-normal'
                : 'border-transparent text-[#575757] hover:text-[#0a0a0a] font-normal'
            ]"
          >
            {{ item.label }}
          </a>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 max-w-[720px] min-w-0">
        <slot />
      </main>
    </div>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import type { TableOfContentsItem } from '~/types/legal'

interface Props {
  title: string
  tableOfContents: TableOfContentsItem[]
  siteName?: string
  lastUpdated?: string
}

const props = withDefaults(defineProps<Props>(), {
  siteName: 'klyre.io',
  lastUpdated: 'Mars 2026'
})

const activeSection = ref('')

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    {
      rootMargin: '-20% 0px -80% 0px'
    }
  )

  props.tableOfContents.forEach((item) => {
    const element = document.getElementById(item.id)
    if (element) {
      observer.observe(element)
    }
  })

  onUnmounted(() => {
    observer.disconnect()
  })
})
</script>
