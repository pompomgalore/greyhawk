<script lang="ts" setup>
import { type PanzoomEventDetail } from '@panzoom/panzoom'
import { ref } from 'vue'
import MapSvg from '../Svg/MapSvg.vue'
import MapGreyhawkLayers from './MapGreyhawkLayers.vue'

const svgRef = ref<InstanceType<typeof MapSvg>>()

const scale = ref<number>(1)

const onPanzoomChange = (event: CustomEvent<PanzoomEventDetail>) => {
  if (svgRef.value) {
    scale.value = event.detail.scale
  }
}
</script>

<template>
  <map-svg
    ref="svgRef"
    viewBox="680 1280 43060 32300"
    width="4224"
    height="3168"
    :style="{
      fillRule: 'evenodd',
      strokeLinejoin: 'round',
      strokeLinecap: 'round',
      paintOrder: 'stroke',

      '--map-water': '#839898',
      '--map-blue': '#5a7675',
      '--map-shadow': '#305452',
      '--map-ground': '#d4bfa8',
      '--map-beige': '#dfc3a1',
      '--map-desert': '#e9c79a',
      '--map-forest': '#80a36f',
      '--map-green': '#85925e',
      '--map-swamp': '#8a804c',
      '--map-hill': '#847172',
      '--map-brown': '#a17164',
      '--map-red': '#bd7155'
    }"
    @panzoomchange="onPanzoomChange"
  >
    <map-greyhawk-layers :scale="scale" />
  </map-svg>
</template>
