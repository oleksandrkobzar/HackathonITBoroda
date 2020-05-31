import { combineReducers, createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './reducers/rootReducer'

const redusers =  combineReducers({
  rootReducer
})

const store = createStore(redusers, applyMiddleware(logger, thunk))

export default store