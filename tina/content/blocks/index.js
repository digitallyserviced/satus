// const { colors } = require('config/variables.js') not working

const colors = [
  '#1072FA',
  '#FFFDF9',
  '#000000',
  '#DEDFDF',
  '#A6A5A2',
  '#FFD540',
  '#B58DFF',
  '#FF8360',
  '#BDFFFF',
]

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

//* start Needs rework
const internalLink = ({ label = 'Link', name = 'link', collections }) => ({
  label,
  name,
  type: 'reference',
  collections,
})

const internalLinkWithMedia = ({
  label = 'Link',
  name = 'link',
  collections,
}) => ({
  label,
  name,
  type: 'object',
  fields: [
    internalLink({ collections }),
    media({ label: 'Media', name: 'media' }),
  ],
})

//* end Needs rework

const link = ({
  label = 'Link',
  name = 'link',
  required = true,
  list = false,
  max = null,
} = {}) => ({
  label,
  name,
  list,
  type: 'object',
  ui: {
    itemProps: (item) => ({
      label: `${item?.text}`,
    }),
    validate: (value) => {
      if (typeof value === 'undefined' && required) return 'Cannot be empty'
      if (max && value && value.length > max)
        return `Cannot be more than ${max} items`
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Text',
      name: 'text',
      required,
    },
    {
      type: 'string',
      label: 'Url',
      name: 'url',
      required,
    },
  ],
})

const titleTextLink = ({
  label = 'Title & Text & Link',
  name = 'titleTextLink',
  required = true,
  list = false,
  max = null,
}) => ({
  label,
  name,
  type: 'object',
  list,
  ui: {
    itemProps: (item) => ({
      label: `${item?.title}`,
    }),
    validate: (value) => {
      if (typeof value === 'undefined' && required) return 'Cannot be empty'
      if (max && value && value.length > max)
        return `Cannot be more than ${max} items`
    },
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
      required: true,
    },
    {
      type: 'string',
      label: 'Url',
      name: 'url',
      required: true,
    },
  ],
})

const stringList = ({
  label = 'String List',
  name = 'stringList',
  required = true,
}) => ({
  label,
  name,
  type: 'string',
  list: true,
  fields: [
    {
      type: 'string',
      label: 'Text',
      name: 'text',
      required,
    },
  ],
})

const media = ({
  label = 'Media',
  name = 'media',
  required = true,
  list = false,
  max = null,
} = {}) => ({
  label,
  name,
  type: 'object',
  list,
  fields: [
    {
      type: 'string',
      label: 'Caption',
      name: 'caption',
      required,
    },
    {
      type: 'image',
      label: 'Source',
      name: 'source',
      required,
    },
  ],
  ui: {
    itemProps: (item) => ({
      label: `${item?.caption}`,
    }),
    validate: (value) => {
      if (typeof value === 'undefined' && required) return 'Cannot be empty'
      if (max && value && value.length > max)
        return `Cannot be more than ${max} items`
    },
  },
})

const mediaMobileFallback = ({
  label = 'Media',
  name = 'media',
  required = true,
  list = false,
  max = null,
}) => ({
  label,
  name,
  type: 'object',
  list,
  fields: [
    {
      type: 'string',
      label: 'Caption',
      name: 'caption',
      required,
    },
    {
      type: 'image',
      label: 'Source',
      name: 'source',
      required,
    },
    {
      type: 'string',
      label: 'Mobile Fallback Caption',
      name: 'mobileCaption',
      required: false,
    },
    {
      type: 'image',
      label: 'Mobile Fallback Source',
      name: 'mobileSource',
      required: false,
    },
  ],
  ui: {
    itemProps: (item) => ({
      label: `${item?.caption}`,
    }),
    validate: (value) => {
      if (typeof value === 'undefined' && required) return 'Cannot be empty'
      if (max && value && value.length > max)
        return `Cannot be more than ${max} items`
    },
  },
})

const linkWithMedia = ({
  label = 'Link',
  name = 'link',
  required = true,
  list = false,
  max = null,
}) => ({
  label,
  name,
  required,
  list,
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
    media({ label: 'Media', name: 'media', required }),
  ],
  ui: {
    itemProps: (item) => ({
      label: `${item?.text}`,
    }),
    validate: (value) => {
      if (typeof value === 'undefined' && required) return 'Cannot be empty'
      if (max && value && value.length > max)
        return `Cannot be more than ${max} items`
    },
  },
})

export const firstLayerBlocks = {
  link,
  titleTextLink,
  stringList,
  colorPallete,
  media,
  mediaMobileFallback,
  linkWithMedia,
  internalLink,
  internalLinkWithMedia,
}
