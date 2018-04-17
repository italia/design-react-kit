import React from "react";
import { storiesOf } from "@storybook/react";

import {
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  InputGroup,
  InputGroupAddon,
  Input,
  FormText,
  Button,
  PasswordInput,
  Select
} from "../../src";

import FormInputFileExample from "./FormInputFileExample";
import FormGroupsExample from "./FormGroupsExample";
import FormSizingExample from "./FormSizingExample";
import FormInputPasswordExample from "./FormInputPasswordExample";

import SelectExample from "../Select/SelectExample";
import CheckboxGroupsExample from "../Checkbox/CheckboxGroupsExample";
import RadioGroupsExample from "../Radio/RadioGroupsExample";
import AutocompleteExample from "../Autocomplete/AutocompleteExample";
import TogglesExample from "../Toggle/TogglesExample";
import TogglesGroupsExample from "../Toggle/TogglesGroupsExample";

const stories = storiesOf("Componenti/Form", module);

stories.add("Input text", () => (
  <Form>
    <InputGroup className="pb-3">
      <InputGroupAddon addonType="prepend">
        <span className="input-group-text it-search" id="basic-addon1" />
      </InputGroupAddon>
      <Input type="text" placeholder="Username" />
    </InputGroup>
    <FormGroup>
      <Input type="text" name="text" id="exampleInputText" />
      <Label for="exampleInputText">Nominativo</Label>
    </FormGroup>
    <FormGroup>
      <Input type="number" name="number" id="exampleInputNumber" />
      <Label for="exampleInputNumber">Numero partecipanti</Label>
    </FormGroup>
    <FormGroup>
      <Input type="email" name="email" id="exampleInputEmail1" />
      <Label for="exampleInputEmail1">Numero partecipanti</Label>
      <FormText color="muted">
        Non condivideremo mai la tua email con nessun altro.
      </FormText>
    </FormGroup>
  </Form>
));
stories.add("Input password", () => <FormInputPasswordExample />);
stories.add("Input file", () => <FormInputFileExample />);
stories.add("Input autocomplete", () => <AutocompleteExample />);
stories.add("Select", () => <SelectExample />);
stories.add("Select multipla", () => <SelectExample multi />);
stories.add("Select con ricerca", () => <SelectExample search />);
stories.add("Select con gruppi di opzioni", () => (
  <SelectExample group multi />
));
stories.add("Textarea", () => (
  <Form>
    <FormGroup>
      <Input type="textarea" name="text" id="exampleText" rows="3" />
      <Label for="exampleText">Example textarea</Label>
    </FormGroup>
  </Form>
));
stories.add("Personalizzazioni", () => (
  <Form>
    <FormGroup className="m-3">
      <i className="ico-prefix it-youtube" />
      <Input type="text" id="videoYoutube" />
      <Label for="videoYoutube">Link video di youtube</Label>
    </FormGroup>
    <SelectExample icon />
  </Form>
));
stories.add("Dimensioni", () => (
  <section>
    <Form className="m-3">
      <Input placeholder="lg" bsSize="lg" />
      <Input placeholder="Input predefinito" />
      <Input placeholder="sm" bsSize="sm" />
    </Form>

    <Form className="m-3">
      <Select
        bsSize="lg"
        placeholder="Select grande"
        options={[{ value: "", label: "Select grande" }]}
      />
      <Select
        placeholder="Select predefinita"
        options={[{ value: "", label: "Select predefinita" }]}
      />
      <Select
        bsSize="sm"
        placeholder="Select piccola"
        options={[{ value: "", label: "Select piccola" }]}
      />
    </Form>
  </section>
));
stories.add("Readonly", () => (
  <Form className="m-3">
    <Input type="text" placeholder="Contenuto in sola lettura" readOnly />
  </Form>
));
stories.add("Readonly normalizzato", () => (
  <Form className="m-3">
    <FormGroup>
      <Input plaintext readOnly id="staticEmail">
        email@example.com
      </Input>
      <Label for="staticEmail">Email</Label>
    </FormGroup>
  </Form>
));
stories.add("Checkbox e radio", () => (
  <Form className="m-3">
    <FormGroup check>
      <Input id="checkbox1" type="checkbox" />
      <Label for="checkbox1" check>
        Checkbox di esempio
      </Label>
    </FormGroup>

    <FormGroup check>
      <Input name="gruppo1" type="radio" id="radio1" defaultChecked />
      <Label check for="radio1">
        Radio di esempio 1
      </Label>
    </FormGroup>

    <FormGroup check>
      <Input name="gruppo1" type="radio" id="radio2" />
      <Label check for="radio2">
        Radio di esempio 2
      </Label>
    </FormGroup>
  </Form>
));
stories.add("Inline", () => (
  <section>
    <Form className="m-3">
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

    <Form className="m-3">
      <FormGroup check inline>
        <Input name="gruppo1" type="radio" id="radio1" defaultChecked />
        <Label check for="radio1">
          Opzione 1
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Input name="gruppo1" type="radio" id="radio2" />
        <Label check for="radio2">
          Opzione 2
        </Label>
      </FormGroup>
    </Form>
  </section>
));
stories.add("Disabilitato", () => (
  <section>
    <Form className="m-3">
      <FormGroup check>
        <Input disabled id="checkbox1" type="checkbox" />
        <Label for="checkbox1" check>
          Checkbox disabilitato non selezionato
        </Label>
      </FormGroup>
      <FormGroup check>
        <Input disabled id="checkbox2" type="checkbox" defaultChecked />
        <Label for="checkbox2" check>
          Checkbox disabilitato selezionato
        </Label>
      </FormGroup>
    </Form>

    <Form className="m-3">
      <FormGroup check>
        <Input
          disabled
          name="gruppo1"
          type="radio"
          id="radio1"
          defaultChecked
        />
        <Label check for="radio1">
          Opzione disabilitata selezionata
        </Label>
      </FormGroup>
      <FormGroup check>
        <Input disabled name="gruppo1" type="radio" id="radio2" />
        <Label check for="radio2">
          Opzione disabilitata non selezionata
        </Label>
      </FormGroup>
    </Form>
  </section>
));
stories.add("Gruppi", () => (
  <section>
    <CheckboxGroupsExample />
    <RadioGroupsExample />
  </section>
));
stories.add("Toggles", () => <TogglesExample />);
stories.add("Toggles Disabilitate", () => <TogglesExample disabled />);
stories.add("Gruppi di Toggles", () => <TogglesGroupsExample />);

