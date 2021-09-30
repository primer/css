import fs from 'fs'

let distDir

beforeAll(() => {
  distDir = fs.readdirSync('./dist')
})

describe('./dist/ folder', () => {
  let distCSS, distMap, distJS

  beforeAll(() => {
    distCSS = distDir.filter(i => i.match(/\.css$/))
    distMap = distDir.filter(i => i.match(/\.map$/))
    distJS = distDir.filter(i => i.match(/\.js$/))
  })

  it('is not empty', () => {
    expect(distDir).not.toBeNull()
    expect(distDir.length).not.toBe(0)
  })

  it('contains source maps', () => {
    for (const file of distCSS) {
      if (file.includes('support')) { continue }
      expect(distMap).toContain(`${file}.map`)
    }
  })

  it('contains stats export files', () => {
    for (const file of distCSS) {
      expect(distJS).toContain(file.replace('.css', '.js'))
    }
  })

  it('contains stats/ folder', () => {
    expect(distDir).toContain('stats')
  })
})

describe('./dist/stats/ folder', () => {
  let statsDir

  beforeAll(() => {
    statsDir = fs.readdirSync('./dist/stats')
  })

  it('is not empty', () => {
    expect(statsDir).not.toBeNull()
    expect(statsDir.length).not.toBe(0)
  })

  it('contains a css file for each stat file', () => {
    for (const file of statsDir) {
      expect(distDir).toContain(file.replace('.json', '.css'))
    }
  })
})
