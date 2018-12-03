const matter = require('gray-matter')

module.exports = function frontmatterLoader(src) {
  try {
    const {content, data} = matter(src)
    return `${content}
export const meta = ${JSON.stringify(data)}
`
  } catch (error) {
    return src
  }
}
