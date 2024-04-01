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

function getNextCorner(index: number) {
  return hexagonCorners[(index + 1) % hexagonCorners.length]
}

const pathDefinition = gridPositions.reduce((definition, [positionX, positionY]) => {
  for (const [index, [cornerX, cornerY]] of hexagonCorners.entries()) {
    const [nextCornerX, nextCornerY] = getNextCorner(index)
    if (index === 0) {
      definition += `M${Math.round(positionX + cornerX + props.x)},${Math.round(positionY + cornerY + props.y)}`
    }
    definition += `L${Math.round(positionX + nextCornerX + props.x)},${Math.round(positionY + nextCornerY + props.y)}`
  }
  return definition
}, '')
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
    <path :d="pathDefinition" />
  </svg>
</template>
