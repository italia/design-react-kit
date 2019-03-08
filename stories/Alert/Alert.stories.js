import React from "react";
import { storiesOf } from "@storybook/react";

import { withKnobs, select, boolean } from "@storybook/addon-knobs/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withDocs } from "../utils";

import { Alert, UncontrolledAlert } from "../../src";

import AlertExample from "./AlertExample";

import Esempi from "./Esempi.md";
import LinkEvidenziato from "./LinkEvidenziato.md";
import ContenutoAggiuntivo from "./ContenutoAggiuntivo.md";
import Chiusura from "./Chiusura.md";
import EsempiInterattivi from "./EsempiInterattivi.md";


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
    .add("Esempi", withDocs(Esempi,withInfo()(EsempiComponent)))
    .add("Link evidenziato", withDocs(LinkEvidenziato,withInfo()(LinkEvidenziatoComponent)))
    .add("Contenuto aggiuntivo",withDocs(ContenutoAggiuntivo,withInfo()(ContenutoAggiuntivoComponent)))
    .addDecorator(withKnobs)
    .add("Esempi Interattivi", withDocs(EsempiInterattivi,withInfo()(EsempiInterattiviComponent)))

storiesOf("Componenti/Alert/Chiusura", module)
    .addDecorator(checkA11y)
    .add("Non controllata",withDocs(Chiusura,withInfo({propTables:null})(ChiusuraNonControllataComponent)))
    .add("Controllata",withDocs(Chiusura,withInfo(
        {   propTables: [Alert],
            propTablesExclude: [AlertExample],
            }
    )(ChiusuraControllataComponent)))
