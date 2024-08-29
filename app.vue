<script setup lang="ts"></script>

<template>
  <div class="flex flex-col h-screen">
    <header>
      <Header />
    </header>

    <aside><LeftAside /></aside>
    <aside><RightAside /></aside>

    <main class="flex-1 snap-y snap-mandatory overflow-y-scroll h-screen">
      <SectionHome />
      <SectionAboutMe />
      <SectionExperience />
      <SectionSkills />
      <SectionContact />
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>
