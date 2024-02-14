import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, LinkList, LinkListItem, Icon } from '../../src';

const PageChangerExample = () => {
  return (
    <Dropdown>
      <DropdownToggle id='pagerChanger' aria-label='Salta alla pagina' caret>
        10/pagina
        <Icon className='icon icon-primary icon-sm' icon='it-expand' />
      </DropdownToggle>
      <DropdownMenu>
        <LinkList>
          <LinkListItem active>pag. 10</LinkListItem>
          <LinkListItem>pag. 20</LinkListItem>
          <LinkListItem>pag. 30</LinkListItem>
          <LinkListItem>pag. 40</LinkListItem>
          <LinkListItem>pag. 50</LinkListItem>
        </LinkList>
      </DropdownMenu>
    </Dropdown>
  );
};
export default PageChangerExample;