const moreStories = storiesOf("Componenti/Form/Layout", module);

moreStories.add("Form group", () => (
  <Form>
    <FormGroup>
      <Label for="FormGroupExampleInput">Esempio di etichetta</Label>
      <Input type="text" name="text" id="FormGroupExampleInput" />
    </FormGroup>
    <FormGroup>
      <Label for="FormGroupExampleInput2">Altro esempio di etichetta</Label>
      <Input type="text" name="text" id="FormGroupExampleInput2" />
    </FormGroup>
  </Form>
));
moreStories.add("Form a griglia", () => (
  <section>
    <Form>
      <Row className="m-3">
        <FormGroup col>
          <Label for="formNome">Nome</Label>
          <Input type="text" name="text" id="formNome" />
        </FormGroup>
        <FormGroup col>
          <Label for="formCognome">Cognome</Label>
          <Input type="text" name="text" id="formCognome" />
        </FormGroup>
      </Row>
    </Form>

    <FormGroupsExample />
  </section>
));
moreStories.add("Dimensione delle colonne", () => (
  <section>
    <Form className="m-3">
      <div className="form-row">
        <FormGroup className="col-7">
          <Label for="Citta" sm={7}>
            Città
          </Label>
          <Input type="text" id="Citta" />
        </FormGroup>
        <FormGroup col>
          <Label for="Comune" sm={1}>
            Comune
          </Label>
          <Input type="text" id="Comune" />
        </FormGroup>
        <FormGroup col>
          <Label for="CAP" sm={1}>
            CAP
          </Label>
          <Input type="text" id="CAP" />
        </FormGroup>
      </div>
    </Form>
  </section>
));
moreStories.add("Auto-dimensionamento", () => <FormSizingExample />);
moreStories.add("Inline forms", () => (
  <section>
    <FormSizingExample inline />

    <Form inline className="m-3">
      <Label className="my-1 mr-2" for="inlineFormCustomSelectPref">
        Preference
      </Label>
      <Select
        id="inlineFormCustomSelectPref"
        placeholder="Choose..."
        options={[
          { value: "1", label: "One" },
          { value: "2", label: "Two" },
          { value: "3", label: "Three" }
        ]}
      />

      <div className="custom-control custom-checkbox my-1 mr-sm-2">
        <Input
          type="checkbox"
          id="customControlInline"
          className="custom-control-input"
        />
        <Label className="custom-control-label" for="customControlInline">
          Remember my preference
        </Label>
      </div>

      <Button color="primary" type="submit">
        Submit
      </Button>
    </Form>
  </section>
));
moreStories.add("Testo di aiuto", () => (
  <section>
    <Form className="m-2">
      <FormGroup>
        <PasswordInput id="inputPassword5" className="form-control" />
        <Label for="inputPassword5">Password</Label>
        <FormText id="passwordHelpBlock" color="muted">
          La tua password deve essere lunga 8-20 caratteri, contenere lettere e
          numeri e non deve contenere spazi, caratteri speciali o emoji.
        </FormText>
      </FormGroup>
    </Form>

    <Form inline>
      <FormGroup>
        <PasswordInput id="inputPassword6" className="mx-sm-3" />
        <Label for="inputPassword6">Password</Label>
        <FormText id="passwordHelpInline" color="muted">
          Deve essere lunga 8-20 caratteri.
        </FormText>
      </FormGroup>
    </Form>
  </section>
));
moreStories.add("Form disabilitato", () => (
  <section className="m-3">
    <Form>
      <fieldset disabled>
        <FormGroup>
          <Input
            id="disabledTextInput"
            type="text"
            placeholder="Disabled input"
            disabled
          />
          <Label for="disabledTextInput">Input </Label>
        </FormGroup>

        <FormGroup>
          <Select
            id="exampleSelect"
            placeholder="Scegli..."
            options={[{ value: "", label: "..." }]}
            disabled
          />
          <Label for="exampleSelect">Select disabilitata</Label>
        </FormGroup>

        <FormGroup>
          <select id="disabledSelect" className="form-control">
            <option>Disabled select</option>
          </select>
          <Label for="disabledSelect">Select default disabilitata</Label>
        </FormGroup>

        <div className="form-check-label">
          <Input type="checkbox" id="disabledFieldsetCheck" disabled />
          <Label check for="disabledFieldsetCheck">
            Check disabilitato
          </Label>
        </div>
        <Button color="primary" className="mt-3" type="submit" disabled>
          Submit
        </Button>
      </fieldset>
    </Form>
  </section>
));
