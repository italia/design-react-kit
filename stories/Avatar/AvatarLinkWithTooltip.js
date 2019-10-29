import React from 'react'
import AvatarContainer from '../../src/components/Avatar/AvatarContainer'
import AvatarIcon from '../../src/components/Avatar/AvatarIcon'
import { Icon, UncontrolledTooltip } from '../../src'

const AvatarLinkWithTooltip = () => {
  const ids = ['Example1', 'Example2', 'Example3', 'Example4']
  return (
    <AvatarContainer>
      <AvatarIcon size="xl" href id={ids[0]}>
        <UncontrolledTooltip placement="left" target={ids[0]}>
          Anna Barbieri
          <br />
          <i>Administrator</i>
        </UncontrolledTooltip>
        <img
          src="https://randomuser.me/api/portraits/women/41.jpg"
          alt="Anna Barbieri"></img>
      </AvatarIcon>
      <AvatarIcon size="xl" color="red" href id={ids[1]}>
        <UncontrolledTooltip placement="top" target={ids[1]}>
          Mario Rossi
          <br />
          <i>Editor</i>
        </UncontrolledTooltip>
        <p aria-hidden="true">MR</p>
        <span className="sr-only">Mario Rossi</span>
      </AvatarIcon>
      <AvatarIcon size="xl" href id={ids[2]}></AvatarIcon>
      <AvatarIcon size="xl" href id={ids[3]}>
        <Icon icon="it-search" />
        <UncontrolledTooltip placement="right" target={ids[3]}>
          Search
          <br />
          <i>News Archive</i>
        </UncontrolledTooltip>
      </AvatarIcon>
    </AvatarContainer>
  )
}
export default AvatarLinkWithTooltip
