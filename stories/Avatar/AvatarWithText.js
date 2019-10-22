import React from 'react'
import AvatarContainer from '../../src/components/Avatar/AvatarContainer'
import AvatarIcon from '../../src/components/Avatar/AvatarIcon';

const AvatarWithText = () => (
    <AvatarContainer>
        <AvatarIcon size="size-xs">
            <p aria-hidden="true">MR</p>
            <span class="sr-only">Mario Rossi</span>
        </AvatarIcon>
        <AvatarIcon type="avatar-primary" size="size-sm">
            <p aria-hidden="true">M</p>
            <span class="sr-only">Mario Rossi</span>
        </AvatarIcon>
        <AvatarIcon type="avatar-secondary">
            <p aria-hidden="true">M</p>
            <span class="sr-only">Mario Rossi</span>
        </AvatarIcon>
        <AvatarIcon type="avatar-green" size="size-lg">
            <p aria-hidden="true">M</p>
            <span class="sr-only">Mario Rossi</span>
        </AvatarIcon>
        <AvatarIcon type="avatar-orange" size="size-xl">
            <p aria-hidden="true">M</p>
            <span class="sr-only">Mario Rossi</span>
        </AvatarIcon>
        <AvatarIcon type="avatar-red" size="size-xxl">
            <p aria-hidden="true">M</p>
            <span class="sr-only">Mario Rossi</span>
        </AvatarIcon>       
    </AvatarContainer>
)

export default AvatarWithText