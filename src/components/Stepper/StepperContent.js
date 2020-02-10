import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.element
}

const defaultProps = {
  tag: 'div'
}

const StepperContent = (props) => {
  const { tag: Tag, children, ...attributes } = props
  const wrapperClasses = classNames("steppers-content")
  return (
    <Tag {...attributes} className={wrapperClasses} aria-live="polite">
      {children}
    </Tag>
  )
}

StepperContent.propTypes = propTypes
StepperContent.defaultProps = defaultProps
export default StepperContent