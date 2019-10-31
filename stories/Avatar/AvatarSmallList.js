import React from 'react'
import { AvatarIcon, LinkListItem, LinkList, Icon } from '../../src'

// Custom container was made because the classname is supposed to be link-list avatar-group
// and in the LinkList component its only link-list
// [BUG] : The LinkList item always forms a link to #. There is no provision to simply
// display text without a link.
const AvatarSmallList = () => {
  return (
    <LinkList avatar>
      <LinkListItem href="#">
        <AvatarIcon size="sm">
          <img
            src="https://randomuser.me/api/portraits/men/43.jpg"
            alt="Mario Rossi"
          />
        </AvatarIcon>
        <span>Mario Rossi</span>
      </LinkListItem>
      <LinkListItem href="#">
        <AvatarIcon size="sm" color="orange">
          <p aria-hidden="true">A</p>
        </AvatarIcon>
        <span>Arianna Gallo</span>
      </LinkListItem>
      <LinkListItem>
        <AvatarIcon size="sm" color="red">
          <p aria-hidden="true">S</p>
        </AvatarIcon>
        <span>Sara Ghione</span>
      </LinkListItem>
      <LinkListItem>
        <AvatarIcon size="sm">
          <Icon icon="it-user" />
        </AvatarIcon>
        <span>Antonio Esposito</span>
      </LinkListItem>
    </LinkList>
  )
}

export default AvatarSmallList
