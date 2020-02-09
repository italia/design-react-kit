import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.element
}

const defaultProps = {
  tag: 'div'
}

const StepperContainer = props => {
  const { tag: Tag, children, ...attributes } = props
  const wrapperClass = classNames('steppers')
  return (
    <Tag {...attributes} className={wrapperClass}>
      {children}
    </Tag>
  )
}

StepperContainer.propTypes = propTypes
StepperContainer.defaultProps = defaultProps
export default StepperContainer
