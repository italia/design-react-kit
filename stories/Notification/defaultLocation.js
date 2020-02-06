import React from 'react'
import Notification from '../../src/components/Notification/Notification'

const Example = () => {
  return (
    <div className="container test-desktop">
      <div>
        <Notification withIcon state="success" header="Notification Title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor…
        </Notification>
      </div>
    </div>
  )
}

export default Example
