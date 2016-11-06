/* @flow */
import { createStore } from 'redux'

import reducers from './reducers'

const configureStore = (preloadedState: Object = {}) => createStore(
  reducers,
  preloadedState,
)

export default configureStore
