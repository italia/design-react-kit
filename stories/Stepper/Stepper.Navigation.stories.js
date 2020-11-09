import NavigationForMobile from './docs/NavigationForMobile.md'

import ProgressBarNavMobile from './ProgressBarNavMobile'
import PalliniNavMobile from './PalliniNavMobile'
import SaveButton from './SaveButton'
import ConfirmButton from './ConfirmButton'

export default {
  title: 'Componenti/Stepper.Navigation variations for mobile'
}

export const ProgressBar = ProgressBarNavMobile

ProgressBar.story = {
  name: 'Progress bar'
}

export const Pallini = PalliniNavMobile

export const _SaveButton = SaveButton

export const _ConfirmButton = ConfirmButton
