import { withInfo } from '@storybook/addon-info'

import Placeholder from './docs/Placeholder.md'
import {
  AvatarIcon,
  AvatarContainer,
  AvatarPresence,
  AvatarStatus,
  AvatarWrapper
} from '../../src'

import UserPresence from './UserPresence'
import UserStatus from './UserStatus'

export default {
  title: 'Componenti/Avatar.Behavior'
}

export const _UserPresence = withInfo({
  text: Placeholder,
  propTables: [AvatarIcon, AvatarContainer, AvatarPresence, AvatarWrapper]
})(UserPresence)

export const _UserStatus = withInfo({
  text: Placeholder,
  propTables: [AvatarIcon, AvatarContainer, AvatarStatus, AvatarWrapper]
})(UserStatus)
