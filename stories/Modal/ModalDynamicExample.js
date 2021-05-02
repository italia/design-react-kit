import React, { useState } from 'react'
import { boolean, select } from '@storybook/addon-knobs/react'
import {
  Button,
  Modal,
  FormGroup,
  Input,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '../../src'

const sizes = ['', 'lg', 'md']

const ModalExampleDynamic = () => {
  const [isOpen, toggleModal] = useState(false)
  const [username, setUsername] = useState('')

  const centered = boolean('Centratura verticale', false)
  const fade = boolean('Animazione', true)
  const size = select('Dimensioni', sizes, sizes[0])

  return (
    <div>
      <div>
        {['Mario', 'Paola', 'Luca'].map(name => (
          <Button
            key={name}
            color="primary"
            onClick={() => {
              setUsername(name)
              toggleModal(true)
            }}
            className="mr-3">
            Apri la modale per {name}
          </Button>
        ))}
      </div>

      <Modal
        fade={fade}
        size={size}
        centered={centered}
        isOpen={isOpen}
        toggle={() => toggleModal(false)}>
        <ModalHeader toggle={() => toggleModal(false)}>
          New message for {username}
        </ModalHeader>
        <ModalBody>
          <form>
            <FormGroup>
              <Input
                type="text"
                id="recipient-name"
                value={username}
                label="Destinatario:"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="textarea"
                name="text"
                id="message-text"
                rows="3"
                label="Messaggio:"
              />
            </FormGroup>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => toggleModal(false)}>
            Chiudi
          </Button>
          <Button color="primary" onClick={() => toggleModal(false)}>
            Salva modifiche
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ModalExampleDynamic
