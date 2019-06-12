import React from "react"
import PropTypes from "prop-types"
import Link, {
  withPrefix,
  withAssetPrefix,
  navigate,
  push,
  replace,
  navigateTo,
  parsePath,
} from "gatsby-link"
import PageRenderer from "./public-page-renderer"

const StaticQueryContext = React.createContext({})

const StaticQuery = props => (
  <StaticQueryContext.Consumer>
    {staticQueryData => {
      if (
        props.data ||
        (staticQueryData[props.query] && staticQueryData[props.query].data)
      ) {
        return (props.render || props.children)(
          props.data ? props.data.data : staticQueryData[props.query].data
        )
      } else {
        return <div>Loading (StaticQuery)</div>
      }
    }}
  </StaticQueryContext.Consumer>
)

const useStaticQuery = query => {
  if (
    typeof React.useContext !== `function` &&
    process.env.NODE_ENV === `development`
  ) {
    throw new Error(
      `You're likely using a version of React that doesn't support Hooks\n` +
        `Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.`
    )
  }
  const context = React.useContext(StaticQueryContext)
  if (context[query] && context[query].data) {
    return context[query].data
  } else {
    throw new Error(
      `The result of this StaticQuery could not be fetched.\n\n` +
        `This is likely a bug in Gatsby and if refreshing the page does not fix it, ` +
        `please open an issue in https://github.com/gatsbyjs/gatsby/issues`
    )
  }
}

StaticQuery.propTypes = {
  data: PropTypes.object,
  query: PropTypes.string.isRequired,
  render: PropTypes.func,
  children: PropTypes.func,
}

function graphql() {
  throw new Error(
    `It appears like Gatsby is misconfigured. Gatsby related \`graphql\` calls ` +
      `are supposed to only be evaluated at compile time, and then compiled away. ` +
      `Unfortunately, something went wrong and the query was left in the compiled code.\n\n` +
      `Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.`
  )
}

export {
  Link,
  withAssetPrefix,
  withPrefix,
  graphql,
  parsePath,
  navigate,
  push, // TODO replace for v3
  replace, // TODO remove replace for v3
  navigateTo, // TODO: remove navigateTo for v3
  StaticQueryContext,
  StaticQuery,
  PageRenderer,
  useStaticQuery,
}
