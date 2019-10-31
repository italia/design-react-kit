import React from 'react'
import { Icon, AvatarIcon, AvatarContainer } from '../../src'

const AvatarLink = () => (
  <AvatarContainer>
    <AvatarIcon size="xl" href>
      <img
        src="https://randomuser.me/api/portraits/women/41.jpg"
        alt="Anna Barbieri"></img>
    </AvatarIcon>
    <AvatarIcon size="xl" color="red" href>
      <p aria-hidden="true">MR</p>
      <span className="sr-only">Mario Rossi</span>
    </AvatarIcon>
    <AvatarIcon size="xl" href></AvatarIcon>
    <AvatarIcon size="xl" href>
      <Icon icon="it-search" />
    </AvatarIcon>
  </AvatarContainer>
)

export default AvatarLink
