import React, { useState } from 'react'
import { Button, Popover, PopoverHeader, PopoverBody } from '../../src'

const PopoverExample = () => {
  const [popoverOpen, setPopoverOpen] = useState(false)
  const id = 'example'
  // Avoid Jest complaints
  const target = () => document.getElementById(id)

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen)
  }

  return (
    <div>
      <Button color="danger" id={id} onClick={togglePopover}>
        Clicca per attivare o disattivare il popover
      </Button>

      <Popover
        placement="right"
        target={target}
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
