/* @flow */
import React, { Component } from 'react'
import { Link } from 'react-router'

class WordsetsList extends Component {

  render() {
    return (
      <div>
        <h1>Wordsets:</h1>
        <ul>
          <li><Link to="wordset/prepositions">prepositions</Link></li>
        </ul>
      </div>
    )
  }
}

export default WordsetsList
