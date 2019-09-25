import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  className: PropTypes.string
}

const CardSignature = props => {
  const { className, ...attributes } = props
  const classes = classNames(className, 'card-signature')
  return <span className={classes} {...attributes} />
}

CardSignature.propTypes = propTypes

export default CardSignature
