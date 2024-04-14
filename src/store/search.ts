import { sanitize } from '@/utils/sanitize'
import { ref, watch } from 'vue'

export const searchString = ref<string>('')
export const sanitizedSearchString = ref<string>('')

watch(searchString, (value) => {
  sanitizedSearchString.value = sanitize(value)
})

export function watchSanitizedSearchString(callback: (value: string) => void) {
  return watch(sanitizedSearchString, callback)
}
