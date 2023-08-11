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
  label: 'TitleTextLink',
  name: 'titleTextLink',
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

const stringList = ({ label = 'StringList', name = 'stringList' }) => {
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
