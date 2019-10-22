import React from 'react'
import AvatarContainer from '../../src/components/Avatar/AvatarContainer'
import AvatarIcon from '../../src/components/Avatar/AvatarIcon';
import {Icon} from '../../src'

const AvatarWithIcon = () => (
    <AvatarContainer>
        <AvatarIcon size="size-xs">
          <Icon icon="it-search" />
        </AvatarIcon>
        <AvatarIcon size="size-sm">
          <Icon icon="it-search" />
        </AvatarIcon>
        <AvatarIcon>
          <Icon icon="it-search" />
        </AvatarIcon>
        <AvatarIcon size="size-lg">
          <Icon icon="it-search" />
        </AvatarIcon>
        <AvatarIcon size="size-xl">
          <Icon icon="it-search" />
        </AvatarIcon>
        <AvatarIcon size="size-xxl">
          <Icon icon="it-search" />
        </AvatarIcon>
    </AvatarContainer>
)

export default AvatarWithIcon