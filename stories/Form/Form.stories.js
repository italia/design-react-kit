import React from 'react'
import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs/react'

import { Form, FormGroup, Label, Input, FormText, Toggle } from '../../src'

import InputIconButtonExample from './Input/InputIcon/InputIconButtonExample'
import AutocompleteExample from './Autocomplete/AutocompleteExample'
import { TextAreaClassic, TextAreaPlaceholder } from './Input/TextArea/TextArea'
import CheckboxRadioGroupsExample from './CheckboxRadio/Groups'
import {
  TogglesExampleEnabled,
  TogglesExampleDisabled
} from './Toggles/TogglesExample'
import TogglesGroupsExample from './Toggles/TogglesGroupsExample'

import Esempi from './docs/Input/Esempi.md'
import Placeholder from './docs/Input/Placeholder.md'
import IconButton from './docs/Input/IconButton.md'
import Password from './docs/Input/Password.md'
import Disabled from './docs/Input/Disabled.md'
import Readonly from './docs/Input/Readonly.md'
import Normalize from './docs/Input/Normalize.md'
import Textarea from './docs/Input/Textarea.md'
import InputAutocomplete from './docs/Input/InputAutocomplete.md'
import {
  SelectExampleClassic,
  SelectExampleDisabled,
  SelectExampleMulti,
  SelectExampleGroups,
  SelectExampleReset,
  SelectExampleSearch,
  SelectExampleInteractive
} from './Select/SelectExamples'
import Select from 'react-select'

import CheckboxRadio from './docs/CheckboxRadio/CheckboxRadio.md'
import Disabilitato from './docs/CheckboxRadio/Disabilitato.md'
import Gruppi from './docs/CheckboxRadio/Gruppi.md'
import Inline from './docs/CheckboxRadio/Inline.md'

import GruppiToggles from './docs/Toggles/GruppiToggles.md'
import Toggles from './docs/Toggles/Toggles.md'
import TogglesDisabilitate from './docs/Toggles/TogglesDisabilitate.md'

import SelectEsempi from './docs/Select/Esempi.md'
import SelectDisabled from './docs/Select/Disabled.md'
import SelectReset from './docs/Select/Reset.md'
import SelectSearchable from './docs/Select/Searchable.md'
import SelectMultipla from './docs/Select/Multipla.md'
import SelectGrouped from './docs/Select/Grouped.md'

import Validation from './docs/Validation/Validation.md'

const InputTypesExamples = () => (
  <div>
    <Input type="text" label="Campo di tipo testuale" id="exampleInputText" />
    <Input type="email" label="Campo di tipo email" id="exampleInputEmail" />
    <Input
      type="number"
      label="Campo di tipo numerico"
      id="exampleInputNumber"
    />
    <Input type="tel" label="Campo di tipo telefono" id="exampleInputTel" />
    <Input
      type="time"
      label="Campo di tipo ora"
      id="exampleInputTime"
      min="9:00"
      max="18:00"
    />
  </div>
)

const InputPlaceHolderLabelComponent = () => (
  <div>
    <Input label="Etichetta di esempio" id="exampleLabel" />
    <Input
      label="Etichetta di esempio"
      type="text"
      placeholder="Testo di esempio"
      id="examplePlaceholder"
    />
    <Input
      label="Etichetta di esempio"
      type="text"
      placeholder="Testo di esempio"
      infoText="Ulteriore testo informativo"
      id="exampleinfoText"
    />
  </div>
)

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

const FormExampleComponent = () => (
  <div>
    <Input label="Valid Input" valid />
    <Input label="Invalid Input" invalid />
    <Input value="Mario" label="First name" infoText="Validated!" valid />
    <Input label="Username" infoText="Please choose a username." invalid />
  </div>
)

