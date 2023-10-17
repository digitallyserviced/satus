const { removeTinaGeneratedFiles, readFile } = require('./utils.js')

const createMarkdowns = async (filePath, callback) => {
  let passTest = 0
  let dataLength = 0

  await readFile(filePath, async ({ data }) => {
    dataLength = data.length
    passTest = await callback(passTest, data)

    console.log(
      `Total of ${passTest} markdowns created ---`,
      `Total items ${dataLength}`,
    )
  })
}

const parserFunction = async (passTest, data) => {
  for (const item of data) {
    console.log('starting ', item)

    const { filename, markdownContent, valid } = generateMarkdownContent(item)
    if (valid) {
      passTest += 1
      const path = targetDirectory + filename
      fs.writeFileSync(path, markdownContent, 'utf-8')
      console.log('Markdown file created successfully.', filename)
    }
  }

  return passTest
}

/**
 Defined by user:
  filePath: destination of data to convert into markdowns
  jsonToMarkdown: function to parse data into markdowns and fit the correct format already declared in tina settings
  generateMarkdownContent: function to generate markdown content and do validations
*/

const filePath = 'data-file'
const targetDirectory = 'new-markdown-directory'

async function jsonToMarkdown({ title }) {
  return `
---
title: ${title}
---
`
}

const generateMarkdownContent = async (item) => {
  // define filename
  const filename = 'filename' + '.md'

  // define markdown content
  const markdownContent = await jsonToMarkdown(item.title)

  // do data checks if something is missing
  // return valid = false
  return { filename, markdownContent, valid: true }
}

// Execute the script
removeTinaGeneratedFiles()
createMarkdowns(filePath, parserFunction)
