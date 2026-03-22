<template>
  <div class="min-h-screen bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <!-- Back to home -->
      <NuxtLink 
        to="/" 
        class="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-8 transition-colors"
      >
        <UIcon name="i-heroicons-chevron-left" class="w-4 h-4" />
        Retour à l'accueil
      </NuxtLink>

      <!-- Header -->
      <header class="mb-12">
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Documents Légaux
        </h1>
        <p class="text-lg text-gray-600">
          Retrouvez l'ensemble de nos documents juridiques et politiques de confidentialité.
        </p>
      </header>

      <!-- Legal documents grid -->
      <div class="grid gap-6 md:grid-cols-2">
        <NuxtLink
          v-for="doc in legalDocs"
          :key="doc.slug"
          :to="`/legal/${doc.slug}`"
          class="group p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-200"
        >
          <div class="flex items-start justify-between mb-3">
            <div class="p-3 rounded-lg bg-primary-50 text-primary-600 group-hover:bg-primary-100 transition-colors">
              <UIcon :name="doc.icon" class="w-6 h-6" />
            </div>
            <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 text-gray-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
          </div>
          
          <h2 class="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
            {{ doc.title }}
          </h2>
          
          <p class="text-gray-600 text-sm leading-relaxed">
            {{ doc.description }}
          </p>

          <p class="text-xs text-gray-400 mt-4">
            Dernière mise à jour : {{ doc.lastUpdated }}
          </p>
        </NuxtLink>
      </div>

      <!-- Contact section -->
      <div class="mt-16 p-8 rounded-xl bg-gray-50 border border-gray-100">
        <h3 class="text-xl font-semibold text-gray-900 mb-3">
          Questions juridiques ?
        </h3>
        <p class="text-gray-600 mb-4">
          Pour toute question concernant nos documents légaux ou le traitement de vos données, 
          n'hésitez pas à nous contacter.
        </p>
        <a 
          href="mailto:contact@klyre.io" 
          class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors font-medium"
        >
          <UIcon name="i-heroicons-envelope" class="w-4 h-4" />
          contact@klyre.io
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const legalDocs = [
  {
    slug: 'privacy',
    title: 'Politique de Confidentialité',
    description: 'Découvrez comment nous collectons, utilisons et protégeons vos données personnelles conformément au RGPD.',
    icon: 'i-heroicons-shield-check',
    lastUpdated: 'Mars 2026'
  },
  {
    slug: 'terms',
    title: 'Mentions Légales',
    description: 'Informations légales sur l\'éditeur du site, l\'hébergement et la propriété intellectuelle.',
    icon: 'i-heroicons-document-text',
    lastUpdated: 'Mars 2026'
  },
  {
    slug: 'cgu',
    title: 'Conditions Générales d\'Utilisation',
    description: 'Les conditions qui régissent l\'utilisation du service KLYRE et vos droits en tant qu\'utilisateur.',
    icon: 'i-heroicons-clipboard-document-check',
    lastUpdated: 'Mars 2026'
  }
]

useHead({
  title: 'Documents Légaux - Klyre',
  meta: [
    { name: 'description', content: 'Consultez nos documents légaux : politique de confidentialité, mentions légales et conditions générales d\'utilisation.' }
  ]
})
</script>
