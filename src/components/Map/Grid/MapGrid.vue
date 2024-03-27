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
      :x="position.center[0] + props.x"
      :y="position.center[1] + props.y"
    />
  </g>
</template>

<script lang="ts" setup>
import { getGridPositions, getHexagonCorners } from '@/libs/grid'

const props = defineProps<{
  size: number
  width: number
  height: number
  x: number
  y: number
}>()

const hexagonCorners = getHexagonCorners(props.size)
const gridPositions = getGridPositions(props.width, props.height, props.size)
</script>

<style scoped>
.map-grid {
  stroke-width: 8;
}
</style>
