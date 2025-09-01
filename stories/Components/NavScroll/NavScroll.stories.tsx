import { Meta, StoryObj } from '@storybook/react-vite';
import React, { MouseEventHandler, useRef, useState } from 'react';
import {
  Col,
  Collapse,
  Container,
  Icon,
  LinkList,
  LinkListItem,
  NavItem,
  NavLink,
  Navbar,
  NavbarToggler,
  Progress,
  Row,
  useNavScroll
} from '../../../src';
import { getStorybookExtraStyles } from './utils';

//Non esiste un componente specifico per cui uso Container come riferimento per la storia
const meta: Meta<typeof Container> = {
  title: 'Documentazione/Menu di navigazione/Navscroll',
  component: Container,
  parameters: {
    docs: {
      canvas: { sourceState: 'none' }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Container>;

const PosizionamentoFondoPaginaHooks = () => {
  const [isOpen, toggleNavScroll] = useState(false);
  /* Richiesto per contenuto confinato */
  /* Nota che i componenti Col e Row non inoltrano le ref, 
  /* usare quindi tag div con classi css come nell'esempio */
  const containerRef = useRef(null);
  const { register, isActive, getActiveRef } = useNavScroll({
    root: containerRef.current || undefined
  });
  const getActiveClass = (id: string) => (isActive(id) ? 'active' : undefined);
  return (
    <Container>
      <Row>
        <Col md={12} lg={4}>
          <Navbar expand='lg' className='it-navscroll-wrapper it-bottom-navscroll it-right-side affix-top'>
            <NavbarToggler
              className='custom-navbar-toggler'
              data-target='#navbarNavA'
              onClick={() => toggleNavScroll(!isOpen)}
            >
              <span className='it-list'></span>
              {getActiveRef()?.current?.textContent}
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar id='navbarNavA'>
              <button
                className={`${isOpen ? 'show' : ''} it-back-button btn w-100 text-start`}
                style={{ display: isOpen ? 'block' : 'none' }}
                onClick={() => toggleNavScroll(!isOpen)}
              >
                <Icon className='align-top' color='primary' icon='it-chevron-left' aria-hidden size='sm' />
                <span>Indietro</span>
              </button>
              <div className='menu-wrapper'>
                <div className='link-list-wrapper'>
                  <h3>header</h3>
                  <LinkList noWrapper>
                    <NavItem>
                      <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#1' className={getActiveClass('1')}>
                        <span>1. Introduzione</span>
                      </NavLink>
                      <LinkList noWrapper>
                        <NavLink tag='li' className={getActiveClass('1_1')}>
                          <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#1_1' className={getActiveClass('1_1')}>
                            <span>1.1 Nested Item</span>
                          </NavLink>
                          <LinkList className='tertiary' noWrapper>
                            <NavLink tag='li' className={getActiveClass('1_1_1')}>
                              <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#1_1_1' className={getActiveClass('1_1_1')}>
                                <span>1.1.1 Nested Item</span>
                              </NavLink>
                            </NavLink>
                            <NavLink tag='li' className={getActiveClass('1_1_2')}>
                              <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#1_1_2' className={getActiveClass('1_1_2')}>
                                <span>1.1.2 Nested Item</span>
                              </NavLink>
                            </NavLink>
                            <NavLink tag='li' className={getActiveClass('1_1_3')}>
                              <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#1_1_3' className={getActiveClass('1_1_3')}>
                                <span>1.1.3 Nested Item</span>
                              </NavLink>
                            </NavLink>
                          </LinkList>
                        </NavLink>
                        <NavLink tag='li' className={getActiveClass('1_2')}>
                          <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#1_2' className={getActiveClass('1_2')}>
                            <span>1.2 Nested Item</span>
                          </NavLink>
                        </NavLink>
                        <NavLink tag='li' className={getActiveClass('1_3')}>
                          <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#1_3' className={getActiveClass('1_3')}>
                            <span>1.3 Nested Item</span>
                          </NavLink>
                        </NavLink>
                      </LinkList>
                    </NavItem>
                    <NavItem>
                      <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#2' className={getActiveClass('2')}>
                        <span>2. List item</span>
                      </NavLink>
                      <LinkList noWrapper>
                        <NavLink active tag='li' className={getActiveClass('2_1')}>
                          <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#2_1' className={getActiveClass('2_1')}>
                            <span>2.1 Nested Item</span>
                          </NavLink>
                          <LinkList className='tertiary' noWrapper>
                            <NavLink tag='li' className={getActiveClass('2_1_1')}>
                              <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#2_1_1' className={getActiveClass('2_1_1')}>
                                <span>2.1.1 Nested Item</span>
                              </NavLink>
                            </NavLink>
                            <NavLink tag='li' className={getActiveClass('2_1_2')}>
                              <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#2_1_2' className={getActiveClass('2_1_2')}>
                                <span>2.1.2 Nested Item</span>
                              </NavLink>
                            </NavLink>
                            <NavLink tag='li' className={getActiveClass('2_1_3')}>
                              <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#2_1_3' className={getActiveClass('2_1_3')}>
                                <span>2.1.3 Nested Item</span>
                              </NavLink>
                            </NavLink>
                          </LinkList>
                        </NavLink>
                        <NavLink tag='li' className={getActiveClass('2_2')}>
                          <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#2_2' className={getActiveClass('2_2')}>
                            <span>2.2 Nested Item</span>
                          </NavLink>
                        </NavLink>
                        <NavLink tag='li' className={getActiveClass('2_3')}>
                          <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#2_3' className={getActiveClass('2_3')}>
                            <span>2.3 Nested Item</span>
                          </NavLink>
                        </NavLink>
                      </LinkList>
                    </NavItem>
                  </LinkList>
                </div>
              </div>
            </Collapse>
          </Navbar>
        </Col>
        <div
          className='it-page-sections-container col-12 col-lg-8'
          ref={containerRef}
          style={getStorybookExtraStyles()}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec congue eros. Maecenas sagittis commodo
            libero nec porta. Nunc semper velit venenatis ligula condimentum ultricies. In hac habitasse platea
            dictumst. In malesuada pharetra nulla, id aliquam metus egestas ut. Nulla sollicitudin cursus felis, eu
            sagittis ante porta id. Suspendisse pellentesque ex non sem tincidunt, aliquam rhoncus turpis maximus.
            Vivamus eget massa turpis. Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales
            ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat
            semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus
            viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae
            convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Integer feugiat et massa nec rhoncus. Morbi vitae
            metus et sapien suscipit mattis vitae ac ex. Proin pharetra, sem vitae varius malesuada, risus tortor
            sodales arcu, eu aliquam lorem libero vel urna. Aliquam massa lacus, faucibus quis urna ac, pharetra pretium
            ex. In facilisis urna non urna luctus, a bibendum tortor facilisis. Mauris sed risus justo. In et erat
            fermentum eros hendrerit tempor. Quisque accumsan magna ac risus ultricies, vel condimentum ipsum accumsan.
            Proin blandit mauris sed sodales sollicitudin.
          </p>
          <h2 className='it-page-section' {...register('1')}>
            Introduzione
          </h2>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('1_1', { parent: '1' })}>
            Nested item 1.1
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h4 className='it-page-section' {...register('1_1_1', { parent: '1_1' })}>
            Nested item 1.1.1
          </h4>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h4 className='it-page-section' {...register('1_1_2', { parent: '1_1' })}>
            Nested item 1.1.2
          </h4>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h4 className='it-page-section' {...register('1_1_3', { parent: '1_1' })}>
            Nested item 1.1.3
          </h4>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('1_2', { parent: '1' })}>
            Nested item 1.2
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('1_3', { parent: '1' })}>
            Nested item 1.3
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h2 className='it-page-section' {...register('2')}>
            Introduzione 2
          </h2>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('2_1', { parent: '2' })}>
            Nested item 2.1
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h4 className='it-page-section' {...register('2_1_1', { parent: '2_1' })}>
            Nested item 2.1.1
          </h4>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h4 className='it-page-section' {...register('2_1_2', { parent: '2_1' })}>
            Nested item 2.1.2
          </h4>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h4 className='it-page-section' {...register('2_1_3', { parent: '2_1' })}>
            Nested item 2.1.3
          </h4>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('2_2', { parent: '2' })}>
            Nested item 2.2
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('2_3', { parent: '2' })}>
            Nested item 2.3
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </div>
      </Row>
    </Container>
  );
};

