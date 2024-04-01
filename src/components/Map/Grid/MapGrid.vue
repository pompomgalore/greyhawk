<script lang="ts" setup>
import { getGridPositions, getHexagonCorners } from '@/libs/grid'

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
</script>

<template>
  <svg
    class="map-grid"
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="`0 0 ${props.width} ${props.height}`"
    :width="props.width"
    :height="props.height"
    :stroke-width="props.lineWidth"
    style="
      fill-rule: evenodd;
      stroke: black;
      stroke-linejoin: round;
      stroke-linecap: round;
      stroke-opacity: 0.17;
      fill: none;
    "
  >
    <defs>
      <polygon
        v-if="hexagonCorners"
        id="map-grid-cell"
        :points="hexagonCorners.map((corner) => corner.join(',')).join(' ')"
      />
    </defs>
    <use
      v-for="[index, [positionX, positionY]] in gridPositions.entries()"
      :key="index"
      href="#map-grid-cell"
      :x="positionX + props.x"
      :y="positionY + props.y"
    />
  </svg>
</template>
