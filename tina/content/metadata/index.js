import { firstLayerBlocks } from '../blocks'
const { stringList } = firstLayerBlocks

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
        {
          type: 'string',
          label: 'Mask',
          name: 'mask',
        },
        {
          type: 'string',
          label: 'Tile',
          name: 'tile',
        },
        {
          type: 'string',
          label: 'Color',
          name: 'color',
        },
      ],
    },
  ],
}
