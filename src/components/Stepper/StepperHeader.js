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

const StepperHeader = props => {
  const { tag: Tag, children, ...attributes } = props
  const wrapperClass = classNames('steppers-header')
  return (
    <Tag {...attributes} className={wrapperClass}>
      {children}
    </Tag>
  )
}

StepperHeader.propTypes = propTypes
StepperHeader.defaultProps = defaultProps
export default StepperHeader
