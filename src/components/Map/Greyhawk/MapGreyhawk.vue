<script lang="ts" setup>
import MapFrame from '../Frame/MapFrame.vue'

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
    v-slot="slotProps"
    :width="4224"
    :height="3168"
    :startScale="ZOOM['1']"
    :minScale="ZOOM['-3']"
    :maxScale="ZOOM['5']"
  >
    <img class="map-greyhawk-img" src="@/assets/greyhawk/v3/greyhawk-v3-1-background.svg" />

    <Transition>
      <img
        class="map-greyhawk-img"
        v-if="slotProps.scale >= ZOOM['0'] && slotProps.scale <= ZOOM['4']"
        src="@/assets/greyhawk/v3/greyhawk-v3-2-grid-8448.webp"
        width="4224"
        height="3168"
      />
    </Transition>

    <Transition>
      <img
        class="map-greyhawk-img"
        v-if="slotProps.scale >= ZOOM['-2'] && slotProps.scale <= ZOOM['3']"
        src="@/assets/greyhawk/v3/greyhawk-v3-4-terrain-8448.webp"
        width="4224"
        height="3168"
      />
    </Transition>

    <img
      class="map-greyhawk-img"
      src="@/assets/greyhawk/v3/greyhawk-v3-6-outline.svg"
      width="4224"
      height="3168"
    />

    <Transition>
      <img
        class="map-greyhawk-img"
        v-if="slotProps.scale >= ZOOM['0'] && slotProps.scale <= ZOOM['3']"
        src="@/assets/greyhawk/v3/greyhawk-v3-5-details.svg"
        width="4224"
        height="3168"
      />
    </Transition>

    <Transition>
      <img
        class="map-greyhawk-img"
        v-if="slotProps.scale <= ZOOM['3']"
        src="@/assets/greyhawk/v3/greyhawk-v3-3-terrain-names.svg"
        width="4224"
        height="3168"
      />
    </Transition>

    <Transition>
      <img
        class="map-greyhawk-img"
        v-if="slotProps.scale >= ZOOM['-1'] && slotProps.scale <= ZOOM['4']"
        src="@/assets/greyhawk/v3/greyhawk-v3-7-kingdom-names.svg"
        width="4224"
        height="3168"
      />
    </Transition>

    <Transition>
      <img
        class="map-greyhawk-img"
        v-if="slotProps.scale >= ZOOM['1']"
        src="@/assets/greyhawk/v3/greyhawk-v3-8-settlements.svg"
        width="4224"
        height="3168"
      />
    </Transition>

    <img
      class="map-greyhawk-img"
      src="@/assets/greyhawk/v3/greyhawk-v3-9-signature.svg"
      width="4224"
      height="3168"
    />
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
.map-greyhawk-img,
.map-greyhawk-picture {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
