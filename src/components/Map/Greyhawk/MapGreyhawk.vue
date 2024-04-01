<script lang="ts" setup>
import MapFrame from '../Frame/MapFrame.vue'

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
</script>

<template>
  <map-frame
    class="map-greyhawk-frame"
    v-slot="{ scale }"
    :width="WIDTH"
    :height="HEIGHT"
    :startScale="ZOOM['1']"
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

    <img
      class="map-greyhawk-content"
      v-if="scale <= ZOOM['4']"
      src="@/assets/greyhawk/v3/greyhawk-v3-3-terrain-names.svg"
    />

    <Transition>
      <img
        class="map-greyhawk-content"
        v-if="scale >= ZOOM['-2'] && scale <= ZOOM['4']"
        src="@/assets/greyhawk/v3/greyhawk-v3-7-kingdom-names.svg"
      />
    </Transition>

    <Transition>
      <img
        class="map-greyhawk-content"
        v-if="scale >= ZOOM['0']"
        src="@/assets/greyhawk/v3/greyhawk-v3-8-settlements.svg"
      />
    </Transition>

    <img class="map-greyhawk-content" src="@/assets/greyhawk/v3/greyhawk-v3-9-signature.svg" />
  </map-frame>
</template>

<style scoped>
.map-greyhawk-frame {
  display: block;
  top: 0;
  left: 0;
  width: 4224px;
  height: 3168px;
}
.map-greyhawk-content {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
