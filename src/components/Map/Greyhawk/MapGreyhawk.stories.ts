import type { Meta, StoryObj } from '@storybook/vue3'

import MapGreyhawk from './MapGreyhawk.vue'

const meta = {
  title: 'Map/Greyhawk',
  component: MapGreyhawk,
  tags: ['autodocs']
} satisfies Meta<typeof MapGreyhawk>

export default meta
type Story = StoryObj<typeof meta>

export const Greyhawk: Story = {}
