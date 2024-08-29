<script setup lang="ts">
const scrollToSection = (id: string) => {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="fixed top-0 left-0 right-0 bg-transparent z-10">
    <div class="container mx-auto flex justify-between items-center p-4">
      <a @click="scrollToSection('home')" class="text-red-500 cursor-pointer">Accueil</a>
      <a @click="scrollToSection('about')" class="text-red-500 cursor-pointer">À propos</a>
      <a @click="scrollToSection('experience')" class="text-red-500 cursor-pointer"> Expérience </a>
      <a @click="scrollToSection('skills')" class="text-red-500 cursor-pointer"> Compétences </a>
      <a @click="scrollToSection('contact')" class="text-red-500 cursor-pointer">Contact</a>
    </div>
  </div>
</template>
