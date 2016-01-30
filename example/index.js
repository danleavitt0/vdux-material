/**
 * Imports
 */

import domready from '@f/domready'
import element from 'vdux/element'
import App from './app'
import reducer from './reducer'
import vdux from 'vdux/dom'
import logger from 'redux-logger'

/**
 * Initialize app
 */

let hmr
domready(() => hmr = vdux({
  reducer,
  initialState: {},
  middleware: [logger()],
  app: state => <App state={state} />
}))

/**
 * Hot module replacement
 */

if (module.hot) {
  module.hot.decline()
  module.hot.accept(['./app', './reducer'], () => {
    hmr.replace(require('./app').default, require('./reducer').default)
  })
}
