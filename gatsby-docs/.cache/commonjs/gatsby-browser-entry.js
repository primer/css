"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.graphql = graphql;
exports.useStaticQuery = exports.StaticQuery = exports.StaticQueryContext = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _gatsbyLink = _interopRequireWildcard(require("gatsby-link"));

exports.Link = _gatsbyLink.default;
exports.withPrefix = _gatsbyLink.withPrefix;
exports.withAssetPrefix = _gatsbyLink.withAssetPrefix;
exports.navigate = _gatsbyLink.navigate;
exports.push = _gatsbyLink.push;
exports.replace = _gatsbyLink.replace;
exports.navigateTo = _gatsbyLink.navigateTo;
exports.parsePath = _gatsbyLink.parsePath;

var _publicPageRenderer = _interopRequireDefault(require("./public-page-renderer"));

exports.PageRenderer = _publicPageRenderer.default;

const StaticQueryContext = _react.default.createContext({});

exports.StaticQueryContext = StaticQueryContext;

const StaticQuery = props => _react.default.createElement(StaticQueryContext.Consumer, null, staticQueryData => {
  if (props.data || staticQueryData[props.query] && staticQueryData[props.query].data) {
    return (props.render || props.children)(props.data ? props.data.data : staticQueryData[props.query].data);
  } else {
    return _react.default.createElement("div", null, "Loading (StaticQuery)");
  }
});

exports.StaticQuery = StaticQuery;

const useStaticQuery = query => {
  if (typeof _react.default.useContext !== `function` && process.env.NODE_ENV === `development`) {
    throw new Error(`You're likely using a version of React that doesn't support Hooks\n` + `Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.`);
  }

  const context = _react.default.useContext(StaticQueryContext);

  if (context[query] && context[query].data) {
    return context[query].data;
  } else {
    throw new Error(`The result of this StaticQuery could not be fetched.\n\n` + `This is likely a bug in Gatsby and if refreshing the page does not fix it, ` + `please open an issue in https://github.com/gatsbyjs/gatsby/issues`);
  }
};

exports.useStaticQuery = useStaticQuery;
StaticQuery.propTypes = {
  data: _propTypes.default.object,
  query: _propTypes.default.string.isRequired,
  render: _propTypes.default.func,
  children: _propTypes.default.func
};

function graphql() {
  throw new Error(`It appears like Gatsby is misconfigured. Gatsby related \`graphql\` calls ` + `are supposed to only be evaluated at compile time, and then compiled away. ` + `Unfortunately, something went wrong and the query was left in the compiled code.\n\n` + `Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.`);
}