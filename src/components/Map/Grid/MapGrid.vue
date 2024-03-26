<template>
  <g class="map-grid">
    <defs>
      <polygon
        v-if="hexagonCorners"
        id="map-grid-hexagon"
        :points="hexagonCorners.map((corner) => corner.join(',')).join(' ')"
        stroke="black"
        stroke-opacity="0.17"
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
const props = defineProps<GridProps>()

const hexagonCorners = getHexagonCorners(props.size)
const gridPositions = getGridPositions(props.width, props.height, props.size)
</script>
