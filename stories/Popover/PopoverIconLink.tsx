import React, { useState, useRef } from 'react'
import { Button, Icon, Popover, PopoverHeader, PopoverBody } from '../../src'

const PopoverIconLink = () => {
  const [popoverOpen, setPopoverOpen] = useState(false)
  const targetRef = useRef(null);

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen)
  }
  return (
    <div>
      <Button
        color="secondary"
        data-container="body"
        data-toggle="popover"
        data-placement="right"
        data-html="true"
        innerRef={targetRef}
        onClick={togglePopover}>
        Popover con icona e link
      </Button>

      <Popover
        placement="right"
        target={targetRef}
        isOpen={popoverOpen}
        toggle={togglePopover}>
        <PopoverHeader>
          <Icon
            color="white"
            icon="it-help-circle"
            aria-hidden
          />
          Titolo con icona
        </PopoverHeader>
        <PopoverBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel
          finibus augue.
          <a href="#" className="popover-inner-link">
            More info
            <Icon icon="it-arrow-right" aria-hidden />
          </a>
        </PopoverBody>
      </Popover>
    </div>
  )
}
PopoverIconLink.story = {
  name: 'Titolo con icona e link'
}
export default PopoverIconLink
