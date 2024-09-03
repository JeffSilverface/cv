<script setup lang="ts"></script>

<template>
  <div class="w-full h-full flex items-center justify-center section">
    <video id="background-video" autoplay loop muted>
      <source src="../assets/video/welcome.mp4" type="video/mp4" />
    </video>
    <h1 class="text-5xl font-bold text-blue-500">Bienvenue!</h1>
    <h1>{{ $t('welcome') }}</h1>
  </div>
</template>

<style scoped>
#background-video {
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
}
</style>
