import postcss from 'postcss'
import postCssConfig from '../postcss.config.js'

export default async function compiler(css, options) {
  const { plugins, ...config } = postCssConfig

  const result = await postcss(plugins).process(css, {
    ...config,
    ...options
  })
  return result
}
