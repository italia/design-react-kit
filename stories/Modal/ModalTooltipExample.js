import React, { useState } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  UncontrolledTooltip,
  Popover,
  PopoverHeader,
  PopoverBody
} from '../../src'

const ModalTooltipExample = () => {
  const [isOpen, toggleModal] = useState(false)
  const [popoverOpen, togglePopover] = useState(false)

  return (
    <div>
      <Button color="primary" onClick={() => toggleModal(!isOpen)}>
        Lancia la demo della modale
      </Button>
      <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)}>
        <ModalHeader toggle={() => toggleModal(!isOpen)}>
          Titolo della modale
        </ModalHeader>
        <ModalBody>
          <h5>Popover in una modale</h5>
          <p>
            Questo{' '}
            <Button
              color="secondary"
              id="Example"
              onClick={() => togglePopover(!popoverOpen)}>
              Pulsante
            </Button>{' '}
            attiva un popover al click.
            <Popover
              placement="right"
              isOpen={popoverOpen}
              target="Example"
              toggle={() => togglePopover(!popoverOpen)}>
              <PopoverHeader>Titolo del popover</PopoverHeader>
              <PopoverBody>
                Il contenuto del corpo del popover è impostato in questo
                elemento.
              </PopoverBody>
            </Popover>
          </p>
          <hr />
          <h5>Tooltip in una modal</h5>
          <p>
            <a href="#" title="Tooltip" id="Example1">
              Questo link
            </a>{' '}
            e{' '}
            <a href="#" title="Tooltip" id="Example2">
              questo link
            </a>{' '}
            attivano un tooltip al passaggio del mouse.
            <UncontrolledTooltip placement="top" target="Example1">
              Tooltip
            </UncontrolledTooltip>
            <UncontrolledTooltip placement="top" target="Example2">
              Tooltip
            </UncontrolledTooltip>
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => toggleModal(!isOpen)}>
            Chiudi
          </Button>
          <Button color="primary" onClick={() => toggleModal(!isOpen)}>
            Salva le modifiche
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ModalTooltipExample
