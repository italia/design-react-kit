import React, { useState } from 'react'
import { Popover, PopoverHeader, PopoverBody } from '../../src'

const PopoverHover = () => {
  const [popoverOpen, setPopoverOpen] = useState(false)
  const id = 'example'
  // Avoid Jest complaints
  const target = () => document.getElementById(id)

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen)
  }
  return (
    <div>
      <button
        type="button"
        className="btn btn-secondary"
        data-container="body"
        data-toggle="popover"
        data-trigger="hover"
        data-placement="right"
        data-html="true"
        id={id}
        onMouseOver={togglePopover}
        onMouseOut={togglePopover}>
        Apertura in Hover
      </button>

      <Popover
        placement="right"
        target={target}
        isOpen={popoverOpen}
        toggle={togglePopover}>
        <PopoverHeader>Popover in Hover</PopoverHeader>
        <PopoverBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel
          finibus augue.
        </PopoverBody>
      </Popover>
    </div>
  )
}
export default PopoverHover
