import React from 'react'

import { Form, FormGroup, Label, Input, FormText } from '../../src'

import CheckboxGroupsExample from './CheckboxRadio/CheckboxGroupsExample'
import RadioGroupsExample from './CheckboxRadio/RadioGroupsExample'

import CheckboxRadio from './docs/CheckboxRadio/CheckboxRadio.md'
import Disabilitato from './docs/CheckboxRadio/Disabilitato.md'
import Gruppi from './docs/CheckboxRadio/Gruppi.md'
import Inline from './docs/CheckboxRadio/Inline.md'

const CheckboxRadioComponent = () => (
  <Form className="m-3">
    <fieldset>
      <legend>Checkbox</legend>
      <FormGroup check>
        <Input id="checkbox1" type="checkbox" />
        <Label for="checkbox1" check>
          Checkbox di esempio
        </Label>
      </FormGroup>
    </fieldset>

    <fieldset>
      <legend>Radio</legend>

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
    </fieldset>
  </Form>
)
const InlineComponent = () => (
  <section>
    <fieldset>
      <legend>Checkbox</legend>
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
    </fieldset>

    <fieldset>
      <legend>Radio</legend>
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
    </fieldset>
  </section>
)
const DisabilitatoComponent = () => (
  <section>
    <fieldset>
      <legend>Checkbox</legend>
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
    </fieldset>

    <fieldset>
      <legend>Radio</legend>
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
    </fieldset>
  </section>
)
const GruppiComponent = () => (
  <section>
    <CheckboxGroupsExample />
    <RadioGroupsExample />
  </section>
)

export default {
  title: 'Componenti/Form/Checkbox and radio'
}

export const CheckboxERadio = CheckboxRadioComponent

CheckboxERadio.story = {
  name: 'Checkbox e radio'
}

export const _Inline = InlineComponent

export const __Disabilitato = DisabilitatoComponent

export const _Gruppi = GruppiComponent
