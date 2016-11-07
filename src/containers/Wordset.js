/* @flow */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import QuestionForm from '../components/QuestionForm'
import Statistic from '../components/Statistic'
import * as QuestionActions from '../actions'

class Wordset extends Component {

  render() {
    const { currentIndex, questions, statistic } = this.props.value.questions
    const question = questions[currentIndex]
    return (
      <div className="wordset">
        <QuestionForm actions={this.props.actions} question={question} />
        <Statistic cycles={statistic} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  value: state
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(QuestionActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wordset)
