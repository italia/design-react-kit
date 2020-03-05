import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  classNames: PropTypes.string,
  children: PropTypes.element
}

const defaultProps = {
  tag: 'nav'
}

const StepperNav = props => {
  const { tag: Tag, children, ...attributes } = props
  const wrapperClass = classNames('steppers-nav')
  return (
    <Tag {...attributes} className={wrapperClass}>
      {children}
    </Tag>
  )
}

StepperNav.propTypes = propTypes
StepperNav.defaultProps = defaultProps
export default StepperNav
