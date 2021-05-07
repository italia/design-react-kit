import React from 'react'

import { DropdownMenu, Icon, LinkList, LinkListItem } from '../../src'

export const _MenuVociAttive = () => (
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

export const _MenuVociDisabilitate = () => (
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

export const MenuHeadersESeparatori = () => (
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

export const MenuConVociLarge = () => (
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

export const MenuFullWidth = () => (
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

export const MenuIconaADestra = () => (
  <div className="clearfix">
    <DropdownMenu isOpen className="d-block position-relative">
      <LinkList>
        <LinkListItem className="right-icon">
          <span>Azione 1</span>
          <Icon
            className="right"
            color="primary"
            icon="it-info-circle"
            aria-hidden
            size="sm"
          />
        </LinkListItem>
        <LinkListItem className="right-icon">
          <span>Azione 2</span>
          <Icon
            className="right"
            color="primary"
            icon="it-info-circle"
            aria-hidden
            size="sm"
          />
        </LinkListItem>
        <LinkListItem className="right-icon">
          <span>Azione 3</span>
          <Icon
            className="right"
            color="primary"
            icon="it-info-circle"
            aria-hidden
            size="sm"
          />
        </LinkListItem>
      </LinkList>
    </DropdownMenu>
  </div>
)

export const MenuIconaASinistra = () => (
  <div className="clearfix">
    <DropdownMenu isOpen className="d-block position-relative">
      <LinkList>
        <LinkListItem className="left-icon">
          <Icon
            className="left"
            color="primary"
            icon="it-info-circle"
            aria-hidden
            size="sm"
          />
          <span>Azione 1</span>
        </LinkListItem>
        <LinkListItem className="left-icon">
          <Icon
            className="left"
            color="primary"
            icon="it-info-circle"
            aria-hidden
            size="sm"
          />
          <span>Azione 2</span>
        </LinkListItem>
        <LinkListItem className="left-icon">
          <Icon
            className="left"
            color="primary"
            icon="it-info-circle"
            aria-hidden
            size="sm"
          />
          <span>Azione 3</span>
        </LinkListItem>
      </LinkList>
    </DropdownMenu>
  </div>
)

export const _MenuDark = () => (
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
            aria-hidden
            size="sm"
          />
        </LinkListItem>
        <LinkListItem className="right-icon">
          <span>Azione 2</span>
          <Icon
            className="right"
            color="light"
            icon="it-info-circle"
            aria-hidden
            size="sm"
          />
        </LinkListItem>
        <LinkListItem className="right-icon">
          <span>Azione 3</span>
          <Icon
            className="right"
            color="light"
            icon="it-info-circle"
            aria-hidden
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
            aria-hidden
            size="sm"
          />
        </LinkListItem>
        <LinkListItem disabled className="right-icon">
          <span>Azione 5 (disabilitato)</span>
          <Icon
            className="right"
            color="light"
            icon="it-info-circle"
            aria-hidden
            size="sm"
          />
        </LinkListItem>
      </LinkList>
    </DropdownMenu>
  </div>
)

export default {
  title: 'Componenti/Dropdown/Dropdown menu'
}

_MenuVociAttive.story = {
  name: 'Menù voci attive'
}

_MenuVociDisabilitate.story = {
  name: 'Menù voci disabilitate'
}

MenuHeadersESeparatori.story = {
  name: 'Menù headers e separatori'
}

MenuConVociLarge.story = {
  name: 'Menu con voci large'
}

MenuFullWidth.story = {
  name: 'Menù full width'
}

MenuIconaADestra.story = {
  name: 'Menù icona a destra'
}

MenuIconaASinistra.story = {
  name: 'Menù icona a sinistra'
}

_MenuDark.story = {
  name: 'Menù dark'
}
