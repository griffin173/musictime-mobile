import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import shows from './shows'
import youtube from './youtube'

const rootReducer = combineReducers({shows,youtube,routing: routerReducer})

export default rootReducer;