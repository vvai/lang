/* @flow */
import { ANSWER, REFRESH_QUESTION } from '../constants/ActionTypes'
import { prepositions } from '../data/prepositions'
import type { QuestionsState } from '../types'

type State = QuestionsState

const initialState: State = { 'currentIndex': 0, questions: shuffleArray(prepositions), statistic: [{ answersCount: 0, trueCount: 0 }] }

export default (state: State = initialState, action: Object) => {
  switch (action.type) {
    case ANSWER:
      if (state.currentIndex < state.questions.length - 1) {
        const newStatistic = updateStatistic(action.isTrue, state.statistic)
        return Object.assign({}, state,
          {
            currentIndex: state.currentIndex + 1,
            statistic: newStatistic
          })
      } else {
        const newStatistic = updateStatistic(action.isTrue, state.statistic)
        newStatistic.push({ answersCount: 0, trueCount: 0 })
        return Object.assign({}, state, {
          currentIndex: 0,
          questions: shuffleArray(state.questions)
        })
      }
    case REFRESH_QUESTION:
      return state
    default:
      return state
  }
}

function updateStatistic(answer, statistic) {
  let lastRow = statistic.pop()
  lastRow.answersCount += 1
  lastRow.trueCount = answer ? lastRow.trueCount + 1 : lastRow.trueCount
  statistic.push(lastRow)
  return statistic
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1))
        var temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}
