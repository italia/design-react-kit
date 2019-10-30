import React from 'react'
import { AvatarIcon, AvatarContainer } from '../../src'

const AvatarWithImage = () => (
  <AvatarContainer>
    <AvatarIcon size="xs">
      <img
        src="https://randomuser.me/api/portraits/men/46.jpg"
        alt="Mario Rossi"
      />
    </AvatarIcon>
    <AvatarIcon size="sm">
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="Luisa Neri"
      />
    </AvatarIcon>
    <AvatarIcon>
      <img
        src="https://randomuser.me/api/portraits/men/43.jpg"
        alt="Gioacchino Romani"></img>
    </AvatarIcon>
    <AvatarIcon size="lg">
      <img
        src="https://randomuser.me/api/portraits/women/41.jpg"
        alt="Anna Barbieri"
      />
    </AvatarIcon>
    <AvatarIcon size="xl">
      <img
        src="https://randomuser.me/api/portraits/men/33.jpg"
        alt="Carlo Poli"
      />
    </AvatarIcon>
    <AvatarIcon size="xxl">
      <img
        src="https://randomuser.me/api/portraits/women/24.jpg"
        alt="Giovanna Ferrero"
      />
    </AvatarIcon>
  </AvatarContainer>
)

export default AvatarWithImage
