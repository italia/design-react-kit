import React from 'react'

import { Input } from '../../src'

import Validation from './docs/Validation/Validation.md'

const FormExampleComponent = () => (
  <div>
    <Input label="Valid Input" valid />
    <Input label="Invalid Input" invalid />
    <Input value="Mario" label="First name" infoText="Validated!" valid />
    <Input label="Username" infoText="Please choose a username." invalid />
  </div>
)

export default {
  title: 'Componenti/Form.Form Validation'
}

export const Example = FormExampleComponent
