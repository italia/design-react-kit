import React from 'react'

import { DropdownMenu, Icon, LinkList, LinkListItem } from '../../src'

import MenuVociAttive from './docs/MenuVociAttive.md'
import MenuVociDisabilitate from './docs/MenuVociDisabilitate.md'
import MenuHeaderDivider from './docs/MenuHeaderDivider.md'
import MenuLarge from './docs/MenuLarge.md'
import MenuFull from './docs/MenuFull.md'
import MenuIconRight from './docs/MenuIconRight.md'
import MenuIconLeft from './docs/MenuIconLeft.md'
import MenuDark from './docs/MenuDark.md'

const MenuVociAttiveComponent = () => (
  <div className="clearfix">
    <DropdownMenu isOpen className="d-block position-relative">
      <LinkList>
        <LinkListItem active>
          <span>Azione 1</span>
        </LinkListItem>
        <LinkListItem>
          <span>Azione 2</span>
        </LinkListItem>
        <LinkListItem>
          <span>Azione 3</span>
        </LinkListItem>
      </LinkList>
    </DropdownMenu>
  </div>
)

const MenuVociDisabilitateComponent = () => (
  <div className="clearfix">
    <DropdownMenu isOpen className="d-block position-relative">
      <LinkList>
        <LinkListItem>
          <span>Azione 1</span>
        </LinkListItem>
        <LinkListItem disabled>
          <span>Azione 2</span>
        </LinkListItem>
        <LinkListItem>
          <span>Azione 3</span>
        </LinkListItem>
      </LinkList>
    </DropdownMenu>
  </div>
)

const MenuHeaderDividerComponent = () => (
  <div className="clearfix">
    <DropdownMenu isOpen className="d-block position-relative">
      <LinkList>
        <LinkListItem header>Header</LinkListItem>
        <LinkListItem>
          <span>Azione 1</span>
        </LinkListItem>
        <LinkListItem>
          <span>Azione 2</span>
        </LinkListItem>
        <LinkListItem>
          <span>Azione 3</span>
        </LinkListItem>
        <LinkListItem divider />
        <LinkListItem>
          <span>Azione 4</span>
        </LinkListItem>
      </LinkList>
    </DropdownMenu>
  </div>
)

const MenuLargeComponent = () => (
  <div className="clearfix">
    <DropdownMenu isOpen className="d-block position-relative">
      <LinkList>
        <LinkListItem size="large">
          <span>Azione 1</span>
        </LinkListItem>
        <LinkListItem size="large">
          <span>Azione 2</span>
        </LinkListItem>
        <LinkListItem size="large">
          <span>Azione 3</span>
        </LinkListItem>
      </LinkList>
    </DropdownMenu>
  </div>
)

const MenuFullComponent = () => (
  <div className="clearfix">
    <DropdownMenu isOpen className="d-block full-width position-relative">
      <LinkList>
        <LinkListItem size="large">
          <span>Azione 1</span>
        </LinkListItem>
        <LinkListItem size="large">
          <span>Azione 2</span>
        </LinkListItem>
        <LinkListItem size="large">
          <span>Azione 3</span>
        </LinkListItem>
        <LinkListItem size="large">
          <span>Azione 4</span>
        </LinkListItem>
        <LinkListItem size="large">
          <span>Azione 5</span>
        </LinkListItem>
      </LinkList>
    </DropdownMenu>
  </div>
)

const MenuIconRightComponent = () => (
  <div className="clearfix">
    <DropdownMenu isOpen className="d-block position-relative">
      <LinkList>
        <LinkListItem className="right-icon">
          <span>Azione 1</span>
          <Icon
            className="right"
            color="primary"
            icon="it-info-circle"
            style={{ ariaHidden: true }}
            size="sm"
          />
        </LinkListItem>
        <LinkListItem className="right-icon">
          <span>Azione 2</span>
          <Icon
            className="right"
            color="primary"
            icon="it-info-circle"
            style={{ ariaHidden: true }}
            size="sm"
          />
        </LinkListItem>
        <LinkListItem className="right-icon">
          <span>Azione 3</span>
          <Icon
            className="right"
            color="primary"
            icon="it-info-circle"
            style={{ ariaHidden: true }}
            size="sm"
          />
        </LinkListItem>
      </LinkList>
    </DropdownMenu>
  </div>
)

