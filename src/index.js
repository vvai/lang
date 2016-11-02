import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root'
import configureStore from './store'
import { loadStyles } from './lib/util'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)

const fontOpenSans = 'https://fonts.googleapis.com/css?family=Open+Sans'
loadStyles(fontOpenSans)

// store.subscribe(render)

/* import App from './containers/App'
import './index.css'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'


// import { router } from './router'


const store = createStore(reducers)
const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: React.PropTypes.object.isRequired,
};

const render = () => ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
render() */
