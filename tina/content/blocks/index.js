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

export const firstLayerBlocks = {
  link,
  titleTextLink,
  stringList,
}
