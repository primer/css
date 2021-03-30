const {getNavigationLinks, getContentFrontmatter} = require('./utils/docs')

let navLinks, contentFM

beforeAll(async () => {
  contentFM = await getContentFrontmatter()
  navLinks = getNavigationLinks()
})

describe('frontmatter', () => {
  it('page title matches link title', () => {
    navLinks.forEach(link => {
      const content = contentFM[link['url']]
      expect(content).not.toBeNull()
      expect(content['title']).toBe(link['title'])
    })
  })

  it('contains path attribute', () => {
    Object.values(contentFM).forEach( v => {
      expect(v['path']).not.toBeNull()
    })
  })
})

describe('navigation', () => {
  it('has a file for each nav item', () => {
    navLinks.forEach(link => {
      const content = contentFM[link['url']]
      expect(content).not.toBeNull()
    })
  })
})
