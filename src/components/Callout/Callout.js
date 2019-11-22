import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  highlight: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

const defaultProps = {
  color: '',
  highlight: false,
  tag: 'div'
}

const Callout = ({ children, color, highlight, tag: Tag, ...attributes }) => {
  const classes = classNames('callout', color, {
    'callout-highlight': highlight
  })
  return (
    <Tag className={classes} {...attributes}>
      {children}
    </Tag>
  )
}

Callout.propTypes = propTypes
Callout.defaultProps = defaultProps

export default Callout
