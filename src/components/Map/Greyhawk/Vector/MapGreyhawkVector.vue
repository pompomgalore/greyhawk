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

  <map-grid class="map-grid" :size="192.25" :x="708" :y="1185" :width="43060" :height="32300" />

  <forest-contours v-if="scale > 1" />
  <plains-contours v-if="scale > 1" />
  <mountain-contours v-if="scale > 1" />
  <hills-contours v-if="scale > 1" />
  <features-contours v-if="scale > 1" />

  <roads-line v-if="scale > 1.5" />
  <lake-stroke />
  <coast-stroke />
  <river-outline />
  <river-line />

  <settlements-icons v-if="scale > 1.5" />

  <terrain-names />
  <kingdom-names v-if="scale > 0.5" />
  <settlement-names v-if="scale > 1.5" /> />
  <darlene-signature />
</template>

<script lang="ts" setup>
import WaterFill from './Groups/00_Water_Fill.vue'
import WaterContours from './Groups/01_Water_Contours.vue'
import RiverShadow from './Groups/02_River_Shadow.vue'
import GroundShadow from './Groups/03_Ground_Shadow.vue'
import GroundFill from './Groups/04_Ground_Fill.vue'
import SwampFill from './Groups/05_Swamp_Fill.vue'
import HillsFill from './Groups/06_Hills_Fill.vue'
import MountainFill from './Groups/07_Mountain_Fill.vue'
import PlainsFill from './Groups/08_Plains_Fill.vue'
import ForestFill from './Groups/09_Forest_Fill.vue'
import SnowFill from './Groups/10_Snow_Fill.vue'
import ForestContours from './Groups/11_Forest_Contours.vue'
import PlainsContours from './Groups/12_Plains_Contours.vue'
import MountainContours from './Groups/13_Mountain_Contours.vue'
import HillsContours from './Groups/14_Hills_Contours.vue'
import FeaturesContours from './Groups/15_Features_Contours.vue'
import RoadsLine from './Groups/16_Roads_Line.vue'
import LakeStroke from './Groups/17_Lake_Stroke.vue'
import CoastStroke from './Groups/18_Coast_Stroke.vue'
import RiverOutline from './Groups/19_River_Outline.vue'
import RiverLine from './Groups/20_River_Line.vue'
import SettlementsIcons from './Groups/21_Settlements_Icons.vue'
import TerrainNames from './Groups/22_Terrain_Names.vue'
import KingdomNames from './Groups/23_Kingdom_Names.vue'
import SettlementNames from './Groups/24_Settlement_Names.vue'
import DarleneSignature from './Groups/25_Darlene_Signature.vue'

import MapGrid from '@/components/Map/Grid/MapGrid.vue'

import './MapGreyhawkVector.scss'

defineProps<{
  scale: number
}>()
</script>
