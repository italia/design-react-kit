import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Icon from '../Icon/Icon'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.element,
  icon: PropTypes.string,
  iconName: PropTypes.string,
  stepperNumber: PropTypes.element,
  noLine: PropTypes.bool
}

const defaultProps = {}

const StepperHeaderElement = props => {
  const {
    tag: Tag,
    variant,
    icon,
    iconName,
    noLine,
    stepperNumber,
    children,
    ...attributes
  } = props
  const wrapperClasses = classNames(variant, { 'no-line': noLine })
  const iconClass = classNames('icon', 'steppers-success')
  const spanClass = classNames('steppers-number')
  return (
    <li {...attributes} className={wrapperClasses}>
      {iconName && <Icon icon={iconName} />}
      {stepperNumber && <span className={spanClass}>{stepperNumber}</span>}
      {children}
      {icon && <Icon icon={icon} className={iconClass} />}
    </li>
  )
}

StepperHeaderElement.propTypes = propTypes
StepperHeaderElement.defaultProps = defaultProps
export default StepperHeaderElement
