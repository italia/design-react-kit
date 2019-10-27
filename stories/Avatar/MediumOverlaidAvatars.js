import React from 'react'
import AvatarIcon from '../../src/components/Avatar/AvatarIcon'
import {Icon, LinkListItem} from '../../src'
import AvatarGroupContainer from '../../src/components/Avatar/AvatarGroupContainer'
import {LinkList, Dropdown,DropdownMenu,DropdownToggle } from '../../src'

class MediumOverlaidAvatars extends React.Component {
    state = {
        dropdownOpen: false
      }
    
      toggle = () => {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        })
      }
    render(){
     return (
        <AvatarGroupContainer>
           <li>
            <AvatarIcon size="md" href>
                <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="Arianna Rossi"/>
            </AvatarIcon>
           </li>
           <li>
            <AvatarIcon size="md" href>
                <img src="https://randomuser.me/api/portraits/men/13.jpg" alt="Giulio Neri"/>
            </AvatarIcon>
           </li>
           <li>
            <AvatarIcon size="md" color="orange" href>
                <p aria-hidden="true">B</p>
                <span class="sr-only">Barbera Tosi</span>
            </AvatarIcon>
           </li>
           <li>
            <AvatarIcon size="md" color="red" href>
                <p aria-hidden="true">R</p>
                <span class="sr-only">Roberto Milano</span>
            </AvatarIcon>
           </li>
           <li>
            <AvatarIcon size="md" href="#">
               <Icon icon="it-search" />
            </AvatarIcon>   
           </li>
           <li>
           <AvatarIcon size="md" color="dropdown">
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle 
                        className={`btn btn-dropdown dropdown-toggle`}
                        href="#" 
                        tag="button"
                        id="dropdownMenuLink2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        >
                            <span class="sr-only">Visualizza altri 4 utenti</span>
                            <span aria-hidden="true">+4</span>
                    </DropdownToggle>
                    <DropdownMenu>
                        <LinkList>
                            <LinkListItem>
                                <AvatarIcon size="md">
                                <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Mario Rossi"/>
                                </AvatarIcon>
                                <span>Mario Rossi</span>
                            </LinkListItem>
                            <LinkListItem>
                                <AvatarIcon size="md" color="green">
                                    <p aria-hidden="true">A</p>
                                </AvatarIcon>
                                <span>Arianna Gello</span>
                            </LinkListItem>
                            <LinkListItem>
                                <AvatarIcon size="md" color="primary">
                                    <p aria-hidden="true">S</p>
                                </AvatarIcon>
                                <span>Sara Ghioni</span>
                            </LinkListItem>
                            <LinkListItem>
                                <AvatarIcon size="md">
                                    <Icon icon="it-search" />
                                </AvatarIcon>
                                <span>Antonio Esposito</span>
                            </LinkListItem>
                        </LinkList>
                    </DropdownMenu>
                </Dropdown>
            </AvatarIcon>
           </li> 
        </AvatarGroupContainer>
        )
    }
}

export default MediumOverlaidAvatars