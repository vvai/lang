import * as types from '../constants/ActionTypes'

export const answer = text => ({ type: types.ANSWER, text })
export const refreshQuestions = () => ({ type: types.REFRESH_QUESTION })
