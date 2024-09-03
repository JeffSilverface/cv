<script setup lang="ts">
import { useI18n } from 'vue-i18n'

interface HeaderProps {
  sectionIndex: number
}

const props = defineProps<HeaderProps>()

const { t } = useI18n()

const scrollToSection = (id: string) => {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

const headerList = [
  {
    id: 'home',
    i18nName: 'header-home',
  },
  {
    id: 'about',
    i18nName: 'header-about',
  },
  {
    id: 'experience',
    i18nName: 'header-experience',
  },
  {
    id: 'skills',
    i18nName: 'header-skills',
  },
  {
    id: 'contact',
    i18nName: 'header-contact',
  },
]
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 bg-transparent z-10">
    <div class="w-full justify-between flex items-center p-12">
      <h1 class="">{{ $t('first-name-short').toUpperCase() }}.{{ $t('last-name').toUpperCase() }}</h1>
      <div>
        <NuxtLink
          v-for="(item, index) in headerList"
          :key="index"
          @click="scrollToSection(item.id)"
          class="cursor-pointer flex-row mx-8 w-0.5 h-80"
          :class="['transition-all duration-300', index === props.sectionIndex ? 'text-red-600' : 'text-black']"
          >{{ $t(item.i18nName).toUpperCase() }}</NuxtLink
        >
      </div>
      <span class="mr-4">+33.6.00.00.00</span>
    </div>
  </nav>
</template>
