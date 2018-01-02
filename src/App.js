import React, {
	Component
} from 'react';
import {
	Router,
	Route,
	Link,
	IndexRoute
} from 'react-router';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
                <Route
                  exact
                  path={`${this.props.match.url}`}
                  render={props =>
                     <Home {...props} /> }
                />
                <Route
                  path={`${this.props.match.url}/login`}
                  render={props =>
                     <Login {...props} /> }
                />
           </div>
		);
	}
}

export default App;
