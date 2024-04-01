import { type Preview } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'
import { routes } from '../src/router'

import '../src/assets/main.css'

const preview: Preview = {
  decorators: [
    vueRouter(routes),
    () => ({
      template: `<div id="app"><story/></div>`
    })
  ],
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
