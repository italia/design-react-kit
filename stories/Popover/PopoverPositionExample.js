import React, { useState } from 'react'
import { Button, Popover, PopoverBody } from '../../src'
import PropTypes from 'prop-types'

const PopoverItem = props => {
  const [popoverOpen, setPopoverOpen] = useState(false)
  const id = `Popover-${props.id}`
  // Avoid Jest complaints
  const target = () => document.getElementById(id)

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen)
  }
  return (
    <span>
      <Button
        className="mr-1"
        color="secondary"
        id={id}
        onClick={togglePopover}>
        Popover {props.item.text}
      </Button>
      <Popover
        placement={props.item.placement}
        isOpen={popoverOpen}
        target={target}
        toggle={togglePopover}>
        <PopoverBody>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus
        </PopoverBody>
      </Popover>
    </span>
  )
}

PopoverItem.propTypes = {
  id: PropTypes.string,
  item: PropTypes.object
}

const PopoverPositionExample = () => {
  return (
    <div className="d-flex flex-column">
      <div className="mx-auto align-self-center p-2">
        <PopoverItem
          item={{ placement: 'left', text: 'a sinistra' }}
          id={'left'}
        />
      </div>
      <div className="mx-auto align-self-center p-2">
        <PopoverItem
          item={{ placement: 'right', text: 'a destra' }}
          id={'right'}
        />
      </div>
      <div className="mx-auto align-self-center p-2">
        <PopoverItem item={{ placement: 'top', text: 'in alto' }} id={'top'} />
      </div>
      <div className="mx-auto align-self-center p-2">
        <PopoverItem
          item={{ placement: 'bottom', text: 'in basso' }}
          id={'bottom'}
        />
      </div>
    </div>
  )
}

export default PopoverPositionExample
