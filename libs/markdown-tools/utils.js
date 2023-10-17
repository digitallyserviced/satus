const fs = require('fs-extra')
const request = require('request')

function slugify(text) {
  return text
    .toString() // Cast to string (optional)
    .normalize('NFKD') // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
    .toLowerCase() // Convert the string to lowercase letters
    .trim() // Remove whitespace from both sides of a string (optional)
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

const fetchJson = async (url) => {
  const response = await fetch(url)
  const json = await response.json()
  return json
}

const downloadImage = async (url, path) => {
  request.head(url, () => {
    request(url)
      .pipe(fs.createWriteStream(path))
      .on('close', () => {
        console.log('Image downloaded ✅')
      })
  })
}

function cropString(string = '', limit = 0) {
  return string.substring(0, limit)
}

const readFile = async (path, callback) => {
  fs.readFile(path, 'utf-8', async (error, data) => {
    if (error) {
      console.error(`Error reading JSON file: ${error.message}`)
      return
    }

    try {
      const parsedData = JSON.parse(data)
      await callback(parsedData)
    } catch (parseError) {
      console.error(`Error parsing JSON data: ${parseError.message}`)
    }
  })
}

const removeTinaGeneratedFiles = () => {
  const paths = ['../tina/tina-lock.json', '../tina/__generated__']

  for (const path of paths) {
    fs.remove(path, (err) => {
      if (err) {
        console.error(`Error removing the file: ${err}`)
        return
      }
      console.log('File removed successfully.')
    })
  }
}

module.exports = {
  slugify,
  fetchJson,
  downloadImage,
  cropString,
  removeTinaGeneratedFiles,
  readFile,
}
