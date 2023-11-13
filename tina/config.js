import { defineConfig } from 'tinacms'
import { homeCollection } from './content/pages/home/index.js'

const branch = process.env.VERCEL_GIT_COMMIT_REF || 'with-tina-cms' // change this to your currrent branch

// const cloudinaryConfig = {
//   loadCustomStore: async () => {
//     const pack = await import('next-tinacms-cloudinary')
//     return pack.TinaCloudCloudinaryMediaStore
//   },
// }

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN,
      stopwordLanguages: ['eng'],
    },
    indexBatchSize: 300,
    maxSearchIndexFieldLength: 300,
  },
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'cms',
      publicFolder: 'public',
    },
  },
  // media: {
  //   ...cloudinaryConfig,
  // },

  schema: {
    collections: [homeCollection],
  },
})
