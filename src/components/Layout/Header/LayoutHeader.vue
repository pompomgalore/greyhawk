<template>
  <header class="layout-header">
    <h1 class="layout-header-title">Vite App</h1>
    <nav class="layout-header-nav">
      <span class="user-name" v-if="user">{{ user.name }}</span>
      <standard-button size="small" @click="$emit('logout')" label="Log out" v-if="user" />
      <standard-button size="small" @click="$emit('login')" label="Log in" v-if="!user" />
      <standard-button
        primary
        size="small"
        @click="$emit('createAccount')"
        label="Sign up"
        v-if="!user"
      />
    </nav>
  </header>
</template>

<script lang="ts" setup>
import './LayoutHeader.css'
import StandardButton from '../../Standard/Button/StandardButton.vue'

defineProps<{ user: { name: string } | null }>()

defineEmits<{
  (event: 'createAccount'): void
  (event: 'login'): void
  (event: 'logout'): void
}>()
</script>
