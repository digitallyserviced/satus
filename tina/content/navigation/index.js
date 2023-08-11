import { firstLayerBlocks } from '../blocks'
const { stringList, link } = firstLayerBlocks

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
      fields: [link],
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
    stringList({ label: 'Marquee', name: 'marquee' }),
    {
      type: 'object',
      label: 'Links',
      name: 'links',
      list: true,
      fields: [
        {
          name: 'linkPair',
          label: 'LinkPair',
          type: 'object',
          list: true,
          fields: [link],
        },
      ],
    },
  ],
}

export const navigation = {
  name: 'navigation',
  label: 'Navigation',
  type: 'object',
  fields: [header, footer],
}
