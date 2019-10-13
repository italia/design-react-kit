import React from 'react'

import { Button, Icon } from '../../../src'

const Notification = () => {
  return (
    <div
      className="notification dismissable with-icon"
      role="alert"
      id="notification-esempi"
      aria-labelledby="notification-esempi-title"
      style={{ display: 'block' }}>
      <h5 id="notification-esempi-title">
        <Icon icon="it-info-circle" /> Esempio di utilizzo
      </h5>
      <p>
        <a href="/design-comuni-prototipi/it/kit.html#template-html">
          Torna alla lista dei template
        </a>
      </p>
      <Button type="button" className="notification-close">
        <Icon icon="it-close" />
        <span className="sr-only">Chiudi notifica: Titolo notification</span>
      </Button>
    </div>
  )
}

export default Notification
