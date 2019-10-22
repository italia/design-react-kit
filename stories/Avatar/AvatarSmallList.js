import React from 'react'
import AvatarListContainer from '../../src/components/Avatar/AvatarListContainer'
import AvatarIcon from '../../src/components/Avatar/AvatarIcon'
import { LinkListItem } from '../../src';
import {Icon} from '../../src'


//Custom container was made because the classname is supposed to be link-list avatar-group
//and in the LinkList component its only link-list
//[BUG] : The LinkList item always forms a link to #. There is no provision to simply
//display text without a link.
const AvatarSmallList = () => {
    return (
        <AvatarListContainer>
            <LinkListItem href="#">
                <AvatarIcon size="size-sm">
                    <img src = "https://randomuser.me/api/portraits/men/43.jpg" alt="Mario Rossi"/>
                </AvatarIcon>
                <span>Mario Rossi</span>
            </LinkListItem>
            <LinkListItem href="#">
                <AvatarIcon size="size-sm" type="avatar-orange">
                   <p aria-hidden="true">A</p>
                </AvatarIcon>
                <span>Arianna Gallo</span>
            </LinkListItem>
            <LinkListItem>
                <AvatarIcon size="size-sm" type="avatar-red">
                    <p aria-hidden="true">S</p>
                </AvatarIcon>
                <span>Sara Ghione</span>
            </LinkListItem>
            <LinkListItem>
                <AvatarIcon size="size-sm">
                    <Icon icon="it-user" />
                </AvatarIcon>
                <span>Antonio Esposito</span>
            </LinkListItem>
       </AvatarListContainer>
    )
}

export default AvatarSmallList