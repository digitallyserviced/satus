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
    {
      type: 'object',
      label: 'Links',
      name: 'links',
      list: true,
      fields: [link()],
      ui: {
        itemProps: (item) => {
          if (!item) return
          return {
            label: `${item?.link?.text}`,
          }
        },
        validate: (value) => {
          if (value && value.length > 1) {
            return `Cannot be more than ${1} items`
          }
        },
      },
    },
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
    {
      type: 'object',
      label: 'Links',
      name: 'links',
      list: true,
      fields: [link()],
      ui: {
        itemProps: (item) => {
          if (!item) return
          return {
            label: `${item?.link?.text}`,
          }
        },
        validate: (value) => {
          if (value && value.length > 3) {
            return `Cannot be more than ${3} items`
          }
        },
      },
    },
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
            link: {
              text: 'Home',
              url: '/',
            },
          },
        ],
      },
      footer: {
        title: 'Footer',
        links: [
          {
            link: {
              text: 'Home',
              url: '/',
            },
          },
        ],
      },
    },
  },
}
