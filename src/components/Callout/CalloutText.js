import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  bigText: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

const defaultProps = {
  bigText: false,
  tag: 'p'
}

const CalloutText = ({
  bigText,
  children,
  className,
  tag: Tag,
  ...attributes
}) => {
  const classes = classNames(className, {
    'callout-big-text': bigText
  })
  return (
    <Tag className={classes} {...attributes}>
      {children}
    </Tag>
  )
}

CalloutText.propTypes = propTypes
CalloutText.defaultProps = defaultProps

export default CalloutText
