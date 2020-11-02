import { withInfo } from '@storybook/addon-info'
import NavigationForMobile from './docs/NavigationForMobile.md'
import ProgressBarDark from './ProgressBarDark'
import PalliniDark from './PalliniDark'
import SaveButtonDark from './SaveButtonDark'
import ConfirmButtonDark from './ConfirmButtonDark'

export default {
  title: 'Componenti/Stepper.Navigation variations for mobile - dark version'
}

export const _ProgressBar = withInfo({
  text: NavigationForMobile
})(ProgressBarDark)

export const _Pallini = withInfo({
  text: NavigationForMobile
})(PalliniDark)

export const __SaveButton = withInfo({
  text: NavigationForMobile
})(SaveButtonDark)

__SaveButton.story = {
  name: 'Save button'
}

export const __ConfirmButton = withInfo({
  text: NavigationForMobile
})(ConfirmButtonDark)
