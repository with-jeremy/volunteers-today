<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="glass-panel">
      <Card>
        <h2 class="text-2xl font-bold mb-4">Sign Up</h2>
        <FormInput
          id="email"
          label="Email"
          type="email"
          v-model="email"
          :error="emailError"
        />
        <FormInput
          id="password"
          label="Password"
          type="password"
          v-model="password"
          :error="passwordError"
        />
        <FormInput
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          v-model="confirmPassword"
          :error="confirmPasswordError"
        />
        <Button variant="primary" @click="handleSignup">Sign Up</Button>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const emailError = ref('')
const passwordError = ref('')
const confirmPasswordError = ref('')
const router = useRouter()

function validate() {
  let valid = true
  if (!email.value) {
    emailError.value = 'Email is required.'
    valid = false
  } else {
    emailError.value = ''
  }

  if (!password.value) {
    passwordError.value = 'Password is required.'
    valid = false
  } else {
    passwordError.value = ''
  }

  if (password.value !== confirmPassword.value) {
    confirmPasswordError.value = 'Passwords do not match.'
    valid = false
  } else {
    confirmPasswordError.value = ''
  }

  return valid
}

function handleSignup() {
  if (validate()) {
    // Placeholder for signup logic
    // On success:
    router.push('/dashboard')
  }
}
</script>

<style scoped>
/* Add any page-specific styles here */
</style>