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

export default {
  title: 'Componenti/Notification'
}

export const _Example = Examples

export const _NotificationWithMessage = NotificationWithMessage

_NotificationWithMessage.story = {
  name: 'Notification with message'
}

export const Dismissable = dismissable

export const States = states

export const _RoundingOfCorners = RoundingOfCorners

_RoundingOfCorners.story = {
  name: 'Rounding of Corners'
}

export const DefaultLocation = defaultLocation

export const FixedPositions = fixedPosition
