<script lang="ts" setup>
import MapSvg from '../Svg/MapSvg.vue'
import MapGreyhawkLayers from './MapGreyhawkLayers.vue'
</script>

<template>
  <map-svg
    ref="svgRef"
    viewBox="720 1440 43000 32000"
    width="4224"
    height="3168"
    style="fill-rule: evenodd; stroke-linejoin: round; stroke-linecap: round; paint-order: stroke"
    v-slot="slotProps"
  >
    <map-greyhawk-layers :scale="slotProps.scale" />
  </map-svg>
</template>
