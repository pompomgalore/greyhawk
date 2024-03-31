<template>
  <water-fill />

  <water-contours />
  <river-shadow />
  <ground-shadow />

  <ground-fill />
  <swamp-fill />
  <hills-fill />
  <mountain-fill />
  <plains-fill />
  <forest-fill />
  <snow-fill />
</template>

<script lang="ts" setup>
import WaterFill from './Layers/00_Water_Fill.vue'
import WaterContours from './Layers/01_Water_Contours.vue'
import RiverShadow from './Layers/02_River_Shadow.vue'
import GroundShadow from './Layers/03_Ground_Shadow.vue'
import GroundFill from './Layers/04_Ground_Fill.vue'
import SwampFill from './Layers/05_Swamp_Fill.vue'
import HillsFill from './Layers/06_Hills_Fill.vue'
import MountainFill from './Layers/07_Mountain_Fill.vue'
import PlainsFill from './Layers/08_Plains_Fill.vue'
import ForestFill from './Layers/09_Forest_Fill.vue'
import SnowFill from './Layers/10_Snow_Fill.vue'
</script>
