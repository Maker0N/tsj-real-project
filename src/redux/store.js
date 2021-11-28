import { createStore, combineReducers } from 'redux'
import mainReducer from './mainReducer'

const reducers = combineReducers({
  mainReducer,
})

const store = createStore(reducers)

export default store
