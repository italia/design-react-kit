import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs/react'

import Footer from './basic'

storiesOf('Componenti/Footer', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('Footer', withInfo({})(Footer))
