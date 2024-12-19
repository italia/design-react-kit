import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Icon, TabContainer, TabContent, TabNav, TabNavItem, TabNavLink, TabPane } from '../../src';

const meta: Meta<typeof TabNav> = {
  title: 'Documentazione/Componenti/Tab',
  component: TabNav
};

export default meta;

type Story = StoryObj<typeof TabNav>;

export const TestualeFull: Story = {
  render: () => (
    <TabContainer defaultActiveKey='1'>
      <TabNav className='auto'>
        <TabNavItem>
          <TabNavLink eventKey='1'>Attivo</TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='2'>Link</TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='3'>Link</TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='4' disabled>
            Disattivo
          </TabNavLink>
        </TabNavItem>
      </TabNav>
    </TabContainer>
  )
};

export const IconaFull: Story = {
  render: () => (
    <TabContainer defaultActiveKey='1'>
      <TabNav className='auto'>
        <TabNavItem>
          <TabNavLink eventKey='1'>
            <span>
              <Icon icon='it-link' aria-hidden />
              <span className='visually-hidden'>Tab titolo 1</span>
            </span>
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='2'>
            <span>
              <Icon icon='it-calendar' aria-hidden />
              <span className='visually-hidden'>Tab titolo 1</span>
            </span>
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='3'>
            <span>
              <Icon icon='it-comment' aria-hidden />
              <span className='visually-hidden'>Tab titolo 1</span>
            </span>
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='4' disabled>
            <span>
              <Icon icon='it-close' aria-hidden />
              <span className='visually-hidden'>Tab titolo 1</span>
            </span>
          </TabNavLink>
        </TabNavItem>
      </TabNav>
    </TabContainer>
  )
};

export const IconaGrandeFull: Story = {
  render: () => (
    <TabContainer defaultActiveKey='1'>
      <TabNav className='nav-tabs-icon-lg auto'>
        <TabNavItem>
          <TabNavLink eventKey='1'>
            <span>
              <Icon className='icon-lg' icon='it-link' aria-hidden />
              <span className='visually-hidden'>Tab titolo 1</span>
            </span>
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='2'>
            <span>
              <Icon className='icon-lg' icon='it-calendar' aria-hidden />
              <span className='visually-hidden'>Tab titolo 1</span>
            </span>
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='3'>
            <span>
              <Icon className='icon-lg' icon='it-comment' aria-hidden />
              <span className='visually-hidden'>Tab titolo 1</span>
            </span>
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='4' disabled>
            <span>
              <Icon className='icon-lg' icon='it-close' aria-hidden />
              <span className='visually-hidden'>Tab titolo 1</span>
            </span>
          </TabNavLink>
        </TabNavItem>
      </TabNav>
    </TabContainer>
  )
};

export const TestoIconaFull: Story = {
  render: () => (
    <TabContainer defaultActiveKey='1'>
      <TabNav className='auto'>
        <TabNavItem>
          <TabNavLink eventKey='1'>
            <Icon icon='it-link' aria-hidden />
            Tab 1
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='2'>
            <Icon icon='it-calendar' aria-hidden />
            Tab 2
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='3'>
            <Icon icon='it-comment' aria-hidden />
            Tab 3
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='4' disabled>
            <Icon icon='it-close' aria-hidden />
            Tab 4
          </TabNavLink>
        </TabNavItem>
      </TabNav>
    </TabContainer>
  )
};

export const Testuale: Story = {
  render: () => (
    <TabContainer defaultActiveKey='1'>
      <TabNav>
        <TabNavItem>
          <TabNavLink eventKey='1'>Attivo</TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='2'>Link</TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='3'>Link</TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='4' disabled>
            Disattivo
          </TabNavLink>
        </TabNavItem>
      </TabNav>
    </TabContainer>
  )
};

