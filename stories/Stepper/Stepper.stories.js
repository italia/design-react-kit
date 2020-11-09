import Header from './docs/Heading.md'
import TextAndIcons from './docs/TextAndIcons.md'
import NavigationOfTheStepsDoc from './docs/NavigationOfTheSteps.md'
import OrderOfTheSteps from './docs/OrderOfTheSteps.md'
import VersionDarkBackground from './docs/VersionDarkBackground.md'

import StepperTextOnly from './StepperTextOnly'
import StepperTestAndIcons from './StepperTextAndIcons'
import StepperOrderOfSteps from './StepperOrderOfSteps'
import NavigationOfTheSteps from './NavigationSteps'
import StepperDarkVersion from './StepperDarkVersion'
import HeaderVariants from './HeaderVariants'

export default {
  title: 'Componenti/Stepper'
}

export const TextOnly = StepperTextOnly

export const _TextAndIcons = StepperTestAndIcons

_TextAndIcons.story = {
  name: 'Text and Icons'
}

export const _OrderOfTheSteps = StepperOrderOfSteps

_OrderOfTheSteps.story = {
  name: 'Order of the steps'
}

export const _NavigationOfTheSteps = NavigationOfTheSteps

_NavigationOfTheSteps.story = {
  name: 'Navigation of the steps'
}

export const VersionOnADarkBackground = StepperDarkVersion

VersionOnADarkBackground.story = {
  name: 'Version on a dark background'
}

export const _HeaderVariants = HeaderVariants
