import React from "react";
import { storiesOf } from "@storybook/react";

import {
  withKnobs,
  number,
  text,
  select,
  boolean
} from "@storybook/addon-knobs/react";
import { withDocs } from "../utils";

import { Progress } from "../../src";

import Esempi from "./Esempi.md";
import Etichette from "./Etichette.md";
import Altezza from "./Altezza.md";
import Background from "./Background.md";
import EsempiInterattivi from "./EsempiInterattivi.md";

const stories = storiesOf("Componenti/Progress", module);

stories.add(
  "Esempi",
  withDocs(Esempi, () => (
    <div>
      <Progress />
      <Progress value="25" className="mt-3" />
      <Progress value={50} className="mt-3" />
      <Progress value={75} className="mt-3" />
      <Progress value="100" className="mt-3" />
    </div>
  ))
);
stories.add(
  "Etichette",
  withDocs(Etichette, () => <Progress value="25">25%</Progress>)
);
stories.add(
  "Altezza",
  withDocs(Altezza, () => (
    <div>
      <Progress value="25" style={{ height: 1 }} />
      <Progress value="25" style={{ height: 10 }} className="mt-3" />
      <Progress value="25" style={{ height: 20 }} className="mt-3" />
    </div>
  ))
);
stories.add(
  "Background",
  withDocs(Background, () => (
    <div>
      <Progress color="success" value="25" className="mt-3" />
      <Progress color="info" value={50} className="mt-3" />
      <Progress color="warning" value={75} className="mt-3" />
      <Progress color="danger" value="100" className="mt-3" />
    </div>
  ))
);

const knobsStories = storiesOf("Componenti/Progress", module);
knobsStories.addDecorator(withKnobs);

knobsStories.add(
  "Esempi interattivi",
  withDocs(EsempiInterattivi, () => {
    const value = number("Valore", 25);
    const height = number("Altezza", 18);
    const colors = ["", "success", "info", "warning", "danger"];
    const color = select("Background", colors, colors[0]);
    const label = text("Etichetta", "");

    return (
      <Progress color={color} value={value} className="m-3" style={{ height }}>
        {label}
      </Progress>
    );
  })
);
