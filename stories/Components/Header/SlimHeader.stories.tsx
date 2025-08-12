import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import {
  Button,
  Col,
  Collapse,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  Header,
  HeaderBrand,
  HeaderContent,
  HeaderLinkZone,
  HeaderProps,
  HeaderRightZone,
  HeaderToggler,
  Icon,
  LinkList,
  LinkListItem,
  Row
} from '../../../src';

const meta: Meta = {
  title: 'Documentazione/Menu di navigazione/Header/Slim',
  component: Header
};
export default meta;

type Story = StoryObj<HeaderProps & { brandText: string }>;

const SlimHeaderHooks = ({ theme, brandText }: Pick<HeaderProps, 'theme'> & { brandText: string }) => {
  const [isOpenCollapse, setIsOpenCollapse] = useState(false);
  return (
    <Header type='slim' theme={theme}>
      <HeaderContent>
        <HeaderBrand>{brandText}</HeaderBrand>
        <HeaderLinkZone aria-label='Navigazione accessoria'>
          <HeaderToggler
            onClick={() => {
              setIsOpenCollapse(!isOpenCollapse);
            }}
          >
            <span>{brandText}</span>
            <Icon icon='it-expand' />
          </HeaderToggler>
          <Collapse isOpen={isOpenCollapse} header>
            <LinkList noWrapper>
              <LinkListItem href='#'>Link 1</LinkListItem>
              <LinkListItem href='#' active>
                Link 2 Active
              </LinkListItem>
            </LinkList>
          </Collapse>
        </HeaderLinkZone>
        <HeaderRightZone>
          <Dropdown inNavbar>
            <DropdownToggle caret>
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

export const SlimHeader: Story = {
  render: ({ theme, brandText }) => <SlimHeaderHooks theme={theme} brandText={brandText}></SlimHeaderHooks>,
  parameters: {
    docs: {
      controls: {
        exclude: ['isOpen', 'className', 'type', 'small', 'testId']
      }
    }
  },
  args: {
    theme: '',
    brandText: 'Ente appartenenza'
  }
};

export const SlimHeaderFullResponse: Story = {
  render: ({ theme }) => {
    return (
      <Header type='slim' theme={theme}>
        <HeaderContent>
          <HeaderBrand responsive>Ente appartenenza/Owner</HeaderBrand>
          <HeaderRightZone>
            <Dropdown inNavbar>
              <DropdownToggle caret>
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
  }
};
