import React from 'react'
import NotificationWithIcon from '../../src/components/Notification/NotificationWithIcon'

// custom style
const styleTop = {
  position: 'absolute',
  left: 626
}

const styleLeft = {
  position: 'absolute',
  top: 300
}

const styleRight = {
  position: 'absolute',
  top: 300,
  right: 380
}

const styleBottom = {
  position: 'absolute',
  left: 626,
  top: 400
}
const Example = () => {
  return (
    <div className="container test-desktop">
      <div style={styleTop}>
        <NotificationWithIcon
          header="Top Fix"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"
          fix="top-fix"
          state="success"
        />
      </div>
      <div style={styleLeft}>
        <NotificationWithIcon
          header="Left Fix"
          fix="left-fix"
          state="success"
        />
      </div>
      <div style={styleRight}>
        <NotificationWithIcon
          header="Right Fix"
          fix="right-fix"
          state="success"
        />
      </div>
      <div style={styleBottom}>
        <NotificationWithIcon
          header="Bottom Fix"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"
          fix="bottom-fix"
          state="success"
        />
      </div>
    </div>
  )
}

export default Example
