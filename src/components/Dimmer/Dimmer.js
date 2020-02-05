import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Icon from '../Icon/Icon'

const propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string
}

const Dimmer = props => {
  const { icon, color, className, ...attributes } = props
  const { children, ...rest } = attributes
  const classes = classNames('dimmer', className, {
    [`dimmer-${color}`]: color
  })
  const innerClasses = classNames('dimmer-inner', className)
  const dimmerIcon = icon && (
    <div className="dimmer-icon">
      <Icon icon={icon} />
    </div>
  )

  return (
    <div className={classes} {...rest} style={{ display: 'flex' }}>
      <div className={innerClasses} {...rest}>
        {dimmerIcon}
        {children}
      </div>
    </div>
  )
}

Dimmer.propTypes = propTypes

export default Dimmer
