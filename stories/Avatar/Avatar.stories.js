import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

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

export const _AvatarWithImage = withInfo({
  text: Placeholder,
  propTables: [AvatarContainer, AvatarIcon]
})(AvatarWithImage)

_AvatarWithImage.story = {
  name: 'Avatar with image'
}

export const _AvatarWithText = withInfo({
  text: Placeholder,
  propTables: [AvatarContainer, AvatarIcon]
})(AvatarWithText)

_AvatarWithText.story = {
  name: 'Avatar with text'
}

export const _AvatarWithIcon = withInfo({
  text: Placeholder,
  propTables: [AvatarContainer, AvatarIcon]
})(AvatarWithIcon)

_AvatarWithIcon.story = {
  name: 'Avatar with icon'
}

export const _AvatarLink = withInfo({
  text: Placeholder,
  propTables: [AvatarContainer, AvatarIcon]
})(AvatarLink)

_AvatarLink.story = {
  name: 'Avatar link'
}

export const _AvatarLinkWithTooltip = withInfo({
  text: Placeholder,
  propTables: [AvatarContainer, AvatarIcon]
})(AvatarLinkWithTooltip)

_AvatarLinkWithTooltip.story = {
  name: 'Avatar link with Tooltip'
}

export const _AvatarWithAdditionalText = withInfo({
  text: Placeholder,
  propTables: [AvatarContainer, AvatarIcon, AvatarExtraText, AvatarWrapper]
})(AvatarWithAdditionalText)

_AvatarWithAdditionalText.story = {
  name: 'Avatar with additional text'
}
