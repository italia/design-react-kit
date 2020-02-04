import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Icon from '../Icon/Icon'

const propTypes = {
  iconName: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string
}

const Dimmer = props => {
  const { iconName, color, className, ...attributes } = props
  const { children, ...rest } = attributes
  const classes = classNames('dimmer', className, {
    [`'dimmer-${color}'`]: color
  })
  const innerClasses = classNames('dimmer-inner', className)
  const dimmerIcon = iconName && (
    <div className="dimmer-icon">
      <Icon icon={iconName} />
    </div>
  )

  return (
    <div className={classes} {...rest}>
      <div className={innerClasses} {...rest}>
        {dimmerIcon}
      </div>
    </div>
  )
}

Dimmer.propTypes = propTypes

export default Dimmer
