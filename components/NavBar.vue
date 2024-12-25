<template>
  <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <div class="text-xl font-bold">Volunteers Today</div>
      <div class="hidden md:flex space-x-4">
        <NuxtLink to="/" class="text-gray-700 hover:text-blue-500">Home</NuxtLink>
        <NuxtLink to="/dashboard" class="text-gray-700 hover:text-blue-500">Dashboard</NuxtLink>
        <NuxtLink to="/auth/login" class="text-gray-700 hover:text-blue-500">Login</NuxtLink>
        <NuxtLink to="/auth/signup" class="text-gray-700 hover:text-blue-500">Sign Up</NuxtLink>
      </div>
      <button class="md:hidden text-gray-700 hover:text-blue-500" @click="toggleMenu">
        <!-- Hamburger Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-white shadow-inner">
      <NuxtLink to="/" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</NuxtLink>
      <NuxtLink to="/dashboard" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Dashboard</NuxtLink>
      <NuxtLink to="/auth/login" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Login</NuxtLink>
      <NuxtLink to="/auth/signup" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sign Up</NuxtLink>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
/* Add any component-specific styles here */
</style>