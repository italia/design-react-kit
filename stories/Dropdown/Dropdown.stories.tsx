import React, { useState } from 'react';

import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  LinkList,
  LinkListItem,
  ButtonGroup,
  Icon
} from '../../src';

export const _VarianteBottoni = () => {
  const [openFirst, toggleFirst] = useState(false);
  const [openSecond, toggleSecond] = useState(false);
  const [openThird, toggleThird] = useState(false);

  return (
    <ButtonGroup>
      <UncontrolledDropdown isOpen={openFirst} toggle={() => toggleFirst(!openFirst)}>
        <DropdownToggle color='primary' caret>
          Apri dropdown
        </DropdownToggle>
        <DropdownMenu>
          <LinkList>
            <LinkListItem inDropdown>Azione 1</LinkListItem>
            <LinkListItem inDropdown>Azione 2</LinkListItem>
            <LinkListItem inDropdown>Azione 3</LinkListItem>
          </LinkList>
        </DropdownMenu>
      </UncontrolledDropdown>
      <UncontrolledDropdown isOpen={openSecond} toggle={() => toggleSecond(!openSecond)}>
        <DropdownToggle color='secondary' caret>
          Apri dropdown
        </DropdownToggle>
        <DropdownMenu>
          <LinkList>
            <LinkListItem inDropdown>Azione 1</LinkListItem>
            <LinkListItem inDropdown>Azione 2</LinkListItem>
            <LinkListItem inDropdown>Azione 3</LinkListItem>
          </LinkList>
        </DropdownMenu>
      </UncontrolledDropdown>
      <UncontrolledDropdown isOpen={openThird} toggle={() => toggleThird(!openThird)}>
        <DropdownToggle color='danger' caret>
          Apri dropdown
        </DropdownToggle>
        <DropdownMenu>
          <LinkList>
            <LinkListItem>Azione 1</LinkListItem>
            <LinkListItem>Azione 2</LinkListItem>
            <LinkListItem>Azione 3</LinkListItem>
          </LinkList>
        </DropdownMenu>
      </UncontrolledDropdown>
    </ButtonGroup>
  );
};

export default {
  title: 'Componenti/Dropdown'
};

export const _Esempi = () => {
  const [open, toggle] = useState(false);

  return (
    <section>
      <UncontrolledDropdown className='me-3' isOpen={open} toggle={() => toggle(!open)}>
        <DropdownToggle color='primary' caret>
          Apri dropdown
        </DropdownToggle>
        <DropdownMenu>
          <LinkList>
            <LinkListItem inDropdown>Azione 1</LinkListItem>
            <LinkListItem inDropdown>Azione 2</LinkListItem>
            <LinkListItem inDropdown>Azione 3</LinkListItem>
          </LinkList>
        </DropdownMenu>
      </UncontrolledDropdown>
    </section>
  );
};

export const _Link = () => {
  const [open, toggle] = useState(false);

  return (
    <section>
      <UncontrolledDropdown className='me-3' isOpen={open} toggle={() => toggle(!open)}>
        <DropdownToggle color='primary' tag='a' caret>
          Apri dropdown
        </DropdownToggle>
        <DropdownMenu>
          <LinkList>
            <LinkListItem inDropdown>Azione 1</LinkListItem>
            <LinkListItem inDropdown>Azione 2</LinkListItem>
            <LinkListItem inDropdown>Azione 3</LinkListItem>
          </LinkList>
        </DropdownMenu>
      </UncontrolledDropdown>
    </section>
  );
};
