import { Collection } from '../'
import { hubspotForms } from '../custom-components/hubspot-forms'
import { slider } from '../custom-components/slider'

const hero = {
  name: 'hero',
  label: 'Hero',
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
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
    hubspotForms(),
  ],
}

const collection = new Collection('home', 'Home', 'tina/content/home', 'md')
collection.setFields = [hero]
collection.setUi = () => '/home'

export const homeCollection = collection
