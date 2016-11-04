import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'

function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
  return (module) => cb(null, module.default);
}

export default {
  component: App,
  childRoutes: [
    {
      path: '/',

    }
  ]
}



/* <Route path='/' component={App}></Route>

getComponent(location, cb) {
    System.import('./components/TestComponent')
      .then(loadRoute(cb))
      .catch(errorLoading);
  }
*/


/*<Route path="/" component={App}>
   <IndexRoute component={Home} />
   <Route path="about" component={About} />
</Route>

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>

        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}) */
