import React from 'react'
import Notification from '../../src/components/Notification/Notification'

const Examples = () => (
  <div className="container test-docs">
    <div className="row">
      <div className="col-12 col-md-6 mb-4 mb-md-0">
        <p className="mb-4">
          <strong>Notification standard</strong>
        </p>
        <Notification header="Notification title" />
      </div>
      <div className="col-12 col-md-6">
        <p className="mb-4">
          <strong>Notification with icon</strong>
        </p>
        <Notification header="Notification title" withIcon />
      </div>
    </div>
  </div>
)
export default Examples
