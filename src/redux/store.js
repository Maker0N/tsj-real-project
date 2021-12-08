import { createStore, combineReducers } from 'redux'
import authReducer from './authReducer'
import mainReducer from './mainReducer'

const reducers = combineReducers({
  authReducer,
  mainReducer,
})

const store = createStore(reducers)

export default store
