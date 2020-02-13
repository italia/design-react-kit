import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import Header from './docs/Heading.md'

import StepperTextOnly from './StepperTextOnly'
import StepperTestAndIcons from './StepperTextAndIcons'
import StepperOrderOfSteps from './StepperOrderOfSteps'
import NavigationOfTheSteps from './NavigationSteps'
import ProgressBarNavMobile from './ProgressBarNavMobile'
import PalliniNavMobile from './PalliniNavMobile'
import SaveButton from './SaveButton'
import ConfirmButton from './ConfirmButton'
import StepperDarkVersion from './StepperDarkVersion'
import HeaderVariants from './HeaderVariants'

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
  .add(
    'Navigation of the steps',
    withInfo({
      text: Header
    })(NavigationOfTheSteps)
  )

storiesOf('Componenti/Stepper.Navigation variations for mobile', module)
  .add(
    'Progress bar',
    withInfo({
      text: Header
    })(ProgressBarNavMobile)
  )
  .add(
    'Pallini',
    withInfo({
      text: Header
    })(PalliniNavMobile)
  )
  .add(
    'Save Button',
    withInfo({
      text: Header
    })(SaveButton)
  )
  .add(
    'Confirm Button',
    withInfo({
      text: Header
    })(ConfirmButton)
  )
 

storiesOf('Componenti/Stepper', module)
  .addDecorator(withA11y)
  .add(
    'Version on a dark background',
    withInfo({
      text: Header
    })(StepperDarkVersion)
  )
  .add(
    'Header Variants',
    withInfo({
      text: Header
    })(HeaderVariants)
  )