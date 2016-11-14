/* @flow */
import React, { Component, PropTypes } from 'react'

class Statistic extends Component {

  render() {
    return (
      <div className="statistic">
        <div className="statistic--icon">statistic</div>
        <ul className="statistic--cycles">
        {
            this.props.cycles.map(function(cycle, index) {
                return <li key={index}>{cycle.trueCount}/{cycle.answersCount}</li>
            })
        }
        </ul>
      </div>
    );
  }
}

Statistic.propTypes = {
  cycles: PropTypes.array.isRequired
}

Statistic.defaultProps = {
  cycles: []
}

export default Statistic
