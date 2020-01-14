import React,{useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify'

const NotificationStyles = {
    padding: '1.5rem 4rem 1.5rem 1.5rem',
    background: '#fff',
    borderTop: '4px solid #5c6f82',
    boxShadow: '0 -.5rem 1rem rgba(0,0,0,.15)'
}

const NotificationTextStyles = {
  fontSize: '.938rem',
  textTransform: 'uppercase',
  color: '#17324d',
  letterSpacing: 0,
  margin: 0,
  position: 'relative',
  lineHeight: '1em',
  fontWeight: 700,
  letterSpacing: '.025em'  
}

const NotificationWithIcon = () => {
    useEffect(() =>{
        toast(<h5 id="not1-title" 
                style={NotificationTextStyles}
                containerId={1}
                >NOTIFICATION TITLE</h5>)
    })
    return(
        <div>
        <p class="mb-4"><strong>Standard Notification</strong></p>
        <ToastContainer style={NotificationStyles} closeButton={false}
            closeOnClick={false}
            draggable={false}
            containerId={1}
        />
        </div>
    )
}


export default NotificationWithIcon