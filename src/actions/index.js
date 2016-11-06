/* @flow */
import * as types from '../constants/ActionTypes'

export const answer = (isTrue: boolean) => ({ type: types.ANSWER, isTrue })
export const refreshQuestions = () => ({ type: types.REFRESH_QUESTION })
