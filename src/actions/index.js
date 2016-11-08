/* @flow */
import * as types from '../constants/ActionTypes'

export const answer = (isTrue: boolean) => ({ type: types.ANSWER, isTrue })
export const refreshQuestions = () => ({ type: types.REFRESH_QUESTION })

export const fetchWordset = (wordset: string) => ({type: types.FETCH_WORDSET_REQUEST, wordset})
export const fetchWordsetFailure = (wordset: string) => ({type: types.FETCH_WORDSET_FAILURE, wordset})

export const fetchWordsetSuccess = (wordset: string, words: Object) => (
  {
    type: types.FETCH_WORDSET_SUCCESS,
    wordset,
    words,
    receivedAt: Date.now()
  }
)