export const PosizionamentoFondoPagina: Story = {
  render: () => {
    return <PosizionamentoFondoPaginaHooks />;
  }
};

const PosizionamentoTestaAltaHooks = () => {
  const [isOpen, toggleNavScroll] = useState(false);
  /* Richiesto per contenuto confinato */
  /* Nota che i componenti Col e Row non inoltrano le ref, 
  /* usare quindi tag div con classi css come nell'esempio */
  const containerRef = useRef(null);
  const { register, isActive, getActiveRef, percentage } = useNavScroll({
    root: containerRef.current || undefined
  });
  const getActiveClass = (id: string) => (isActive(id) ? 'active' : undefined);
  return (
    <Container>
      <Row>
        <Col md={12} lg={4}>
          <Navbar
            expand='lg'
            className='it-navscroll-wrapper it-top-navscroll it-right-side affix-top'
          >
            <NavbarToggler
              className='custom-navbar-toggler'
              data-target='#navbarNavB'
              onClick={() => toggleNavScroll(!isOpen)}
            >
              <span className='it-list'></span>
              {getActiveRef()?.current?.textContent}
              <Progress wrapperClassName='custom-navbar-progressbar' value={percentage} />
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar id='navbarNavB'>
              <button
                className={`${isOpen ? 'show' : ''} it-back-button btn w-100 text-start`}
                style={{ display: isOpen ? 'block' : 'none' }}
                onClick={() => toggleNavScroll(!isOpen)}
              >
                <Icon className='align-top' color='primary' icon='it-chevron-left' aria-hidden size='sm' />
                <span>Indietro</span>
              </button>
              <div className='menu-wrapper'>
                <div className='link-list-wrapper'>
                  <h3>header</h3>
                  <Progress value={percentage} />
                  <LinkList noWrapper>
                    <NavItem>
                      <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#1' className={getActiveClass('1')}>
                        <span>1. Introduzione</span>
                      </NavLink>
                      <LinkList noWrapper>
                        <NavLink tag='li' className={getActiveClass('1_1')}>
                          <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#1_1' className={getActiveClass('1_1')}>
                            <span>1.1 Nested Item</span>
                          </NavLink>
                          <LinkList className='tertiary' noWrapper>
                            <NavLink tag='li' className={getActiveClass('1_1_1')}>
                              <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#1_1_1' className={getActiveClass('1_1_1')}>
                                <span>1.1.1 Nested Item</span>
                              </NavLink>
                            </NavLink>
                            <NavLink tag='li' className={getActiveClass('1_1_2')}>
                              <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#1_1_2' className={getActiveClass('1_1_2')}>
                                <span>1.1.2 Nested Item</span>
                              </NavLink>
                            </NavLink>
                            <NavLink tag='li' className={getActiveClass('1_1_3')}>
                              <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#1_1_3' className={getActiveClass('1_1_3')}>
                                <span>1.1.3 Nested Item</span>
                              </NavLink>
                            </NavLink>
                          </LinkList>
                        </NavLink>
                        <NavLink tag='li' className={getActiveClass('1_2')}>
                          <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#1_2' className={getActiveClass('1_2')}>
                            <span>1.2 Nested Item</span>
                          </NavLink>
                        </NavLink>
                        <NavLink tag='li' className={getActiveClass('1_3')}>
                          <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#1_3' className={getActiveClass('1_3')}>
                            <span>1.3 Nested Item</span>
                          </NavLink>
                        </NavLink>
                      </LinkList>
                    </NavItem>
                    <NavItem>
                      <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#2' className={getActiveClass('2')}>
                        <span>2. List item</span>
                      </NavLink>
                      <LinkList noWrapper>
                        <NavLink active tag='li' className={getActiveClass('2_1')}>
                          <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#2_1' className={getActiveClass('2_1')}>
                            <span>2.1 Nested Item</span>
                          </NavLink>
                          <LinkList className='tertiary' noWrapper>
                            <NavLink tag='li' className={getActiveClass('2_1_1')}>
                              <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#2_1_1' className={getActiveClass('2_1_1')}>
                                <span>2.1.1 Nested Item</span>
                              </NavLink>
                            </NavLink>
                            <NavLink tag='li' className={getActiveClass('2_1_2')}>
                              <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#2_1_2' className={getActiveClass('2_1_2')}>
                                <span>2.1.2 Nested Item</span>
                              </NavLink>
                            </NavLink>
                            <NavLink tag='li' className={getActiveClass('2_1_3')}>
                              <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#2_1_3' className={getActiveClass('2_1_3')}>
                                <span>2.1.3 Nested Item</span>
                              </NavLink>
                            </NavLink>
                          </LinkList>
                        </NavLink>
                        <NavLink tag='li' className={getActiveClass('2_2')}>
                          <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#2_2' className={getActiveClass('2_2')}>
                            <span>2.2 Nested Item</span>
                          </NavLink>
                        </NavLink>
                        <NavLink tag='li' className={getActiveClass('2_3')}>
                          <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#2_3' className={getActiveClass('2_3')}>
                            <span>2.3 Nested Item</span>
                          </NavLink>
                        </NavLink>
                      </LinkList>
                    </NavItem>
                  </LinkList>
                </div>
              </div>
            </Collapse>
          </Navbar>
        </Col>
        <div
          className='it-page-sections-container col-12 col-lg-8'
          ref={containerRef}
          style={getStorybookExtraStyles()}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec congue eros. Maecenas sagittis commodo
            libero nec porta. Nunc semper velit venenatis ligula condimentum ultricies. In hac habitasse platea
            dictumst. In malesuada pharetra nulla, id aliquam metus egestas ut. Nulla sollicitudin cursus felis, eu
            sagittis ante porta id. Suspendisse pellentesque ex non sem tincidunt, aliquam rhoncus turpis maximus.
            Vivamus eget massa turpis. Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales
            ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat
            semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus
            viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae
            convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Integer feugiat et massa nec rhoncus. Morbi vitae
            metus et sapien suscipit mattis vitae ac ex. Proin pharetra, sem vitae varius malesuada, risus tortor
            sodales arcu, eu aliquam lorem libero vel urna. Aliquam massa lacus, faucibus quis urna ac, pharetra pretium
            ex. In facilisis urna non urna luctus, a bibendum tortor facilisis. Mauris sed risus justo. In et erat
            fermentum eros hendrerit tempor. Quisque accumsan magna ac risus ultricies, vel condimentum ipsum accumsan.
            Proin blandit mauris sed sodales sollicitudin.
          </p>
          <h2 className='it-page-section' {...register('1')}>
            Introduzione
          </h2>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('1_1', { parent: '1' })}>
            Nested item 1.1
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h4 className='it-page-section' {...register('1_1_1', { parent: '1_1' })}>
            Nested item 1.1.1
          </h4>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h4 className='it-page-section' {...register('1_1_2', { parent: '1_1' })}>
            Nested item 1.1.2
          </h4>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h4 className='it-page-section' {...register('1_1_3', { parent: '1_1' })}>
            Nested item 1.1.3
          </h4>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('1_2', { parent: '1' })}>
            Nested item 1.2
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('1_3', { parent: '1' })}>
            Nested item 1.3
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h2 className='it-page-section' {...register('2')}>
            Introduzione 2
          </h2>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('2_1', { parent: '2' })}>
            Nested item 2.1
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h4 className='it-page-section' {...register('2_1_1', { parent: '2_1' })}>
            Nested item 2.1.1
          </h4>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h4 className='it-page-section' {...register('2_1_2', { parent: '2_1' })}>
            Nested item 2.1.2
          </h4>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h4 className='it-page-section' {...register('2_1_3', { parent: '2_1' })}>
            Nested item 2.1.3
          </h4>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('2_2', { parent: '2' })}>
            Nested item 2.2
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('2_3', { parent: '2' })}>
            Nested item 2.3
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </div>
      </Row>
    </Container>
  );
};

