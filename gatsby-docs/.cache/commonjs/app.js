"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _domready = _interopRequireDefault(require("@mikaelkristiansson/domready"));

var _socketIo = _interopRequireDefault(require("./socketIo"));

var _emitter = _interopRequireDefault(require("./emitter"));

var _apiRunnerBrowser = require("./api-runner-browser");

var _loader = _interopRequireWildcard(require("./loader"));

var _syncRequires = _interopRequireDefault(require("./sync-requires"));

var _pages = _interopRequireDefault(require("./pages.json"));

window.___emitter = _emitter.default;
(0, _loader.setApiRunnerForLoader)(_apiRunnerBrowser.apiRunner); // Let the site/plugins run code very early.

(0, _apiRunnerBrowser.apiRunnerAsync)(`onClientEntry`).then(() => {
  // Hook up the client to socket.io on server
  const socket = (0, _socketIo.default)();

  if (socket) {
    socket.on(`reload`, () => {
      window.location.reload();
    });
  }
  /**
   * Service Workers are persistent by nature. They stick around,
   * serving a cached version of the site if they aren't removed.
   * This is especially frustrating when you need to test the
   * production build on your local machine.
   *
   * Let's warn if we find service workers in development.
   */


  if (`serviceWorker` in navigator) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
      if (registrations.length > 0) console.warn(`Warning: found one or more service workers present.`, `If your site isn't behaving as expected, you might want to remove these.`, registrations);
    });
  }

  const rootElement = document.getElementById(`___gatsby`);
  const renderer = (0, _apiRunnerBrowser.apiRunner)(`replaceHydrateFunction`, undefined, _reactDom.default.render)[0];

  _loader.default.addPagesArray(_pages.default);

  _loader.default.addDevRequires(_syncRequires.default);

  Promise.all([_loader.default.getResourcesForPathname(`/dev-404-page/`), _loader.default.getResourcesForPathname(`/404.html`), _loader.default.getResourcesForPathname(window.location.pathname)]).then(() => {
    const preferDefault = m => m && m.default || m;

    let Root = preferDefault(require(`./root`));
    (0, _domready.default)(() => {
      renderer(_react.default.createElement(Root, null), rootElement, () => {
        (0, _loader.postInitialRenderWork)();
        (0, _apiRunnerBrowser.apiRunner)(`onInitialClientRender`);
      });
    });
  });
});