const MenuIconLeftComponent = () => (
  <div className="clearfix">
    <DropdownMenu isOpen className="d-block position-relative">
      <LinkList>
        <LinkListItem className="left-icon">
          <Icon
            className="left"
            color="primary"
            icon="it-info-circle"
            style={{ ariaHidden: true }}
            size="sm"
          />
          <span>Azione 1</span>
        </LinkListItem>
        <LinkListItem className="left-icon">
          <Icon
            className="left"
            color="primary"
            icon="it-info-circle"
            style={{ ariaHidden: true }}
            size="sm"
          />
          <span>Azione 2</span>
        </LinkListItem>
        <LinkListItem className="left-icon">
          <Icon
            className="left"
            color="primary"
            icon="it-info-circle"
            style={{ ariaHidden: true }}
            size="sm"
          />
          <span>Azione 3</span>
        </LinkListItem>
      </LinkList>
    </DropdownMenu>
  </div>
)

const MenuDarkComponent = () => (
  <div className="clearfix">
    <DropdownMenu isOpen className="d-block dark position-relative">
      <LinkList>
        <LinkListItem header>Header</LinkListItem>
        <LinkListItem active className="right-icon">
          <span>Azione 1 (attivo)</span>
          <Icon
            className="right"
            color="light"
            icon="it-info-circle"
            style={{ ariaHidden: true }}
            size="sm"
          />
        </LinkListItem>
        <LinkListItem className="right-icon">
          <span>Azione 2</span>
          <Icon
            className="right"
            color="light"
            icon="it-info-circle"
            style={{ ariaHidden: true }}
            size="sm"
          />
        </LinkListItem>
        <LinkListItem className="right-icon">
          <span>Azione 3</span>
          <Icon
            className="right"
            color="light"
            icon="it-info-circle"
            style={{ ariaHidden: true }}
            size="sm"
          />
        </LinkListItem>
        <LinkListItem divider />
        <LinkListItem className="right-icon">
          <span>Azione 4</span>
          <Icon
            className="right"
            color="light"
            icon="it-info-circle"
            style={{ ariaHidden: true }}
            size="sm"
          />
        </LinkListItem>
        <LinkListItem disabled className="right-icon">
          <span>Azione 5 (disabilitato)</span>
          <Icon
            className="right"
            color="light"
            icon="it-info-circle"
            style={{ ariaHidden: true }}
            size="sm"
          />
        </LinkListItem>
      </LinkList>
    </DropdownMenu>
  </div>
)

export default {
  title: 'Componenti/Dropdown.Dropdown menu'
}

export const _MenuVociAttive = MenuVociAttiveComponent

_MenuVociAttive.story = {
  name: 'Menù voci attive'
}

export const _MenuVociDisabilitate = MenuVociDisabilitateComponent

_MenuVociDisabilitate.story = {
  name: 'Menù voci disabilitate'
}

export const MenuHeadersESeparatori = MenuHeaderDividerComponent

MenuHeadersESeparatori.story = {
  name: 'Menù headers e separatori'
}

export const MenuConVociLarge = MenuLargeComponent

MenuConVociLarge.story = {
  name: 'Menu con voci large'
}

export const MenuFullWidth = MenuFullComponent

MenuFullWidth.story = {
  name: 'Menù full width'
}

export const MenuIconaADestra = MenuIconRightComponent

MenuIconaADestra.story = {
  name: 'Menù icona a destra'
}

export const MenuIconaASinistra = MenuIconLeftComponent

MenuIconaASinistra.story = {
  name: 'Menù icona a sinistra'
}

export const _MenuDark = MenuDarkComponent

_MenuDark.story = {
  name: 'Menù dark'
}
