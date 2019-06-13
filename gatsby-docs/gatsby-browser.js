const React = require("react")
const Layout = require("./src/components/layout")

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
