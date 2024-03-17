import type { Meta, StoryObj } from '@storybook/vue3'
import { userEvent, expect, within } from '@storybook/test'

import LayoutHeader from './LayoutHeader.vue'

const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Layout/Header',
  component: LayoutHeader,
  render: (args: any) => ({
    components: { LayoutHeader },
    setup() {
      return { args }
    },
    template: '<layout-header :user="args.user" />'
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof LayoutHeader>

export default meta
type Story = StoryObj<typeof meta>

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing

function getButtons(canvasElement: HTMLElement) {
  const canvas = within(canvasElement)
  return {
    loginButton: canvas.getByRole('button', { name: /Log in/i }),
    logoutButton: canvas.getByRole('button', { name: /Log out/i })
  }
}

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Etienne'
    }
  },
  play: async ({ canvasElement }) => {
    const { loginButton, logoutButton } = getButtons(canvasElement)

    await expect(loginButton).toBeInTheDocument()
    await expect(logoutButton).not.toBeInTheDocument()

    await userEvent.click(loginButton)
    await expect(loginButton).not.toBeInTheDocument()
    await expect(logoutButton).toBeInTheDocument()
  }
}

export const LoggedOut: Story = {
  args: {
    user: null
  },
  play: async ({ canvasElement }) => {
    const { loginButton, logoutButton } = getButtons(canvasElement)

    await expect(loginButton).toBeInTheDocument()
    await expect(logoutButton).not.toBeInTheDocument()

    await userEvent.click(loginButton)
    await expect(loginButton).not.toBeInTheDocument()
    await expect(logoutButton).toBeInTheDocument()
  }
}
