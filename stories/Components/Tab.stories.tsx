import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Col, Icon, Row, TabContainer, TabContent, TabNav, TabNavItem, TabNavLink, TabPane } from '../../src';

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

export const TestualePannelVertical: Story = {
  render: () => (
    <TabContainer defaultActiveKey='1'>
      <Row>
        <Col sm={3}>
          <TabNav vertical>
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
        </Col>
        <Col sm={9}>
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
        </Col>
      </Row>
    </TabContainer>
  )
};

export const TestualePannelVerticalBackground: Story = {
  render: () => (
    <TabContainer defaultActiveKey='1'>
      <Row>
        <Col sm={3}>
          <TabNav vertical className='nav-tabs-vertical-background'>
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
        </Col>
        <Col sm={9}>
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
        </Col>
      </Row>
    </TabContainer>
  )
};

export const TestoIconaPannelVertical: Story = {
  render: () => (
    <TabContainer defaultActiveKey='1'>
      <Row>
        <Col sm={3}>
          <TabNav vertical>
            <TabNavItem>
              <TabNavLink eventKey='1'>
                Tab 1
                <Icon icon='it-link' aria-hidden />
              </TabNavLink>
            </TabNavItem>
            <TabNavItem>
              <TabNavLink eventKey='2'>
                Tab 2
                <Icon icon='it-calendar' aria-hidden />
              </TabNavLink>
            </TabNavItem>
            <TabNavItem>
              <TabNavLink eventKey='3'>
                Tab 3
                <Icon icon='it-comment' aria-hidden />
              </TabNavLink>
            </TabNavItem>
            <TabNavItem>
              <TabNavLink eventKey='4' disabled>
                Tab 4
                <Icon icon='it-close' aria-hidden />
              </TabNavLink>
            </TabNavItem>
          </TabNav>
        </Col>
        <Col sm={9}>
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
        </Col>
      </Row>
    </TabContainer>
  )
};

export const TestoPannelVertical: Story = {
  render: () => (
    <TabContainer defaultActiveKey='1'>
      <Row>
        <Col sm={3}>
          <TabNav vertical>
            <TabNavItem>
              <TabNavLink eventKey='1' className='justify-content-end'>
                <span className='visually-hidden'>Tab 1</span>
                <Icon icon='it-link' aria-hidden />
              </TabNavLink>
            </TabNavItem>
            <TabNavItem>
              <TabNavLink eventKey='2' className='justify-content-end'>
                <span className='visually-hidden'>Tab 2</span>
                <Icon icon='it-calendar' aria-hidden />
              </TabNavLink>
            </TabNavItem>
            <TabNavItem>
              <TabNavLink eventKey='3' className='justify-content-end'>
                <span className='visually-hidden'>Tab 3</span>
                <Icon icon='it-comment' aria-hidden />
              </TabNavLink>
            </TabNavItem>
            <TabNavItem>
              <TabNavLink eventKey='4' className='justify-content-end' disabled>
                <span className='visually-hidden'>Tab 4</span>
                <Icon icon='it-close' aria-hidden />
              </TabNavLink>
            </TabNavItem>
          </TabNav>
        </Col>
        <Col sm={9}>
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
        </Col>
      </Row>
    </TabContainer>
  )
};

export const TestualePannelReverseBottom: Story = {
  render: () => (
    <TabContainer defaultActiveKey='1'>
      <div className='d-flex flex-column-reverse'>
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
      </div>
    </TabContainer>
  )
};

export const TestualePannelReverseRight: Story = {
  render: () => (
    <TabContainer defaultActiveKey='1'>
      <Row className='flex-row-reverse'>
        <Col xs='6' md='4' lg='3'>
          <TabNav vertical>
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
        </Col>
        <Col xs='6' md='8' lg='9'>
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
        </Col>
      </Row>
    </TabContainer>
  )
};

export const TestualeFullDark: Story = {
  render: () => (
    <TabContainer defaultActiveKey='1'>
      <TabNav dark className='auto'>
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

export const TestoIconaFullDark: Story = {
  render: () => (
    <TabContainer defaultActiveKey='1'>
      <TabNav dark className='auto'>
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

export const TestoIconaPannelVerticalDark: Story = {
  render: () => (
    <TabContainer defaultActiveKey='1'>
      <Row>
        <Col sm={3}>
          <TabNav vertical dark>
            <TabNavItem>
              <TabNavLink eventKey='1'>
                Tab 1
                <Icon icon='it-link' aria-hidden />
              </TabNavLink>
            </TabNavItem>
            <TabNavItem>
              <TabNavLink eventKey='2'>
                Tab 2
                <Icon icon='it-calendar' aria-hidden />
              </TabNavLink>
            </TabNavItem>
            <TabNavItem>
              <TabNavLink eventKey='3'>
                Tab 3
                <Icon icon='it-comment' aria-hidden />
              </TabNavLink>
            </TabNavItem>
            <TabNavItem>
              <TabNavLink eventKey='4' disabled>
                Tab 4
                <Icon icon='it-close' aria-hidden />
              </TabNavLink>
            </TabNavItem>
          </TabNav>
        </Col>
        <Col sm={9}>
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
        </Col>
      </Row>
    </TabContainer>
  )
};

export const TestualePannelReverseRightDark: Story = {
  render: () => (
    <TabContainer defaultActiveKey='1'>
      <Row className='flex-row-reverse'>
        <Col xs='6' md='4' lg='3'>
          <TabNav vertical dark>
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
        </Col>
        <Col xs='6' md='8' lg='9'>
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
        </Col>
      </Row>
    </TabContainer>
  )
};

export const TestualePannelCard: Story = {
  render: () => (
    <TabContainer defaultActiveKey='1'>
      <TabNav card>
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

export const TestualePannelCardEditable: Story = {
  render: () => (
    <TabContainer defaultActiveKey='1'>
      <div className='nav-tabs-wrapper'>
        <TabNav card className='nav-tabs-editable'>
          <TabNavItem>
            <TabNavLink eventKey='1'>Tab 1</TabNavLink>
            <div className='nav-link-close'>
              <Icon icon='it-close' aria-hidden />
              <span className='visually-hidden'> Chiudi tab 1</span>
            </div>
          </TabNavItem>
          <TabNavItem>
            <TabNavLink eventKey='2'>Tab 2</TabNavLink>
            <div className='nav-link-close'>
              <Icon icon='it-close' aria-hidden />
              <span className='visually-hidden'> Chiudi tab 2</span>
            </div>
          </TabNavItem>
          <TabNavItem>
            <TabNavLink eventKey='3'>Tab 3</TabNavLink>
            <div className='nav-link-close'>
              <Icon icon='it-close' aria-hidden />
              <span className='visually-hidden'> Chiudi tab 3</span>
            </div>
          </TabNavItem>
          <TabNavItem>
            <TabNavLink eventKey='4' disabled>
              Disattivo
            </TabNavLink>
            <div className='nav-link-close disabled'>
              <Icon icon='it-close' aria-hidden />
              <span className='visually-hidden'> Chiudi tab 4</span>
            </div>
          </TabNavItem>
          <li className='nav-item-filler'></li>
          <TabNavItem>
            <a className='nav-tab-add'>
              <span className='visually-hidden'> Aggiungi un tab</span>
            </a>
          </TabNavItem>
        </TabNav>
      </div>
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
