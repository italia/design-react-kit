import React, { Component } from 'react';

import { Header, HeaderContent, HeaderSearch, HeaderRightZone, HeaderSocialsZone, Icon, Nav, NavItem, NavLink, HeaderBrand } from '../../../src';

export default class CenterHeader extends Component {
  render() {
    return (
      <Header type="center">
        <HeaderContent>
          <HeaderBrand iconName="it-code-circle">
            <h2>Lorem Ipsum Lorem Ipsum</h2>
            <h3>Inserire qui la tag line</h3>
          </HeaderBrand>
          <HeaderRightZone>
            <HeaderSocialsZone label="Seguici su">
              <Nav inHeader>
                <NavItem>
                  <NavLink href="#" aria-label="Facebook" target="_blank">
                    <Icon icon="it-facebook" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" aria-label="Github" target="_blank">
                    <Icon icon="it-github" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" aria-label="Twitter" target="_blank">
                    <Icon icon="it-twitter" />
                  </NavLink>
                </NavItem>
              </Nav>
            </HeaderSocialsZone>
            <HeaderSearch label="Cerca" iconName="it-search" />
          </HeaderRightZone>
        </HeaderContent>
      </Header>)
  }
}