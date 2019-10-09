import React from 'react'
import PropTypes from 'prop-types'
import '../../assets/css/fonts.css'

import {
  ButtonDropdown,
  ButtonGroup,
  Nav,
  NavItem,
  NavLink,
  Row,
  Icon,
  Col,
  Container,
  DropdownToggle,
  DropdownMenu,
  LinkList,
  LinkListItem
} from '../../src'
import { ROOT } from 'postcss-selector-parser';

const propTypes = {
  color: PropTypes.string
}

class MegamenuWithHeader extends React.Component {
  state = {
    dropdownOpen: false
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  render() {
    const { color } = this.props
    return (
      
      <ButtonDropdown
        className="mr-3"
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}>
        <DropdownToggle className="" color={color} >
        
          Apri dropdown
        </DropdownToggle>
        <DropdownMenu className="megamenu">
        
          <Container className="container">
            
           <Row>
           <Nav vertical>
           <p1>Heading2</p1>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <br></br>
          
        </Nav>
        <Nav vertical>
        <p1>Heading2</p1>
          <NavItem>
            <NavLink href="#">Link2</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link2</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link2</NavLink>
          </NavItem>
          <br></br>
          
        </Nav>
        <Nav vertical>
         <p1>Heading2</p1>
          <NavItem>
            <NavLink href="#">Link2</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link2</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link2</NavLink>
          </NavItem>
          <br></br>
         
        </Nav>
        <Nav vertical>
        <p1>Heading2</p1>
          <NavItem>
            <NavLink href="#">Link2</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link2</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link2</NavLink>
          </NavItem>
          <br></br>
          
        </Nav>
        
         </Row>
          </Container>
          
  
      
        </DropdownMenu>
      </ButtonDropdown>
 
    )
  }
}

export default MegamenuWithHeader

MegamenuWithHeader.propTypes = propTypes

