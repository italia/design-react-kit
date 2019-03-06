import React from "react";
import { storiesOf } from "@storybook/react";

import { withKnobs, select, boolean } from "@storybook/addon-knobs/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withDocs } from "../utils";

import { Alert, UncontrolledAlert } from "../../src";

import AlertExample from "./AlertExample";

import Esempi from "./docs/Esempi.md";
import LinkEvidenziato from "./docs/LinkEvidenziato.md";
import ContenutoAggiuntivo from "./docs/ContenutoAggiuntivo.md";
import Chiusura from "./docs/Chiusura.md";
import EsempiInterattivi from "./docs/EsempiInterattivi.md";


const EsempiComponent = () => (
    <div>
        <Alert color="success">
            Questo è un alert di <em>success</em>!
        </Alert>
        <Alert color="danger">
            Questo è un alert di <em>danger</em>!
        </Alert>
        <Alert color="warning">
            Questo è un alert di <em>warning</em>!
        </Alert>
    </div>
);

const LinkEvidenziatoComponent = () => (
    <Alert color="danger">
        Questo è un alert con un esempio di{" "}
        <a href="#" className="alert-link">
            link
        </a>{" "}
        evidenziato.
    </Alert>
);

const ContenutoAggiuntivoComponent = () => (
    <Alert>
        <h4 className="alert-heading">Avviso di successo!</h4>
        <p>
            Stai leggendo questo importante messaggio di avviso di successo.
            Questo testo di esempio sarà più a lungo in modo da poter vedere
            come funzioni la spaziatura all&apos;interno di un avviso con questo
            tipo di contenuto.
        </p>
        <hr />
        <p className="mb-0">
            Quando necessario, assicurarti di inserire le utilità di margine per
            mantenere gli spazi equilibrati.
        </p>
    </Alert>
);

const ChiusuraNonControllataComponent = () => (
    <UncontrolledAlert color="warning">
        <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.
    </UncontrolledAlert>
);

const ChiusuraControllataComponent = () => (<AlertExample />);

const EsempiInterattiviComponent = () => {
    const colors = ["success", "danger", "warning"];
    const color = select("Variazioni", colors, colors[0]);
    const open = boolean("Visible", true);

    return (
        <Alert color={color} isOpen={open}>
            Questo è un alert di <em>{color}</em>!
        </Alert>
    );
};

storiesOf("Componenti/Alert", module)
    .addDecorator(checkA11y)
    .add("Esempi", EsempiComponent, {info:{text: Esempi}})
    .add("Link evidenziato", LinkEvidenziatoComponent, {info:{text: LinkEvidenziato}})
    .add("Contenuto aggiuntivo", ContenutoAggiuntivoComponent, {info:{text: ContenutoAggiuntivo}})
    .addDecorator(withKnobs)
    .add("Esempi Interattivi", EsempiInterattiviComponent, {info:{text: EsempiInterattivi}})

storiesOf("Componenti/Alert/Chiusura", module)
    .addDecorator(checkA11y)
    .add("Non controllata", ChiusuraNonControllataComponent, {
        info:{
            text: Chiusura,
            propTables: null
        }
    })
    .add("Controllata", ChiusuraControllataComponent, {
        info:{
            text: Chiusura,
            propTables: [Alert],
            propTablesExclude: [AlertExample],
        }
    })
