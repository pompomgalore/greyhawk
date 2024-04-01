<script lang="ts" setup>
import MapGreyhawk from '@/components/Map/Greyhawk/MapGreyhawk.vue'
import ContentGreyhawk from '@/components/Content/Greyhawk/ContentGreyhawk.vue'
import { ref } from 'vue'

function isAnchorElement(target: EventTarget | null): target is HTMLAnchorElement {
  return target instanceof HTMLAnchorElement
}

const mapRef = ref<InstanceType<typeof MapGreyhawk>>()

function getElementCenterPoint(element: HTMLElement) {
  const { top, left, width, height } = element.getBoundingClientRect()
  return {
    x: left + width / 2,
    y: top + height / 2
  }
}

const onClickContent = (event: MouseEvent) => {
  if (
    mapRef.value &&
    mapRef.value.frameRef &&
    mapRef.value.frameRef.focusTo &&
    isAnchorElement(event.target)
  ) {
    const id = event.target.hash.slice(1)
    const mapElement = window.document.getElementById(id)
    if (mapElement) {
      const { x, y } = getElementCenterPoint(mapElement)
      mapRef.value.frameRef.focusTo(x, y)
    }
  }
}
</script>

<template>
  <map-greyhawk ref="mapRef" />
  <content-greyhawk @click.prevent="onClickContent" />
</template>
