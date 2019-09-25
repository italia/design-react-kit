import React, { Component } from 'react'
import PropTypes from 'prop-types'

const defaultSteps = [
  {
    score: 0,
    label: 'inserisci almeno 8 caratteri e una lettera maiuscola',
    className: 'danger'
  },
  {
    score: 1,
    label: 'password troppo debole',
    className: 'danger'
  },
  {
    score: 25,
    label: 'password debole',
    className: 'danger'
  },
  {
    score: 50,
    label: 'password sicura',
    className: 'warning'
  },
  {
    score: 75,
    label: 'password molto sicura',
    className: 'success'
  }
]

class PasswordMeter extends Component {
  static defaultProps = {
    score: 0,
    steps: defaultSteps
  }

  render() {
    const { steps, score } = this.props

    const currentStep = steps
      .filter(step => step.score <= score)
      .reduce((acc, current) => (acc.score > current.score ? acc : current))

    const { label, className } = currentStep

    return (
      <div className="psw-wrapper">
        <span className={`psw-text text-${className} ${className}`}>
          {label}
        </span>
        <div className="progress rounded-0 position-relative psw-meter">
          <div className="row position-absolute w-100 m-0">
            <div className="col-3 border-left border-right border-white" />
            <div className="col-3 border-left border-right border-white" />
            <div className="col-3 border-left border-right border-white" />
            <div className="col-3 border-left border-right border-white" />
          </div>
          <div
            className={`progress-bar bg-${className} ${className}`}
            style={{ width: `${score}%` }}
          />
        </div>
      </div>
    )
  }
}

PasswordMeter.propTypes = {
  score: PropTypes.number,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      score: PropTypes.number,
      label: PropTypes.string,
      className: PropTypes.string
    })
  )
}

export default PasswordMeter
