<template>
  <div class="login-page">
    <div class="login-container">
      <!-- Card -->
      <div class="login-card">
        <!-- Logo -->
        <div class="login-logo">
          <NuxtLink to="/">
            <img src="/logo-klyre.png" alt="Klyre" class="login-logo-img" />
          </NuxtLink>
        </div>

        <h1 class="login-title">Bon retour !</h1>

        <!-- Divider -->
        <div class="login-divider">
          <span class="login-divider-line" />
          <span class="login-divider-text">Connectez-vous avec votre email</span>
          <span class="login-divider-line" />
        </div>

        <form @submit.prevent="handleLogin" class="login-form">
          <UFormField label="Email" required color="primary">
            <UInput
              v-model="email"
              type="email"
              placeholder="name@example.com"
              icon="i-lucide-mail"
              size="md"
              color="primary"
              class="w-full"
              :ui="inputUI"
            />
          </UFormField>

          <UFormField label="Mot de passe" required color="primary">
            <UInput
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Entrez votre mot de passe"
              icon="i-lucide-lock"
              size="md"
              color="primary"
              class="w-full"
              :ui="inputUI"
            >
              <template #trailing>
                <button
                  type="button"
                  class="login-eye-btn"
                  @click="showPassword = !showPassword"
                >
                  <UIcon :name="showPassword ? 'i-lucide-eye-off' : 'i-lucide-eye'" class="size-5" />
                </button>
              </template>
            </UInput>
          </UFormField>

          <button
            type="submit"
            class="cta-base cta-primary w-full"
            :disabled="loading"
          >
            <UIcon v-if="loading" name="i-lucide-loader-circle" class="size-5 animate-spin mr-2" />
            {{ loading ? 'Connexion...' : 'Se connecter' }}
          </button>
        </form>

      </div>

      <!-- Footer links -->
      <div class="login-footer">
        <NuxtLink to="/legal/cgu">Conditions d'utilisation</NuxtLink>
        <NuxtLink to="/legal/privacy">Politique de confidentialité</NuxtLink>
        <NuxtLink to="/legal/terms">Mentions légales</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const toast = useToast()

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const loading = ref(false)

const inputUI = {
  base: 'bg-white! text-gray-900! border-gray-200!',
  leading: { color: 'text-gray-400!' }
}

useHead({
  title: 'Connexion — Klyre'
})

async function handleLogin() {
  if (!email.value || !password.value) {
    toast.add({
      title: 'Champs requis',
      description: 'Veuillez renseigner votre email et votre mot de passe.',
      color: 'error',
      icon: 'i-lucide-circle-x'
    })
    return
  }

  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 1200))
  loading.value = false

  toast.add({
    title: 'Utilisateur inconnu',
    description: 'Nous ne reconnaissons pas cet identifiant. Vérifiez vos informations.',
    color: 'error',
    icon: 'i-lucide-circle-x'
  })
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-family: var(--font-archivo);
}

.login-container {
  width: 100%;
  max-w: 480px;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.login-card {
  width: 100%;
  background: #fff;
  border: 1px solid #e2e5ea;
  border-radius: 16px;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-logo {
  margin-bottom: 1.5rem;
}

.login-logo-img {
  height: 32px;
}

.login-title {
  font-family: var(--font-archivo);
  font-weight: 700;
  font-size: 1.375rem;
  color: #0a0a0a;
  margin-bottom: 1.5rem;
}

.login-divider {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin-bottom: 1.5rem;
}

.login-divider-line {
  flex: 1;
  height: 1px;
  background: #e2e5ea;
}

.login-divider-text {
  font-size: 0.8125rem;
  color: #6b7280;
  white-space: nowrap;
}

.login-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.login-eye-btn {
  color: #9ca3af;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
}

.login-eye-btn:hover {
  color: #4b5563;
}

.login-forgot {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-figma-orange);
  text-decoration: none;
}

.login-forgot:hover {
  text-decoration: underline;
}


.login-signup {
  margin-top: 1.5rem;
  font-size: 0.875rem;
  color: #6b7280;
}

.login-signup a {
  color: var(--color-figma-orange);
  font-weight: 500;
  text-decoration: underline;
}

.login-footer {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.login-footer a {
  font-size: 0.8125rem;
  color: #9ca3af;
  text-decoration: none;
  transition: color 150ms ease;
}

.login-footer a:hover {
  color: #6b7280;
}

/* Override Nuxt UI green focus ring with orange */
.login-card :deep(input:focus) {
  --ui-primary: var(--color-figma-orange);
  outline-color: var(--color-figma-orange) !important;
  box-shadow: 0 0 0 2px var(--color-figma-orange) !important;
  border-color: var(--color-figma-orange) !important;
}

.login-card :deep([data-part="root"]:has(input:focus)) {
  border-color: var(--color-figma-orange) !important;
  outline-color: var(--color-figma-orange) !important;
  --tw-ring-color: var(--color-figma-orange) !important;
}
</style>
