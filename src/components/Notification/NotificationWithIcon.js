import React from 'react'
import {Toast, ToastHeader} from 'reactstrap'
import Icon from '../Icon/Icon'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//custom style 
const NotificationStyle = {
  right: 350,
  bottom: 240
}

const NotificationWithIcon = () => {
  const wrapperClass = classNames('notification','with-icon')
  return(
    <Toast className={wrapperClass} style={NotificationStyle}>
      <ToastHeader>
      <h5>Notification with icon
          <Icon icon = "it-check-circle"/>
      </h5>      
      </ToastHeader>
    </Toast>
  )
}

export default NotificationWithIcon
