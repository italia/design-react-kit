import React from "react";
import { storiesOf } from "@storybook/react";
import { withDocs } from "../utils";

import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from "../../src";

import DropdownExample from "./DropdownExample";
import DropdownButtonExample from "./DropdownButtonExample";
import DropdownButtonGroupExample from "./DropdownButtonGroupExample";
import DropdownSizingExample from "./DropdownSizingExample";
import DropdownFullSizingExample from "./DropdownFullSizingExample";
import DropdownDirectionsExample from "./DropdownDirectionsExample";
import DropdownAlignmentExample from "./DropdownAlignmentExample";

import Esempi from "./Esempi.md";
import Bottoni from "./Bottoni.md";
import VarianteBottoni from "./VarianteBottoni.md";
import BottoniDivisi from "./BottoniDivisi.md";
import Dimensioni from "./Dimensioni.md";
import DropdownLarghezza from "./DropdownLarghezza.md";
import DirezioniDropdown from "./DirezioniDropdown.md";
import AllineamentoOrizzontale from "./AllineamentoOrizzontale.md";
import VociMenuAttive from "./VociMenuAttive.md";
import VociMenuDisabilitate from "./VociMenuDisabilitate.md";

const stories = storiesOf("Componenti/Dropdown", module);

stories.add("Esempi", withDocs(Esempi, () => <DropdownExample />));
stories.add("Bottoni", withDocs(Bottoni, () => <DropdownButtonExample />));
stories.add(
  "Variante Bottoni",
  withDocs(VarianteBottoni, () => <DropdownButtonExample color="danger" />)
);
stories.add(
  "Bottoni divisi",
  withDocs(BottoniDivisi, () => <DropdownButtonGroupExample />)
);
stories.add(
  "Dimensioni",
  withDocs(Dimensioni, () => <DropdownSizingExample />)
);
stories.add(
  "Dropdown a tutta larghezza",
  withDocs(DropdownLarghezza, () => <DropdownFullSizingExample />)
);
stories.add(
  "Direzioni Dropdown",
  withDocs(DirezioniDropdown, () => <DropdownDirectionsExample />)
);
stories.add(
  "Allineamento orizzontale",
  withDocs(AllineamentoOrizzontale, () => <DropdownAlignmentExample />)
);
stories.add(
  "Voci di menù attive",
  withDocs(VociMenuAttive, () => (
    <div style={{ paddingBottom: 150 }}>
      <Dropdown isOpen toggle={() => {}}>
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Azione 1</DropdownItem>
          <DropdownItem active>Azione 2</DropdownItem>
          <DropdownItem>Azione 3</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  ))
);
stories.add(
  "Voci di menù disabilitate",
  withDocs(VociMenuDisabilitate, () => (
    <div style={{ paddingBottom: 150 }}>
      <Dropdown isOpen toggle={() => {}}>
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Azione 1</DropdownItem>
          <DropdownItem disabled>Azione 2</DropdownItem>
          <DropdownItem>Azione 3</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  ))
);
