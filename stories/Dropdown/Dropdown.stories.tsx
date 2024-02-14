import React from 'react';

import { UncontrolledDropdown, DropdownMenu, DropdownToggle, LinkList, LinkListItem, ButtonGroup } from '../../src';

export const _VarianteBottoni = () => {
  return (
    <ButtonGroup>
      <UncontrolledDropdown>
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
      <UncontrolledDropdown>
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
      <UncontrolledDropdown>
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
  return (
    <section>
      <UncontrolledDropdown className='me-3'>
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
  return (
    <section>
      <UncontrolledDropdown className='me-3'>
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
