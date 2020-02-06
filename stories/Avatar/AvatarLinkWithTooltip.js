import React from 'react'
import {
  Icon,
  UncontrolledTooltip,
  AvatarIcon,
  AvatarContainer
} from '../../src'

const AvatarLinkWithTooltip = () => {
  // TODO find a better way to handle this
  // Storyshot does not use the dom so can't render refs
  // to fix the problem we append the elements manually
  // this fixes tests without touching the rendered components
  // nor storybook
  // https://github.com/storybookjs/storybook/issues/886
  // https://github.com/infinitered/addon-storyshots#using-createnodemock-to-mock-refs
  const ids = ['Example1', 'Example2', 'Example3', 'Example4']

  ids.map((id, i) => {
    const div = document.createElement('div')
    div.setAttribute('id', id)
    document.body.appendChild(div)
  })

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
