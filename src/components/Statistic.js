import React, { Component, PropTypes } from 'react'

class Statistic extends Component {
  static propTypes = {
    cycles: PropTypes.array.isRequired
  }

  render() {
    return (
      <div className="statistic">
        <div className="statistic--icon">statistic</div>
        <ul className="statistic--cycles">
        {
            this.props.cycles.map(function(cycle, index) {
                return <li key={index}>{cycle.answersCount}/{cycle.trueCount}</li>
            })
        }
        </ul>
      </div>
    );
  }
}

export default Statistic
