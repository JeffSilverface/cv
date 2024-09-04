<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

console.log('locale', locale.value)

const currentYear = new Date().getFullYear()
const changeLanguage = (lang: string) => {
  locale.value = lang
}
</script>

<template>
  <div class="fixed bottom-0 left-0 right-0 bg-transparent z-10">
    <div class="w-full justify-between flex items-center p-12">
      <p class="text-gray-700">
        {{ currentYear }}
        <NuxtLink to="https://github.com/JeffSilverface/cv" target="_blank"> Licence GPLv3 OpenSource </NuxtLink>
      </p>
      <div class="flex space-x-6">
        <button @click="changeLanguage('fr')" :class="locale === 'fr-FR' ? 'text-red-600' : 'text-black'">FR</button>
        <button @click="changeLanguage('en')" :class="locale === 'en-GB' ? 'text-red-600' : 'text-black'">ENG</button>
      </div>
    </div>
  </div>
</template>