export const Icona: Story = {
  render: () => (
    <TabContainer defaultActiveKey='1'>
      <TabNav>
        <TabNavItem>
          <TabNavLink eventKey='1'>
            <span>
              <Icon icon='it-link' aria-hidden />
              <span className='visually-hidden'>Tab titolo 1</span>
            </span>
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='2'>
            <span>
              <Icon icon='it-calendar' aria-hidden />
              <span className='visually-hidden'>Tab titolo 1</span>
            </span>
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='3'>
            <span>
              <Icon icon='it-comment' aria-hidden />
              <span className='visually-hidden'>Tab titolo 1</span>
            </span>
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='4' disabled>
            <span>
              <Icon icon='it-close' aria-hidden />
              <span className='visually-hidden'>Tab titolo 1</span>
            </span>
          </TabNavLink>
        </TabNavItem>
      </TabNav>
    </TabContainer>
  )
};

export const IconaGrande: Story = {
  render: () => (
    <TabContainer defaultActiveKey='1'>
      <TabNav className='nav-tabs-icon-lg'>
        <TabNavItem>
          <TabNavLink eventKey='1'>
            <span>
              <Icon className='icon-lg' icon='it-link' aria-hidden />
              <span className='visually-hidden'>Tab titolo 1</span>
            </span>
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='2'>
            <span>
              <Icon className='icon-lg' icon='it-calendar' aria-hidden />
              <span className='visually-hidden'>Tab titolo 1</span>
            </span>
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='3'>
            <span>
              <Icon className='icon-lg' icon='it-comment' aria-hidden />
              <span className='visually-hidden'>Tab titolo 1</span>
            </span>
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='4' disabled>
            <span>
              <Icon className='icon-lg' icon='it-close' aria-hidden />
              <span className='visually-hidden'>Tab titolo 1</span>
            </span>
          </TabNavLink>
        </TabNavItem>
      </TabNav>
    </TabContainer>
  )
};

export const TestoIcona: Story = {
  render: () => (
    <TabContainer defaultActiveKey='1'>
      <TabNav>
        <TabNavItem>
          <TabNavLink eventKey='1'>
            <Icon icon='it-link' aria-hidden />
            Tab 1
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='2'>
            <Icon icon='it-calendar' aria-hidden />
            Tab 2
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='3'>
            <Icon icon='it-comment' aria-hidden />
            Tab 3
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='4' disabled>
            <Icon icon='it-close' aria-hidden />
            Tab 4
          </TabNavLink>
        </TabNavItem>
      </TabNav>
    </TabContainer>
  )
};

export const Hidescroll: Story = {
  render: () => (
    <div className='nav-tabs-hidescroll hidescroll-ico'>
      <TabContainer defaultActiveKey='1'>
        <TabNav className='auto'>
          <TabNavItem>
            <TabNavLink eventKey='1'>Attivo</TabNavLink>
          </TabNavItem>
          <TabNavItem>
            <TabNavLink eventKey='2'>Link</TabNavLink>
          </TabNavItem>
          <TabNavItem>
            <TabNavLink eventKey='3'>Link</TabNavLink>
          </TabNavItem>
          <TabNavItem>
            <TabNavLink eventKey='4'>Link</TabNavLink>
          </TabNavItem>
          <TabNavItem>
            <TabNavLink eventKey='5'>Link</TabNavLink>
          </TabNavItem>
          <TabNavItem>
            <TabNavLink eventKey='6'>Link</TabNavLink>
          </TabNavItem>
          <TabNavItem>
            <TabNavLink eventKey='7'>Link</TabNavLink>
          </TabNavItem>
          <TabNavItem>
            <TabNavLink eventKey='8'>Link</TabNavLink>
          </TabNavItem>
        </TabNav>
      </TabContainer>
    </div>
  )
};

export const TestualePannel: Story = {
  render: () => (
    <TabContainer defaultActiveKey='1'>
      <TabNav>
        <TabNavItem>
          <TabNavLink eventKey='1'>Attivo</TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='2'>Link</TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='3'>Link</TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='4' disabled>
            Disattivo
          </TabNavLink>
        </TabNavItem>
      </TabNav>
      <TabContent>
        <TabPane eventKey='1' className='p-4'>
          Contenuto 1
        </TabPane>
        <TabPane eventKey='2' className='p-4'>
          Contenuto 2
        </TabPane>
        <TabPane eventKey='3' className='p-4'>
          Contenuto 3
        </TabPane>
        <TabPane eventKey='4' className='p-4'>
          Contenuto 4
        </TabPane>
      </TabContent>
    </TabContainer>
  )
};

