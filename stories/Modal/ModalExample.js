import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from '../../src'

export const ModalExampleClassic = () => {
  const [isOpen, toggleModal] = useState(false)

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
          <p>Woohoo, stai leggendo questo testo in una modale!</p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => toggleModal(!isOpen)}>
            Chiudi
          </Button>
          <Button color="primary" onClick={() => toggleModal(!isOpen)}>
            Salva modifiche
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export const ModalExampleLong = () => {
  const [isOpen, toggleModal] = useState(false)

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
          <div>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => toggleModal(!isOpen)}>
            Chiudi
          </Button>
          <Button color="primary" onClick={() => toggleModal(!isOpen)}>
            Salva modifiche
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export const ModalExampleCentered = () => {
  const [isOpen, toggleModal] = useState(false)

  return (
    <div>
      <Button color="primary" onClick={() => toggleModal(!isOpen)}>
        Lancia la demo della modale
      </Button>
      <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} centered>
        <ModalHeader toggle={() => toggleModal(!isOpen)}>
          Titolo della modale
        </ModalHeader>
        <ModalBody>
          <p>Woohoo, stai leggendo questo testo in una modale!</p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => toggleModal(!isOpen)}>
            Chiudi
          </Button>
          <Button color="primary" onClick={() => toggleModal(!isOpen)}>
            Salva modifiche
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export const ModalExampleNoAnimation = () => {
  const [isOpen, toggleModal] = useState(false)

  return (
    <div>
      <Button color="primary" onClick={() => toggleModal(!isOpen)}>
        Lancia la demo della modale
      </Button>
      <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} fade={false}>
        <ModalHeader toggle={() => toggleModal(!isOpen)}>
          Titolo della modale
        </ModalHeader>
        <ModalBody>
          <p>Woohoo, stai leggendo questo testo in una modale!</p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => toggleModal(!isOpen)}>
            Chiudi
          </Button>
          <Button color="primary" onClick={() => toggleModal(!isOpen)}>
            Salva modifiche
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export const ModalExampleSizing = () => {
  const [isOpen, toggleModal] = useState(false)
  const [size, setSize] = useState('')

  return (
    <div>
      <div>
        <Button
          color="primary"
          onClick={() => {
            setSize('lg')
            toggleModal(true)
          }}
          className="mr-3">
          Modale grande
        </Button>
        <Button
          color="primary"
          onClick={() => {
            setSize('sm')
            toggleModal(true)
          }}>
          Modale piccola
        </Button>
      </div>
      <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} size={size}>
        <ModalHeader toggle={() => toggleModal(!isOpen)}>
          Titolo della modale
        </ModalHeader>
        <ModalBody>
          <p>Woohoo, stai leggendo questo testo in una modale!</p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => toggleModal(!isOpen)}>
            Chiudi
          </Button>
          <Button color="primary" onClick={() => toggleModal(!isOpen)}>
            Salva modifiche
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
