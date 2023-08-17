// const { colors } = require('config/variables.js') not working
const colors = ['#000000', '#ffffff']

const link = {
  label: 'Link',
  name: 'link',
  type: 'object',
  fields: [
    {
      type: 'string',
      label: 'Text',
      name: 'text',
      required: true,
    },
    {
      type: 'string',
      label: 'Url',
      name: 'url',
      required: true,
    },
  ],
}

const titleTextLink = {
  label: 'Title & Text & Link',
  name: 'titleTextLink',
  type: 'object',
  list: true,
  ui: {
    itemProps: (item) => ({
      label: `${item?.title}`,
    }),
  },
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
      required: true,
    },
    {
      type: 'string',
      label: 'Text',
      name: 'text',
    },
    {
      type: 'string',
      label: 'Link',
      name: 'link',
      required: true,
    },
  ],
}

const stringList = ({ label = 'String List', name = 'stringList' }) => {
  return {
    label,
    name,
    type: 'string',
    list: true,
    fields: [
      {
        type: 'string',
        label: 'Text',
        name: 'text',
        required: true,
      },
    ],
  }
}

const colorPallete = ({ label = 'Color', name = 'color' }) => ({
  type: 'string',
  label,
  name,
  ui: {
    component: 'color',
    colorFormat: 'hex',
    colors,
    widget: 'block',
  },
})

const media = ({ label = 'Media', name = 'media' }) => ({
  label,
  name,
  type: 'object',
  fields: [
    {
      type: 'string',
      label: 'Caption',
      name: 'caption',
      required: true,
    },
    {
      type: 'image',
      label: 'Source',
      name: 'source',
      required: true,
    },
  ],
})

export const firstLayerBlocks = {
  link,
  titleTextLink,
  stringList,
  colorPallete,
  media,
}
