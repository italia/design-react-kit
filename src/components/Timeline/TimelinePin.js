import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Icon from '../Icon/Icon'

const TimelinePin = props => {
  const { icon, label, past, now, nowText, className, ...attributes } = props
  const { children, ...rest } = attributes
  const classes = classNames('timeline-element', className)
  const innerClasses = classNames('it-pin-wrapper', className, {
    'it-evidence': past,
    'it-now': now
  })
  const pinIcon = (
    <div className="pin-icon">
      <Icon icon={icon} />
    </div>
  )
  const pinLabel = (
    <div className="pin-text">
      <span>{label}</span>
    </div>
  )

  const pinTextNow = now && (
    <span className="it-now-label d-none d-lg-flex">{nowText}</span>
  )

  return (
    <div className={classes}>
      {pinTextNow}
      <div className={innerClasses} {...rest}>
        {pinIcon}
        {pinLabel}
      </div>
      {children}
    </div>
  )
}
TimelinePin.defaultProps = {
  icon: 'it-code-circle',
  label: ' '
}

/**
 * è stato necessario disabilitare il typecheck per un'incompatibilità su storybook in caso di
 * un unico figlio
 */
TimelinePin.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
  now: PropTypes.bool,
  nowText: PropTypes.string,
  past: PropTypes.bool
}

export default TimelinePin
