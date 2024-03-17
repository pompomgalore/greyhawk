import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore<
  'auth',
  {
    user: Ref<{
      name: string
    } | null>
    onLogin: () => void
    onLogout: () => void
    onCreateAccount: () => void
  }
>('auth', () => {
  const user = ref<{ name: string } | null>(null)

  const onLogin = () => {
    user.value = { name: 'Etienne' }
  }
  const onLogout = () => {
    user.value = null
  }
  const onCreateAccount = () => {
    user.value = { name: 'Etienne' }
  }

  return { user, onLogin, onLogout, onCreateAccount }
})
