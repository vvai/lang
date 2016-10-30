import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import '../App.css'
import QuestionForm from '../components/QuestionForm'
import * as QuestionActions from '../actions'

class App extends Component {
  static propTypes = {
    value: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  render() {
    const { currentIndex, questions } = this.props.value.questions
    const question = questions[currentIndex]
    return (
      <div className="App">
        <QuestionForm actions={this.props.actions} question={question} />
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
)(App)
