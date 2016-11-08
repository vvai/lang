/* @flow */
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducers from './reducers'

const configureStore = (preloadedState: Object = {}) => createStore(
  reducers,
  preloadedState,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
  )
)

export default configureStore
