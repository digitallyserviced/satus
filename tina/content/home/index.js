import { Collection } from '../'
import { slider } from '../custom-components'

const hero = {
  name: 'hero',
  label: 'Hero',
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
    },
    slider(),
  ],
}

const collection = new Collection('home', 'Home', 'tina/content/home', 'md')
collection.setFields = [hero]
collection.setUi = () => '/home'

export const homeCollection = collection
