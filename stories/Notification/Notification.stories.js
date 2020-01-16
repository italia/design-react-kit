import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'
import Esempi from '../LinkList/docs/Esempi.md'

import Examples from './Example'

storiesOf('Componenti/Notification', module)
  .addDecorator(withA11y)
  .add(
    'Example',
    withInfo({
      text: Esempi
    })(Examples)
  )
