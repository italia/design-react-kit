import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import Homepage from './homepage/Homepage'
import Amministrazione from './amministrazione/Amministrazione'

storiesOf('Introduzione/Introduzione/Kit Comuni', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add(
    'Homepage Template',
    withInfo({
      // text: Esempi
    })(Homepage)
  )
  .add(
    'Amministrazione Template',
    withInfo({
      // text: Esempi
    })(Amministrazione)
  )
