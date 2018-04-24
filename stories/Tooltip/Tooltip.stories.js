import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, select } from "@storybook/addon-knobs/react";
import { withDocs, envIs } from "../utils";

import { Tooltip, UncontrolledTooltip, Button } from "../../src";

import Esempi from "./Esempi.md";
import Posizioni from "./Posizioni.md";
import EsempiInterattivi from "./EsempiInterattivi.md";

const stories = storiesOf("Componenti/Tooltip", module);

stories.add(
  "Esempi",
  withDocs(Esempi, () => {
    if (envIs("test")) {
      // Current story has a dependency on the DOM, skip it for now
      return null;
    }

    return (
      <div className="bd-example tooltip-demo">
        <p className="muted">
          Ecco un{" "}
          <a href="#" id="Example1">
            bianco scenario
          </a>
          <br />
          per tratteggiarvi l’accompagnamento
          <br />
          degli oggetti di sfondo che pur vivono.
          <br />
          Non ne sarò{" "}
          <a href="#" id="Example2">
            l’artefice
          </a>{" "}
          impaziente.
          <br />
          Berrò alle coppe della nostalgia,
          <br />
          avrò preteso d’ozio nelle lacrime...
          <br />
          perché non mi ribello alla natura:
          <br />
          la mia lentezza li esaspera...
          <br />
          La mia lentezza? No, la mia fiducia.
          <br />
          Per adesso è deserto.
          <br />
          <a href="#" id="Example3">
            Il mondo può rifarsi senza me
          </a>,
          <br />
          E intanto gli altri mi denigreranno
        </p>
        <p>
          <em>La città nuova, Alda Merini</em>
        </p>

        <UncontrolledTooltip placement="top" target="Example1">
          Primo tooltip
        </UncontrolledTooltip>
        <UncontrolledTooltip placement="top" target="Example2">
          Secondo tooltip
        </UncontrolledTooltip>
        <UncontrolledTooltip placement="top" target="Example3">
          Terzo tooltip
        </UncontrolledTooltip>
      </div>
    );
  })
);
stories.add(
  "Posizioni",
  withDocs(Posizioni, () => {
    if (envIs("test")) {
      // Current story has a dependency on the DOM, skip it for now
      return null;
    }

    return (
      <div style={{ padding: 100 }}>
        <Button id="Example1" className="m-3">
          Tooltip in alto
        </Button>
        <Button id="Example2" className="m-3">
          Tooltip a destra
        </Button>
        <Button id="Example3" className="m-3">
          Tooltip in basso
        </Button>
        <Button id="Example4" className="m-3">
          Tooltip a sinistra
        </Button>
        <Button id="Example5" className="m-3">
          Tooltip con HTML
        </Button>

        <UncontrolledTooltip placement="top" target="Example1">
          Tooltip on top
        </UncontrolledTooltip>
        <UncontrolledTooltip placement="right" target="Example2">
          Tooltip on right
        </UncontrolledTooltip>
        <UncontrolledTooltip placement="bottom" target="Example3">
          Tooltip on bottom
        </UncontrolledTooltip>
        <UncontrolledTooltip placement="left" target="Example4">
          Tooltip on left
        </UncontrolledTooltip>
        <UncontrolledTooltip placement="top" target="Example5">
          <em>Tooltip</em> <u>with</u> <b>HTML</b>
        </UncontrolledTooltip>
      </div>
    );
  })
);

const knobsStories = storiesOf("Componenti/Tooltip", module);
knobsStories.addDecorator(withKnobs);

knobsStories.add(
  "Esempi interattivi",
  withDocs(EsempiInterattivi, () => {
    if (envIs("test")) {
      // Current story has a dependency on the DOM, skip it for now
      return null;
    }

    const placements = ["top", "bottom", "left", "right"];
    const placement = select("Posizione", placements, placements[0]);
    const body = text("Body", "Tooltip");

    return (
      <div style={{ padding: 200 }}>
        <Button id="Example1" className="m-3">
          Tooltip
        </Button>

        <UncontrolledTooltip placement={placement} target="Example1">
          {body}
        </UncontrolledTooltip>
      </div>
    );
  })
);
