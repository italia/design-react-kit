import React, { useState } from 'react'
import { Button, Popover, PopoverBody } from '../../src'

const PopoverPositionExample = () => {
  const [popoverOpen1, setPopoverOpen1] = useState(false)
  const [popoverOpen2, setPopoverOpen2] = useState(false)
  const [popoverOpen3, setPopoverOpen3] = useState(false)
  const [popoverOpen4, setPopoverOpen4] = useState(false)

  const id1 = 'Popover-left'
  const id2 = 'Popover-right'
  const id3 = 'Popover-top'
  const id4 = 'Popover-bottom'

  const target1 = () => document.getElementById(id1)
  const target2 = () => document.getElementById(id2)
  const target3 = () => document.getElementById(id3)
  const target4 = () => document.getElementById(id4)
  return (
    <div className="d-flex flex-column">
      <div className="mx-auto align-self-center p-2">
        <span>
          <Button
            className="mr-1"
            color="secondary"
            id={id1}
            onClick={() => {
              setPopoverOpen1(!popoverOpen1)
            }}>
            Popover {'a sinistra'}
          </Button>
          <Popover
            placement={'left'}
            isOpen={popoverOpen1}
            target={target1}
            toggle={() => {
              setPopoverOpen1(!popoverOpen1)
            }}>
            <PopoverBody>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus
            </PopoverBody>
          </Popover>
        </span>
      </div>
      <div className="mx-auto align-self-center p-2">
        <span>
          <Button
            className="mr-1"
            color="secondary"
            id={id2}
            onClick={() => {
              setPopoverOpen2(!popoverOpen2)
            }}>
            Popover {'a destra'}
          </Button>
          <Popover
            placement={'right'}
            isOpen={popoverOpen2}
            target={target2}
            toggle={() => {
              setPopoverOpen2(!popoverOpen2)
            }}>
            <PopoverBody>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus
            </PopoverBody>
          </Popover>
        </span>
      </div>
      <div className="mx-auto align-self-center p-2">
        <span>
          <Button
            className="mr-1"
            color="secondary"
            id={id3}
            onClick={() => {
              setPopoverOpen3(!popoverOpen3)
            }}>
            Popover {'in alto'}
          </Button>
          <Popover
            placement={'top'}
            isOpen={popoverOpen3}
            target={target3}
            toggle={() => {
              setPopoverOpen3(!popoverOpen3)
            }}>
            <PopoverBody>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus
            </PopoverBody>
          </Popover>
        </span>
      </div>
      <div className="mx-auto align-self-center p-2">
        <span>
          <Button
            className="mr-1"
            color="secondary"
            id={id4}
            onClick={() => {
              setPopoverOpen4(!popoverOpen4)
            }}>
            Popover {'in basso'}
          </Button>
          <Popover
            placement={'bottom'}
            isOpen={popoverOpen4}
            target={target4}
            toggle={() => {
              setPopoverOpen4(!popoverOpen4)
            }}>
            <PopoverBody>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus
            </PopoverBody>
          </Popover>
        </span>
      </div>
    </div>
  )
}

export default PopoverPositionExample
