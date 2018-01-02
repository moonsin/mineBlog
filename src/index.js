import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
	Router,
	Redirect,
	Route,
	IndexRoute,
	Switch,
	browserHistory,
} from 'react-router';
import createHistory from "history/createBrowserHistory";

const history = createHistory();

ReactDOM.render(
	<Router history={history}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/mineblog" />} />
        <Route path="/mineblog" component={App} />
      </Switch>
    </Router>,
	document.getElementById('root')

);
registerServiceWorker();
