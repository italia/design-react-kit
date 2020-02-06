import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import Examples from './Example'
import NotificationWithMessage from './NotificationWithMessage'
import dismissable from './dismissable'
import states from './States'
import RoundingOfCorners from './RoundingOfCorners'
import defaultLocation from './defaultLocation'
import fixedPosition from './FixedPosition'

import Example from './docs/Example.md'
import NotificationWithMessageText from './docs/NotificationWithMessage.md'
import dismissableText from './docs/dismissable.md'
import stateText from './docs/States.md'
import RoundingText from './docs/Rounding.md'
import defaultLocationText from './docs/DefaultLocation.md'
import fixedPositionText from './docs/FixedPosition.md'

storiesOf('Componenti/Notification', module)
  .addDecorator(withA11y)
  .add(
    'Example',
    withInfo({
      text: Example
    })(Examples)
  )
  .add(
    'Notification with message',
    withInfo({
      text: NotificationWithMessageText
    })(NotificationWithMessage)
  )
  .add(
    'Dismissable',
    withInfo({
      text: dismissableText
    })(dismissable)
  )
  .add(
    'States',
    withInfo({
      text: stateText
    })(states)
  )
  .add(
    'Rounding of Corners',
    withInfo({
      text: RoundingText
    })(RoundingOfCorners)
  )
  .add(
    'Default Location',
    withInfo({
      text: defaultLocationText
    })(defaultLocation)
  )
  .add(
    'Fixed Positions',
    withInfo({
      text: fixedPositionText
    })(fixedPosition)
  )
