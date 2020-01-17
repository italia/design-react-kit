import React from 'react'
import NotificationWithIcon from '../../src/components/Notification/NotificationWithIcon'

const Example = () => {
  return (
    <div className="container test-docs">
      <div className="row mb-5">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <p>
            <strong>Success</strong>
          </p>
          <NotificationWithIcon state="success" header="Notification Title" />
        </div>
        <div className="col-12 col-md-6">
          <p>
            <strong>Error</strong>
          </p>
          <NotificationWithIcon state="error" header="Notification Title" />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-12 col-md-6 mb-4 mb-md-0" style={{ top: 45 }}>
          <p>
            <strong>Info</strong>
          </p>
          <NotificationWithIcon state="info" header="Notification Title" />
        </div>
        <div className="col-12 col-md-6" style={{ top: 45 }}>
          <p>
            <strong>Warning</strong>
          </p>
          <NotificationWithIcon state="warning" header="Notification Title" />
        </div>
      </div>
    </div>
  )
}

export default Example
