export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  ssr: true,
  app: {
    head: {
      title: 'Klyre — Monitor your lead acquisition quality',
      meta: [
        { name: 'description', content: 'Klyre connects to Google Ads and HubSpot CRM to help marketing teams analyze cost-per-lead and campaign attribution.' },
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
          href: 'https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },
})
