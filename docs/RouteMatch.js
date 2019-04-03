import React from 'react'
import {addPath} from './utils'
/**
 * <RouteMatch> is just a way to conditionally render content without a wrapper
 * element when contained directly in a <Router>:
 *
 * ```jsx
 * <Router>
 *   <RouteMatch path="/some/dir">
 *     this will only show up on pages whose path begins with "/some/dir"
 *   </RouteMatch>
 * </Router>
 * ```
 */
export default function RouteMatch({path, children}) {
  return path ? React.Children.map(children, child => addPath(child, path)) : children
}
