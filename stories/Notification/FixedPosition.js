import React from 'react'
import Notification from '../../src/components/Notification/Notification'

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
        <Notification
          withIcon
          header="Top Fix"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"
          fix="top-fix"
          state="success"
        />
      </div>
      <div style={styleLeft}>
        <Notification
          withIcon
          header="Left Fix"
          fix="left-fix"
          state="success"
        />
      </div>
      <div style={styleRight}>
        <Notification
          withIcon
          header="Right Fix"
          fix="right-fix"
          state="success"
        />
      </div>
      <div style={styleBottom}>
        <Notification
          withIcon
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
