import React from 'react'
import AvatarIcon from '../../src/components/Avatar/AvatarIcon'
import {Icon, LinkListItem} from '../../src'
import AvatarGroupContainer from '../../src/components/Avatar/AvatarGroupContainer'
import {LinkList, Dropdown,DropdownMenu,DropdownToggle } from '../../src'

class SmallOverlappingAvatars extends React.Component {
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
            <AvatarIcon size="sm" href>
                <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="Arianna Rossi"/>
            </AvatarIcon>
           </li>
           <li>
            <AvatarIcon size="sm" href>
                <img src="https://randomuser.me/api/portraits/men/13.jpg" alt="Giulio Neri"/>
            </AvatarIcon>
           </li>
           <li>
            <AvatarIcon size="sm" color="primary" href>
                <p aria-hidden="true">A</p>
                <span class="sr-only">Andrea Gallo</span>
            </AvatarIcon>
           </li>
           <li>
            <AvatarIcon size="sm" color="secondary" href>
                <p aria-hidden="true">S</p>
                <span class="sr-only">Sara Ghioni</span>
            </AvatarIcon>
           </li>
           <li>
            <AvatarIcon size="sm" color="green" href>
                <p aria-hidden="true">T</p>
                <span class="sr-only">Tomasso Sordi</span>
            </AvatarIcon>
           </li>
           <li>
            <AvatarIcon size="sm" color="orange" href>
                <p aria-hidden="true">B</p>
                <span class="sr-only">Barbera Tosi</span>
            </AvatarIcon>
           </li>
           <li>
            <AvatarIcon size="sm" color="red" href>
                <p aria-hidden="true">R</p>
                <span class="sr-only">Roberto Milano</span>
            </AvatarIcon>
           </li>
           <li>
            <AvatarIcon size="sm" href="#">
               <Icon icon="it-search" />
            </AvatarIcon>   
           </li>
           <li>
           <AvatarIcon size="sm" color="dropdown">
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle 
                        className={`btn btn-dropdown dropdown-toggle`}
                        href="#" 
                        tag="button"
                        id="dropdownMenuLink"
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
                                <AvatarIcon size="sm">
                                <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Mario Rossi"/>
                                </AvatarIcon>
                                <span>Mario Rossi</span>
                            </LinkListItem>
                            <LinkListItem>
                                <AvatarIcon size="sm" color="green">
                                    <p aria-hidden="true">A</p>
                                </AvatarIcon>
                                <span>Arianna Gello</span>
                            </LinkListItem>
                            <LinkListItem>
                                <AvatarIcon size="sm" color="primary">
                                    <p aria-hidden="true">S</p>
                                </AvatarIcon>
                                <span>Sara Ghioni</span>
                            </LinkListItem>
                            <LinkListItem>
                                <AvatarIcon size="sm">
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

export default SmallOverlappingAvatars