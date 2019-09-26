import React from 'react';
import {Icon} from '../../../src';

const Notification = () => <div className="notification dismissable with-icon" role="alert" id="notification-esempi" aria-labelledby="notification-esempi-title" style={{ display: "block" }}>
    <h5 id="notification-esempi-title">
        <Icon icon="it-info-circle" /> Esempio di utilizzo
</h5>
    <p>
        <a href="/design-comuni-prototipi/it/kit.html#template-html">Torna alla lista dei template</a>
    </p>
    <button type="button" className="btn notification-close">
        <Icon icon="it-close" />
        <span className="sr-only">Chiudi notifica: Titolo notification</span>
    </button>
</div>

export default Notification;