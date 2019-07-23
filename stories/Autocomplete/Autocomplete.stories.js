import React from 'react'
import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import AutocompleteExample from './AutocompleteExample'

import InputAutocomplete from './docs/InputAutocomplete.md'

const stories = storiesOf('Componenti/Autocomplete', module)
stories.addDecorator(withA11y)

stories.add(
  'Input autocomplete',
  withInfo({
    text: InputAutocomplete
  })(() => <AutocompleteExample />)
)
