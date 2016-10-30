import { ANSWER, REFRESH_QUESTION } from '../constants/ActionTypes'
import { prepositions } from '../data/prepositions'

const initialState = { 'currentIndex': 0, questions: shuffleArray(prepositions) }

export default (state = initialState, action) => {
  switch (action.type) {
    case ANSWER:
      if (state.currentIndex < state.questions.length - 1) {
        return {
          currentIndex: state.currentIndex + 1,
          questions: state.questions
        }
      } else {
        return {
          currentIndex: 0,
          questions: shuffleArray(state.questions)
        }
      }
    case REFRESH_QUESTION:
      return state
    default:
      return state
  }
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
