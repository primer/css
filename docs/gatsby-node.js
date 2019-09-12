const redirects = {
  '/css/objects/layout': '/css/objects/grid',
  '/css/objects/layout/': '/css/objects/grid/'
}

exports.createPages = ({actions: {createRedirect}}) => {
  for (const [fromPath, toPath] of Object.entries(redirects)) {
    // console.warn(`[redirect] ${fromPath} → ${toPath}`)
    createRedirect({fromPath, toPath, redirectInBrowser: true})
  }
}
