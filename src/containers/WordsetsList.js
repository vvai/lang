/* @flow */
import React, { Component } from 'react'
import { Link } from 'react-router'

class WordsetsList extends Component {

  render() {
    const res = [ {label: "prepositions", link: "wordset/prepositions"} ]
    const links = res.map((item) => (
      <li key={item.label}><Link to={item.link}>{item.label}</Link></li>
    ))
    return (
      <div>
        <h1>Wordsets:</h1>
        <ul>
          {links}
        </ul>
      </div>
    )
  }
}

export default WordsetsList
