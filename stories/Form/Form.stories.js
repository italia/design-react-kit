import React from 'react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

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
  title: 'Componenti/Form.Form Validation',
  decorators: [withA11y]
}

export const Example = withInfo({
  text: Validation,
  propTables: [Input]
})(FormExampleComponent)
