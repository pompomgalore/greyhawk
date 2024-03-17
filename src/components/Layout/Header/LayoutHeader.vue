<template>
  <header class="layout-header">
    <h1 class="layout-header-title">Vite App</h1>
    <nav class="layout-header-nav">
      <span class="user-name" v-if="authStore.user">{{ authStore.user.name }}</span>
      <standard-button
        size="small"
        @click="authStore.onLogout"
        label="Log out"
        v-if="authStore.user"
      />
      <standard-button
        size="small"
        @click="authStore.onLogin"
        label="Log in"
        v-if="!authStore.user"
      />
      <standard-button
        size="small"
        variant="primary"
        @click="authStore.onCreateAccount"
        label="Sign up"
        v-if="!authStore.user"
      />
    </nav>
  </header>
</template>

<script lang="ts" setup>
import './LayoutHeader.css'
import StandardButton from '../../Standard/Button/StandardButton.vue'
import { useAuthStore } from '@/stores/authStore'
const authStore = useAuthStore()
</script>
