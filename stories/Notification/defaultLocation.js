import React from 'react'
import NotificationWithIcon from '../../src/components/Notification/NotificationWithIcon'

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
        <NotificationWithIcon
          state="success"
          header="Notification Title"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"
        />
      </div>
    </div>
  )
}

export default Example
