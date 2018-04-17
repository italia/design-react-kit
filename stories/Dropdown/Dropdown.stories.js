import React from "react";
import { storiesOf } from "@storybook/react";

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

const stories = storiesOf("Componenti/Dropdown", module);


stories.add("Esempi", () => <DropdownExample />);
stories.add("Bottoni", () => <DropdownButtonExample />);
stories.add("Variante Bottoni", () => <DropdownButtonExample color="danger" />);
stories.add("Bottoni divisi", () => <DropdownButtonGroupExample />);
stories.add("Dimensioni", () => <DropdownSizingExample />);
stories.add("Dropdown a tutta larghezza", () => <DropdownFullSizingExample />);
stories.add("Direzioni Dropdown", () => <DropdownDirectionsExample />);
stories.add("Allineamento orizzontale", () => <DropdownAlignmentExample />);
stories.add("Voci di menù attive", () => (
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
));
stories.add("Voci di menù disabilitate", () => (
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
));
