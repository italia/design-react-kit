import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  info: PropTypes.shape({}).isRequired,
  manager: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any })
  ]).isRequired,
  children: PropTypes.element.isRequired
}

const NotificationHandler = props => {
  const { children, manager, info } = props
  const showNotification = e => {
    manager.current.show(e, info)
  }
  return (
    <span
      onClick={e => {
        showNotification(e)
      }}>
      {children}
    </span>
  )
}

NotificationHandler.propTypes = propTypes

export default NotificationHandler
