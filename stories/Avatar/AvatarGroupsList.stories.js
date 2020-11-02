import { withInfo } from '@storybook/addon-info'
import Placeholder from './docs/Placeholder.md'
import { AvatarIcon } from '../../src'

import AvatarSmallList from './AvatarSmallList'
import AvatarMediaList from './AvatarMediaList'

export default {
  title: 'Componenti/Avatar.Avatar groups List'
}

export const SmallList = withInfo({
  text: Placeholder,
  propTables: [AvatarIcon]
})(AvatarSmallList)

export const MediaList = withInfo({
  text: Placeholder,
  propTables: [AvatarIcon]
})(AvatarMediaList)
