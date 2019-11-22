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

const CalloutTitle = ({ children, className, tag: Tag, ...attributes }) => {
  const classes = classNames(className, 'callout-title')
  return (
    <Tag className={classes} {...attributes}>
      {children}
    </Tag>
  )
}

CalloutTitle.propTypes = propTypes
CalloutTitle.defaultProps = defaultProps

export default CalloutTitle
