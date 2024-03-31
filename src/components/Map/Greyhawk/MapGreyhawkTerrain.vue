<script lang="ts" setup>
import ForestContours from './Layers/11_Forest_Contours.vue'
import PlainsContours from './Layers/12_Plains_Contours.vue'
import MountainContours from './Layers/13_Mountain_Contours.vue'
import HillsContours from './Layers/14_Hills_Contours.vue'
import FeaturesContours from './Layers/15_Features_Contours.vue'
</script>

<template>
  <forest-contours />
  <plains-contours />
  <mountain-contours />
  <hills-contours opacity="0.83" />
  <features-contours />
</template>
