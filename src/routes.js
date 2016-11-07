/* @flow */
import App from './containers/App'
import Home from './containers/Home'
import WordsetsList from './containers/WordsetsList'
import Wordset from './containers/Wordset'

/*
function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
  return (module) => cb(null, module.default);
}
*/

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
      component: Wordset
    }
  ]
}
