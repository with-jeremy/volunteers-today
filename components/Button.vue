<template>
  <button
    :class="buttonClasses"
    @click="$emit('click')"
    :disabled="disabled"
    aria-label="button"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'success', 'danger', 'warning'].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const buttonClasses = computed(() => {
  const base = 'px-4 py-2 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition';
  const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-400',
    success: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-400',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-400',
    warning: 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400',
  };
  return `${base} ${variants[props.variant]} ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
});
</script>

<style scoped>
/* Add any component-specific styles here */
</style>