"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _utils = require("@reach/router/lib/utils");

var _stripPrefix = _interopRequireDefault(require("./strip-prefix"));

// TODO add tests especially for handling prefixed links.
const pageCache = {};

var _default = (pages, pathPrefix = ``) => rawPathname => {
  let pathname = decodeURIComponent(rawPathname); // Remove the pathPrefix from the pathname.

  let trimmedPathname = (0, _stripPrefix.default)(pathname, pathPrefix); // Remove any hashfragment

  if (trimmedPathname.split(`#`).length > 1) {
    trimmedPathname = trimmedPathname.split(`#`).slice(0, -1).join(``);
  } // Remove search query


  if (trimmedPathname.split(`?`).length > 1) {
    trimmedPathname = trimmedPathname.split(`?`).slice(0, -1).join(``);
  }

  if (pageCache[trimmedPathname]) {
    return pageCache[trimmedPathname];
  }

  let foundPage; // Array.prototype.find is not supported in IE so we use this somewhat odd
  // work around.

  pages.some(page => {
    let pathToMatch = page.matchPath ? page.matchPath : page.path;

    if ((0, _utils.match)(pathToMatch, trimmedPathname)) {
      foundPage = page;
      pageCache[trimmedPathname] = page;
      return true;
    } // Finally, try and match request with default document.


    if ((0, _utils.match)(`${page.path}index.html`, trimmedPathname)) {
      foundPage = page;
      pageCache[trimmedPathname] = page;
      return true;
    }

    return false;
  });
  return foundPage;
};

exports.default = _default;