import * as types from '../constants/ActionTypes'

export const answer = isTrue => ({ type: types.ANSWER, isTrue })
export const refreshQuestions = () => ({ type: types.REFRESH_QUESTION })
