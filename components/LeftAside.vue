<script setup lang="ts">
import { PhLinkedinLogo, PhGithubLogo } from '@phosphor-icons/vue'
</script>

<template>
  <aside class="fixed left-0 top-0 h-full w-24">
    <div class="relative h-full flex flex-col items-center justify-center">
      <div class="w-0.5 h-full bg-black mb-4 mt-32"></div>

      <NuxtLink
        href="https://www.linkedin.com/in/jfpann/"
        target="_blank"
        class="mt-4 mb-4 text-black hover:text-red-600 icon-link"
      >
        <PhLinkedinLogo :size="32" weight="fill" />
      </NuxtLink>

      <NuxtLink
        href="https://github.com/JeffSilverface"
        target="_blank"
        class="mb-4 text-black hover:text-red-600 icon-link"
      >
        <PhGithubLogo :size="32" weight="fill" />
      </NuxtLink>

      <div class="w-0.5 h-full bg-black mt-4 mb-32"></div>
    </div>
  </aside>
</template>

<style scoped>
.icon-link {
  transition: color 0.3s ease, transform 0.3s ease;
}

.icon-link:hover {
  transform: scale(1.1);
}
</style>
