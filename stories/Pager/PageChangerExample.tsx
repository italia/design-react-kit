import React, { useState } from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, LinkList, LinkListItem, Icon } from '../../src';

const PageChangerExample = () => {
  const [dropdownToggle, setDropdownToggle] = useState(false);
  return (
    <UncontrolledDropdown isOpen={dropdownToggle} toggle={() => setDropdownToggle(!dropdownToggle)}>
      <DropdownToggle
        id='pagerChanger'
        className={`btn btn-dropdown dropdown-toggle`}
        tag='button'
        data-toggle='dropdown'
        aria-haspopup
        aria-expanded='false'
        aria-label='Salta alla pagina'
        caret
      >
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
    </UncontrolledDropdown>
  );
};
export default PageChangerExample;
