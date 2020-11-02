import { withInfo } from '@storybook/addon-info'
import Placeholder from './docs/Placeholder.md'
import { AvatarIcon, AvatarGroupContainer } from '../../src'

import SmallOverlappingAvatars from './SmallOverlappingAvatars'
import MediumOverlaidAvatars from './MediumOverlaidAvatars'

export default {
  title: 'Componenti/Avatar.Avatar groups Overlapping'
}

export const _SmallOverlappingAvatars = withInfo({
  text: Placeholder,
  propTables: [AvatarGroupContainer, AvatarIcon]
})(SmallOverlappingAvatars)

export const _MediumOverlaidAvatars = withInfo({
  text: Placeholder,
  propTables: [AvatarGroupContainer, AvatarIcon]
})(MediumOverlaidAvatars)
