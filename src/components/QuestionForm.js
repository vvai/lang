/* @flo */
import React, { Component, PropTypes } from 'react'

class QuestionForm extends Component {
  static propTypes = {
    question: PropTypes.object.isRequired
  }

  state: {
    currentAnswer: string;
    isCorrect: boolean;
  };

  constructor(props: Object) {
    super(props)
    this.state = {currentAnswer: ' ', isCorrect: true }
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (event: KeybordEvent) => {
    this.setState({userInput: event.target.value});
  }

  handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
        const answer: string = this.props.question.answer
        const userAnswer: string =  this.refs.input.value
        if (answer.toLowerCase().trim() === this.state.userInput.toLowerCase().trim()) {
          this.setState({currentAnswer: 'correct!', isCorrect: true})
          this.props.actions.answer(true)
        } else {
          this.setState({currentAnswer: answer, isCorrect: false})
          this.props.actions.answer(false)
        }
        this.refs.input.value = '';
        this.refs.result.className = this.refs.result.className.replace(/\bhidden\b/,'');
        setTimeout(()=> {
          this.refs.result.classList.add('hidden') }, 1000)

    }
  }

  render() {
    const question: string = this.props.question.question
    return (
      <div className="words-form">
        <div className="words-form--question">{question}</div>
        <input ref="input" className="words-form--word-input" type="text" value={this.state.userInput} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
        <div ref="result" className={"words-form--answer " + (this.state.isCorrect ? "words-form--answer__correct" : "words-form--answer__wrong")}>{this.state.currentAnswer}</div>
      </div>
    )
  }
}

export default QuestionForm
