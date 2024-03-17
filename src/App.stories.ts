import type { Meta, StoryObj } from '@storybook/vue3'
import AppComponent from './App.vue'

const meta = {
  title: 'App',
  component: AppComponent,
  tags: ['autodocs']
} satisfies Meta<typeof AppComponent>

export default meta
type Story = StoryObj<typeof meta>

export const App: Story = {}
