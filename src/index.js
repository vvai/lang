import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import './index.css'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

const store = createStore(reducers)

const render = () => ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

render()
store.subscribe(render)
