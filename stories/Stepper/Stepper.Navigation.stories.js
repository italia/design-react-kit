import { withInfo } from '@storybook/addon-info'
import NavigationForMobile from './docs/NavigationForMobile.md'

import ProgressBarNavMobile from './ProgressBarNavMobile'
import PalliniNavMobile from './PalliniNavMobile'
import SaveButton from './SaveButton'
import ConfirmButton from './ConfirmButton'

export default {
  title: 'Componenti/Stepper.Navigation variations for mobile'
}

export const ProgressBar = withInfo({
  text: NavigationForMobile
})(ProgressBarNavMobile)

ProgressBar.story = {
  name: 'Progress bar'
}

export const Pallini = withInfo({
  text: NavigationForMobile
})(PalliniNavMobile)

export const _SaveButton = withInfo({
  text: NavigationForMobile
})(SaveButton)

export const _ConfirmButton = withInfo({
  text: NavigationForMobile
})(ConfirmButton)
