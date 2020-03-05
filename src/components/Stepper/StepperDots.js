import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  classNames: PropTypes.string,
  children: PropTypes.element
}

const defaultProps = {
  tag: 'ul'
}

const StepperDots = props => {
  const { tag: Tag, children, ...attributes } = props
  const wrapperClass = classNames('steppers-dots')
  return (
    <Tag {...attributes} className={wrapperClass}>
      {children}
    </Tag>
  )
}

StepperDots.propTypes = propTypes
StepperDots.defaultProps = defaultProps
export default StepperDots
