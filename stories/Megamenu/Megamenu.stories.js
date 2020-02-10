import React from 'react'
import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import MegamenuExample from './MegamenuExample'

storiesOf('Componenti/Megamenu', module)
  .addDecorator(withA11y)
  .add(
    'Esempi',
    withInfo({
      text: 'huhu'
    })(() => <MegamenuExample />)
  )
