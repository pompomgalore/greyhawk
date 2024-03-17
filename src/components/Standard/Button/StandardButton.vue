<template>
  <button type="button" :class="classes" @click="onClick">{{ label }}</button>
</template>

<script lang="ts" setup>
import './StandardButton.css'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    label: string
    variant?: 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'
    size?: 'small' | 'medium' | 'large'
  }>(),
  {}
)

const emit = defineEmits<{
  (e: 'click'): void
}>()

const classes = computed(() => ({
  button: true,
  [`button--variant-${props.variant || 'default'}`]: true,
  [`button--size-${props.size || 'medium'}`]: true
}))

const onClick = () => {
  emit('click')
}
</script>
