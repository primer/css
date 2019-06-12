"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

const React = require(`react`);

const fs = require(`fs`);

const _require = require(`path`),
      join = _require.join;

const _require2 = require(`react-dom/server`),
      renderToString = _require2.renderToString,
      renderToStaticMarkup = _require2.renderToStaticMarkup;

const _require3 = require(`@reach/router`),
      ServerLocation = _require3.ServerLocation,
      Router = _require3.Router,
      isRedirect = _require3.isRedirect;

const _require4 = require(`lodash`),
      get = _require4.get,
      merge = _require4.merge,
      isObject = _require4.isObject,
      flatten = _require4.flatten,
      uniqBy = _require4.uniqBy;

const apiRunner = require(`./api-runner-ssr`);

const syncRequires = require(`./sync-requires`);

const _require5 = require(`./data.json`),
      dataPaths = _require5.dataPaths,
      pages = _require5.pages;

const _require6 = require(`gatsby/package.json`),
      gatsbyVersion = _require6.version; // Speed up looking up pages.


const pagesObjectMap = new Map();
pages.forEach(p => pagesObjectMap.set(p.path, p));
const stats = JSON.parse(fs.readFileSync(`${process.cwd()}/public/webpack.stats.json`, `utf-8`));
const chunkMapping = JSON.parse(fs.readFileSync(`${process.cwd()}/public/chunk-map.json`, `utf-8`)); // const testRequireError = require("./test-require-error")
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.

const testRequireError = (moduleName, err) => {
  const regex = new RegExp(`Error: Cannot find module\\s.${moduleName}`);
  const firstLine = err.toString().split(`\n`)[0];
  return regex.test(firstLine);
};

let Html;

try {
  Html = require(`../src/html`);
} catch (err) {
  if (testRequireError(`../src/html`, err)) {
    Html = require(`./default-html`);
  } else {
    throw err;
  }
}

Html = Html && Html.__esModule ? Html.default : Html;

const getPage = path => pagesObjectMap.get(path);

const createElement = React.createElement;

const sanitizeComponents = components => {
  if (Array.isArray(components)) {
    // remove falsy items
    return components.filter(val => Array.isArray(val) ? val.length > 0 : val);
  } else {
    // we also accept single components, so we need to handle this case as well
    return components ? [components] : [];
  }
};

