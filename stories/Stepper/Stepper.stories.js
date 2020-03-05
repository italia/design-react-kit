import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import Header from './docs/Heading.md'
import TextAndIcons from './docs/TextAndIcons.md'
import NavigationForMobile from './docs/NavigationForMobile.md'
import NavigationOfTheStepsDoc from './docs/NavigationOfTheSteps.md'
import OrderOfTheSteps from './docs/OrderOfTheSteps.md'
import VersionDarkBackground from './docs/VersionDarkBackground.md'

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
import ProgressBarDark from './ProgressBarDark'
import PalliniDark from './PalliniDark'
import SaveButtonDark from './SaveButtonDark'
import ConfirmButtonDark from './ConfirmButtonDark'

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
      text: TextAndIcons
    })(StepperTestAndIcons)
  )
  .add(
    'Order of the steps',
    withInfo({
      text: OrderOfTheSteps
    })(StepperOrderOfSteps)
  )
  .add(
    'Navigation of the steps',
    withInfo({
      text: NavigationOfTheStepsDoc
    })(NavigationOfTheSteps)
  )

storiesOf('Componenti/Stepper.Navigation variations for mobile', module)
  .add(
    'Progress bar',
    withInfo({
      text: NavigationForMobile
    })(ProgressBarNavMobile)
  )
  .add(
    'Pallini',
    withInfo({
      text: NavigationForMobile
    })(PalliniNavMobile)
  )
  .add(
    'Save Button',
    withInfo({
      text: NavigationForMobile
    })(SaveButton)
  )
  .add(
    'Confirm Button',
    withInfo({
      text: NavigationForMobile
    })(ConfirmButton)
  )

storiesOf('Componenti/Stepper', module)
  .addDecorator(withA11y)
  .add(
    'Version on a dark background',
    withInfo({
      text: VersionDarkBackground
    })(StepperDarkVersion)
  )
  .add(
    'Header Variants',
    withInfo({
      text: Header
    })(HeaderVariants)
  )

storiesOf(
  'Componenti/Stepper.Navigation variations for mobile - dark version',
  module
)
  .add(
    'Progress Bar',
    withInfo({
      text: NavigationForMobile
    })(ProgressBarDark)
  )
  .add(
    'Pallini',
    withInfo({
      text: NavigationForMobile
    })(PalliniDark)
  )
  .add(
    'Save button',
    withInfo({
      text: NavigationForMobile
    })(SaveButtonDark)
  )
  .add(
    'Confirm Button',
    withInfo({
      text: NavigationForMobile
    })(ConfirmButtonDark)
  )
