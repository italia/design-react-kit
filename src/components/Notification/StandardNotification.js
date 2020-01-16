import React from 'react'
import {Toast,ToastHeader} from 'reactstrap'
import classNames from 'classnames'

//custom style 
const NotificationStyle = {
  left: 30,
  bottom: 240
}

const StandardNotification = () => {
  const wrapperClass = classNames('notification')
  return (
   <Toast className={wrapperClass} style={NotificationStyle}>
     <ToastHeader>
       <h5>Notification Title</h5>
     </ToastHeader>
   </Toast>
  )
}

export default StandardNotification
