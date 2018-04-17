import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, boolean } from "@storybook/addon-knobs/react";

import { Alert, UncontrolledAlert } from "../../src";

import AlertExample from "./AlertExample";

const stories = storiesOf("Componenti/Alert", module);

stories.add("Esempi", () => (
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
));
stories.add("Link evidenziato", () => (
  <Alert color="danger">
    Questo è un alert con un esempio di{" "}
    <a href="#" className="alert-link">
      link
    </a>{" "}
    evidenziato.
  </Alert>
));
stories.add("Contenuto aggiuntivo", () => (
  <Alert>
    <h4 className="alert-heading">Avviso di successo!</h4>
    <p>
      Stai leggendo questo importante messaggio di avviso di successo. Questo
      testo di esempio sarà più a lungo in modo da poter vedere come funzioni la
      spaziatura all'interno di un avviso con questo tipo di contenuto.
    </p>
    <hr />
    <p className="mb-0">
      Quando necessario, assicurarti di inserire le utilità di margine per
      mantenere gli spazi equilibrati.
    </p>
  </Alert>
));

const moreStories = storiesOf("Componenti/Alert/Chiusura", module);

moreStories.add("Non controllata", () => (
  <UncontrolledAlert color="warning">
    <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.
  </UncontrolledAlert>
));
moreStories.add("Controllata", () => <AlertExample />);

const knobsStories = storiesOf("Componenti/Alert", module);
knobsStories.addDecorator(withKnobs);
knobsStories.add("Esempi interattivi", () => {
  const colors = ["success", "danger", "warning"];
  const color = select("Variazioni", colors, colors[0]);
  const open = boolean("Visible", true);

  return (
    <Alert color={color} isOpen={open}>
      Questo è un alert di <em>{color}</em>!
    </Alert>
  );
});
