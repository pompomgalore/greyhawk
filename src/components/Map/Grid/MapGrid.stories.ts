import type { Meta, StoryObj } from '@storybook/vue3'

import MapGridComponent from './MapGrid.vue'
import MapGridCanvasComponent from './MapGridCanvas.vue'
import MapGridPathComponent from './MapGridPath.vue'

const meta = {
  title: 'Map/Grid',
  component: MapGridComponent,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'number' },
    width: { control: 'number' },
    height: { control: 'number' },
    x: { control: 'number' },
    y: { control: 'number' },
    lineWidth: { control: 'number' }
  },
  args: {
    size: 64,
    width: 938,
    height: 320,
    x: 0,
    y: 0,
    lineWidth: 2
  }
} satisfies Meta<typeof MapGridComponent>

export default meta
type Story = StoryObj<typeof meta>

export const MapGrid: Story = {}

const canvasMeta = {
  ...meta,
  title: 'Map/Grid',
  component: MapGridCanvasComponent
} satisfies Meta<typeof MapGridCanvasComponent>

type StoryCanvas = StoryObj<typeof canvasMeta>
export const MapGridCanvas: StoryCanvas = {}

const pathMeta = {
  ...meta,
  title: 'Map/Grid',
  component: MapGridPathComponent
} satisfies Meta<typeof MapGridPathComponent>

type StoryPath = StoryObj<typeof pathMeta>
export const MapGridPath: StoryPath = {}