export const IconaPannel: Story = {
  render: () => (
    <TabContainer defaultActiveKey='1'>
      <TabNav>
        <TabNavItem>
          <TabNavLink eventKey='1'>
            <span>
              <Icon icon='it-link' aria-hidden />
              <span className='visually-hidden'>Tab titolo 1</span>
            </span>
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='2'>
            <span>
              <Icon icon='it-calendar' aria-hidden />
              <span className='visually-hidden'>Tab titolo 1</span>
            </span>
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='3'>
            <span>
              <Icon icon='it-comment' aria-hidden />
              <span className='visually-hidden'>Tab titolo 1</span>
            </span>
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='4' disabled>
            <span>
              <Icon icon='it-close' aria-hidden />
              <span className='visually-hidden'>Tab titolo 1</span>
            </span>
          </TabNavLink>
        </TabNavItem>
      </TabNav>
      <TabContent>
        <TabPane eventKey='1' className='p-4'>
          Contenuto 1
        </TabPane>
        <TabPane eventKey='2' className='p-4'>
          Contenuto 2
        </TabPane>
        <TabPane eventKey='3' className='p-4'>
          Contenuto 3
        </TabPane>
        <TabPane eventKey='4' className='p-4'>
          Contenuto 4
        </TabPane>
      </TabContent>
    </TabContainer>
  )
};

export const IconaGrandePannel: Story = {
  render: () => (
    <TabContainer defaultActiveKey='1'>
      <TabNav className='nav-tabs-icon-lg'>
        <TabNavItem>
          <TabNavLink eventKey='1'>
            <span>
              <Icon className='icon-lg' icon='it-link' aria-hidden />
              <span className='visually-hidden'>Tab titolo 1</span>
            </span>
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='2'>
            <span>
              <Icon className='icon-lg' icon='it-calendar' aria-hidden />
              <span className='visually-hidden'>Tab titolo 1</span>
            </span>
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='3'>
            <span>
              <Icon className='icon-lg' icon='it-comment' aria-hidden />
              <span className='visually-hidden'>Tab titolo 1</span>
            </span>
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='4' disabled>
            <span>
              <Icon className='icon-lg' icon='it-close' aria-hidden />
              <span className='visually-hidden'>Tab titolo 1</span>
            </span>
          </TabNavLink>
        </TabNavItem>
      </TabNav>
      <TabContent>
        <TabPane eventKey='1' className='p-4'>
          Contenuto 1
        </TabPane>
        <TabPane eventKey='2' className='p-4'>
          Contenuto 2
        </TabPane>
        <TabPane eventKey='3' className='p-4'>
          Contenuto 3
        </TabPane>
        <TabPane eventKey='4' className='p-4'>
          Contenuto 4
        </TabPane>
      </TabContent>
    </TabContainer>
  )
};

export const TestoIconaPannel: Story = {
  render: () => (
    <TabContainer defaultActiveKey='1'>
      <TabNav>
        <TabNavItem>
          <TabNavLink eventKey='1'>
            <Icon icon='it-link' aria-hidden />
            Tab 1
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='2'>
            <Icon icon='it-calendar' aria-hidden />
            Tab 2
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='3'>
            <Icon icon='it-comment' aria-hidden />
            Tab 3
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='4' disabled>
            <Icon icon='it-close' aria-hidden />
            Tab 4
          </TabNavLink>
        </TabNavItem>
      </TabNav>
      <TabContent>
        <TabPane eventKey='1' className='p-4'>
          Contenuto 1
        </TabPane>
        <TabPane eventKey='2' className='p-4'>
          Contenuto 2
        </TabPane>
        <TabPane eventKey='3' className='p-4'>
          Contenuto 3
        </TabPane>
        <TabPane eventKey='4' className='p-4'>
          Contenuto 4
        </TabPane>
      </TabContent>
    </TabContainer>
  )
};
