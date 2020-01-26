import React from 'react'
import Notification from '../../src/components/Notification/Notification'

// custom style
const Style = {
  position: 'absolute',
  right: 340,
  bottom: 0,
  top: 150
}

const Example = () => {
  return (
    <div className="container test-desktop">
      <div style={Style}>
        <Notification
          withIcon
          state="success"
          header="Notification Title"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"
        />
      </div>
    </div>
  )
}

export default Example
