import { NuxtI18nOptions } from '@nuxtjs/i18n'

declare module '@nuxt/schema' {
  interface NuxtConfig {
    i18n?: NuxtI18nOptions
  }
}
