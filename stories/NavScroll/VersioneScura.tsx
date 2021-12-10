/* eslint jsx-a11y/anchor-is-valid: 0 */
import React, { useRef, useState } from 'react';
import {
  Col,
  Collapse,
  Container,
  Icon,
  LinkList,
  Navbar,
  NavbarToggler,
  NavItem,
  NavLink,
  Row,
  useNavScroll
} from '../../src';
import { getStorybookExtraStyles } from './utils';

const PosizionamentoTestaAlta = () => {
  const [isOpen, toggleNavScroll] = useState(false);
  const containerRef = useRef(null);
  const { register, isActive, getActiveRef } = useNavScroll({
    root: containerRef?.current
  });

  const getActiveClass = (id: string) => (isActive(id) ? 'active' : undefined);
  return (
    <Container>
      <Row>
        <Col md={12} lg={4}>
          <Navbar
            expand='lg'
            className='it-navscroll-wrapper navbar-expand-lg it-top-navscroll it-right-side affix-top theme-dark-desk theme-dark-mobile'
          >
            <NavbarToggler
              className={
                isOpen
                  ? 'custom-navbar-toggler focus--mouse'
                  : 'custom-navbar-toggler'
              }
              data-target='#navbarNavB'
              onClick={() => toggleNavScroll(!isOpen)}
            >
              <span className='it-list'></span>
              {getActiveRef()?.current?.textContent}
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar id='navbarNavB'>
              <a
                className='it-back-button'
                href='#'
                style={{ display: isOpen ? 'block' : 'none' }}
                onClick={() => toggleNavScroll(!isOpen)}
              >
                <Icon
                  className='align-top'
                  color='primary'
                  icon='it-chevron-left'
                  aria-hidden
                  size='sm'
                />
                <span>Back </span>
              </a>
              <div className='menu-wrapper'>
                <div className='link-list-wrapper'>
                  <h3>header</h3>
                  <LinkList noWrapper>
                    <NavItem>
                      <NavLink href='#1' className={getActiveClass('1')}>
                        <span>1. Introduzione</span>
                      </NavLink>
                      <LinkList noWrapper>
                        <NavLink tag='li' className={getActiveClass('1_1')}>
                          <NavLink
                            href='#1_1'
                            className={getActiveClass('1_1')}
                          >
                            <span>1.1 Nested Item</span>
                          </NavLink>
                          <LinkList className='tertiary' noWrapper>
                            <NavLink
                              tag='li'
                              className={getActiveClass('1_1_1')}
                            >
                              <NavLink
                                href='#1_1_1'
                                className={getActiveClass('1_1_1')}
                              >
                                <span>1.1.1 Nested Item</span>
                              </NavLink>
                            </NavLink>
                            <NavLink
                              tag='li'
                              className={getActiveClass('1_1_2')}
                            >
                              <NavLink
                                href='#1_1_2'
                                className={getActiveClass('1_1_2')}
                              >
                                <span>1.1.2 Nested Item</span>
                              </NavLink>
                            </NavLink>
                            <NavLink
                              tag='li'
                              className={getActiveClass('1_1_3')}
                            >
                              <NavLink
                                href='#1_1_3'
                                className={getActiveClass('1_1_3')}
                              >
                                <span>1.1.3 Nested Item</span>
                              </NavLink>
                            </NavLink>
                          </LinkList>
                        </NavLink>
                        <NavLink tag='li' className={getActiveClass('1_2')}>
                          <NavLink
                            href='#1_2'
                            className={getActiveClass('1_2')}
                          >
                            <span>1.2 Nested Item</span>
                          </NavLink>
                        </NavLink>
                        <NavLink tag='li' className={getActiveClass('1_3')}>
                          <NavLink
                            href='#1_3'
                            className={getActiveClass('1_3')}
                          >
                            <span>1.3 Nested Item</span>
                          </NavLink>
                        </NavLink>
                      </LinkList>
                    </NavItem>
                    <NavItem>
                      <NavLink href='#2' className={getActiveClass('2')}>
                        <span>2. List item</span>
                      </NavLink>
                      <LinkList noWrapper>
                        <NavLink
                          active
                          tag='li'
                          className={getActiveClass('2_1')}
                        >
                          <NavLink
                            href='#2_1'
                            className={getActiveClass('2_1')}
                          >
                            <span>2.1 Nested Item</span>
                          </NavLink>
                          <LinkList className='tertiary' noWrapper>
                            <NavLink
                              tag='li'
                              className={getActiveClass('2_1_1')}
                            >
                              <NavLink
                                href='#2_1_1'
                                className={getActiveClass('2_1_1')}
                              >
                                <span>2.1.1 Nested Item</span>
                              </NavLink>
                            </NavLink>
                            <NavLink
                              tag='li'
                              className={getActiveClass('2_1_2')}
                            >
                              <NavLink
                                href='#2_1_2'
                                className={getActiveClass('2_1_2')}
                              >
                                <span>2.1.2 Nested Item</span>
                              </NavLink>
                            </NavLink>
                            <NavLink
                              tag='li'
                              className={getActiveClass('2_1_3')}
                            >
                              <NavLink
                                href='#2_1_3'
                                className={getActiveClass('2_1_3')}
                              >
                                <span>2.1.3 Nested Item</span>
                              </NavLink>
                            </NavLink>
                          </LinkList>
                        </NavLink>
                        <NavLink tag='li' className={getActiveClass('2_2')}>
                          <NavLink
                            href='#2_2'
                            className={getActiveClass('2_2')}
                          >
                            <span>2.2 Nested Item</span>
                          </NavLink>
                        </NavLink>
                        <NavLink tag='li' className={getActiveClass('2_3')}>
                          <NavLink
                            href='#2_3'
                            className={getActiveClass('2_3')}
                          >
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
            congue eros. Maecenas sagittis commodo libero nec porta. Nunc semper
            velit venenatis ligula condimentum ultricies. In hac habitasse
            platea dictumst. In malesuada pharetra nulla, id aliquam metus
            egestas ut. Nulla sollicitudin cursus felis, eu sagittis ante porta
            id. Suspendisse pellentesque ex non sem tincidunt, aliquam rhoncus
            turpis maximus. Vivamus eget massa turpis. Proin placerat ipsum
            massa, ac commodo velit tempor quis. In ante augue, sodales ac
            rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia
            nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Aliquam laoreet, diam quis blandit porttitor,
            leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat
            pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut
            quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget
            purus vitae convallis. Integer euismod pharetra lorem, non
            ullamcorper lorem euismod vel. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Integer
            feugiat et massa nec rhoncus. Morbi vitae metus et sapien suscipit
            mattis vitae ac ex. Proin pharetra, sem vitae varius malesuada,
            risus tortor sodales arcu, eu aliquam lorem libero vel urna. Aliquam
            massa lacus, faucibus quis urna ac, pharetra pretium ex. In
            facilisis urna non urna luctus, a bibendum tortor facilisis. Mauris
            sed risus justo. In et erat fermentum eros hendrerit tempor. Quisque
            accumsan magna ac risus ultricies, vel condimentum ipsum accumsan.
            Proin blandit mauris sed sodales sollicitudin.
          </p>
          <h2 className='it-page-section' {...register('1')}>
            Introduzione
          </h2>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante
            augue, sodales ac rhoncus in, ultricies a neque. Morbi non semper
            felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis
            blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu
            magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus
            viverra malesuada vel ut quam. Cras vehicula rutrum vehicula.
            Suspendisse efficitur eget purus vitae convallis. Integer euismod
            pharetra lorem, non ullamcorper lorem euismod vel. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('1_1', { parent: '1' })}>
            Nested item 1.1
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante
            augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper
            felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis
            blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu
            magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus
            viverra malesuada vel ut quam. Cras vehicula rutrum vehicula.
            Suspendisse efficitur eget purus vitae convallis. Integer euismod
            pharetra lorem, non ullamcorper lorem euismod vel. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
          <h4
            className='it-page-section'
            {...register('1_1_1', { parent: '1_1' })}
          >
            Nested item 1.1.1
          </h4>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante
            augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper
            felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis
            blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu
            magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus
            viverra malesuada vel ut quam. Cras vehicula rutrum vehicula.
            Suspendisse efficitur eget purus vitae convallis. Integer euismod
            pharetra lorem, non ullamcorper lorem euismod vel. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
          <h4
            className='it-page-section'
            {...register('1_1_2', { parent: '1_1' })}
          >
            Nested item 1.1.2
          </h4>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante
            augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper
            felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis
            blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu
            magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus
            viverra malesuada vel ut quam. Cras vehicula rutrum vehicula.
            Suspendisse efficitur eget purus vitae convallis. Integer euismod
            pharetra lorem, non ullamcorper lorem euismod vel. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
          <h4
            className='it-page-section'
            {...register('1_1_3', { parent: '1_1' })}
          >
            Nested item 1.1.3
          </h4>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante
            augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper
            felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis
            blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu
            magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus
            viverra malesuada vel ut quam. Cras vehicula rutrum vehicula.
            Suspendisse efficitur eget purus vitae convallis. Integer euismod
            pharetra lorem, non ullamcorper lorem euismod vel. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('1_2', { parent: '1' })}>
            Nested item 1.2
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante
            augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper
            felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis
            blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu
            magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus
            viverra malesuada vel ut quam. Cras vehicula rutrum vehicula.
            Suspendisse efficitur eget purus vitae convallis. Integer euismod
            pharetra lorem, non ullamcorper lorem euismod vel. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('1_3', { parent: '1' })}>
            Nested item 1.3
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante
            augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper
            felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis
            blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu
            magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus
            viverra malesuada vel ut quam. Cras vehicula rutrum vehicula.
            Suspendisse efficitur eget purus vitae convallis. Integer euismod
            pharetra lorem, non ullamcorper lorem euismod vel. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
          <h2 className='it-page-section' {...register('2')}>
            Introduzione 2
          </h2>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante
            augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper
            felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis
            blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu
            magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus
            viverra malesuada vel ut quam. Cras vehicula rutrum vehicula.
            Suspendisse efficitur eget purus vitae convallis. Integer euismod
            pharetra lorem, non ullamcorper lorem euismod vel. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('2_1', { parent: '2' })}>
            Nested item 2.1
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante
            augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper
            felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis
            blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu
            magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus
            viverra malesuada vel ut quam. Cras vehicula rutrum vehicula.
            Suspendisse efficitur eget purus vitae convallis. Integer euismod
            pharetra lorem, non ullamcorper lorem euismod vel. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
          <h4
            className='it-page-section'
            {...register('2_1_1', { parent: '2_1' })}
          >
            Nested item 2.1.1
          </h4>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante
            augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper
            felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis
            blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu
            magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus
            viverra malesuada vel ut quam. Cras vehicula rutrum vehicula.
            Suspendisse efficitur eget purus vitae convallis. Integer euismod
            pharetra lorem, non ullamcorper lorem euismod vel. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
          <h4
            className='it-page-section'
            {...register('2_1_2', { parent: '2_1' })}
          >
            Nested item 2.1.2
          </h4>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante
            augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper
            felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis
            blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu
            magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus
            viverra malesuada vel ut quam. Cras vehicula rutrum vehicula.
            Suspendisse efficitur eget purus vitae convallis. Integer euismod
            pharetra lorem, non ullamcorper lorem euismod vel. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
          <h4
            className='it-page-section'
            {...register('2_1_3', { parent: '2_1' })}
          >
            Nested item 2.1.3
          </h4>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante
            augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper
            felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis
            blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu
            magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus
            viverra malesuada vel ut quam. Cras vehicula rutrum vehicula.
            Suspendisse efficitur eget purus vitae convallis. Integer euismod
            pharetra lorem, non ullamcorper lorem euismod vel. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('2_2', { parent: '2' })}>
            Nested item 2.2
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante
            augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper
            felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis
            blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu
            magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus
            viverra malesuada vel ut quam. Cras vehicula rutrum vehicula.
            Suspendisse efficitur eget purus vitae convallis. Integer euismod
            pharetra lorem, non ullamcorper lorem euismod vel. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
          <h3 className='it-page-section' {...register('2_3', { parent: '2' })}>
            Nested item 2.3
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante
            augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper
            felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis
            blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu
            magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus
            viverra malesuada vel ut quam. Cras vehicula rutrum vehicula.
            Suspendisse efficitur eget purus vitae convallis. Integer euismod
            pharetra lorem, non ullamcorper lorem euismod vel. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
        </div>
      </Row>
    </Container>
  );
};

export default PosizionamentoTestaAlta;
