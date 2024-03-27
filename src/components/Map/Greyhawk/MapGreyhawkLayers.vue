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

  <map-grid
    class="map-grid"
    v-if="scale >= 0.5"
    :opacity="scale <= 4 ? 1 : 1 - (scale - 4) / (12 - 4)"
    :size="192.25"
    :x="708"
    :y="1185"
    :width="43060"
    :height="32300"
  />

  <g
    class="map-contours"
    v-if="scale >= 1 && scale <= 8"
    :opacity="scale <= 4 ? 1 : 1 - (scale - 4) / (8 - 4)"
  >
    <forest-contours />
    <plains-contours />
    <mountain-contours />
    <hills-contours />
    <features-contours />
  </g>

  <lake-stroke />
  <coast-stroke />
  <river-outline />
  <river-line />

  <g v-if="scale >= 1.5 && scale <= 8">
    <roads-line />
    <settlements-icons />
    <settlement-names />
  </g>

  <terrain-names v-if="scale <= 4" />
  <river-names v-if="scale >= 1 && scale <= 4" />
  <kingdom-names v-if="scale >= 0.5 && scale <= 4" />

  <darlene-signature />
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
import ForestContours from './Layers/11_Forest_Contours.vue'
import PlainsContours from './Layers/12_Plains_Contours.vue'
import MountainContours from './Layers/13_Mountain_Contours.vue'
import HillsContours from './Layers/14_Hills_Contours.vue'
import FeaturesContours from './Layers/15_Features_Contours.vue'
import RoadsLine from './Layers/16_Roads_Line.vue'
import LakeStroke from './Layers/17_Lake_Stroke.vue'
import CoastStroke from './Layers/18_Coast_Stroke.vue'
import RiverOutline from './Layers/19_River_Outline.vue'
import RiverLine from './Layers/20_River_Line.vue'
import SettlementsIcons from './Layers/21_Settlements_Icons.vue'
import TerrainNames from './Layers/22_Terrain_Names.vue'
import RiverNames from './Layers/22b_River_Names.vue'
import KingdomNames from './Layers/23_Kingdom_Names.vue'
import SettlementNames from './Layers/24_Settlement_Names.vue'
import DarleneSignature from './Layers/25_Darlene_Signature.vue'

import MapGrid from '../Grid/MapGrid.vue'

defineProps<{
  scale: number
}>()
</script>
