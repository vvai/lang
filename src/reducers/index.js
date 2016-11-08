/* @flow */
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import questions from './questions'
import wordsets from './wordsets'

const rootReducer = combineReducers({
  questions,
  wordsets,
  routing
})

export default rootReducer
