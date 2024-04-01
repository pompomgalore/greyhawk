<script lang="ts" setup>
import { getGridPositions, getHexagonCorners } from '@/libs/grid'
import { onMounted, onUpdated, ref, watchEffect } from 'vue'

const canvasRef = ref<HTMLCanvasElement>()
const context = ref<CanvasRenderingContext2D | null>()

const props = defineProps<{
  size: number
  width: number
  height: number
  x: number
  y: number
  lineWidth: number
}>()

const hexagonCorners = getHexagonCorners(props.size)
const gridPositions = getGridPositions(props.width, props.height, props.size)

function getNextCorner(index: number) {
  return hexagonCorners[(index + 1) % hexagonCorners.length]
}

function drawGrid() {
  if (context.value) {
    context.value.clearRect(0, 0, props.width, props.height)
    context.value.lineWidth = props.lineWidth
    for (const [positionX, positionY] of gridPositions) {
      for (const [index, [cornerX, cornerY]] of hexagonCorners.entries()) {
        const [nextCornerX, nextCornerY] = getNextCorner(index)
        context.value.moveTo(positionX + cornerX + props.x, positionY + cornerY + props.y)
        context.value.lineTo(positionX + nextCornerX + props.x, positionY + nextCornerY + props.y)
      }
    }
    context.value.stroke()
  }
}

onMounted(() => {
  if (canvasRef.value) {
    context.value = canvasRef.value.getContext('2d')
    drawGrid()
  }
})
onUpdated(drawGrid)
watchEffect(drawGrid)
</script>

<template>
  <canvas ref="canvasRef" :width="props.width" :height="props.height" />
</template>
