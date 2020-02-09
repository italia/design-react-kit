import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Icon from '../Icon/Icon'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.element,
  iconName: PropTypes.string
}

const defaultProps = {}

const StepperHeaderElement = props => {
  const { tag: Tag, variant, iconName, children, ...attributes } = props
  const wrapperClasses = classNames(variant)
  const iconClass = classNames('icon', 'steppers-success')
  return (
    <li {...attributes} className={wrapperClasses}>
      {children}
      {iconName && <Icon icon={iconName} className={iconClass} />}
    </li>
  )
}

StepperHeaderElement.propTypes = propTypes
StepperHeaderElement.defaultProps = defaultProps
export default StepperHeaderElement
