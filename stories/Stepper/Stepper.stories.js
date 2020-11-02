import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

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
  title: 'Componenti/Stepper',
  decorators: [withA11y]
}

export const TextOnly = withInfo({
  text: Header
})(StepperTextOnly)

export const _TextAndIcons = withInfo({
  text: TextAndIcons
})(StepperTestAndIcons)

_TextAndIcons.story = {
  name: 'Text and Icons'
}

export const _OrderOfTheSteps = withInfo({
  text: OrderOfTheSteps
})(StepperOrderOfSteps)

_OrderOfTheSteps.story = {
  name: 'Order of the steps'
}

export const _NavigationOfTheSteps = withInfo({
  text: NavigationOfTheStepsDoc
})(NavigationOfTheSteps)

_NavigationOfTheSteps.story = {
  name: 'Navigation of the steps'
}

export const VersionOnADarkBackground = withInfo({
  text: VersionDarkBackground
})(StepperDarkVersion)

VersionOnADarkBackground.story = {
  name: 'Version on a dark background'
}

export const _HeaderVariants = withInfo({
  text: Header
})(HeaderVariants)
