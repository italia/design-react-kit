import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { DropdownMenu, Icon, LinkList, LinkListItem } from '../../../src';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Documentazione/Componenti/Dropdown',
  component: DropdownMenu
};

export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const _MenuVociAttive: Story = {
  render: () => (
    <div className='docs-show-dropdown-open'>
      <DropdownMenu>
        <LinkList>
          <LinkListItem active inDropdown>
            <span>
              Azione 1<span className='visually-hidden'> attivo</span>
            </span>
          </LinkListItem>
          <LinkListItem inDropdown>
            <span>Azione 2</span>
          </LinkListItem>
          <LinkListItem inDropdown>
            <span>Azione 3</span>
          </LinkListItem>
        </LinkList>
      </DropdownMenu>
    </div>
  )
};

export const _MenuVociDisabilitate: Story = {
  render: () => (
    <div className='docs-show-dropdown-open'>
      <DropdownMenu>
        <LinkList>
          <LinkListItem inDropdown>
            <span>Azione 1</span>
          </LinkListItem>
          <LinkListItem disabled aria-disabled='true' inDropdown>
            <span>Azione 2</span>
          </LinkListItem>
          <LinkListItem inDropdown>
            <span>Azione 3</span>
          </LinkListItem>
        </LinkList>
      </DropdownMenu>
    </div>
  )
};

export const MenuHeadersESeparatori: Story = {
  render: () => (
    <div className='docs-show-dropdown-open'>
      <DropdownMenu>
        <LinkList>
          <LinkListItem header inDropdown>
            Header
          </LinkListItem>
          <LinkListItem>
            <span>Azione 1</span>
          </LinkListItem>
          <LinkListItem inDropdown>
            <span>Azione 2</span>
          </LinkListItem>
          <LinkListItem inDropdown>
            <span>Azione 3</span>
          </LinkListItem>
          <LinkListItem divider />
          <LinkListItem inDropdown>
            <span>Azione 4</span>
          </LinkListItem>
        </LinkList>
      </DropdownMenu>
    </div>
  )
};

export const MenuConVociLarge: Story = {
  render: () => (
    <div className='docs-show-dropdown-open'>
      <DropdownMenu>
        <LinkList>
          <LinkListItem large inDropdown>
            <span>Azione 1</span>
          </LinkListItem>
          <LinkListItem large inDropdown>
            <span>Azione 2</span>
          </LinkListItem>
          <LinkListItem large inDropdown>
            <span>Azione 3</span>
          </LinkListItem>
        </LinkList>
      </DropdownMenu>
    </div>
  )
};

export const MenuFullWidth: Story = {
  render: () => (
    <div className='docs-show-dropdown-open'>
      <DropdownMenu className='full-width'>
        <LinkList>
          <LinkListItem large inDropdown>
            <span>Azione 1</span>
          </LinkListItem>
          <LinkListItem large inDropdown>
            <span>Azione 2</span>
          </LinkListItem>
          <LinkListItem large inDropdown>
            <span>Azione 3</span>
          </LinkListItem>
          <LinkListItem large inDropdown>
            <span>Azione 4</span>
          </LinkListItem>
          <LinkListItem large inDropdown>
            <span>Azione 5</span>
          </LinkListItem>
        </LinkList>
      </DropdownMenu>
    </div>
  )
};

export const MenuIconaADestra: Story = {
  render: () => (
    <div className='docs-show-dropdown-open'>
      <DropdownMenu>
        <LinkList>
          <LinkListItem className='right-icon' inDropdown>
            <span>Azione 1</span>
            <Icon className='right' color='primary' icon='it-info-circle' aria-hidden size='sm' />
          </LinkListItem>
          <LinkListItem className='right-icon' inDropdown>
            <span>Azione 2</span>
            <Icon className='right' color='primary' icon='it-info-circle' aria-hidden size='sm' />
          </LinkListItem>
          <LinkListItem className='right-icon' inDropdown>
            <span>Azione 3</span>
            <Icon className='right' color='primary' icon='it-info-circle' aria-hidden size='sm' />
          </LinkListItem>
        </LinkList>
      </DropdownMenu>
    </div>
  )
};

export const MenuIconaASinistra: Story = {
  render: () => (
    <div className='docs-show-dropdown-open'>
      <DropdownMenu>
        <LinkList>
          <LinkListItem className='left-icon' inDropdown>
            <Icon className='left' color='primary' icon='it-info-circle' aria-hidden size='sm' />
            <span>Azione 1</span>
          </LinkListItem>
          <LinkListItem className='left-icon' inDropdown>
            <Icon className='left' color='primary' icon='it-info-circle' aria-hidden size='sm' />
            <span>Azione 2</span>
          </LinkListItem>
          <LinkListItem className='left-icon' inDropdown>
            <Icon className='left' color='primary' icon='it-info-circle' aria-hidden size='sm' />
            <span>Azione 3</span>
          </LinkListItem>
        </LinkList>
      </DropdownMenu>
    </div>
  )
};

export const _MenuDark: Story = {
  render: () => (
    <div className='docs-show-dropdown-open'>
      <DropdownMenu className='dark'>
        <LinkList>
          <LinkListItem header>Header</LinkListItem>
          <LinkListItem active className='right-icon' inDropdown>
            <span>Azione 1 (attivo)</span>
            <Icon className='right' color='light' icon='it-info-circle' aria-hidden size='sm' />
          </LinkListItem>
          <LinkListItem className='right-icon' inDropdown>
            <span>Azione 2</span>
            <Icon className='right' color='light' icon='it-info-circle' aria-hidden size='sm' />
          </LinkListItem>
          <LinkListItem className='right-icon' inDropdown>
            <span>Azione 3</span>
            <Icon className='right' color='light' icon='it-info-circle' aria-hidden size='sm' />
          </LinkListItem>
          <LinkListItem divider />
          <LinkListItem className='right-icon' inDropdown>
            <span>Azione 4</span>
            <Icon className='right' color='light' icon='it-info-circle' aria-hidden size='sm' />
          </LinkListItem>
          <LinkListItem disabled className='right-icon' inDropdown>
            <span>Azione 5 (disabilitato)</span>
            <Icon className='right' color='light' icon='it-info-circle' aria-hidden size='sm' />
          </LinkListItem>
        </LinkList>
      </DropdownMenu>
    </div>
  )
};
