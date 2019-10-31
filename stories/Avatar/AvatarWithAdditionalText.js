import React from 'react'
import {
  AvatarContainer,
  AvatarIcon,
  AvatarExtraText,
  AvatarWrapper
} from '../../src'

const AvatarWithAdditionalText = () => {
  return (
    <AvatarContainer>
      <AvatarWrapper extra="text">
        <AvatarIcon size="xl">
          <img
            src="https://randomuser.me/api/portraits/men/33.jpg"
            alt="Mario Rossi"
          />
        </AvatarIcon>
        <AvatarExtraText>
          <h4>
            <a href="#">Mario Rossi</a>
          </h4>
          <time dateTime="2018-09-15">15 Set 2018</time>
        </AvatarExtraText>
      </AvatarWrapper>
      <AvatarWrapper extra="text">
        <AvatarIcon size="xl">
          <img
            src="https://randomuser.me/api/portraits/women/33.jpg"
            alt="Guilia Neri"
          />
        </AvatarIcon>
        <AvatarExtraText>
          <h4>Guilia Neri</h4>
          <p>Lorem ipsum dolor</p>
        </AvatarExtraText>
      </AvatarWrapper>
      <AvatarWrapper extra="text">
        <AvatarIcon size="xl">
          <img
            src="https://randomuser.me/api/portraits/men/15.jpg"
            alt="Michele Dotti"
          />
        </AvatarIcon>
        <AvatarExtraText>
          <h4>
            <a href="#">Micehele Dotti</a>
          </h4>
          <time dateTime="2018-09-15">15 Mag 2018</time>
        </AvatarExtraText>
      </AvatarWrapper>
    </AvatarContainer>
  )
}

export default AvatarWithAdditionalText
