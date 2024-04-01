<script lang="ts" setup>
import './LayoutFooter.css'
import DarleneSignature from '../../Map/Greyhawk/Layers/25_Darlene_Signature.vue'
// 42487.261 33183.204 1103.557 319.154
</script>

<template>
  <footer class="layout-footer">
    <input class="layout-footer-search" type="search" placeholder="Greyhawk" />
    <div class="layout-footer-credit">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xml:space="preserve"
        version="1.1"
        viewBox="42439.261 33135.204 1199.557 415.154"
        width="108.24"
        height="31.3"
      >
        <DarleneSignature />
      </svg>
    </div>
  </footer>
</template>
