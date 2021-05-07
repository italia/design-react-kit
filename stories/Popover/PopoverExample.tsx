import React, { useState, useRef } from 'react'
import { Button, Popover, PopoverHeader, PopoverBody } from '../../src'

const PopoverExample = () => {
  const [popoverOpen, setPopoverOpen] = useState(false)
  const targetRef = useRef(null);

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen)
  }

  return (
    <div>
      <Button color="danger" innerRef={targetRef} onClick={togglePopover}>
        Clicca per attivare o disattivare il popover
      </Button>

      <Popover
        placement="right"
        target={targetRef}
        isOpen={popoverOpen}
        toggle={togglePopover}>
        <PopoverHeader>Titolo del popover</PopoverHeader>
        <PopoverBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel
          finibus augue.
        </PopoverBody>
      </Popover>
    </div>
  )
}

export default PopoverExample
