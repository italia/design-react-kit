import React from 'react'
import { Toast, ToastHeader, ToastBody } from 'reactstrap'
import Icon from '../Icon/Icon'
import classNames from 'classnames'

// custom style
const NotificationStyle = {
  right: 'auto',
  bottom:  'auto'
}

const NotificationWithIcon = (props) => {
  const {header, content, type} = props
  const wrapperClass = classNames('notification', 'with-icon', type)
  return (
    <Toast className={wrapperClass} style={NotificationStyle}>
      <ToastHeader>
        <h5>
          {header}
          <Icon icon="it-check-circle" />
        </h5>
      </ToastHeader>
      {content ? 
        <ToastBody>
          <p>{content}</p>
        </ToastBody>
      : null }
    </Toast>
  )
}

export default NotificationWithIcon
