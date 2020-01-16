import React from 'react'
import {Toast,ToastHeader,ToastBody} from 'reactstrap'
import classNames from 'classnames'

//custom style 
const NotificationStyle = {
  bottom: 'auto',
  right: 'auto'
}

const StandardNotification = (props) => {
  const wrapperClass = classNames('notification')
  const {header, content} = props
  return (
   <Toast className={wrapperClass} style={NotificationStyle}>
     <ToastHeader>
      <h5>{header}</h5>
     </ToastHeader>
     {content ? 
        <ToastBody>
          <p>{content}</p>
        </ToastBody>
      : null }
   </Toast>
  )
}

export default StandardNotification
