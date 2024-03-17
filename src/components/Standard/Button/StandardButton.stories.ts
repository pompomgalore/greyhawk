import type { Meta, StoryObj } from '@storybook/vue3'

import StandardButton from './StandardButton.vue'

const meta = {
  title: 'Standard/Button',
  component: StandardButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error']
    },
    onClick: { action: 'clicked' }
  },
  args: {
    label: 'Button',
    size: 'medium',
    variant: 'default'
  }
} satisfies Meta<typeof StandardButton>

export default meta
type Story = StoryObj<typeof meta>

export const Button: Story = {}
