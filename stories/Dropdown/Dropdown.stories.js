import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  ButtonDropdown,
  Icon,
  LinkList,
  LinkListItem
} from '../../src'

import Esempi from './docs/Esempi.md'
import VarianteBottoni from './docs/VarianteBottoni.md'
import Link from './docs/Link.md'
import MenuVociAttive from './docs/MenuVociAttive.md'
import MenuVociDisabilitate from './docs/MenuVociDisabilitate.md'
import MenuHeaderDivider from './docs/MenuHeaderDivider.md'
import MenuLarge from './docs/MenuLarge.md'
import MenuFull from './docs/MenuFull.md'
import MenuIconRight from './docs/MenuIconRight.md'
import MenuIconLeft from './docs/MenuIconLeft.md'
import MenuDark from './docs/MenuDark.md'

const VarianteComponent = () => {
  const [openFirst, toggleFirst] = useState(false)
  const [openSecond, toggleSecond] = useState(false)
  const [openThird, toggleThird] = useState(false)

  return (
    <section>
      <ButtonDropdown
        className="mr-3"
        isOpen={openFirst}
        toggle={() => toggleFirst(!openFirst)}>
        <DropdownToggle color="primary" caret>
          Apri dropdown
        </DropdownToggle>
        <DropdownMenu>
          <LinkList>
            <LinkListItem>Azione 1</LinkListItem>
            <LinkListItem>Azione 2</LinkListItem>
            <LinkListItem>Azione 3</LinkListItem>
          </LinkList>
        </DropdownMenu>
      </ButtonDropdown>
      <ButtonDropdown
        className="mr-3"
        isOpen={openSecond}
        toggle={() => toggleSecond(!openSecond)}>
        <DropdownToggle color="secondary" caret>
          Apri dropdown
        </DropdownToggle>
        <DropdownMenu>
          <LinkList>
            <LinkListItem>Azione 1</LinkListItem>
            <LinkListItem>Azione 2</LinkListItem>
            <LinkListItem>Azione 3</LinkListItem>
          </LinkList>
        </DropdownMenu>
      </ButtonDropdown>
      <ButtonDropdown
        className="mr-3"
        isOpen={openThird}
        toggle={() => toggleThird(!openThird)}>
        <DropdownToggle color="danger" caret>
          Apri dropdown
        </DropdownToggle>
        <DropdownMenu>
          <LinkList>
            <LinkListItem>Azione 1</LinkListItem>
            <LinkListItem>Azione 2</LinkListItem>
            <LinkListItem>Azione 3</LinkListItem>
          </LinkList>
        </DropdownMenu>
      </ButtonDropdown>
    </section>
  )
}

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

const DropdownSimple = () => {
  const [dropdownOpen, toggleDropdown] = useState(false)
  return (
    <Dropdown
      isOpen={dropdownOpen}
      toggle={() => toggleDropdown(!dropdownOpen)}>
      <DropdownToggle className="btn btn-dropdown" tag={'button'} caret>
        Apri dropdown
      </DropdownToggle>
      <DropdownMenu>
        <LinkList>
          <LinkListItem>Azione 1</LinkListItem>
          <LinkListItem>Azione 2</LinkListItem>
          <LinkListItem>Azione 3</LinkListItem>
        </LinkList>
      </DropdownMenu>
    </Dropdown>
  )
}

const DropdownSimpleLink = () => {
  const [dropdownOpen, toggleDropdown] = useState(false)
  return (
    <Dropdown
      isOpen={dropdownOpen}
      toggle={() => toggleDropdown(!dropdownOpen)}>
      <DropdownToggle className="btn btn-dropdown" tag={'span'} caret>
        Apri dropdown
      </DropdownToggle>
      <DropdownMenu>
        <LinkList>
          <LinkListItem>Azione 1</LinkListItem>
          <LinkListItem>Azione 2</LinkListItem>
          <LinkListItem>Azione 3</LinkListItem>
        </LinkList>
      </DropdownMenu>
    </Dropdown>
  )
}

storiesOf('Componenti/Dropdown', module)
  .addDecorator(withA11y)
  .add(
    'Esempi',
    withInfo({
      text: Esempi,
      propTables: [
        Dropdown,
        DropdownMenu,
        DropdownItem,
        DropdownToggle,
        LinkList,
        LinkListItem
      ],
      propTablesExclude: []
    })(DropdownSimple)
  )
  .add(
    'Variante Bottoni',
    withInfo({
      text: VarianteBottoni,
      propTables: [
        Dropdown,
        DropdownMenu,
        DropdownItem,
        DropdownToggle,
        LinkList,
        LinkListItem
      ],
      propTablesExclude: []
    })(VarianteComponent)
  )
  .add(
    'Link',
    withInfo({
      text: Link,
      propTables: [
        Dropdown,
        DropdownMenu,
        DropdownItem,
        DropdownToggle,
        LinkList,
        LinkListItem
      ],
      propTablesExclude: []
    })(DropdownSimpleLink)
  )

storiesOf('Componenti/Dropdown.Dropdown menu', module)
  .addDecorator(withA11y)
  .add(
    'Menù voci attive',
    withInfo({
      text: MenuVociAttive
    })(MenuVociAttiveComponent)
  )
  .add(
    'Menù voci disabilitate',
    withInfo({
      text: MenuVociDisabilitate
    })(MenuVociDisabilitateComponent)
  )
  .add(
    'Menù headers e separatori',
    withInfo({
      text: MenuHeaderDivider
    })(MenuHeaderDividerComponent)
  )
  .add(
    'Menu con voci large',
    withInfo({
      text: MenuLarge
    })(MenuLargeComponent)
  )
  .add(
    'Menù full width',
    withInfo({
      text: MenuFull
    })(MenuFullComponent)
  )
  .add(
    'Menù icona a destra',
    withInfo({
      text: MenuIconRight
    })(MenuIconRightComponent)
  )
  .add(
    'Menù icona a sinistra',
    withInfo({
      text: MenuIconLeft
    })(MenuIconLeftComponent)
  )
  .add(
    'Menù dark',
    withInfo({
      text: MenuDark
    })(MenuDarkComponent)
  )
