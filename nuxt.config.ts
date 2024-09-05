export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['@/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  i18n: {
    locales: ['fr-FR', 'en-GB'],
    defaultLocale: 'fr-FR',
    vueI18n: './i18n.config.ts',
  },
})
