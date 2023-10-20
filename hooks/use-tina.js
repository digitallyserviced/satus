import { convertArrayToObject, shortenObjectKeys } from 'libs/utils'
import { useTina } from 'tinacms/dist/react'

// Hook for converting array to objets and parse variables names
export const useTinaObjects = (input, pageId) => {
  let hero = {}
  let global = { navigation: {} }
  let sections = {}
  const { data } = useTina({
    ...input,
  })

  if (data[pageId].hero) {
    hero = convertArrayToObject(data[pageId].hero)
    hero = shortenObjectKeys(hero, 'Hero')
  }

  if (data[pageId].global) {
    global = convertArrayToObject(data[pageId].global)
    global = shortenObjectKeys(global, 'Global')
  }

  if (data[pageId].sections) {
    sections = convertArrayToObject(data[pageId].sections)
    sections = shortenObjectKeys(sections, 'Sections')
  }

  return { hero, global, sections, data }
}
