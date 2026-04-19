export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  ssr: true,
  routeRules: {
    '/login': {
      redirect: {
        to: 'https://app.klyre.io/auth/sign-in',
        statusCode: 301
      }
    },
    '/login/': {
      redirect: {
        to: 'https://app.klyre.io/auth/sign-in',
        statusCode: 301
      }
    }
  },
  modules: ['@nuxt/ui'],
  colorMode: {
    preference: 'light',
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Klyre — Détectez les signaux qui impactent votre revenu',
      meta: [
        { name: 'description', content: 'Klyre surveille l\'ensemble de votre acquisition et détecte les pertes de valeur avant qu\'elles n\'impactent votre pipeline et votre revenu.' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&display=swap',
        },
      ],
    },
  },
})
