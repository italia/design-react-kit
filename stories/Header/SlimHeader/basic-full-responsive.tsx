import React from 'react';

import {
  Button,
  Header,
  HeaderContent,
  HeaderRightZone,
  Icon,
  HeaderBrand,
  DropdownMenu,
  DropdownToggle,
  Dropdown,
  Row,
  Col,
  LinkList,
  LinkListItem
} from '../../../src';
import type { ThemeType } from '../types';

const SlimHeader = ({ theme }: ThemeType) => {
  return (
    <Header type='slim' theme={theme}>
      <HeaderContent>
        <HeaderBrand responsive>Ente appartenenza/Owner</HeaderBrand>
        <HeaderRightZone>
          <Dropdown inNavbar>
            <DropdownToggle inNavbar caret>
              ITA
            </DropdownToggle>
            <DropdownMenu>
              <Row>
                <Col size='12'>
                  <LinkList>
                    <LinkListItem inDropdown href='#'>
                      <span>ITA</span>
                    </LinkListItem>
                    <LinkListItem inDropdown href='#'>
                      <span>ENG</span>
                    </LinkListItem>
                  </LinkList>
                </Col>
              </Row>
            </DropdownMenu>
          </Dropdown>
          <Button color='primary' className='btn-icon btn-full' href='#'>
            <span className='rounded-icon'>
              <Icon color='primary' icon='it-user' />
            </span>
            <span className='d-none d-lg-block'>Accedi all&#39;area personale</span>
          </Button>
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
};

export default SlimHeader;