storiesOf('Componenti/Form.Input', module)
  .addDecorator(withA11y)
  .add(
    'Esempi di campi di input',
    withInfo({
      text: Esempi
    })(InputTypesExamples)
  )
  .add(
    'Utilizzo di placeholder e label',
    withInfo({
      text: Placeholder
    })(InputPlaceHolderLabelComponent)
  )
  .add(
    'Input con icona o bottoni',
    withInfo({
      text: IconButton
    })(InputIconButtonExample)
  )
  .add(
    'Input password',
    withInfo({
      text: Password
    })(() => (
      <Input
        type="password"
        id="exampleInputPassword"
        label="Password con label, placeholder e testo di aiuto"
        infoText="Inserisci almeno 8 caratteri e una lettera maiuscola"
      />
    ))
  )
  .add(
    'Disabilitato',
    withInfo({
      text: Disabled
    })(() => (
      <Input label="Contenuto disabilitato" id="exampleDisabled" disabled />
    ))
  )
  .add(
    'Readonly',
    withInfo({
      text: Readonly
    })(() => (
      <Input label="Contenuto in sola lettura" id="examplereadOnly" readOnly />
    ))
  )
  .add(
    'Readonly normalizzato',
    withInfo({
      text: Normalize
    })(() => (
      <Input
        label="Contenuto in sola lettura"
        id="exampleNormalized"
        normalized
      />
    ))
  )
  .add(
    'Input autocomplete',
    withInfo({
      text: InputAutocomplete
    })(AutocompleteExample)
  )
  .add(
    'Area di testo',
    withInfo({
      text: Textarea
    })(TextAreaClassic)
  )
  .add(
    'Area di testo con segnaposto',
    withInfo({
      text: Textarea
    })(TextAreaPlaceholder)
  )
storiesOf('Componenti/Form.Checkbox and radio', module)
  .addDecorator(withA11y)
  .add(
    'Checkbox e radio',
    withInfo({
      text: CheckboxRadio
    })(CheckboxRadioComponent)
  )
  .add(
    'Inline',
    withInfo({
      text: Inline
    })(InlineComponent)
  )
  .add(
    'Disabilitato',
    withInfo({
      text: Disabilitato
    })(DisabilitatoComponent)
  )
  .add(
    'Gruppi',
    withInfo({
      text: Gruppi,
      propTables: [Input, Label, FormText],
      propTablesExclude: []
    })(CheckboxRadioGroupsExample)
  )
storiesOf('Componenti/Form.Toggles', module)
  .addDecorator(withA11y)
  .add(
    'Toggles',
    withInfo({
      text: Toggles,
      propTables: [Toggle],
      propTablesExclude: []
    })(TogglesExampleEnabled)
  )
  .add(
    'Toggles Disabilitate',
    withInfo({
      text: TogglesDisabilitate,
      propTables: [Toggle],
      propTablesExclude: []
    })(TogglesExampleDisabled)
  )
  .add(
    'Gruppi di Toggles',
    withInfo({
      text: GruppiToggles,
      propTables: [Toggle, FormText],
      propTablesExclude: [TogglesGroupsExample]
    })(TogglesGroupsExample)
  )

storiesOf('Componenti/Form.Select', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add(
    'Select classica',
    withInfo({
      text: SelectEsempi,
      propTables: [Select],
      propTablesExclude: []
    })(SelectExampleClassic)
  )
  .add(
    'Select disabilitata',
    withInfo({
      text: SelectDisabled,
      propTables: [Select],
      propTablesExclude: []
    })(SelectExampleDisabled)
  )
  .add(
    'Select con reset',
    withInfo({
      text: SelectReset,
      propTables: [Select],
      propTablesExclude: []
    })(SelectExampleReset)
  )
  .add(
    'Select con ricerca',
    withInfo({
      text: SelectSearchable,
      propTables: [Select],
      propTablesExclude: []
    })(SelectExampleSearch)
  )
  .add(
    'Select Multipla',
    withInfo({
      text: SelectMultipla,
      propTables: [Select],
      propTablesExclude: []
    })(SelectExampleMulti)
  )
  .add(
    'Select con gruppi',
    withInfo({
      text: SelectGrouped,
      propTables: [Select],
      propTablesExclude: []
    })(SelectExampleGroups)
  )
  .add(
    'Select configurabile',
    withInfo({
      text: SelectGrouped,
      propTables: [Select],
      propTablesExclude: []
    })(SelectExampleInteractive)
  )

storiesOf('Componenti/Form.Form Validation', module)
  .addDecorator(withA11y)
  .add(
    'Example',
    withInfo({
      text: Validation,
      propTables: [Input]
    })(FormExampleComponent)
  )
