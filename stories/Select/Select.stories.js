import React from "react";
import { storiesOf } from "@storybook/react";
import { withDocs } from "../utils";

import SelectExample from "./SelectExample";

import Esempi from "./Esempi.md";
import Multipla from "./Multipla.md";
import ConRicerca from "./ConRicerca.md";
import ConGruppiOpzioni from "./ConGruppiOpzioni.md";

const stories = storiesOf("Componenti/Select", module);

stories.add("Esempi", withDocs(Esempi, () => <SelectExample />));
stories.add("Multipla", withDocs(Multipla, () => <SelectExample multi />));
stories.add(
  "Con ricerca",
  withDocs(ConRicerca, () => <SelectExample search />)
);
stories.add(
  "Con gruppi di opzioni",
  withDocs(ConGruppiOpzioni, () => <SelectExample group multi />)
);
