import React, { useState } from 'react'
import { Icon, Popover, PopoverHeader, PopoverBody } from '../../src'

const PopoverIconLink = () => {
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
        data-placement="right"
        data-html="true"
        id={id}
        onClick={togglePopover}>
        Popover con icona e link
      </button>

      <Popover
        placement="right"
        target={target}
        isOpen={popoverOpen}
        toggle={togglePopover}>
        <PopoverHeader>
          <Icon
            color="white"
            icon="it-help-circle"
            style={{ ariaHidden: true }}
          />
          Titolo con icona
        </PopoverHeader>
        <PopoverBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel
          finibus augue.
          <a href="#" className="popover-inner-link">
            More info
            <Icon icon="it-arrow-right" style={{ ariaHidden: true }} />
          </a>
        </PopoverBody>
      </Popover>
    </div>
  )
}

export default PopoverIconLink
