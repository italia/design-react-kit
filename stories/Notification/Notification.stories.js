import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'
import Esempi from '../LinkList/docs/Esempi.md'

import Examples from './Example'
import NotificationWithMessage from './NotificationWithMessage'
import dismissable from './dismissable'
import states from './States'
import RoundingOfCorners from './RoundingOfCorners'

storiesOf('Componenti/Notification', module)
  .addDecorator(withA11y)
  .add(
    'Example',
    withInfo({
      text: Esempi
    })(Examples)
  )
  .add(
    'Notification with message',
    withInfo({
      text: Esempi
    })(NotificationWithMessage)
  )
  .add(
    'Dismissable',
    withInfo({
      text: Esempi
    })(dismissable)
  )
  .add(
    'States',
    withInfo({
      text: Esempi
    })(states)
  )
  .add(
    'Rounding of Corners',
    withInfo({
      text: Esempi
    })(RoundingOfCorners)
  )
