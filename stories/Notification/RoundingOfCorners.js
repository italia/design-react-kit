import React from 'react'
import Notification from '../../src/components/Notification/Notification'

// custom style
const OffsetStyle = {
  transform: 'translateX(100%)',
  left: 50,
  bottom: 50
}

const XOffsetStyle = {
  WebkitTransform: 'translateX(30%)',
  marginTop: '10px'
}

const YOffsetStyle = {
  marginTop: '50px'
}

const NotificationStyle = {
  right: 'auto',
  bottom: 'auto',
  top: 'auto',
  left: 'auto'
}

const Example = () => {
  return (
    <div className="container test-docs">
      <div className="row mb-5">
        <div
          className="col-12 col-md-6 mb-4 mb-md-0"
          style={{ position: 'fixed' }}>
          <p>
            <strong>Basic (rounding at 4 corners)</strong>
          </p>
          <Notification
            withIcon
            header="Notification Title"
            state="success"
            style={NotificationStyle}
          />
        </div>
      </div>
      <div className="col-12 col-md-6" style={OffsetStyle}>
        <p>
          <strong>top-fix</strong>
        </p>
        <div className="row mb-5" style={XOffsetStyle}>
          <Notification
            withIcon
            header="Notification Title"
            state="success"
            fix="top-fix"
            style={NotificationStyle}
          />
        </div>
        <p style={{ marginTop: '90px' }}>
          <strong>bottom-fix</strong>
        </p>
        <div className="row mb-5" style={XOffsetStyle}>
          <Notification
            withIcon
            header="Notification Title"
            state="success"
            fix="bottom-fix"
            style={NotificationStyle}
          />
        </div>
        <p style={{ marginTop: '90px' }}>
          <strong>left-fix</strong>
        </p>
        <div className="row mb-5" style={YOffsetStyle}>
          <Notification
            withIcon
            header="Notification Title"
            state="success"
            fix="left-fix"
            style={NotificationStyle}
          />
        </div>
        <p>
          <strong>right-fix</strong>
        </p>
        <div className="row mb-5" style={YOffsetStyle}>
          <Notification
            withIcon
            header="Notification Title"
            state="success"
            fix="right-fix"
            style={NotificationStyle}
          />
        </div>
      </div>
    </div>
  )
}

export default Example
