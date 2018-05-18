import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs/react";
import { withDocs } from "../utils";

import { Row, Col, Form, FormGroup, Label, Input, Toggle } from "../../src";

import TogglesExample from "./TogglesExample";
import TogglesGroupsExample from "./TogglesGroupsExample";

import Esempi from "./Esempi.md";
import Disabilitati from "./Disabilitati.md";
import Gruppi from "./Gruppi.md";
import EsempiMarkup from "./EsempiMarkup.md";
import EsempiInterattivi from "./EsempiInterattivi.md";

const stories = storiesOf("Componenti/Toggles", module);

stories.add(
  "Esempi",
  withDocs(Esempi, () => (
    <section>
      <TogglesExample />
    </section>
  ))
);
stories.add(
  "Disabilitati",
  withDocs(Disabilitati, () => (
    <section>
      <TogglesExample disabled />
    </section>
  ))
);
stories.add(
  "Gruppi",
  withDocs(Gruppi, () => (
    <section>
      <TogglesGroupsExample />
    </section>
  ))
);
stories.add(
  "Esempi con markup",
  withDocs(EsempiMarkup, () => (
    <section>
      <Row>
        <Col sm="6">
          <FormGroup check className="m-3">
            <div className="toggles">
              <Label for="toggleEsempio1a">
                Label dell'interruttore 1
                <Input type="checkbox" id="toggleEsempio1a" />
                <span className="lever" />
              </Label>
            </div>
          </FormGroup>
        </Col>
        <Col sm="6">
          <FormGroup check className="m-3">
            <div className="toggles">
              <Label for="toggleEsempio1b">
                Label dell'interruttore 2
                <Input type="checkbox" id="toggleEsempio1b" />
                <span className="lever leverRight" />
              </Label>
            </div>
          </FormGroup>
        </Col>
      </Row>
    </section>
  ))
);

const knobsStories = storiesOf("Componenti/Toggles", module);
knobsStories.addDecorator(withKnobs);

knobsStories.add(
  "Esempi interattivi",
  withDocs(EsempiInterattivi, () => {
    const checked = boolean("Selezionato", true);
    const disabled = boolean("Disabilitato", false);
    const label = text("Label", "Label");

    return (
      <Row>
        <Col sm="6">
          <FormGroup check className="m-3">
            <Toggle
              label={`${label} ${checked ? "Selezionato" : ""}  ${
                disabled ? "Disabilitato" : ""
              }`}
              disabled={disabled}
              checked={checked}
              onChange={() => {}}
            />
          </FormGroup>
        </Col>
        <Col sm="6">
          <FormGroup check className="m-3">
            <Toggle
              label={`${label} inverso ${!checked ? "Selezionato" : ""}  ${
                disabled ? "Disabilitato" : ""
              }`}
              disabled={disabled}
              checked={!checked}
              onChange={() => {}}
            />
          </FormGroup>
        </Col>
      </Row>
    );
  })
);
