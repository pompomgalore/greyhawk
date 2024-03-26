<script lang="ts" setup>
import { type PanzoomEventDetail } from '@panzoom/panzoom'
import { ref } from 'vue'
import MapSvg from '../Svg/MapSvg.vue'
import MapGreyhawkVector from './Vector/MapGreyhawkVector.vue'

const mapSvgRef = ref<InstanceType<typeof MapSvg>>()

const scale = ref<number>(1)

const onPanzoomChange = ((event: CustomEvent<PanzoomEventDetail>) => {
  if (mapSvgRef.value) {
    scale.value = event.detail.scale
  }
}) as EventListener
</script>

<template>
  <map-svg
    class="map-greyhawk"
    ref="mapSvgRef"
    viewBox="680 1280 43060 32300"
    width="4224"
    height="3168"
    @panzoomchange="onPanzoomChange"
  >
    <map-greyhawk-vector :scale="scale" />
  </map-svg>
</template>

<style scoped>
.map-greyhawk {
  clip-rule: evenodd;
  fill-rule: evenodd;

  image-rendering: auto;
  shape-rendering: geometricPrecision;
  text-rendering: geometricPrecision;

  stroke-width: 8;
  stroke-linejoin: round;
  stroke-linecap: round;
}
</style>
