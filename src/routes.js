/* @flow */
import App from './containers/App'
import Home from './containers/Home'
import WordsetsList from './containers/WordsetsList'
import Wordset from './containers/Wordset'
import { fetchWordset } from './actions'
import { bindActionCreators } from 'redux'

/*
function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
  return (module) => cb(null, module.default);
}
*/

function newWordsetRoute(nextState, replace) {
  const { name } = nextState.params
  console.log('newWordsetRoute ', name)
  fetchWordset({ link: `{name}.json`, label: name })
}

export default {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    {
      path: 'wordset',
      component: WordsetsList
    },
    {
      path: 'wordset/:name',
      component: Wordset,
      onEnter: newWordsetRoute
    }
  ]
}
