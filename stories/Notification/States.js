import React from 'react'
import Notification from '../../src/components/Notification/Notification'

const Example = () => {
  return (
    <div className="container test-docs">
      <div className="row mb-5">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <p>
            <strong>Success</strong>
          </p>
          <Notification withIcon state="success" header="Notification Title" />
        </div>
        <div className="col-12 col-md-6">
          <p>
            <strong>Error</strong>
          </p>
          <Notification withIcon state="error" header="Notification Title" />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-12 col-md-6 mb-4 mb-md-0" style={{ top: 45 }}>
          <p>
            <strong>Info</strong>
          </p>
          <Notification withIcon state="info" header="Notification Title" />
        </div>
        <div className="col-12 col-md-6" style={{ top: 45 }}>
          <p>
            <strong>Warning</strong>
          </p>
          <Notification withIcon state="warning" header="Notification Title" />
        </div>
      </div>
    </div>
  )
}

export default Example
