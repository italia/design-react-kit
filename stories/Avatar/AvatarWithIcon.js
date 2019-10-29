import React from 'react'
import AvatarContainer from '../../src/components/Avatar/AvatarContainer'
import AvatarIcon from '../../src/components/Avatar/AvatarIcon'
import { Icon } from '../../src'

const AvatarWithIcon = () => (
  <AvatarContainer>
    <AvatarIcon size="xs">
      <Icon icon="it-search" />
    </AvatarIcon>
    <AvatarIcon size="sm">
      <Icon icon="it-search" />
    </AvatarIcon>
    <AvatarIcon>
      <Icon icon="it-search" />
    </AvatarIcon>
    <AvatarIcon size="lg">
      <Icon icon="it-search" />
    </AvatarIcon>
    <AvatarIcon size="xl">
      <Icon icon="it-search" />
    </AvatarIcon>
    <AvatarIcon size="xxl">
      <Icon icon="it-search" />
    </AvatarIcon>
  </AvatarContainer>
)

export default AvatarWithIcon
