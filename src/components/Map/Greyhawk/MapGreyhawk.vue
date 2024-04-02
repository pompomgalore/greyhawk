<script lang="ts" setup>
import { ref } from 'vue'
import MapFrame from '../Frame/MapFrame.vue'
import MapGreyhawkFeatures from './MapGreyhawkFeatures.vue'
import MapGreyhawkKingdoms from './MapGreyhawkKingdoms.vue'
import MapGreyhawkSettlements from './MapGreyhawkSettlements.vue'

const WIDTH = 4224
const HEIGHT = 3168
const ZOOM = {
  '-3': 0.3,
  '-2': 0.44,
  '-1': 0.67,
  '0': 1,
  '1': 1.5,
  '2': 2.3,
  '3': 3.4,
  '4': 5.1,
  '5': 7.6
}

const frameRef = ref<InstanceType<typeof MapFrame>>()
function focusOnElement(hash: string) {
  if (frameRef.value && frameRef.value.focusOnElement) {
    frameRef.value.focusOnElement(hash)
  }
}
function queryMapSelector(hash: string) {
  if (frameRef.value && frameRef.value.queryMapSelector) {
    return frameRef.value.queryMapSelector(hash)
  }
}

defineExpose({
  focusOnElement,
  queryMapSelector
})
</script>

<template>
  <map-frame
    ref="frameRef"
    class="map-greyhawk"
    v-slot="{ scale }"
    :width="WIDTH"
    :height="HEIGHT"
    :startScale="ZOOM['0']"
    :minScale="ZOOM['-3']"
    :maxScale="ZOOM['5']"
  >
    <img class="map-greyhawk-content" src="@/assets/greyhawk/v3/greyhawk-v3-1-background.svg" />

    <Transition>
      <img
        class="map-greyhawk-content"
        v-if="scale >= ZOOM['0'] && scale <= ZOOM['4']"
        src="@/assets/greyhawk/v3/greyhawk-v3-2-grid-8448.webp"
        :width="WIDTH"
        :height="HEIGHT"
      />
    </Transition>

    <Transition>
      <img
        class="map-greyhawk-content"
        v-if="scale >= ZOOM['-1'] && scale <= ZOOM['3']"
        src="@/assets/greyhawk/v3/greyhawk-v3-4-terrain-8448.webp"
        :width="WIDTH"
        :height="HEIGHT"
      />
    </Transition>

    <img class="map-greyhawk-content" src="@/assets/greyhawk/v3/greyhawk-v3-6-outline.svg" />

    <Transition>
      <img
        class="map-greyhawk-content"
        v-if="scale >= ZOOM['0'] && scale <= ZOOM['3']"
        src="@/assets/greyhawk/v3/greyhawk-v3-5-details.svg"
      />
    </Transition>

    <map-greyhawk-features class="map-greyhawk-content" />

    <map-greyhawk-kingdoms class="map-greyhawk-content" />

    <map-greyhawk-settlements class="map-greyhawk-content" />

    <img class="map-greyhawk-content" src="@/assets/greyhawk/v3/greyhawk-v3-9-signature.svg" />
  </map-frame>
</template>
