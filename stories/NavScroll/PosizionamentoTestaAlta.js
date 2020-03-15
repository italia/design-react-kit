import React from 'react'
import { boolean } from '@storybook/addon-knobs/react'
import {
  Button,
  Collapse,
  Icon,
  LinkList,
  Navbar,
  NavItem,
  NavLink,
  NavbarToggler,
  Scrollspy
} from '../../src'

function PosizionamentoTestaAlla() {
  const isOpen = boolean('Apri Lista (solo mobile)', false)

  return (
    <div className="sticky-wrapper navbar-wrapper">
      <Navbar
        expand="lg"
        className="it-navscroll-wrapper navbar-expand-lg it-top-navscroll it-right-side">
        <NavbarToggler
          tag="button"
          cssModule={{ 'navbar-toggler': 'custom-navbar-toggler' }}
          className={isOpen ? 'focus--mouse' : ''}
          aria-controls="navbarNavB"
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-label="Toggle navigation">
          <span className="it-list"></span>1. Introduzione
        </NavbarToggler>
        <Collapse
          navbar
          id="navbarNavB"
          isOpen={isOpen}
          cssModule={{ 'navbar-collapse': 'navbar-collapsable' }}
          className={isOpen ? 'expanded' : ''}
          style={isOpen ? { display: 'block' } : {}}>
          <div className="overlay" style={isOpen ? { display: 'block' } : {}} />
          <div className="close-div sr-only">
            <Button className="close-menu" type="button">
              <span className="it-close"></span>Chiudi
            </Button>
          </div>
          <a
            className="it-back-button"
            href="#"
            style={isOpen ? { display: 'block' } : {}}>
            <Icon
              size="sm"
              color="primary"
              className="align-top"
              icon="it-chevron-left"
            />
            <span>Torna indietro</span>
          </a>
          <div className="menu-wrapper">
            <div className="link-list-wrapper">
              <h3 className="no_toc">Indice della pagina</h3>
              <Scrollspy
                item={['introduzione-1', 'list-item-2']}
                currentClassName="active"
                className="link-list">
                <NavItem active>
                  <NavLink href="#introduzione-1" active>
                    <span>1. Introduzione </span>
                  </NavLink>
                  <LinkList>
                    <NavLink active tag="li">
                      <NavLink href="#introduzione-1-1" active>
                        <span>1.1 Nested Item (active) </span>
                      </NavLink>
                      <LinkList className="tertiary">
                        <NavLink tag="li">
                          <NavLink href="#introduzione-1-1-1">
                            <span>1.1.1 Nested Item </span>
                          </NavLink>
                        </NavLink>
                        <NavLink tag="li">
                          <NavLink href="#introduzione-1-1-2">
                            <span>1.1.2 Nested Item </span>
                          </NavLink>
                        </NavLink>
                        <NavLink tag="li">
                          <NavLink href="#introduzione-1-1-3">
                            <span>1.1.3 Nested Item </span>
                          </NavLink>
                        </NavLink>
                        <NavLink href="#introduzione-1-2">
                          <span>1.2 Nested Item</span>
                        </NavLink>
                        <NavLink href="#introduzione-1-3">
                          <span>1.3 Nested Item</span>
                        </NavLink>
                      </LinkList>
                    </NavLink>
                  </LinkList>
                </NavItem>
                <NavItem>
                  <NavLink href="#list-item-2">
                    <span>2. List item </span>
                  </NavLink>
                  <LinkList>
                    <NavLink active tag="li">
                      <NavLink href="#list-item-2-1">
                        <span>2.1 Nested Item</span>
                      </NavLink>
                      <LinkList className="tertiary">
                        <NavLink tag="li">
                          <NavLink href="#list-item-2-1-1">
                            <span>2.1.1 Nested Item </span>
                          </NavLink>
                        </NavLink>
                        <NavLink tag="li">
                          <NavLink href="#list-item-2-1-2">
                            <span>2.1.2 Nested Item </span>
                          </NavLink>
                        </NavLink>
                        <NavLink tag="li">
                          <NavLink href="#list-item-2-1-3">
                            <span>2.1.3 Nested Item </span>
                          </NavLink>
                        </NavLink>
                        <NavLink href="#list-item-2-2">
                          <span>2.2 Nested Item</span>
                        </NavLink>
                        <NavLink href="#list-item-2-3">
                          <span>2.3 Nested Item</span>
                        </NavLink>
                      </LinkList>
                    </NavLink>
                  </LinkList>
                </NavItem>
              </Scrollspy>
            </div>
          </div>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default PosizionamentoTestaAlla
