import { describe, test, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import MapFrame from '../Map/Frame/MapFrame.vue'

describe('MapFrame.vue', () => {
  test('renders the map frame component', () => {
    const wrapper = shallowMount(MapFrame)
    expect(wrapper.exists()).toBe(true)
  })
})
