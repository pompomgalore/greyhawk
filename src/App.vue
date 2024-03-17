<template>
  <layout-header class="app-header" />

  <main class="app-main">
    <RouterView />
  </main>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import LayoutHeader from './components/Layout/Header/LayoutHeader.vue'
import './App.css'
</script>
