import { withA11y } from '@storybook/addon-a11y'

import {
  AvatarIcon,
  AvatarContainer,
  AvatarWrapper,
  AvatarExtraText
} from '../../src'
import Placeholder from './docs/Placeholder.md'
import AvatarWithImage from './AvatarWithImage'
import AvatarWithText from './AvatarWithText'
import AvatarWithIcon from './AvatarWithIcon'
import AvatarLink from './AvatarLink'
import AvatarLinkWithTooltip from './AvatarLinkWithTooltip'
import AvatarWithAdditionalText from './AvatarWithAdditionalText'

export default {
  title: 'Componenti/Avatar',
  decorators: [withA11y]
}

export const _AvatarWithImage = AvatarWithImage

_AvatarWithImage.story = {
  name: 'Avatar with image'
}

export const _AvatarWithText = AvatarWithText

_AvatarWithText.story = {
  name: 'Avatar with text'
}

export const _AvatarWithIcon = AvatarWithIcon

_AvatarWithIcon.story = {
  name: 'Avatar with icon'
}

export const _AvatarLink = AvatarLink

_AvatarLink.story = {
  name: 'Avatar link'
}

export const _AvatarLinkWithTooltip = AvatarLinkWithTooltip

_AvatarLinkWithTooltip.story = {
  name: 'Avatar link with Tooltip'
}

export const _AvatarWithAdditionalText = AvatarWithAdditionalText

_AvatarWithAdditionalText.story = {
  name: 'Avatar with additional text'
}
