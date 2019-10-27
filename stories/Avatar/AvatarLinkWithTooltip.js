import React from 'react'
import AvatarContainer from '../../src/components/Avatar/AvatarContainer'
import AvatarIcon from '../../src/components/Avatar/AvatarIcon';
import {Icon, UncontrolledTooltip} from '../../src'

const AvatarLinkWithTooltip = () => {
    const ids = ['Example1','Example2','Example3','Example4']
    const target = i => document.getElementById(ids[i])
    return(
    <AvatarContainer>
        <AvatarIcon size="xl" href id={ids[0]}>
            <UncontrolledTooltip placement="left" target={()=> target(0)}>
               Anna Barbieri<br/><i>Administrator</i>
            </UncontrolledTooltip>
            <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri"></img>
        </AvatarIcon>
        <AvatarIcon size="xl" type="red" href id={ids[1]}>
            <UncontrolledTooltip placement="top" target={()=> target(1)}>
               Mario Rossi<br/><i>Editor</i>
            </UncontrolledTooltip>
            <p aria-hidden="true">MR</p>
            <span class="sr-only">Mario Rossi</span>
        </AvatarIcon>
        <AvatarIcon size="xl" href id={ids[2]}>
        </AvatarIcon>
        <AvatarIcon size="xl" href id={ids[3]}>
          <Icon icon="it-search" />
            <UncontrolledTooltip placement="right" target={()=> target(3)}>
               Search<br/><i>News Archive</i>
            </UncontrolledTooltip>
        </AvatarIcon>
    </AvatarContainer>
    )
}
export default AvatarLinkWithTooltip