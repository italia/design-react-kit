import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const defaultProps = {
  tag: 'div'
}

export default function Accordion(props) {
  const { className, tag: Tag, ...attributes } = props
  const classes = classNames('collapse-div', className)

  return <Tag {...attributes} className={classes} />
}

Accordion.propTypes = propTypes
Accordion.defaultProps = defaultProps
