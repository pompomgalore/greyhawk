import type { Meta, StoryObj } from '@storybook/vue3'

import MapGridComponent from './MapGrid.vue'

const meta = {
  title: 'Map/Grid',
  component: MapGridComponent,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'number' },
    width: { control: 'number' },
    height: { control: 'number' },
    x: { control: 'number' },
    y: { control: 'number' }
  },
  args: {
    size: 10,
    width: 100,
    height: 100,
    x: 0,
    y: 0
  }
} satisfies Meta<typeof MapGridComponent>

export default meta
type Story = StoryObj<typeof meta>

export const MapGrid: Story = {}
