import React from "react";
import { storiesOf } from "@storybook/react";
import { withDocs } from "../utils";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  FormGroup,
  Label,
  Button
} from "../../src";

import InputGroupDropdownExample from "./InputGroupDropdownExample";

import Esempi from "./Esempi.md";
import Dimensioni from "./Dimensioni.md";
import CheckboxRadio from "./CheckboxRadio.md";
import InputMultipli from "./InputMultipli.md";
import AggiunteMultiple from "./AggiunteMultiple.md";
import AggiuntaBottoni from "./AggiuntaBottoni.md";
import BottoniDropdown from "./BottoniDropdown.md";
import PulsantiSegmentati from "./PulsantiSegmentati.md";

const stories = storiesOf("Componenti/Input Group", module);

stories.add(
  "Esempi",
  withDocs(Esempi, () => (
    <div className="p-3">
      <InputGroup className="pb-3">
        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
        <Input type="text" placeholder="Username" />
      </InputGroup>

      <InputGroup className="pb-3">
        <Input type="text" placeholder="Mail utente" />
        <InputGroupAddon addonType="append">@esempio.it</InputGroupAddon>
      </InputGroup>

      <FormGroup>
        <InputGroup className="pb-3">
          <InputGroupAddon addonType="prepend">
            https://esempio.it/utente/
          </InputGroupAddon>
          <Input type="text" id="basic-url" />
        </InputGroup>
        <Label for="basic-url">La tua URL</Label>
      </FormGroup>

      <InputGroup className="pb-3">
        <InputGroupAddon addonType="prepend">€</InputGroupAddon>
        <Input type="number" />
        <InputGroupAddon addonType="append">,00</InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon addonType="prepend">Textarea</InputGroupAddon>
        <Input type="textarea" />
      </InputGroup>
    </div>
  ))
);
stories.add(
  "Dimensioni",
  withDocs(Dimensioni, () => (
    <div>
      <InputGroup size="sm" className="mb-3">
        <InputGroupAddon addonType="prepend">Testo piccolo</InputGroupAddon>
        <Input type="text" />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroupAddon addonType="prepend">Testo predefinito</InputGroupAddon>
        <Input type="text" />
      </InputGroup>

      <InputGroup size="lg">
        <InputGroupAddon addonType="prepend">Testo grande</InputGroupAddon>
        <Input type="text" />
      </InputGroup>
    </div>
  ))
);
stories.add(
  "Checkbox e radio",
  withDocs(CheckboxRadio, () => (
    <div>
      <InputGroup className="mb-3">
        <InputGroupAddon addonType="prepend">
          <InputGroup>
            <Input type="checkbox" />
          </InputGroup>
        </InputGroupAddon>
        <Input type="text" />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroup>
            <Input type="radio" />
          </InputGroup>
        </InputGroupAddon>
        <Input type="text" />
      </InputGroup>
    </div>
  ))
);
stories.add(
  "Input multipli",
  withDocs(InputMultipli, () => (
    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">Nominativo</InputGroupAddon>
        <Input type="text" placeholder="Nome" />
        <Input type="text" placeholder="Cognome" />
      </InputGroup>
    </div>
  ))
);
stories.add(
  "Aggiunte multiple",
  withDocs(AggiunteMultiple, () => (
    <div>
      <InputGroup className="mb-3">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>€</InputGroupText>
          <InputGroupText>0,00</InputGroupText>
        </InputGroupAddon>
        <Input type="text" />
      </InputGroup>

      <InputGroup>
        <Input type="text" />
        <InputGroupAddon addonType="append">
          <InputGroupText>€</InputGroupText>
          <InputGroupText>0,00</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ))
);
stories.add(
  "Aggiunta bottoni",
  withDocs(AggiuntaBottoni, () => (
    <div>
      <InputGroup className="mb-3">
        <InputGroupAddon addonType="prepend">
          <Button color="primary">Bottone</Button>
        </InputGroupAddon>
        <Input type="text" placeholder="" />
      </InputGroup>

      <InputGroup className="input-group mb-3">
        <Input type="text" placeholder="Contenitore" />
        <InputGroupAddon addonType="append">
          <Button color="primary">Bottone</Button>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup className="input-group mb-3">
        <InputGroupAddon addonType="prepend">
          <Button color="primary">Bottone</Button>
          <Button color="primary">Bottone</Button>
        </InputGroupAddon>
        <Input type="text" placeholder="" />
      </InputGroup>

      <InputGroup className="input-group">
        <Input type="text" placeholder="Contenitore" />
        <InputGroupAddon addonType="append">
          <Button color="primary">Bottone</Button>
          <Button color="primary">Bottone</Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ))
);
stories.add(
  "Bottoni con dropdown",
  withDocs(BottoniDropdown, () => <InputGroupDropdownExample />)
);
stories.add(
  "Pulsanti segmentati",
  withDocs(PulsantiSegmentati, () => <InputGroupDropdownExample split />)
);
