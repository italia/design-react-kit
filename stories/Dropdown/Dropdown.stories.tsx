import React from 'react';

import { Dropdown, DropdownMenu, DropdownToggle, LinkList, LinkListItem, ButtonGroup } from '../../src';

export const _VarianteBottoni = () => {
  return (
    <ButtonGroup>
      <Dropdown>
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
      </Dropdown>
      <Dropdown>
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
      </Dropdown>
      <Dropdown>
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
      </Dropdown>
    </ButtonGroup>
  );
};

export default {
  title: 'Componenti/Dropdown'
};

export const _Esempi = () => {
  return (
    <section>
      <Dropdown className='me-3'>
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
      </Dropdown>
    </section>
  );
};

export const _Link = () => {
  return (
    <section>
      <Dropdown className='me-3'>
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
      </Dropdown>
    </section>
  );
};
