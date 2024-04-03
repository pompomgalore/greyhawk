import { computed } from 'vue'

export const icons = computed(() => {
  const iconsRecord = import.meta.glob<true, string, { default: string }>(
    '@/assets/heraldry/*.png',
    {
      eager: true
    }
  )
  const iconEntries = Object.entries(iconsRecord).map(([key, value]) => [
    key.replace(/^.*\/(.*)\.png$/, '$1'),
    value.default
  ])
  return Object.fromEntries(iconEntries)
})
