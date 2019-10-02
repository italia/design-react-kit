import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const defaultProps = {
  tag: 'span'
}

const ChipLabel = props => {
  const { className, tag: Tag, ...attributes } = props
  const classes = classNames('chip-label')
  return <span {...attributes} className={classes} />
}

ChipLabel.propTypes = propTypes
ChipLabel.defaultProps = defaultProps

export default ChipLabel
