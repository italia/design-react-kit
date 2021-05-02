import React, { useState } from 'react'

import {
  ButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  LinkList,
  LinkListItem
} from '../../src'

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

export default {
  title: 'Componenti/Dropdown'
}

export const _Esempi = () => {
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

export const _VarianteBottoni = VarianteComponent

export const _Link = () => {
  const [openFirst, toggleFirst] = useState(false)
  const [openSecond, toggleSecond] = useState(false)
  const [openThird, toggleThird] = useState(false)

  return (
    <section>
      <ButtonDropdown
        className="mr-3"
        isOpen={openFirst}
        toggle={() => toggleFirst(!openFirst)}>
        <DropdownToggle color="primary" caret tag="span">
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
        <DropdownToggle color="secondary" caret tag="span">
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
        <DropdownToggle color="danger" caret tag="span">
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
