import type { Meta, StoryObj } from '@storybook/vue3'

import MapHex from './MapHex.vue'

const meta = {
  title: 'Map/Hex',
  component: MapHex,
  tags: ['autodocs']
} satisfies Meta<typeof MapHex>

export default meta
type Story = StoryObj<typeof meta>

export const Hex: Story = {}
