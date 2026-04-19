export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '/login' || to.path === '/login/') {
    return navigateTo('https://app.klyre.io/auth/sign-in', {
      external: true,
      redirectCode: 301
    })
  }
})
