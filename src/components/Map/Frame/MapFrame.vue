<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const { width, height } = defineProps<{
  width: number
  height: number
}>()

const contentRef = ref<HTMLElement>()
const frameRef = ref<HTMLElement>()
const transform = ref<{ scale: number; x: number; y: number }>({ scale: 1, x: 0, y: 0 })
const previousPointerEvent = ref<PointerEvent>()

function queryMapSelector(selector: string) {
  if (contentRef.value && selector) {
    return contentRef.value.querySelector(selector)
  }
}

function getCenterPoint(element: Element): Point {
  const { top, left, width, height } = element.getBoundingClientRect()
  return [left + width / 2, top + height / 2]
}

function focusOnPoint([x, y]: Point) {
  if (contentRef.value && frameRef.value) {
    const { width: frameWidth, height: frameHeight } = frameRef.value.getBoundingClientRect()
    transform.value = { x: x - frameWidth / 2, y: y - frameHeight / 2, scale: 1 }
  }
}

function focusOnElement(selector: string) {
  const mapElement = queryMapSelector(selector)
  if (mapElement) {
    const point = getCenterPoint(mapElement)
    focusOnPoint(point)
  }
}

function handlePointerPosition(event: PointerEvent) {
  previousPointerEvent.value = event
}
function handlePointerMove(event: PointerEvent) {
  if (event.buttons > 0) {
    if (previousPointerEvent.value) {
      const { clientX: lastX, clientY: lastY } = previousPointerEvent.value
      const { clientX, clientY } = event
      const { x, y, scale } = transform.value
      transform.value = {
        x: x - (clientX - lastX) / scale,
        y: y - (clientY - lastY) / scale,
        scale
      }
    }
    previousPointerEvent.value = event
  }
}

defineExpose({ focusOnElement, focusOnPoint, queryMapSelector })

onMounted(() => {
  focusOnPoint([width / 2, height / 2])
})
</script>

<template>
  <div
    ref="frameRef"
    class="map-frame"
    @pointerdown.prevent="handlePointerPosition"
    @pointerenter.prevent="handlePointerPosition"
    @pointermove.prevent="handlePointerMove"
  >
    <div
      ref="contentRef"
      class="map-content"
      :style="{
        width: `${width}px`,
        height: `${height}px`,
        transform: `translate(${-transform.x}px, ${-transform.y}px) scale(${transform.scale})`
      }"
    >
      <slot :scale="transform.scale" />
    </div>
  </div>
</template>

<style scoped>
:slotted(*) {
  display: block;
  position: absolute;
}
/* .map-content {
  transition: transform 0.2s ease-in-out;
} */
.map-frame {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
</style>
