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

const Skiplink = props => {
  const { className, tag: Tag, ...attributes } = props

  const classes = classNames(className, 'skiplinks')

  return <Tag className={classes} {...attributes} />
}

Skiplink.propTypes = propTypes
Skiplink.defaultProps = defaultProps

export default Skiplink
