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

const link = ({ label = 'Link', name = 'link' } = {}) => ({
  label,
  name,
  type: 'object',
  ui: {
    itemProps: (item) => ({
      label: `${item?.text}`,
    }),
    defaultItem: {
      text: 'Link Text',
      url: 'Url',
    },
  },
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
})

const internalLink = ({ label = 'Link', name = 'link', collections }) => ({
  label,
  name,
  type: 'reference',
  collections,
})

const titleTextLink = ({
  label = 'Title & Text & Link',
  name = 'titleTextLink',
}) => ({
  label,
  name,
  type: 'object',
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

const stringList = ({ label = 'String List', name = 'stringList' }) => ({
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
})

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

const media = ({ label = 'Media', name = 'media', required = true } = {}) => ({
  label,
  name,
  type: 'object',
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
})

const mediaMobileFallback = ({
  label = 'Media',
  name = 'media',
  required = true,
}) => ({
  label,
  name,
  type: 'object',
  // ui: {
  //   validate: (value) => {
  //     if (!value && required) return 'Required'
  //   },
  // },
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
})

const multipleMediaWithFallback = ({
  label = 'Multi-Assets',
  name = 'multipleAssets',
  required = true,
  min = 1,
  limit = 100,
}) => ({
  label,
  name,
  type: 'object',
  list: true,
  ui: {
    validate: (value) => {
      if (typeof value === 'undefined') return 'Cannot be empty'

      if (value && value.length > limit) {
        return `Cannot be more than ${limit} items`
      }

      if (value && value.length < min) {
        return `Cannot be less than ${min} items`
      }
    },
    itemProps: (item) => {
      return {
        label: `${item?.media?.caption}`,
      }
    },
  },
  fields: [mediaMobileFallback({ label: 'Media', name: 'media', required })],
})

const linkWithMedia = ({ label = 'Link', name = 'link' }) => ({
  label,
  name,
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
    media({ label: 'Media', name: 'media' }),
  ],
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

export const firstLayerBlocks = {
  link,
  titleTextLink,
  stringList,
  colorPallete,
  media,
  multipleMediaWithFallback,
  mediaMobileFallback,
  linkWithMedia,
  internalLink,
  internalLinkWithMedia,
}
