<script lang="ts" setup>
import { type PanzoomEventDetail } from '@panzoom/panzoom'
import { ref } from 'vue'
import MapSvg from '../Svg/MapSvg.vue'
import MapGreyhawkLayers from './MapGreyhawkLayers.vue'
import _ from 'lodash'

const svgRef = ref<InstanceType<typeof MapSvg>>()

const scale = ref<number>(1)

const onPanzoomChange = _.debounce((event: CustomEvent<PanzoomEventDetail>) => {
  if (svgRef.value) {
    scale.value = event.detail.scale
  }
}, 200)
</script>

<template>
  <map-svg
    ref="svgRef"
    viewBox="720 1440 43000 32000"
    width="4224"
    height="3168"
    :style="{
      fillRule: 'evenodd',
      strokeLinejoin: 'round',
      strokeLinecap: 'round',
      paintOrder: 'stroke'
    }"
    @panzoomchange.passive="onPanzoomChange"
  >
    <map-greyhawk-layers :scale="scale" />
  </map-svg>
</template>
