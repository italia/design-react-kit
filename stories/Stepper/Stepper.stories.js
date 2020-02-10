import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import Header from './docs/Heading.md'

import StepperTextOnly from './StepperTextOnly'
import StepperTestAndIcons from './StepperTestAndIcons'
import StepperOrderOfSteps from './StepperOrderOfSteps'

storiesOf('Componenti/Stepper', module)
  .addDecorator(withA11y)
  .add(
    'Text Only',
    withInfo({
      text: Header
    })(StepperTextOnly)
  )
  .add(
    'Text and Icons',
    withInfo({
      text: Header
    })(StepperTestAndIcons)
  )
  .add(
    'Order of the steps',
    withInfo({
      text: Header
    })(StepperOrderOfSteps)
  )
