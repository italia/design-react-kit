import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs/react";

import { Form, FormGroup, Label, Input } from "../../src";

import CheckboxGroupsExample from "./CheckboxGroupsExample";

const stories = storiesOf("Componenti/Checkbox", module);

stories.add("Esempi", () => (
  <Form>
    <FormGroup check>
      <Input id="checkbox1" type="checkbox" />
      <Label for="checkbox1" check>
        Label di esempio
      </Label>
    </FormGroup>
    <FormGroup check>
      <Input name="gruppo1" type="radio" id="radio1" defaultChecked />
      <Label check for="radio1">
        Opzione 1
      </Label>
    </FormGroup>

    <FormGroup check>
      <Input name="gruppo1" type="radio" id="radio2" />
      <Label check for="radio2">
        Opzione 2
      </Label>
    </FormGroup>
  </Form>
));
stories.add("Inline", () => (
  <Form>
    <FormGroup check inline>
      <Input id="checkbox1" type="checkbox" />
      <Label for="checkbox1" check>
        Checkbox non selezionato
      </Label>
    </FormGroup>
    <FormGroup check inline>
      <Input id="checkbox2" type="checkbox" defaultChecked />
      <Label for="checkbox2" check>
        Checkbox selezionato
      </Label>
    </FormGroup>
  </Form>
));
stories.add("Disabilitate", () => (
  <Form>
    <FormGroup check>
      <Input id="checkbox1" type="checkbox" disabled />
      <Label for="checkbox1" check>
        Checkbox disabilitato non selezionato
      </Label>
    </FormGroup>
    <FormGroup check>
      <Input id="checkbox2" type="checkbox" disabled defaultChecked />
      <Label for="checkbox2" check>
        Checkbox disabilitato selezionato
      </Label>
    </FormGroup>
  </Form>
));
stories.add("Gruppi di Checkbox", () => <CheckboxGroupsExample />);

const knobsStories = storiesOf("Componenti/Checkbox", module);
knobsStories.addDecorator(withKnobs);
knobsStories.add("Esempi interattivi", () => {
  const checked = boolean("Selezionato", true);
  const disabled = boolean("Disabilitato", false);
  const inline = boolean("Inline", false);
  const label = text("Label", "Checkbox");

  return (
    <Form>
      <FormGroup check inline={inline}>
        <Input
          id="checkbox1"
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={() => {}}
        />
        <Label for="checkbox1" check>
          {label} {checked ? "Selezionato" : ""}{" "}
          {disabled ? "Disabilitato" : ""} {inline ? "Inline" : ""}
        </Label>
      </FormGroup>
      <FormGroup check inline={inline}>
        <Input
          id="checkbox1"
          type="checkbox"
          checked={!checked}
          disabled={disabled}
          onChange={() => {}}
        />
        <Label for="checkbox1" check>
          {label} inverso {!checked ? "Selezionato" : ""}{" "}
          {disabled ? "Disabilitato" : ""} {inline ? "Inline" : ""}
        </Label>
      </FormGroup>
    </Form>
  );
});
