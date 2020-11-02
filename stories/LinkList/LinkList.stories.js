import React from 'react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import {
  LinkList,
  LinkListItem,
  Icon,
  NavItem,
  NavLink,
  Navbar
} from '../../src'

import Esempi from './docs/Esempi.md'
import StatoAttivo from './docs/StatoAttivo.md'
import StatoDisabilitato from './docs/StatoDisabilitato.md'
import HeaderDivider from './docs/HeaderDivider.md'
import Large from './docs/Large.md'
import Multiline from './docs/Multiline.md'
import Titolo from './docs/Titolo.md'

const EsempiComponent = () => (
  <LinkList>
    <LinkListItem>
      <span>Link list 1</span>
    </LinkListItem>
    <LinkListItem>
      <span>Link list 2</span>
    </LinkListItem>
    <LinkListItem>
      <span>Link list 3</span>
    </LinkListItem>
  </LinkList>
)

const StatoAttivoComponent = () => (
  <LinkList>
    <LinkListItem>
      <span>Link list 1</span>
    </LinkListItem>
    <LinkListItem active>
      <span>Link list 2 active</span>
    </LinkListItem>
    <LinkListItem>
      <span>Link list 3</span>
    </LinkListItem>
  </LinkList>
)

const StatoDisabilitatoComponent = () => (
  <LinkList>
    <LinkListItem>
      <span>Link list 1</span>
    </LinkListItem>
    <LinkListItem disabled>
      <span>Link list 2 disabled</span>
    </LinkListItem>
    <LinkListItem>
      <span>Link list 3</span>
    </LinkListItem>
  </LinkList>
)

const HeaderDividerComponent = () => (
  <section>
    <LinkList>
      <LinkListItem header>Heading senza link</LinkListItem>
      <LinkListItem>
        <span>Link list 1</span>
      </LinkListItem>
      <LinkListItem>
        <span>Link list 2</span>
      </LinkListItem>
      <LinkListItem>
        <span>Link list 3</span>
      </LinkListItem>
      <LinkListItem divider />
      <LinkListItem>
        <span>Link list 4</span>
      </LinkListItem>
    </LinkList>

    <LinkList>
      <LinkListItem header href="#">
        Heading con link
      </LinkListItem>
      <LinkListItem>
        <span>Link list 1</span>
      </LinkListItem>
      <LinkListItem>
        <span>Link list 2</span>
      </LinkListItem>
      <LinkListItem>
        <span>Link list 3</span>
      </LinkListItem>
      <LinkListItem divider />
      <LinkListItem>
        <span>Link list 4</span>
      </LinkListItem>
    </LinkList>
  </section>
)

const LargeComponent = () => (
  <LinkList>
    <LinkListItem header href="#">
      Heading
    </LinkListItem>
    <LinkListItem size="large">
      <span>Link list 1</span>
    </LinkListItem>
    <LinkListItem size="large">
      <span>Link list 2</span>
    </LinkListItem>
    <LinkListItem size="large">
      <span>Link list 3</span>
    </LinkListItem>
    <LinkListItem divider />
    <LinkListItem size="large">
      <span>Link list 4</span>
    </LinkListItem>
  </LinkList>
)

const MultilineComponent = () => (
  <LinkList multiline>
    <LinkListItem active className="right-icon">
      <span>Link list 1 active</span>
      <i className="it-chevron-right right" />
      <Icon
        className="icon-right"
        color="primary"
        icon="it-chevron-right"
        style={{ ariaHidden: true }}
      />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
    </LinkListItem>
    <LinkListItem divider />
    <LinkListItem className="right-icon">
      <span>Link list 2</span>
      <i className="it-chevron-right right" />
      <Icon
        className="icon-right"
        color="primary"
        icon="it-chevron-right"
        style={{ ariaHidden: true }}
      />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
    </LinkListItem>
    <LinkListItem divider />
    <LinkListItem disabled className="right-icon">
      <span>Link list 3 disabled</span>
      <i className="it-chevron-right right" />{' '}
      <Icon
        className="icon-right"
        color="primary"
        icon="it-chevron-right"
        style={{ ariaHidden: true }}
      />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
    </LinkListItem>
  </LinkList>
)

const NavigationMenuWithTitle = () => {
  return (
    <div className="sticky-wrapper navbar-wrapper">
      <Navbar expand="lg" className="it-navscroll-wrapper it-top-navscroll">
        <div className="menu-wrapper">
          <LinkList
            wrapperClassName="menu-link-list"
            header={<h3 className="no_toc">Indice della pagina</h3>}>
            <NavItem>
              <NavLink href="#cos-e">
                <span>Cos&#39;è</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#luogo">
                <span>Luogo</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#date-e-orari">
                <span>Date e orari</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#costi">
                <span>Costi</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#documenti">
                <span>Documenti</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contatti">
                <span>Contatti</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#appuntamenti">
                <span>Appuntamenti</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#ulteriori-informazioni">
                <span>Ulteriori informazioni</span>
              </NavLink>
            </NavItem>
          </LinkList>
        </div>
      </Navbar>
    </div>
  )
}

export default {
  title: 'Componenti/LinkList',
  decorators: [withA11y]
}

export const _Esempi = withInfo({
  text: Esempi
})(EsempiComponent)

export const _StatoAttivo = withInfo({
  text: StatoAttivo
})(StatoAttivoComponent)

export const _StatoDisabilitato = withInfo({
  text: StatoDisabilitato
})(StatoDisabilitatoComponent)

export const HeaderEDivider = withInfo({
  text: HeaderDivider
})(HeaderDividerComponent)

HeaderEDivider.story = {
  name: 'Header e Divider'
}

export const Sizing = withInfo({
  text: Large
})(LargeComponent)

export const TitoloLista = withInfo({
  text: Titolo
})(NavigationMenuWithTitle)

TitoloLista.story = {
  name: 'Titolo lista'
}

export const EsempioMultiline = withInfo({
  text: Multiline
})(MultilineComponent)
