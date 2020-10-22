import React, { useState } from 'react'

import { Button, Alert } from '../../src'

const AlertExample = () => {
  const [open, toggleAlert] = useState(true)
  return (
    <div>
      <Alert color="warning" isOpen={open} toggle={() => toggleAlert(!open)}>
        <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.
      </Alert>

      {
        <Button onClick={() => toggleAlert(!open)} disabled={open}>
          Mostra Alert
        </Button>
      }
    </div>
  )
}

export default AlertExample
