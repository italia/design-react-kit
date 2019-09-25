import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const defaultProps = {
  tag: 'a'
}

const SkiplinkItem = props => {
  const { className, tag: Tag, ...attributes } = props

  const classes = classNames(className, 'sr-only', 'sr-only-focusable')

  return <Tag className={classes} {...attributes} />
}

SkiplinkItem.propTypes = propTypes
SkiplinkItem.defaultProps = defaultProps

export default SkiplinkItem
