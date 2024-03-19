<template>
  <canvas class="map-canvas" ref="canvasRef"></canvas>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import './MapHex.css'
import { getHexGrid } from '@/libs/hexGrid'
const canvasRef = ref<HTMLCanvasElement>()
const drawGrid = () => {
  if (canvasRef.value) {
    const context = canvasRef.value.getContext('2d')
    const parentElement = canvasRef.value.parentElement
    if (context && parentElement) {
      const width = parentElement.clientWidth
      const height = parentElement.clientHeight
      canvasRef.value.width = width
      canvasRef.value.height = height
      const grid = getHexGrid(width, height, 60)
      context.clearRect(0, 0, width, height)
      for (const hex of grid) {
        context.beginPath()
        context.moveTo(hex.corners[0][0], hex.corners[0][1])
        for (let i = 1; i < 6; i++) {
          context.lineTo(hex.corners[i][0], hex.corners[i][1])
        }
        context.closePath()
        context.stroke()
      }
    }
  }
}
onMounted(() => {
  drawGrid()
  window.addEventListener('resize', drawGrid)
})
onUnmounted(() => {
  window.removeEventListener('resize', drawGrid)
})
</script>
