/* @flow */
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import questions from './questions'

const rootReducer = combineReducers({
  questions,
  routing
})

export default rootReducer
