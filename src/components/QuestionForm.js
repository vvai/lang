import React, { Component, PropTypes } from 'react'

class QuestionForm extends Component {
  static propTypes = {
    question: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {currentAnswer: ' ', isCorrect: true }
    this.handleKeyPress = this.handleKeyPress.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        const { question, answer } = this.props.question
        const userAnswer =  event.target.value
        if (answer === userAnswer) {
          this.setState({currentAnswer: 'correct!', isCorrect: true})
          this.props.actions.answer(true)
        } else {
          this.setState({currentAnswer: question + ' ' + answer, isCorrect: false})
          this.props.actions.answer(false)
        }
        this.refs.input.value = '';
        this.refs.result.className = this.refs.result.className.replace(/\bhidden\b/,'');
        setTimeout(()=> {
          this.refs.result.classList.add('hidden') }, 1000)

    }
  }

  render() {
    const question = this.props.question.question
    return (
      <div className="words-form">
        <div className="words-form--question">{question}</div>
        <input ref="input" className="words-form--word-input" type="text" onKeyPress={this.handleKeyPress} />
        <div ref="result" className={"words-form--answer " + (this.state.isCorrect ? "words-form--answer__correct" : "words-form--answer__wrong")}>{this.state.currentAnswer}</div>
      </div>
    )
  }
}

export default QuestionForm
