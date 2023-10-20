import { firstLayerBlocks } from '../blocks'
const { link } = firstLayerBlocks

const header = {
  name: 'header',
  label: 'Header',
  type: 'object',
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
    },
    link({ name: 'links', label: 'Links', list: true, required: true, max: 1 }),
  ],
}

const footer = {
  name: 'footer',
  label: 'Footer',
  type: 'object',
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
    },
    link({ name: 'links', label: 'Links', list: true, required: true, max: 3 }),
  ],
}

export const navigation = {
  name: 'navigation',
  label: 'Navigation',
  type: 'object',
  fields: [header, footer],
  ui: {
    defaultItem: {
      header: {
        title: 'Header title',
        links: [
          {
            text: 'Home',
            url: '/',
          },
        ],
      },
      footer: {
        title: 'Footer',
        links: [
          {
            text: 'Home',
            url: '/',
          },
        ],
      },
    },
  },
}
