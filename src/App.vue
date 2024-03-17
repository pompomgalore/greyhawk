<template>
  <layout-header
    class="app-header"
    :user="userStore.user"
    @login="userStore.onLogin"
    @logout="userStore.onLogout"
    @create-account="userStore.onCreateAccount"
  />

  <main class="app-main">
    <RouterView />
  </main>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import LayoutHeader from './components/Layout/Header/LayoutHeader.vue'
import { useUserStore } from './stores/userStore'
const userStore = useUserStore()
</script>
