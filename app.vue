<template>
  <div class="flex flex-col h-screen">
    <!-- Header fixe -->
    <header class="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div class="container mx-auto flex justify-between items-center p-4">
        <div class="text-2xl font-bold">Mon Site</div>
        <nav class="space-x-4">
          <a href="#home" class="text-gray-800 hover:text-blue-500">Accueil</a>
          <a href="#about" class="text-gray-800 hover:text-blue-500">À propos</a>
          <a href="#experience" class="text-gray-800 hover:text-blue-500">Expérience</a>
          <a href="#skills" class="text-gray-800 hover:text-blue-500">Compétences</a>
          <a href="#contact" class="text-gray-800 hover:text-blue-500">Contact</a>
        </nav>
      </div>
    </header>

    <main class="flex-1 overflow-y-auto mt-16">
      <section id="home" class="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 class="text-5xl font-bold text-blue-500">Bienvenue!</h1>
      </section>

      <section id="about" class="min-h-screen flex items-center justify-center bg-white">
        <div class="max-w-2xl text-center p-6">
          <h2 class="text-3xl font-bold mb-4">À propos de moi</h2>
          <p class="text-lg text-gray-700">
            Je suis un développeur passionné par la création d'applications web modernes et réactives.
          </p>
        </div>
      </section>

      <section id="experience" class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="max-w-2xl text-center p-6">
          <h2 class="text-3xl font-bold mb-4">Expérience et Éducation</h2>
          <p class="text-lg text-gray-700">
            J'ai travaillé dans diverses entreprises et j'ai étudié l'informatique à l'université.
          </p>
        </div>
      </section>

      <section id="skills" class="min-h-screen flex items-center justify-center bg-white">
        <div class="max-w-2xl text-center p-6">
          <h2 class="text-3xl font-bold mb-4">Compétences</h2>
          <p class="text-lg text-gray-700">
            Mes compétences incluent le développement frontend avec Vue.js, Nuxt, et Tailwind CSS.
          </p>
        </div>
      </section>

      <section id="contact" class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="max-w-lg w-full p-6 bg-white rounded-lg shadow-md">
          <h2 class="text-3xl font-bold mb-6 text-center">Contactez-moi</h2>
          <form @submit.prevent="handleSubmit">
            <div class="mb-4">
              <label for="name" class="block text-sm font-medium text-gray-700">Nom</label>
              <input
                type="text"
                id="name"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div class="mb-4">
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows="4"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              ></textarea>
            </div>
            <div class="text-center">
              <button type="submit" class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
    <footer class="bg-white shadow-inner mt-auto">
      <div class="container mx-auto py-4 px-4 flex justify-between items-center">
        <div class="text-gray-700">&copy; 2024 Mon Site. Tous droits réservés.</div>
        <div class="flex space-x-4">
          <a href="#" class="text-gray-600 hover:text-blue-500">Politique de confidentialité</a>
          <a href="#" class="text-gray-600 hover:text-blue-500">Conditions d'utilisation</a>
          <a href="#" class="text-gray-600 hover:text-blue-500">Mentions légales</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const handleSubmit = () => {
  alert('Formulaire soumis!')
}
</script>

<style></style>
