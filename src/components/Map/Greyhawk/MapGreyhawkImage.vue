<script lang="ts" setup>
import { ref } from 'vue'
import MapFrame from '../Frame/MapFrame.vue'
import MapGreyhawkTargetPoints from './MapGreyhawkTargetPoints.json'

const WIDTH = 4224
const HEIGHT = 3168
const ZOOM = {
  '-2': 0.44,
  '-1': 0.67,
  '0': 1,
  '1': 1.5,
  '2': 2.3
}

function getTargetKey(hash: string) {
  const key = hash.replace(/^#/, '')
  return key in MapGreyhawkTargetPoints ? (key as keyof typeof MapGreyhawkTargetPoints) : null
}

const frameRef = ref<InstanceType<typeof MapFrame>>()
function focusOnElement(hash: string) {
  const key = getTargetKey(hash)
  if (key) {
    const point = MapGreyhawkTargetPoints[key] as Point
    console.log('point', point)
    if (frameRef.value && frameRef.value.focusOnPoint) {
      return frameRef.value.focusOnPoint(point, { relative: false })
    }
  }
}

defineExpose({
  focusOnElement
})
</script>

<template>
  <map-frame
    ref="frameRef"
    :width="WIDTH"
    :height="HEIGHT"
    :startScale="ZOOM['0']"
    :minScale="ZOOM['-2']"
    :maxScale="ZOOM['2']"
  >
    <img src="@/assets/greyhawk/greyhawk-v3.webp" />
  </map-frame>
</template>
