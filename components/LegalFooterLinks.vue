<template>
  <div class="flex flex-wrap items-center gap-x-6 gap-y-2">
    <NuxtLink
      v-for="link in legalLinks"
      :key="link.to"
      :to="link.to"
      class="text-sm text-gray-500 hover:text-gray-900 transition-colors"
    >
      {{ link.label }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const legalLinks = [
  { to: '/legal/privacy', label: 'Politique de confidentialité' },
  { to: '/legal/terms', label: 'Mentions légales' },
  { to: '/legal/cgu', label: 'CGU' }
]
</script>
