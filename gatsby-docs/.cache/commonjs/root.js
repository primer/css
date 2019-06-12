"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _router = require("@reach/router");

var _gatsbyReactRouterScroll = require("gatsby-react-router-scroll");

var _navigation = require("./navigation");

var _apiRunnerBrowser = require("./api-runner-browser");

var _loader = _interopRequireDefault(require("./loader"));

var _jsonStore = _interopRequireDefault(require("./json-store"));

var _ensureResources = _interopRequireDefault(require("./ensure-resources"));

var _errorOverlayHandler = require("./error-overlay-handler");

if (window.__webpack_hot_middleware_reporter__ !== undefined) {
  const overlayErrorID = `webpack`; // Report build errors

  window.__webpack_hot_middleware_reporter__.useCustomOverlay({
    showProblems(type, obj) {
      if (type !== `errors`) {
        (0, _errorOverlayHandler.clearError)(overlayErrorID);
        return;
      }

      (0, _errorOverlayHandler.reportError)(overlayErrorID, obj[0]);
    },

    clear() {
      (0, _errorOverlayHandler.clearError)(overlayErrorID);
    }

  });
}

(0, _navigation.init)();

class RouteHandler extends _react.default.Component {
  render() {
    let location = this.props.location; // check if page exists - in dev pages are sync loaded, it's safe to use
    // loader.getPage

    let page = _loader.default.getPage(location.pathname);

    if (page) {
      return _react.default.createElement(_ensureResources.default, {
        location: location
      }, locationAndPageResources => _react.default.createElement(_navigation.RouteUpdates, {
        location: location
      }, _react.default.createElement(_gatsbyReactRouterScroll.ScrollContext, {
        location: location,
        shouldUpdateScroll: _navigation.shouldUpdateScroll
      }, _react.default.createElement(_jsonStore.default, (0, _extends2.default)({}, this.props, locationAndPageResources)))));
    } else {
      const dev404PageResources = _loader.default.getResourcesForPathnameSync(`/dev-404-page/`);

      const real404PageResources = _loader.default.getResourcesForPathnameSync(`/404.html`);

      let custom404;

      if (real404PageResources) {
        custom404 = _react.default.createElement(_jsonStore.default, (0, _extends2.default)({}, this.props, {
          pageResources: real404PageResources
        }));
      }

      return _react.default.createElement(_navigation.RouteUpdates, {
        location: location
      }, _react.default.createElement(_jsonStore.default, {
        location: location,
        pageResources: dev404PageResources,
        custom404: custom404
      }));
    }
  }

}

const Root = () => (0, _react.createElement)(_router.Router, {
  basepath: __BASE_PATH__
}, (0, _react.createElement)(RouteHandler, {
  path: `/*`
})); // Let site, plugins wrap the site e.g. for Redux.


const WrappedRoot = (0, _apiRunnerBrowser.apiRunner)(`wrapRootElement`, {
  element: _react.default.createElement(Root, null)
}, _react.default.createElement(Root, null), ({
  result,
  plugin
}) => {
  return {
    element: result
  };
}).pop();

var _default = () => WrappedRoot;

exports.default = _default;