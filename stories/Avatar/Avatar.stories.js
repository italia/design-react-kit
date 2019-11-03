import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import {
  AvatarIcon,
  AvatarGroupContainer,
  AvatarContainer,
  AvatarPresence,
  AvatarStatus,
  AvatarWrapper,
  AvatarExtraText
} from '../../src'
import Placeholder from './docs/Placeholder.md'
import AvatarWithImage from './AvatarWithImage'
import AvatarWithText from './AvatarWithText'
import AvatarWithIcon from './AvatarWithIcon'
import AvatarLink from './AvatarLink'
import AvatarLinkWithTooltip from './AvatarLinkWithTooltip'
import AvatarSmallList from './AvatarSmallList'
import AvatarMediaList from './AvatarMediaList'
import SmallOverlappingAvatars from './SmallOverlappingAvatars'
import MediumOverlaidAvatars from './MediumOverlaidAvatars'
import UserPresence from './UserPresence'
import UserStatus from './UserStatus'
import AvatarWithAdditionalText from './AvatarWithAdditionalText'

storiesOf('Componenti/Avatar', module)
  .addDecorator(withA11y)
  .add(
    'Avatar with image',
    withInfo({
      text: Placeholder,
      propTables: [AvatarContainer, AvatarIcon]
    })(AvatarWithImage)
  )
  .add(
    'Avatar with text',
    withInfo({
      text: Placeholder,
      propTables: [AvatarContainer, AvatarIcon]
    })(AvatarWithText)
  )
  .add(
    'Avatar with icon',
    withInfo({
      text: Placeholder,
      propTables: [AvatarContainer, AvatarIcon]
    })(AvatarWithIcon)
  )
  .add(
    'Avatar link',
    withInfo({
      text: Placeholder,
      propTables: [AvatarContainer, AvatarIcon]
    })(AvatarLink)
  )
  .add(
    'Avatar link with Tooltip',
    withInfo({
      text: Placeholder,
      propTables: [AvatarContainer, AvatarIcon]
    })(AvatarLinkWithTooltip)
  )

storiesOf('Componenti/Avatar.Avatar groups.List', module)
  .add(
    'Small List',
    withInfo({
      text: Placeholder,
      propTables: [AvatarIcon]
    })(AvatarSmallList)
  )
  .add(
    'Media List',
    withInfo({
      text: Placeholder,
      propTables: [AvatarIcon]
    })(AvatarMediaList)
  )

storiesOf('Componenti/Avatar.Avatar groups.Overlapping Avatars', module)
  .add(
    'Small Overlapping Avatars',
    withInfo({
      text: Placeholder,
      propTables: [AvatarGroupContainer, AvatarIcon]
    })(SmallOverlappingAvatars)
  )
  .add(
    'Medium Overlaid Avatars',
    withInfo({
      text: Placeholder,
      propTables: [AvatarGroupContainer, AvatarIcon]
    })(MediumOverlaidAvatars)
  )

storiesOf('Componenti/Avatar.Behavior', module)
  .add(
    'User Presence',
    withInfo({
      text: Placeholder,
      propTables: [AvatarIcon, AvatarContainer, AvatarPresence, AvatarWrapper]
    })(UserPresence)
  )
  .add(
    'User Status',
    withInfo({
      text: Placeholder,
      propTables: [AvatarIcon, AvatarContainer, AvatarStatus, AvatarWrapper]
    })(UserStatus)
  )

storiesOf('Componenti/Avatar', module).add(
  'Avatar with additional text',
  withInfo({
    text: Placeholder,
    propTables: [AvatarContainer, AvatarIcon, AvatarExtraText, AvatarWrapper]
  })(AvatarWithAdditionalText)
)