var _default = (pagePath, callback) => {
  let bodyHtml = ``;
  let headComponents = [React.createElement("meta", {
    name: "generator",
    content: `Gatsby ${gatsbyVersion}`,
    key: `generator-${gatsbyVersion}`
  })];
  let htmlAttributes = {};
  let bodyAttributes = {};
  let preBodyComponents = [];
  let postBodyComponents = [];
  let bodyProps = {};

  const replaceBodyHTMLString = body => {
    bodyHtml = body;
  };

  const setHeadComponents = components => {
    headComponents = headComponents.concat(sanitizeComponents(components));
  };

  const setHtmlAttributes = attributes => {
    htmlAttributes = merge(htmlAttributes, attributes);
  };

  const setBodyAttributes = attributes => {
    bodyAttributes = merge(bodyAttributes, attributes);
  };

  const setPreBodyComponents = components => {
    preBodyComponents = preBodyComponents.concat(sanitizeComponents(components));
  };

  const setPostBodyComponents = components => {
    postBodyComponents = postBodyComponents.concat(sanitizeComponents(components));
  };

  const setBodyProps = props => {
    bodyProps = merge({}, bodyProps, props);
  };

  const getHeadComponents = () => headComponents;

  const replaceHeadComponents = components => {
    headComponents = sanitizeComponents(components);
  };

  const getPreBodyComponents = () => preBodyComponents;

  const replacePreBodyComponents = components => {
    preBodyComponents = sanitizeComponents(components);
  };

  const getPostBodyComponents = () => postBodyComponents;

  const replacePostBodyComponents = components => {
    postBodyComponents = sanitizeComponents(components);
  };

  const page = getPage(pagePath);
  let dataAndContext = {};

  if (page.jsonName in dataPaths) {
    const pathToJsonData = join(process.cwd(), `/public/static/d`, `${dataPaths[page.jsonName]}.json`);

    try {
      dataAndContext = JSON.parse(fs.readFileSync(pathToJsonData));
    } catch (e) {
      console.log(`error`, pathToJsonData, e);
      process.exit();
    }
  }

  class RouteHandler extends React.Component {
    render() {
      const props = Object.assign({}, this.props, dataAndContext, {
        pathContext: dataAndContext.pageContext
      });
      const pageElement = createElement(syncRequires.components[page.componentChunkName], props);
      const wrappedPage = apiRunner(`wrapPageElement`, {
        element: pageElement,
        props
      }, pageElement, ({
        result
      }) => {
        return {
          element: result,
          props
        };
      }).pop();
      return wrappedPage;
    }

  }

  const routerElement = createElement(ServerLocation, {
    url: `${__BASE_PATH__}${pagePath}`
  }, createElement(Router, {
    baseuri: `${__BASE_PATH__}`
  }, createElement(RouteHandler, {
    path: `/*`
  })));
  const bodyComponent = apiRunner(`wrapRootElement`, {
    element: routerElement,
    pathname: pagePath
  }, routerElement, ({
    result
  }) => {
    return {
      element: result,
      pathname: pagePath
    };
  }).pop(); // Let the site or plugin render the page component.

  apiRunner(`replaceRenderer`, {
    bodyComponent,
    replaceBodyHTMLString,
    setHeadComponents,
    setHtmlAttributes,
    setBodyAttributes,
    setPreBodyComponents,
    setPostBodyComponents,
    setBodyProps,
    pathname: pagePath,
    pathPrefix: __PATH_PREFIX__
  }); // If no one stepped up, we'll handle it.

  if (!bodyHtml) {
    try {
      bodyHtml = renderToString(bodyComponent);
    } catch (e) {
      // ignore @reach/router redirect errors
      if (!isRedirect(e)) throw e;
    }
  } // Create paths to scripts


  let scriptsAndStyles = flatten([`app`, page.componentChunkName].map(s => {
    const fetchKey = `assetsByChunkName[${s}]`;
    let chunks = get(stats, fetchKey);
    let namedChunkGroups = get(stats, `namedChunkGroups`);

    if (!chunks) {
      return null;
    }

    chunks = chunks.map(chunk => {
      if (chunk === `/`) {
        return null;
      }

      return {
        rel: `preload`,
        name: chunk
      };
    });
    namedChunkGroups[s].assets.forEach(asset => chunks.push({
      rel: `preload`,
      name: asset
    }));
    const childAssets = namedChunkGroups[s].childAssets;

    for (const rel in childAssets) {
      chunks = merge(chunks, childAssets[rel].map(chunk => {
        return {
          rel,
          name: chunk
        };
      }));
    }

    return chunks;
  })).filter(s => isObject(s)).sort((s1, s2) => s1.rel == `preload` ? -1 : 1); // given priority to preload

  scriptsAndStyles = uniqBy(scriptsAndStyles, item => item.name);
  const scripts = scriptsAndStyles.filter(script => script.name && script.name.endsWith(`.js`));
  const styles = scriptsAndStyles.filter(style => style.name && style.name.endsWith(`.css`));
  apiRunner(`onRenderBody`, {
    setHeadComponents,
    setHtmlAttributes,
    setBodyAttributes,
    setPreBodyComponents,
    setPostBodyComponents,
    setBodyProps,
    pathname: pagePath,
    bodyHtml,
    scripts,
    styles,
    pathPrefix: __PATH_PREFIX__
  });
  scripts.slice(0).reverse().forEach(script => {
    // Add preload/prefetch <link>s for scripts.
    headComponents.push(React.createElement("link", {
      as: "script",
      rel: script.rel,
      key: script.name,
      href: `${__PATH_PREFIX__}/${script.name}`
    }));
  });

  if (page.jsonName in dataPaths) {
    const dataPath = `${__PATH_PREFIX__}/static/d/${dataPaths[page.jsonName]}.json`;
    headComponents.push(React.createElement("link", {
      as: "fetch",
      rel: "preload",
      key: dataPath,
      href: dataPath,
      crossOrigin: "use-credentials"
    }));
  }

  styles.slice(0).reverse().forEach(style => {
    // Add <link>s for styles that should be prefetched
    // otherwise, inline as a <style> tag
    if (style.rel === `prefetch`) {
      headComponents.push(React.createElement("link", {
        as: "style",
        rel: style.rel,
        key: style.name,
        href: `${__PATH_PREFIX__}/${style.name}`
      }));
    } else {
      headComponents.unshift(React.createElement("style", {
        "data-href": `${__PATH_PREFIX__}/${style.name}`,
        dangerouslySetInnerHTML: {
          __html: fs.readFileSync(join(process.cwd(), `public`, style.name), `utf-8`)
        }
      }));
    }
  }); // Add page metadata for the current page

  const windowData = `/*<![CDATA[*/window.page=${JSON.stringify(page)};${page.jsonName in dataPaths ? `window.dataPath="${dataPaths[page.jsonName]}";` : ``}/*]]>*/`;
  postBodyComponents.push(React.createElement("script", {
    key: `script-loader`,
    id: `gatsby-script-loader`,
    dangerouslySetInnerHTML: {
      __html: windowData
    }
  })); // Add chunk mapping metadata

  const scriptChunkMapping = `/*<![CDATA[*/window.___chunkMapping=${JSON.stringify(chunkMapping)};/*]]>*/`;
  postBodyComponents.push(React.createElement("script", {
    key: `chunk-mapping`,
    id: `gatsby-chunk-mapping`,
    dangerouslySetInnerHTML: {
      __html: scriptChunkMapping
    }
  })); // Filter out prefetched bundles as adding them as a script tag
  // would force high priority fetching.

  const bodyScripts = scripts.filter(s => s.rel !== `prefetch`).map(s => {
    const scriptPath = `${__PATH_PREFIX__}/${JSON.stringify(s.name).slice(1, -1)}`;
    return React.createElement("script", {
      key: scriptPath,
      src: scriptPath,
      async: true
    });
  });
  postBodyComponents.push(...bodyScripts);
  apiRunner(`onPreRenderHTML`, {
    getHeadComponents,
    replaceHeadComponents,
    getPreBodyComponents,
    replacePreBodyComponents,
    getPostBodyComponents,
    replacePostBodyComponents,
    pathname: pagePath,
    pathPrefix: __PATH_PREFIX__
  });
  const html = `<!DOCTYPE html>${renderToStaticMarkup(React.createElement(Html, (0, _extends2.default)({}, bodyProps, {
    headComponents: headComponents,
    htmlAttributes: htmlAttributes,
    bodyAttributes: bodyAttributes,
    preBodyComponents: preBodyComponents,
    postBodyComponents: postBodyComponents,
    body: bodyHtml,
    path: pagePath
  })))}`;
  callback(null, html);
};

exports.default = _default;