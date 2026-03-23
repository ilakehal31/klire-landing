<template>
  <UModal v-model:open="isOpen" title="Rejoignez la liste d'attente" description="Soyez parmi les premiers à découvrir Klyre. Vous serez notifié par e-mail dès la sortie.">
    <template #body>
      <form class="flex flex-col gap-4" @submit.prevent="handleSubmit">
        <div class="flex flex-col sm:flex-row gap-4">
          <div class="flex-1 flex flex-col gap-1.5">
            <label for="waitlist-firstname" class="text-sm font-medium text-[#0a0a0a]">Prénom</label>
            <input
              id="waitlist-firstname"
              v-model="form.firstName"
              type="text"
              required
              placeholder="Votre prénom"
              class="w-full rounded-lg border border-[#e6e6e6] bg-white px-3 py-2.5 text-sm text-[#0a0a0a] placeholder:text-gray-400 outline-none focus:border-[#FF8C00] focus:ring-1 focus:ring-[#FF8C00] transition-colors"
            />
          </div>
          <div class="flex-1 flex flex-col gap-1.5">
            <label for="waitlist-lastname" class="text-sm font-medium text-[#0a0a0a]">Nom</label>
            <input
              id="waitlist-lastname"
              v-model="form.lastName"
              type="text"
              required
              placeholder="Votre nom"
              class="w-full rounded-lg border border-[#e6e6e6] bg-white px-3 py-2.5 text-sm text-[#0a0a0a] placeholder:text-gray-400 outline-none focus:border-[#FF8C00] focus:ring-1 focus:ring-[#FF8C00] transition-colors"
            />
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <label for="waitlist-email" class="text-sm font-medium text-[#0a0a0a]">Adresse e-mail</label>
          <input
            id="waitlist-email"
            v-model="form.email"
            type="email"
            required
            placeholder="vous@entreprise.com"
            class="w-full rounded-lg border border-[#e6e6e6] bg-white px-3 py-2.5 text-sm text-[#0a0a0a] placeholder:text-gray-400 outline-none focus:border-[#FF8C00] focus:ring-1 focus:ring-[#FF8C00] transition-colors"
          />
        </div>
        <button
          type="submit"
          class="cta-base cta-primary mt-2 w-full justify-center"
          :disabled="loading"
        >
          {{ loading ? 'Envoi en cours...' : "S'inscrire" }}
        </button>
      </form>
    </template>
  </UModal>
</template>

<script setup lang="ts">
const { isOpen } = useWaitlistModal()
const toast = useToast()

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
})
const loading = ref(false)

async function handleSubmit() {
  loading.value = true
  try {
    await $fetch('/api/waitlist', {
      method: 'POST',
      body: form.value,
    })
    const firstName = form.value.firstName
    isOpen.value = false
    toast.add({
      title: 'Inscription confirmée !',
      description: `Merci ${firstName}, nous avons bien reçu votre inscription. Vous serez notifié par e-mail dès la sortie de Klyre.`,
      icon: 'i-lucide-check-circle',
      color: 'success',
      duration: 6000,
    })
    form.value = { firstName: '', lastName: '', email: '' }
  } catch {
    toast.add({
      title: 'Erreur',
      description: 'Une erreur est survenue, veuillez réessayer.',
      icon: 'i-lucide-alert-circle',
      color: 'error',
      duration: 5000,
    })
  } finally {
    loading.value = false
  }
}
</script>
