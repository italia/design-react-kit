import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

const defaultProps = {
  tag: 'div'
}

const Callout = ({ children, tag: Tag }) => {
  const classes = classNames('callout')
  return <Tag className={classes}>{children}</Tag>
}

Callout.propTypes = propTypes
Callout.defaultProps = defaultProps

export default Callout
