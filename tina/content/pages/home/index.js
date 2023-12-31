import { Collection } from '../../'
import { slider } from '../../custom-components/slider'

const hero = {
  name: 'firstFold', // Don't use word hero in here
  label: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'string',
      required: true,
    },
  ],
  ui: {
    defaultItem: {
      title: 'Hero',
    },
  },
}

const fold = {
  name: 'secondFold',
  label: 'Fold',
  type: 'object',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'string',
      required: true,
    },
    {
      name: 'text',
      label: 'Text',
      type: 'string',
      required: true,
      ui: {
        component: 'textarea',
      },
    },
    slider({
      name: 'opacity',
      label: 'Opacity',
      sliderProps: {
        defaultValue: 1,
        label: 'opacity',
        min: 0,
        max: 1,
        step: 0.05,
      },
    }),
    {
      name: 'hero',
      type: 'image',
      label: 'Hero Image',
    },
  ],
  ui: {
    defaultItem: {
      title: 'Title',
      text: 'Text',
      opacity: 1,
    },
  },
}

const collection = new Collection(
  'home',
  'Home',
  'tina/content/pages/home',
  'md',
)

collection.setHero = [hero]
collection.setFields = [fold]
collection.setUi = () => '/home'

export const homeCollection = collection
