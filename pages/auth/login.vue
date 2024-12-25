
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <Card>
      <h2 class="text-2xl font-bold mb-4">Login</h2>
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
      <Button variant="primary" @click="handleLogin">Login</Button>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const emailError = ref('')
const passwordError = ref('')
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

  return valid
}

function handleLogin() {
  if (validate()) {
    // Placeholder for authentication logic
    // On success:
    router.push('/dashboard')
  }
}
</script>

<style scoped>
/* Add any page-specific styles here */
</style>