import type { Meta, StoryObj } from '@storybook/vue3'
import { userEvent, expect } from '@storybook/test'
import AppComponent from './App.vue'

const meta = {
  title: 'App',
  component: AppComponent,
  render: () => ({
    components: { App: AppComponent },
    template: '<app />'
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof AppComponent>

export default meta
type Story = StoryObj<typeof meta>

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing

export const App: Story = {}
