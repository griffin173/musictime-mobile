import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {syncHistoryWithStore} from 'react-router-redux'
import {browserHistory} from 'react-router'

//import route reducer
import rootReducer from './reducers/index';

import shows from './data/shows'
const youtube = {
		  showYoutube: false,
		  artist: ''
		}

const defaultState = {
	shows,
	youtube

}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, defaultState, composeEnhancers(
    applyMiddleware(thunk)
  ));
//const store = createStore(rootReducer, defaultState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const history = syncHistoryWithStore(browserHistory, store)

export default store;