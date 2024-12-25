<template>
  <div v-if="isOpen" class="modal modal-open">
    <div class="modal-box">
      <button @click="close" class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2">
        &times;
      </button>
      <slot />
    </div>
    <div class="modal-backdrop"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['close'])

function close() {
  emit('close')
}
</script>

<style scoped>
/* Add any component-specific styles here */
/* DaisyUI handles modal backdrop and positioning */
</style>