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
  const base = 'btn';
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    success: 'btn-success',
    danger: 'btn-error',
    warning: 'btn-warning',
  };
  return `${base} ${variants[props.variant]} ${props.disabled ? 'btn-disabled' : ''}`;
});
</script>

<style scoped>
/* Add any component-specific styles here */
</style>