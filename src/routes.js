import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'

export default <Route path='/' component={App}>

</Route>


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
