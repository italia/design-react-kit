import React from 'react';

import {
  Button,
  Collapse,
  Header,
  HeaderContent,
  HeaderLinkZone,
  HeaderRightZone,
  Icon,
  LinkList,
  LinkListItem,
  HeaderBrand,
  HeaderToggler,
  DropdownMenu,
  DropdownToggle,
  Row,
  Col,
  Dropdown
} from '../../../src';
import type { HeaderSlimProps } from '../types';

const SlimHeader = ({ theme, isOpen, brandText }: HeaderSlimProps) => {
  return (
    <Header type='slim' theme={theme}>
      <HeaderContent>
        <HeaderBrand>{brandText}</HeaderBrand>
        <HeaderLinkZone>
          <HeaderToggler
            onClick={() => {
              /* open logic state here */
            }}
          >
            <span>{brandText}</span>
            <Icon icon='it-expand' />
          </HeaderToggler>
          <Collapse isOpen={isOpen} header>
            <LinkList>
              <LinkListItem href='#'>Link 1</LinkListItem>
              <LinkListItem href='#' active>
                Link 2 Active
              </LinkListItem>
            </LinkList>
          </Collapse>
        </HeaderLinkZone>
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
          <div className='it-access-top-wrapper'>
            <Button color='primary' size='sm'>
              Accedi
            </Button>
          </div>
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
};

export default SlimHeader;