export const PosizionamentoTestaAlta: Story = {
  render: () => {
    return <PosizionamentoTestaAltaHooks />;
  }
};

const ComponenteMenuInlineHooks = () => {
  /* Richiesto per contenuto confinato */
  /* Nota che i componenti Col e Row non inoltrano le ref, 
  /* usare quindi tag div con classi css come nell'esempio */
  const containerRef = useRef(null);
  const { register, isActive, activeIds} = useNavScroll({
    root: containerRef.current || undefined
  });

  const [collapseOpen1, toggleCollapse1] = useState(false);
  const [collapseOpen2, toggleCollapse2] = useState(false);
  const [collapseOpen3, toggleCollapse3] = useState(false);

  const isFirstOpen = collapseOpen1 || isActive('1');
  const isSecondOpen = collapseOpen2 || isActive('2');
  const isThirdOpen = collapseOpen3 || isActive('3');

  const onToggle1: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    toggleCollapse1(!collapseOpen1);
  };

  const onToggle2: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    toggleCollapse2(!collapseOpen2);
  };

  const onToggle3: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    toggleCollapse3(!collapseOpen3);
  };

  const getActiveClass = (id: string) => (isActive(id) ? 'nav-link active' : undefined);

  const isInLinksGroup = (group: string, activeIds: string[]): boolean => {
    return activeIds.length > 0 && activeIds[0][0] == group
  }

  return (
    <Container>
      <Row>
        <Col md={12} lg={4}>
          <Navbar className='inline-menu affix-top' cssModule={{ navbar: ' ' }}>
            <LinkList>
              <LinkListItem bold large className={`right-icon ${getActiveClass('1')}`} onClick={onToggle1} aria-expanded={isFirstOpen || isInLinksGroup('1', activeIds)}>
                <LinkListItem.TitleIconWrapper>
                  <span>Link list 1 </span>
                  <Icon className="right" size='xs' color="primary" icon="it-expand" aria-hidden />
                </LinkListItem.TitleIconWrapper>
              </LinkListItem>
              <Collapse isOpen={isFirstOpen || isInLinksGroup('1', activeIds)}>
                <LinkList sublist>
                  <LinkListItem href='#1_1' className={getActiveClass('1_1')}>Link list 1.1</LinkListItem>
                  <LinkListItem href='#1_2' className={getActiveClass('1_2')}>Link list 1.2</LinkListItem>
                  <LinkListItem href='#1_3' className={getActiveClass('1_3')}>Link list 1.3</LinkListItem>
                </LinkList>
              </Collapse>
              <LinkListItem bold large className={`right-icon ${getActiveClass('2')}`} onClick={onToggle2} aria-expanded={isSecondOpen || isInLinksGroup('2', activeIds)} >
                <LinkListItem.TitleIconWrapper>
                  <span>Link list 2 </span>
                  <Icon className="right" size='xs' color="primary" icon="it-expand" aria-hidden />
                </LinkListItem.TitleIconWrapper>
              </LinkListItem>
              <Collapse isOpen={isSecondOpen || isInLinksGroup('2', activeIds)}>
                <LinkList sublist>
                  <LinkListItem href='#2_1' className={getActiveClass('2_1')}>Link list 2.1</LinkListItem>
                  <LinkListItem href='#2_2' className={getActiveClass('2_2')}>Link list 2.2</LinkListItem>
                  <LinkListItem href='#2_3' className={getActiveClass('2_3')}>Link list 2.3</LinkListItem>
                </LinkList>
              </Collapse>
              <LinkListItem bold large className={`right-icon ${getActiveClass('3')}`} onClick={onToggle3} aria-expanded={isThirdOpen || isInLinksGroup('3', activeIds)} >
                <LinkListItem.TitleIconWrapper>
                  <span>Link list 3 </span>
                  <Icon className="right" size='xs' color="primary" icon="it-expand" aria-hidden />
                </LinkListItem.TitleIconWrapper>
              </LinkListItem>
              <Collapse isOpen={isThirdOpen || isInLinksGroup('3', activeIds)}>
                <LinkList sublist>
                  <LinkListItem href='#3_1' className={getActiveClass('3_1')}>Link list 3.1</LinkListItem>
                  <LinkListItem href='#3_2' className={getActiveClass('3_2')}>Link list 3.2</LinkListItem>
                  <LinkListItem href='#3_3' className={getActiveClass('3_3')}>Link list 3.3</LinkListItem>
                </LinkList>
              </Collapse>
            </LinkList>
          </Navbar>
        </Col>
        <div
          className='it-page-sections-container col-12 col-lg-8'
          ref={containerRef}
          style={getStorybookExtraStyles()}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec congue eros. Maecenas sagittis commodo
            libero nec porta. Nunc semper velit venenatis ligula condimentum ultricies. In hac habitasse platea
            dictumst. In malesuada pharetra nulla, id aliquam metus egestas ut. Nulla sollicitudin cursus felis, eu
            sagittis ante porta id. Suspendisse pellentesque ex non sem tincidunt, aliquam rhoncus turpis maximus.
            Vivamus eget massa turpis. Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales
            ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat
            semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus
            viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae
            convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Integer feugiat et massa nec rhoncus. Morbi vitae
            metus et sapien suscipit mattis vitae ac ex. Proin pharetra, sem vitae varius malesuada, risus tortor
            sodales arcu, eu aliquam lorem libero vel urna. Aliquam massa lacus, faucibus quis urna ac, pharetra pretium
            ex. In facilisis urna non urna luctus, a bibendum tortor facilisis. Mauris sed risus justo. In et erat
            fermentum eros hendrerit tempor. Quisque accumsan magna ac risus ultricies, vel condimentum ipsum accumsan.
            Proin blandit mauris sed sodales sollicitudin.
          </p>
          <h2 className='it-page-section' {...register('1')}>
            Introduzione
          </h2>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('1_1', { parent: '1' })}>
            Nested item 1.1
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('1_2', { parent: '1' })}>
            Nested item 1.2
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('1_3', { parent: '1' })}>
            Nested item 1.3
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h2 className='it-page-section' {...register('2')}>
            Introduzione 2
          </h2>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('2_1', { parent: '2' })}>
            Nested item 2.1
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('2_2', { parent: '2' })}>
            Nested item 2.2
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('2_3', { parent: '2' })}>
            Nested item 2.3
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h2 className='it-page-section' {...register('3')}>
            Introduzione 3
          </h2>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('3_1', { parent: '3' })}>
            Nested item 3.1
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('3_2', { parent: '3' })}>
            Nested item 3.2
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('3_3', { parent: '3' })}>
            Nested item 3.3
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </div>
      </Row>
    </Container>
  );
};

