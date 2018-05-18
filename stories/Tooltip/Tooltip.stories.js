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

    const ids = ["Example1", "Example2", "Example3"];
    const target = i => document.getElementById(ids[i]);

    return (
      <div className="bd-example tooltip-demo">
        <p className="muted">
          Ecco un{" "}
          <a href="#" id={ids[0]}>
            bianco scenario
          </a>
          <br />
          per tratteggiarvi l’accompagnamento
          <br />
          degli oggetti di sfondo che pur vivono.
          <br />
          Non ne sarò{" "}
          <a href="#" id={ids[1]}>
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
          <a href="#" id={ids[2]}>
            Il mondo può rifarsi senza me
          </a>,
          <br />
          E intanto gli altri mi denigreranno
        </p>
        <p>
          <em>La città nuova, Alda Merini</em>
        </p>

        <UncontrolledTooltip placement="top" target={() => target(0)}>
          Primo tooltip
        </UncontrolledTooltip>
        <UncontrolledTooltip placement="top" target={() => target(1)}>
          Secondo tooltip
        </UncontrolledTooltip>
        <UncontrolledTooltip placement="top" target={() => target(2)}>
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

    const ids = ["example1", "example2", "example3", "example4", "example5"];
    const target = i => document.getElementById(ids[i]);

    return (
      <div style={{ padding: 100 }}>
        <Button id={ids[0]} className="m-3">
          Tooltip in alto
        </Button>
        <Button id={ids[1]} className="m-3">
          Tooltip a destra
        </Button>
        <Button id={ids[2]} className="m-3">
          Tooltip in basso
        </Button>
        <Button id={ids[3]} className="m-3">
          Tooltip a sinistra
        </Button>
        <Button id={ids[4]} className="m-3">
          Tooltip con HTML
        </Button>

        <UncontrolledTooltip placement="top" target={() => target(0)}>
          Tooltip on top
        </UncontrolledTooltip>
        <UncontrolledTooltip placement="right" target={() => target(1)}>
          Tooltip on right
        </UncontrolledTooltip>
        <UncontrolledTooltip placement="bottom" target={() => target(2)}>
          Tooltip on bottom
        </UncontrolledTooltip>
        <UncontrolledTooltip placement="left" target={() => target(3)}>
          Tooltip on left
        </UncontrolledTooltip>
        <UncontrolledTooltip placement="top" target={() => target(4)}>
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

    const id = "example";
    const target = () => document.getElementById(id);

    const placements = ["top", "bottom", "left", "right"];
    const placement = select("Posizione", placements, placements[0]);
    const body = text("Body", "Tooltip");

    return (
      <div style={{ padding: 200 }}>
        <Button id={id} className="m-3">
          Tooltip
        </Button>

        <UncontrolledTooltip placement={placement} target={target}>
          {body}
        </UncontrolledTooltip>
      </div>
    );
  })
);
