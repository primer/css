module.exports = {
  output: "build/kitchensink.json",
  input: "build/iframe.html",
  concurrency: 2,
  viewports: {
    standard: {
      width: 900,
      height: 800,
      symbolPrefix: "Desktop/"
    }
  },
  pageTitle: "great-ui",
}
