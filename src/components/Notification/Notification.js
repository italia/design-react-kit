import React from 'react'
import { Toast, ToastHeader, ToastBody, Button } from 'reactstrap'
import Icon from '../Icon/Icon'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const propTypes = {
  header: PropTypes.string,
  content: PropTypes.string,
  state: PropTypes.string,
  dismissable: PropTypes.bool,
  fix: PropTypes.string,
  withIcon: PropTypes.bool
}

// custom style
const NotificationStyle = {
  right: 'auto',
  bottom: 'auto',
  top: 'auto',
  left: 'auto'
}

const NotificationWithIcon = props => {
  const { header, content, state, dismissable, fix, withIcon } = props
  const isDismissable = dismissable ? 'dismissable' : null
  const isIcon = withIcon ? 'with-icon' : null
  const wrapperClass = classNames(
    'notification',
    fix,
    isIcon,
    state,
    isDismissable
  )
  var iconClass = 'it-check-circle'
  switch (state) {
    case 'success':
      iconClass = 'it-check-circle'
      break
    case 'error':
      iconClass = 'it-close-circle'
      break
    case 'info':
      iconClass = 'it-info-circle'
      break
    case 'warning':
      iconClass = 'it-error'
  }
  const btnClass = classNames('btn', 'notification-close')
  return (
    <Toast className={wrapperClass} style={NotificationStyle}>
      <ToastHeader>
        <h5>
          {header}
          <Icon icon={iconClass} />
        </h5>
      </ToastHeader>
      {content ? (
        <ToastBody>
          <p>{content}</p>
        </ToastBody>
      ) : null}
      {isDismissable ? (
        <Button className={btnClass}>
          <Icon icon="it-close" />
          <span className="sr-only">Chiudi notifica: Titolo notifica</span>
        </Button>
      ) : null}
    </Toast>
  )
}

NotificationWithIcon.propTypes = propTypes
export default NotificationWithIcon
