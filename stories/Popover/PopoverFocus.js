import React, { useState } from 'react'
import { Popover, PopoverHeader, PopoverBody } from '../../src'

const PopoverFocus = () => {
  const [popoverOpen, setPopoverOpen] = useState(false)
  const id = 'example'
  // Avoid Jest complaints
  const target = () => document.getElementById(id)

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen)
  }
  return (
    <div>
      <a
        tabIndex="0"
        className="btn btn-lg btn-danger"
        role="button"
        data-toggle="popover"
        data-trigger="focus"
        id={id}>
        Dismissible popover
      </a>

      <Popover
        placement="right"
        trigger="focus"
        target={target}
        isOpen={popoverOpen}
        toggle={togglePopover}>
        <PopoverHeader>Dismissible popover</PopoverHeader>
        <PopoverBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel
          finibus augue.
        </PopoverBody>
      </Popover>
    </div>
  )
}

export default PopoverFocus
