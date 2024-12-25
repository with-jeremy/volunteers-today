<template>
  <div class="min-h-screen bg-gray-100">
    <header class="p-4 bg-white shadow">
      <NavBar />
    </header>
    <main class="p-4">
      <NuxtPage />
    </main>
    <footer class="p-4 bg-white shadow mt-4">
      <p>&copy; 2024 Volunteers Today</p>
    </footer>
  </div>
</template>

<script setup>
import NavBar from '~/components/NavBar.vue'
// ...existing script...
</script>

<style>
/* ...existing styles... */
</style>