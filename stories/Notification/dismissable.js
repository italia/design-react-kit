import React from 'react'
import NotificationWithIcon from '../../src/components/Notification/NotificationWithIcon'
import StandardNotification from '../../src/components/Notification/StandardNotification'

const Examples = () => (
  <div className="container test-docs">
    <div className="row">
      <div className="col-12 col-md-6 mb-4 mb-md-0">
        <p className="mb-4">
          <strong>Notification standard</strong>
        </p>
        <StandardNotification header="Notification title" dismissable={true} />
      </div>
      <div className="col-12 col-md-6">
        <p className="mb-4">
          <strong>Notification with icon</strong>
        </p>
        <NotificationWithIcon
          header="Notification title"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"
          type="success"
          dismissable={true}
        />
      </div>
    </div>
  </div>
)
export default Examples
