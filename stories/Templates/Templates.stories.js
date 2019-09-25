import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select } from '@storybook/addon-knobs/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import Homepage from './homepage/Homepage';

storiesOf('Introduzione/Templates', module)
.addDecorator(withA11y)
.addDecorator(withKnobs)
  .add('Homepage', withInfo({
    // text: Esempi
  })(Homepage))