export const ComponenteMenuInline: Story = {
  render: () => {
    return <ComponenteMenuInlineHooks />;
  }
};

const ComponenteVersioneScuraHooks = () => {
  const [isOpen, toggleNavScroll] = useState(false);
  /* Richiesto per contenuto confinato */
  /* Nota che i componenti Col e Row non inoltrano le ref, 
  /* usare quindi tag div con classi css come nell'esempio */
  const containerRef = useRef(null);
  const { register, isActive, getActiveRef } = useNavScroll({
    root: containerRef.current || undefined
  });

  const getActiveClass = (id: string) => (isActive(id) ? 'active' : undefined);
  return (
    <Container>
      <Row>
        <Col md={12} lg={4}>
          <Navbar
            expand='lg'
            className='it-navscroll-wrapper it-top-navscroll it-right-side affix-top theme-dark-desk theme-dark-mobile'
          >
            <NavbarToggler
              className='custom-navbar-toggler'
              data-target='#navbarNavB'
              onClick={() => toggleNavScroll(!isOpen)}
            >
              <span className='it-list'></span>
              {getActiveRef()?.current?.textContent}
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar id='navbarNavB'>
              <button
                className={`${isOpen ? 'show' : ''} it-back-button btn w-100 text-start`}
                style={{ display: isOpen ? 'block' : 'none' }}
                onClick={() => toggleNavScroll(!isOpen)}
              >
                <Icon className='align-top' color='primary' icon='it-chevron-left' aria-hidden size='sm' />
                <span>Indietro</span>
              </button>
              <div className='menu-wrapper'>
                <div className='link-list-wrapper'>
                  <h3>header</h3>
                  <LinkList noWrapper>
                    <NavItem>
                      <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#1' className={getActiveClass('1')}>
                        <span>1. Introduzione</span>
                      </NavLink>
                      <LinkList noWrapper>
                        <NavLink tag='li' className={getActiveClass('1_1')}>
                          <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#1_1' className={getActiveClass('1_1')}>
                            <span>1.1 Nested Item</span>
                          </NavLink>
                          <LinkList className='tertiary' noWrapper>
                            <NavLink tag='li' className={getActiveClass('1_1_1')}>
                              <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#1_1_1' className={getActiveClass('1_1_1')}>
                                <span>1.1.1 Nested Item</span>
                              </NavLink>
                            </NavLink>
                            <NavLink tag='li' className={getActiveClass('1_1_2')}>
                              <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#1_1_2' className={getActiveClass('1_1_2')}>
                                <span>1.1.2 Nested Item</span>
                              </NavLink>
                            </NavLink>
                            <NavLink tag='li' className={getActiveClass('1_1_3')}>
                              <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#1_1_3' className={getActiveClass('1_1_3')}>
                                <span>1.1.3 Nested Item</span>
                              </NavLink>
                            </NavLink>
                          </LinkList>
                        </NavLink>
                        <NavLink tag='li' className={getActiveClass('1_2')}>
                          <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#1_2' className={getActiveClass('1_2')}>
                            <span>1.2 Nested Item</span>
                          </NavLink>
                        </NavLink>
                        <NavLink tag='li' className={getActiveClass('1_3')}>
                          <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#1_3' className={getActiveClass('1_3')}>
                            <span>1.3 Nested Item</span>
                          </NavLink>
                        </NavLink>
                      </LinkList>
                    </NavItem>
                    <NavItem>
                      <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#2' className={getActiveClass('2')}>
                        <span>2. List item</span>
                      </NavLink>
                      <LinkList noWrapper>
                        <NavLink active tag='li' className={getActiveClass('2_1')}>
                          <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#2_1' className={getActiveClass('2_1')}>
                            <span>2.1 Nested Item</span>
                          </NavLink>
                          <LinkList className='tertiary' noWrapper>
                            <NavLink tag='li' className={getActiveClass('2_1_1')}>
                              <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#2_1_1' className={getActiveClass('2_1_1')}>
                                <span>2.1.1 Nested Item</span>
                              </NavLink>
                            </NavLink>
                            <NavLink tag='li' className={getActiveClass('2_1_2')}>
                              <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#2_1_2' className={getActiveClass('2_1_2')}>
                                <span>2.1.2 Nested Item</span>
                              </NavLink>
                            </NavLink>
                            <NavLink tag='li' className={getActiveClass('2_1_3')}>
                              <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#2_1_3' className={getActiveClass('2_1_3')}>
                                <span>2.1.3 Nested Item</span>
                              </NavLink>
                            </NavLink>
                          </LinkList>
                        </NavLink>
                        <NavLink tag='li' className={getActiveClass('2_2')}>
                          <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#2_2' className={getActiveClass('2_2')}>
                            <span>2.2 Nested Item</span>
                          </NavLink>
                        </NavLink>
                        <NavLink tag='li' className={getActiveClass('2_3')}>
                          <NavLink onClick={() => toggleNavScroll(!isOpen)} href='#2_3' className={getActiveClass('2_3')}>
                            <span>2.3 Nested Item</span>
                          </NavLink>
                        </NavLink>
                      </LinkList>
                    </NavItem>
                  </LinkList>
                </div>
              </div>
            </Collapse>
          </Navbar>
        </Col>
        <div
          className='it-page-sections-container col-12 col-lg-8'
          ref={containerRef}
          style={getStorybookExtraStyles()}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec congue eros. Maecenas sagittis commodo
            libero nec porta. Nunc semper velit venenatis ligula condimentum ultricies. In hac habitasse platea
            dictumst. In malesuada pharetra nulla, id aliquam metus egestas ut. Nulla sollicitudin cursus felis, eu
            sagittis ante porta id. Suspendisse pellentesque ex non sem tincidunt, aliquam rhoncus turpis maximus.
            Vivamus eget massa turpis. Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales
            ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat
            semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus
            viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae
            convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Integer feugiat et massa nec rhoncus. Morbi vitae
            metus et sapien suscipit mattis vitae ac ex. Proin pharetra, sem vitae varius malesuada, risus tortor
            sodales arcu, eu aliquam lorem libero vel urna. Aliquam massa lacus, faucibus quis urna ac, pharetra pretium
            ex. In facilisis urna non urna luctus, a bibendum tortor facilisis. Mauris sed risus justo. In et erat
            fermentum eros hendrerit tempor. Quisque accumsan magna ac risus ultricies, vel condimentum ipsum accumsan.
            Proin blandit mauris sed sodales sollicitudin.
          </p>
          <h2 className='it-page-section' {...register('1')}>
            Introduzione
          </h2>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('1_1', { parent: '1' })}>
            Nested item 1.1
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h4 className='it-page-section' {...register('1_1_1', { parent: '1_1' })}>
            Nested item 1.1.1
          </h4>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h4 className='it-page-section' {...register('1_1_2', { parent: '1_1' })}>
            Nested item 1.1.2
          </h4>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h4 className='it-page-section' {...register('1_1_3', { parent: '1_1' })}>
            Nested item 1.1.3
          </h4>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('1_2', { parent: '1' })}>
            Nested item 1.2
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('1_3', { parent: '1' })}>
            Nested item 1.3
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h2 className='it-page-section' {...register('2')}>
            Introduzione 2
          </h2>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('2_1', { parent: '2' })}>
            Nested item 2.1
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h4 className='it-page-section' {...register('2_1_1', { parent: '2_1' })}>
            Nested item 2.1.1
          </h4>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h4 className='it-page-section' {...register('2_1_2', { parent: '2_1' })}>
            Nested item 2.1.2
          </h4>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h4 className='it-page-section' {...register('2_1_3', { parent: '2_1' })}>
            Nested item 2.1.3
          </h4>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('2_2', { parent: '2' })}>
            Nested item 2.2
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('2_3', { parent: '2' })}>
            Nested item 2.3
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
            neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
            dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam.
            Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra
            lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </div>
      </Row>
    </Container>
  );
};

export const ComponenteVersioneScura: Story = {
  render: () => {
    return <ComponenteVersioneScuraHooks />;
  }
};
