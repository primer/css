"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _loader = _interopRequireDefault(require("./loader"));

var _shallowCompare = _interopRequireDefault(require("shallow-compare"));

let isInitialRender = true; // Pass pathname in as prop.
// component will try fetching resources. If they exist,
// will just render, else will render null.
// It will also wait for pageResources
// before propagating location change to children.

class EnsureResources extends _react.default.Component {
  constructor(props) {
    super();
    let location = props.location;
    this.state = {
      location: Object.assign({}, location),
      pageResources: _loader.default.getResourcesForPathnameSync(location.pathname)
    };
  }

  reloadPage(prevHref) {
    // Do this, rather than simply `window.location.reload()`, so that
    // pressing the back/forward buttons work - otherwise when pressing
    // back, the browser will just change the URL and expect JS to handle
    // the change, which won't always work since it might not be a Gatsby
    // page.
    const href = window.location.href;
    window.history.replaceState({}, ``, prevHref);
    window.location.replace(href);
  }

  static getDerivedStateFromProps({
    location
  }, prevState) {
    if (prevState.location !== location) {
      const pageResources = _loader.default.getResourcesForPathnameSync(location.pathname);

      return {
        pageResources,
        location: Object.assign({}, location)
      };
    }

    return null;
  }

  hasResources(pageResources) {
    if (pageResources && pageResources.json) {
      return true;
    }

    if (pageResources && process.env.NODE_ENV !== `production`) {
      return true;
    }

    return false;
  }

  retryResources(nextProps) {
    const pathname = nextProps.location.pathname;

    if (!_loader.default.getResourcesForPathnameSync(pathname)) {
      // Store the previous and next location before resolving resources
      const prevLocation = this.props.location;
      this.nextLocation = nextProps.location; // Page resources won't be set in cases where the browser back button
      // or forward button is pushed as we can't wait as normal for resources
      // to load before changing the page.

      _loader.default.getResourcesForPathname(pathname).then(pageResources => {
        // The page may have changed since we started this, in which case doesn't update
        if (this.nextLocation !== nextProps.location) {
          return;
        }

        if (this.hasResources(pageResources)) {
          this.setState({
            location: Object.assign({}, window.location),
            pageResources
          });
          return;
        } // If we still don't have resources, reload the page.
        // (This won't happen on initial render, since shouldComponentUpdate
        // is only called when the component updates.)


        this.reloadPage(prevLocation.href);
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Always return false if we're missing resources.
    if (!this.hasResources(nextState.pageResources)) {
      this.retryResources(nextProps);
      return false;
    } // Check if the component or json have changed.


    if (this.state.pageResources !== nextState.pageResources) {
      return true;
    }

    if (this.state.pageResources.component !== nextState.pageResources.component) {
      return true;
    }

    if (this.state.pageResources.json !== nextState.pageResources.json) {
      return true;
    } // Check if location has changed on a page using internal routing
    // via matchPath configuration.


    if (this.state.location.key !== nextState.location.key && nextState.pageResources.page && (nextState.pageResources.page.matchPath || nextState.pageResources.page.path)) {
      return true;
    }

    return (0, _shallowCompare.default)(this, nextProps, nextState);
  }

  render() {
    if (!this.hasResources(this.state.pageResources) && isInitialRender) {
      window.___failedResources = true; // prevent hydrating

      throw new Error(`Missing resources for ${this.state.location.pathname}`);
    }

    isInitialRender = false;
    return this.props.children(this.state);
  }

}

EnsureResources.propTypes = {
  location: _propTypes.default.object.isRequired,
  pageResources: _propTypes.default.object
};
var _default = EnsureResources;
exports.default = _default;