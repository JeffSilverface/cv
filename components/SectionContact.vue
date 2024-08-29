<script setup lang="ts">
const handleSubmit = () => {
  alert('Formulaire soumis!')
}
</script>

<template>
  <section id="contact" class="snap-start min-h-screen flex items-center justify-center bg-gray-100">
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
</template>
