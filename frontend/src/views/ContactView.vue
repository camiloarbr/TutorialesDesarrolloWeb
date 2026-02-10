<script setup lang="ts"></script>

<template>
  <section class="mt-4 mb-4">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-800 text-center">Contact Page</h2>
      <p class="text-gray-600 text-center mt-4 mb-8">
        ¿Tienes preguntas o sugerencias? Completa el formulario y te responderemos pronto.
      </p>

      <form class="max-w-md mx-auto space-y-4" @submit.prevent>
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
          <input
            id="name"
            type="text"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Correo</label>
          <input
            id="email"
            type="email"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="tu@correo.com"
          />
        </div>
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
          <textarea
            id="message"
            rows="4"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            placeholder="Escribe tu mensaje..."
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Enviar
        </button>
      </form>
    </div>
  </section>
</template>
