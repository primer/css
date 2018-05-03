module.exports = {
  output: "build/great-ui.asketch.json",
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
