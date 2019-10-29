import React from 'react'
import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import AvatarWithImage from './AvatarWithImage'
import AvatarWithText from './AvatarWithText'
import AvatarWithIcon from './AvatarWithIcon'
import AvatarLink from './AvatarLink'
import Esempi from '../Cookiebar/docs/example.md'
import AvatarIcon from '../../src/components/Avatar/AvatarIcon'
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
      text: Esempi,
      propTables: [AvatarWithImage, AvatarIcon]
    })(AvatarWithImage)
  )
  .add(
    'Avatar with text',
    withInfo({
      text: Esempi,
      propTables: [AvatarWithText, AvatarIcon]
    })(AvatarWithText)
  )
  .add(
    'Avatar with icon',
    withInfo({
      text: Esempi,
      propTables: [AvatarWithIcon, AvatarIcon]
    })(AvatarWithIcon)
  )
  .add(
    'Avatar link',
    withInfo({
      text: Esempi,
      propTables: [AvatarLink, AvatarIcon]
    })(AvatarLink)
  )
  .add(
    'Avatar link with Tooltip',
    withInfo({
      text: Esempi,
      propTables: [AvatarLink, AvatarIcon]
    })(AvatarLinkWithTooltip)
  )

storiesOf('Componenti/Avatar.Avatar groups.List', module)
  .add(
    'Small List',
    withInfo({
      text: Esempi,
      propTables: [AvatarLink, AvatarIcon]
    })(AvatarSmallList)
  )
  .add(
    'Media List',
    withInfo({
      text: Esempi,
      propTables: [AvatarLink, AvatarIcon]
    })(AvatarMediaList)
  )

storiesOf('Componenti/Avatar.Avatar groups.Overlapping Avatars', module)
  .add(
    'Small Overlapping Avatars',
    withInfo({
      text: Esempi,
      propTables: [AvatarLink, AvatarIcon]
    })(() => <SmallOverlappingAvatars />)
  )
  .add(
    'Medium Overlaid Avatars',
    withInfo({
      text: Esempi,
      propTables: [AvatarLink, AvatarIcon]
    })(() => <MediumOverlaidAvatars />)
  )

storiesOf('Componenti/Avatar.Behavior', module)
  .add(
    'User Presence',
    withInfo({
      text: Esempi,
      propTables: [AvatarLink, AvatarIcon]
    })(UserPresence)
  )
  .add(
    'User Status',
    withInfo({
      text: Esempi,
      propTables: [AvatarLink, AvatarIcon]
    })(UserStatus)
  )

storiesOf('Componenti/Avatar', module).add(
  'Avatar with additional text',
  withInfo({
    text: Esempi,
    propTables: [AvatarLink, AvatarIcon]
  })(AvatarWithAdditionalText)
)
