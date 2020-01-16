import React from 'react'
import { Toast, ToastHeader, ToastBody, Button } from 'reactstrap'
import Icon from '../Icon/Icon'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const propTypes = {
  header: PropTypes.string,
  content: PropTypes.string,
  type: PropTypes.string,
  dismissable : PropTypes.bool
}

// custom style
const NotificationStyle = {
  right: 'auto',
  bottom: 'auto'
}

const NotificationWithIcon = props => {
  const { header, content, type, dismissable } = props
  const isDismissable = dismissable ? 'dismissable' : null
  const wrapperClass = classNames('notification', 'with-icon', type, isDismissable)
  const btnClass = classNames('btn','notification-close')
  return (
    <Toast className={wrapperClass} style={NotificationStyle}>
      <ToastHeader>
        <h5>
          {header}
          <Icon icon="it-check-circle" />
        </h5>
      </ToastHeader>
      {content ? (
        <ToastBody>
          <p>{content}</p>
        </ToastBody>
      ) : null}
       {isDismissable ? (
        <Button className={btnClass}>
          <Icon icon='it-close'/>
          <span className='sr-only'>Chiudi notifica: Titolo notifica</span>
        </Button>
      ): null}
    </Toast>
  )
}

NotificationWithIcon.propTypes = propTypes
export default NotificationWithIcon
