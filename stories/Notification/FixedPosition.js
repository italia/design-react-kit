import React from 'react'
import Notification from '../../src/components/Notification/Notification'

const Example = () => {
  return (
    <div className="container test-desktop">
      <div>
        <Notification withIcon header="Top Fix" fix="top-fix" state="success">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor…
        </Notification>
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
          fix="bottom-fix"
          state="success">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor…
        </Notification>
      </div>
    </div>
  )
}

export default Example
