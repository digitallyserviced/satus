import { metadata } from './metadata'
import { navigation } from './navigation'

export class Collection {
  constructor(name, label, path, format) {
    this.name = name
    this.label = label
    this.path = path
    this.format = format
    this.fields = []
    this.ui = null
  }

  set setFields(input) {
    this.fields = [
      {
        name: 'title',
        label: 'Title',
        type: 'string',
        required: true,
        isTitle: true,
      },
      {
        name: 'global',
        label: 'Global',
        type: 'object',
        list: true,
        templates: [navigation, metadata],
      },
      {
        name: 'sections',
        label: 'Sections',
        type: 'object',
        list: true,
        templates: [...input],
      },
    ]
  }

  set setUi(route) {
    this.ui = { router: route }
  }
}
