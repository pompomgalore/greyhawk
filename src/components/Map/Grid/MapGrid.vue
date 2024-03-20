<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xml:space="preserve"
    id="map-grid"
    version="1.1"
    :width="width"
    :height="height"
    :view-box="viewBox"
  >
    <defs>
      <polygon
        v-if="hexagonCorners"
        id="map-grid-hexagon"
        :points="hexagonCorners.map((corner) => corner.join(',')).join(' ')"
        stroke="black"
        stroke-width="1"
        stroke-opacity="0.1"
        fill="none"
      />
    </defs>
    <use
      v-for="position in gridPositions"
      :key="position.key"
      href="#map-grid-hexagon"
      :x="position.center[0] + x"
      :y="position.center[1] + y"
    />
  </svg>
</template>

<script lang="ts" setup>
import { getGridPositions, getHexagonCorners } from '@/libs/grid'

interface GridProps {
  size: number
  width: number
  height: number
  x: number
  y: number
}
const { size, width, height, x, y } = defineProps<GridProps>()

const hexagonCorners = getHexagonCorners(size)
const gridPositions = getGridPositions(width, height, size)
const viewBox = `0 0 ${width} ${height}`
</script>
