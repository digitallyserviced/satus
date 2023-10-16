import { firstLayerBlocks } from '../blocks'
const { stringList, colorPallete } = firstLayerBlocks

export const metadata = {
  name: 'metadata',
  label: 'Metadata',
  type: 'object',
  list: true,
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
      required: true,
    },
    {
      type: 'string',
      label: 'Description',
      name: 'description',
      ui: {
        component: 'textarea',
      },
    },
    stringList({ label: 'Keywrods', name: 'keywords' }),
    {
      type: 'image',
      label: 'Image',
      name: 'image',
      required: true,
    },
    {
      type: 'string',
      label: 'Twitter Handle',
      name: 'twitterHandle',
    },
    {
      type: 'object',
      label: 'Theme',
      name: 'theme',
      fields: [
        colorPallete({ label: 'Mask', name: 'mask' }),
        colorPallete({ label: 'Tile', name: 'tile' }),
        colorPallete({ label: 'Color', name: 'color' }),
      ],
    },
  ],
  ui: {
    defaultItem: {
      title: 'Metadata',
      description: 'Metadata description',
      keywords: ['Metadata'],
      image: '/cms/sf-og.jpg',
      twitterHandle: '@tina_cms',
      theme: {
        mask: '#000000',
        tile: '#ffffff',
        color: '#000000',
      },
    },
  },
}
