<template>
  <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <div class="text-xl font-bold">Volunteers Today</div>
      <div class="space-x-4">
        <NuxtLink to="/" class="text-gray-700 hover:text-blue-500">Home</NuxtLink>
        <NuxtLink to="/dashboard" class="text-gray-700 hover:text-blue-500">Dashboard</NuxtLink>
        <NuxtLink to="/auth" class="text-gray-700 hover:text-blue-500">Login</NuxtLink>
        <NuxtLink to="/auth/signup" class="text-gray-700 hover:text-blue-500">Sign Up</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
// No props or logic needed for basic NavBar.
</script>

<style scoped>
/* Add any component-specific styles here */
</style>