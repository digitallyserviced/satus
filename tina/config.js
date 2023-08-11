import { defineConfig } from 'tinacms'
import { homeCollection } from './content/home/index.js'

const branch = process.env.VERCEL_GIT_COMMIT_REF || 'with-tina-cms'

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

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
  schema: {
    collections: [homeCollection],
  },
})
