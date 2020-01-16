import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'
import Esempi from '../LinkList/docs/Esempi.md'

import Examples from './Example'
import NotificationWithMessage from './NotificationWithMessage'
import dismissable from './dismissable'

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
