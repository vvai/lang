/* @flow */
import { FETCH_WORDSET_REQUEST, FETCH_WORDSET_FAILURE, FETCH_WORDSET_SUCCESS } from '../constants/ActionTypes'
// import { Wordset } from '../types'

const initialState = { wordsets: [{ label: 'prepositions', link: 'wordset/prepositions.js' }] }

export default (state: Object = initialState, action: Object) => {
  let wordset
  switch (action.type) {
    case FETCH_WORDSET_REQUEST:
      console.log('fetch_wordset_request')
      wordset = {
        link: action.wordset.link,
        label: action.wordset.label,
        words: [],
        lastUpdated: null,
        isFetching: true
      }
      return Object.assign({}, state, { [action.wordset.label] : wordset })
    case FETCH_WORDSET_SUCCESS:
      wordset = {
        link: action.wordset.link,
        label: action.wordset.label,
        words: action.words,
        lastUpdated: action.receivedAt,
        isFetching: true
      }
      return Object.assign({}, state, { [action.wordset.label] : wordset })
    case FETCH_WORDSET_FAILURE:
      return state
    default:
      return state
  }

}

/*
{
    'prepositions':
    {
      link: '/data/prepositions.json',
      label: 'prepositions'
      words: [ ... ]
      lastUpdated: Date()
      isFetching: false
    },


}
*/
