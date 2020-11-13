import React from 'react'

import InputIconButtonExample from './Input/InputIcon/InputIconButtonExample'
import AutocompleteExample from './Autocomplete/AutocompleteExample'
import TextArea from './Input/TextArea/TextArea'

import Esempi from './docs/Input/Esempi.md'
import Placeholder from './docs/Input/Placeholder.md'
import IconButton from './docs/Input/IconButton.md'
import Password from './docs/Input/Password.md'
import Disabled from './docs/Input/Disabled.md'
import Readonly from './docs/Input/Readonly.md'
import Normalize from './docs/Input/Normalize.md'
import Textarea from './docs/Input/Textarea.md'
import InputAutocomplete from './docs/Input/InputAutocomplete.md'

import { Input } from '../../src'

export default {
  title: 'Componenti/Form/Input'
}

export const EsempiDiCampiDiInput = () => (
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

EsempiDiCampiDiInput.story = {
  name: 'Esempi di campi di input'
}

export const UtilizzoDiPlaceholderELabel = () => (
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

UtilizzoDiPlaceholderELabel.story = {
  name: 'Utilizzo di placeholder e label'
}

export const InputConIconaOBottoni = InputIconButtonExample

InputConIconaOBottoni.story = {
  name: 'Input con icona o bottoni'
}

export const InputPassword = () => (
  <Input
    type="password"
    id="exampleInputPassword"
    label="Password con label, placeholder e testo di aiuto"
    infoText="Inserisci almeno 8 caratteri e una lettera maiuscola"
  />
)

InputPassword.story = {
  name: 'Input password'
}

export const _Disabilitato = () => (
  <Input label="Contenuto disabilitato" id="exampleDisabled" disabled />
)

export const _Readonly = () => (
  <Input label="Contenuto in sola lettura" id="examplereadOnly" readOnly />
)

export const ReadonlyNormalizzato = () => (
  <Input label="Contenuto in sola lettura" id="exampleNormalized" normalized />
)

ReadonlyNormalizzato.story = {
  name: 'Readonly normalizzato'
}

export const _InputAutocomplete = () => <AutocompleteExample />

_InputAutocomplete.story = {
  name: 'Input autocomplete'
}

export const AreaDiTesto = () => (
  <TextArea rows="3" label="Esempio di area di testo" />
)

AreaDiTesto.story = {
  name: 'Area di testo'
}

export const AreaDiTestoConSegnaposto = () => (
  <TextArea
    rows="3"
    label="Esempio di area di testo"
    placeholder="Testo di esempio"
  />
)

AreaDiTestoConSegnaposto.story = {
  name: 'Area di testo con segnaposto'
}
