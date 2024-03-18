<template>
  <img class="map" src="./MapGreyhawk.svg" ref="mapRef" />
</template>

<script lang="ts" setup>
import Panzoom from '@panzoom/panzoom'
import { ref, onMounted } from 'vue'
import './MapGreyhawk.css'
const mapRef = ref<HTMLElement>()
onMounted(() => {
  console.log('mapRef', mapRef)
  if (mapRef.value) {
    Panzoom(mapRef.value, { animate: false, duration: 0 })
  }
})
</script>
