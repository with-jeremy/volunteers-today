<template>
  <div class="form-control mb-4">
    <label :for="id" class="label">
      <span class="label-text">{{ label }}</span>
    </label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="inputClasses"
      :aria-label="label"
      class="input input-bordered"
    />
    <p v-if="error" class="text-error text-sm mt-1">{{ error }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
  error: {
    type: String,
    default: '',
  },
})

const inputClasses = computed(() => {
  return `${props.error ? 'input-error' : 'input-primary'} transition`;
})
</script>

<style scoped>
/* Add any component-specific styles here */
</style>