import { Collection } from '../'

const hero = {
  name: 'hero',
  label: 'Hero',
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
    },
  ],
}

const collection = new Collection('home', 'Home', 'tina/content/home', 'md')
collection.setFields = [hero]
collection.setUi = () => '/home'

export const homeCollection = collection
