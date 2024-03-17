import type { Meta, StoryObj } from '@storybook/vue3'
import { userEvent, expect, within } from '@storybook/test'

import LayoutHeader from './LayoutHeader.vue'

const meta = {
  title: 'Layout/Header',
  component: LayoutHeader,
  tags: ['autodocs']
} satisfies Meta<typeof LayoutHeader>

export default meta
type Story = StoryObj<typeof meta>

function queryLoginButton(canvasElement: HTMLElement) {
  const canvas = within(canvasElement)
  return canvas.queryByRole('button', { name: /Log in/i })
}

function queryLogoutButton(canvasElement: HTMLElement) {
  const canvas = within(canvasElement)
  return canvas.queryByRole('button', { name: /Log out/i })
}

function expectLoginButton(canvasElement: HTMLElement) {
  const loginButton = queryLoginButton(canvasElement)
  return expect(loginButton)
}

function expectLogoutButton(canvasElement: HTMLElement) {
  const logoutButton = queryLogoutButton(canvasElement)
  return expect(logoutButton)
}

function clickLoginButton(canvasElement: HTMLElement) {
  const loginButton = queryLoginButton(canvasElement)
  return userEvent.click(loginButton)
}

function clickLogoutButton(canvasElement: HTMLElement) {
  const logoutButton = queryLogoutButton(canvasElement)
  return userEvent.click(logoutButton)
}

export const Header: Story = {
  play: async ({ canvasElement }) => {
    await expectLoginButton(canvasElement).toBeInTheDocument()
    await clickLoginButton(canvasElement)
    await expectLoginButton(canvasElement).not.toBeInTheDocument()

    await expectLogoutButton(canvasElement).toBeInTheDocument()
    await clickLogoutButton(canvasElement)
    await expectLogoutButton(canvasElement).not.toBeInTheDocument()

    await expectLoginButton(canvasElement).toBeInTheDocument()
  }
}
