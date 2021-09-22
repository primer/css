import {getNavigationLinks, getContentFrontmatter} from './utils/docs'

let navLinks, contentFM

beforeAll(async () => {
  contentFM = await getContentFrontmatter()
  navLinks = getNavigationLinks()
})

describe('frontmatter', () => {
  it('page title matches link title', () => {
    for (const link of navLinks) {
      const content = contentFM[link['url']]
      expect(content).not.toBeNull()
      expect(content['title']).toBe(link['title'])
    }
  })

  it('contains path attribute', () => {
    for (const v of Object.values(contentFM)) {
      expect(v['path']).not.toBeNull()
    }
  })
})

describe('navigation', () => {
  it('has a file for each nav item', () => {
    for (const link of navLinks) {
      const content = contentFM[link['url']]
      expect(content).not.toBeNull()
    }
  })
})
