import React from 'react';

import {render} from 'react-dom';

//import css
import css from './styles/style.styl';

import thunk from 'redux-thunk'



import App from './components/App'
import Single from './components/Single'
import Location from './components/Location'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import {Provider} from 'react-redux';
import store, {history} from './store'
const router = (
<Provider store={store}>
	 <Router history={history}>
	 	<Route path="/" component={App}>
	 	  <IndexRoute component={Location}></IndexRoute>
	 	</Route>
	 </Router>
</Provider>
)

//<Route path="/view/:postId" component={Single}></Route>

render(
	router,
	document.getElementById('root')
);

