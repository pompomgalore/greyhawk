<template>
  <g id="map-grid">
    <defs>
      <polygon
        v-if="hexagonCorners"
        id="map-grid-hexagon"
        :points="hexagonCorners.map((corner) => corner.join(',')).join(' ')"
        stroke="black"
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
  </g>
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
</script>
