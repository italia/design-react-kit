import React from 'react'
import { AvatarIcon, AvatarContainer } from '../../src'

const AvatarWithText = () => (
  <AvatarContainer>
    <AvatarIcon size="xs">
      <p aria-hidden="true">MR</p>
      <span className="sr-only">Mario Rossi</span>
    </AvatarIcon>
    <AvatarIcon type="primary" size="sm">
      <p aria-hidden="true">M</p>
      <span className="sr-only">Mario Rossi</span>
    </AvatarIcon>
    <AvatarIcon type="secondary">
      <p aria-hidden="true">M</p>
      <span className="sr-only">Mario Rossi</span>
    </AvatarIcon>
    <AvatarIcon type="green" size="lg">
      <p aria-hidden="true">M</p>
      <span className="sr-only">Mario Rossi</span>
    </AvatarIcon>
    <AvatarIcon type="orange" size="xl">
      <p aria-hidden="true">M</p>
      <span className="sr-only">Mario Rossi</span>
    </AvatarIcon>
    <AvatarIcon type="red" size="xxl">
      <p aria-hidden="true">M</p>
      <span className="sr-only">Mario Rossi</span>
    </AvatarIcon>
  </AvatarContainer>
)

export default AvatarWithText
