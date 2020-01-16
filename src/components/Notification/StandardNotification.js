import React from 'react'
import { Toast, ToastHeader, ToastBody, Button } from 'reactstrap'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Icon from '../Icon/Icon'

const propTypes = {
  header: PropTypes.string,
  content: PropTypes.string,
  state: PropTypes.string,
  dismissable: PropTypes.bool
}

// custom style
const NotificationStyle = {
  bottom: 'auto',
  right: 'auto'
}

const StandardNotification = props => {
  const { header, content, dismissable, state } = props
  const isDismissable = dismissable ? 'dismissable' : null
  const wrapperClass = classNames('notification', state, isDismissable)
  const btnClass = classNames('btn', 'notification-close')
  return (
    <Toast className={wrapperClass} style={NotificationStyle}>
      <ToastHeader>
        <h5>{header}</h5>
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

StandardNotification.propTypes = propTypes
export default StandardNotification
