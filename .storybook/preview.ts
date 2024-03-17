import { setup, type Preview } from '@storybook/vue3'
import { createPinia } from 'pinia'
import { type App } from 'vue'
import { vueRouter } from 'storybook-vue3-router'
import { routes } from '../src/router'

import '../src/assets/main.css'

const pinia = createPinia()

setup((app: App) => {
  app.use(pinia)
})

const preview: Preview = {
  decorators: [vueRouter(routes)],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
