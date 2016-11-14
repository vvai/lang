/* @flow */
import * as types from '../constants/ActionTypes'
import { Wordset } from '../types'

// import fetch from 'isomorphic-fetch'

export const answer = (isTrue: boolean) => ({ type: types.ANSWER, isTrue })
export const refreshQuestions = () => ({ type: types.REFRESH_QUESTION })

export const requestWordset = (wordset: Wordset) => ({type: types.FETCH_WORDSET_REQUEST, wordset})
export const requestWordsetFailure = (wordset: Wordset) => ({type: types.FETCH_WORDSET_FAILURE, wordset})

export const requestWordsetSuccess = (wordset: Wordset, words: Array<Object>) => (
  {
    type: types.FETCH_WORDSET_SUCCESS,
    wordset,
    words,
    receivedAt: Date.now()
  }
)

export function fetchWordset(wordset: Wordset) {
  console.log('fetchWordset')
  return function (dispatch) {
    dispatch(requestWordset(wordset))
    return fetch("wordset/link")
      .then(response => response.json())
      .then(json => {
          console.log('response is ', json)
          dispatch(requestWordsetSuccess(wordset, json))
        }
      )
  }
}
