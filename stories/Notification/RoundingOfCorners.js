import React from 'react'
import NotificationWithIcon from '../../src/components/Notification/NotificationWithIcon'

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
          <NotificationWithIcon header="Notification Title" state="success" />
        </div>
      </div>
      <div className="col-12 col-md-6" style={OffsetStyle}>
        <p>
          <strong>top-fix</strong>
        </p>
        <div className="row mb-5" style={XOffsetStyle}>
          <NotificationWithIcon
            header="Notification Title"
            state="success"
            fix="top-fix"
          />
        </div>
        <p style={{ marginTop: '90px' }}>
          <strong>bottom-fix</strong>
        </p>
        <div className="row mb-5" style={XOffsetStyle}>
          <NotificationWithIcon
            header="Notification Title"
            state="success"
            fix="bottom-fix"
          />
        </div>
        <p style={{ marginTop: '90px' }}>
          <strong>left-fix</strong>
        </p>
        <div className="row mb-5" style={YOffsetStyle}>
          <NotificationWithIcon
            header="Notification Title"
            state="success"
            fix="left-fix"
          />
        </div>
        <p>
          <strong>right-fix</strong>
        </p>
        <div className="row mb-5" style={YOffsetStyle}>
          <NotificationWithIcon
            header="Notification Title"
            state="success"
            fix="right-fix"
          />
        </div>
      </div>
    </div>
  )
}

export default Example
