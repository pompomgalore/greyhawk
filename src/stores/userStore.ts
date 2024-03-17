import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore<
  'user',
  {
    user: Ref<{
      name: string
    } | null>
    onLogin: () => void
    onLogout: () => void
    onCreateAccount: () => void
  }
>('user', () => {
  const user = ref<{ name: string } | null>(null)

  const onLogin = () => {
    user.value = { name: 'Jane Doe' }
  }
  const onLogout = () => {
    user.value = null
  }
  const onCreateAccount = () => {
    user.value = { name: 'Jane Doe' }
  }

  return { user, onLogin, onLogout, onCreateAccount }
})
