/* @flow */

const initialState = { wordsets: [{ label: 'prepositions', link: 'wordset/prepositions.js' }] }

export default (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case "GET_WORDSET":
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
      words: [ ... ]
      lastUpdated: Date()
      isFetching: false
    },


}
*/
