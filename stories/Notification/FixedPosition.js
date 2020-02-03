import React from 'react'
import Notification from '../../src/components/Notification/Notification'

const Example = () => {
  return (
    <div className="container test-desktop">
      <div>
        <Notification
          withIcon
          header="Top Fix"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"
          fix="top-fix"
          state="success"
        />
      </div>
      <div>
        <Notification
          withIcon
          header="Left Fix"
          fix="left-fix"
          state="success"
        />
      </div>
      <div>
        <Notification
          withIcon
          header="Right Fix"
          fix="right-fix"
          state="success"
        />
      </div>
      <div>
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
