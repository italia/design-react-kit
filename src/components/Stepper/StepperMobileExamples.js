import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.element,
  dark: PropTypes.string
}

const defaultProps = {
  tag: 'div'
}

const StepperMobileExamples = props => {
  const { tag: Tag, dark, children, ...attributes } = props
  const wrapperClass = classNames(
    'steppers',
    dark ? 'bg-dark' : null,
    'mobile-examples'
  )
  return (
    <Tag {...attributes} className={wrapperClass}>
      {children}
    </Tag>
  )
}

StepperMobileExamples.propTypes = propTypes
StepperMobileExamples.defaultProps = defaultProps
export default StepperMobileExamples
