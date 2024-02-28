/* eslint jsx-a11y/anchor-is-valid: 0 */
import { Story } from '@storybook/react';
import React from 'react';

import {
  Col,
  Collapse,
  Container,
  LinkList,
  Navbar,
  NavItem,
  Row,
  ScrollLink,
  ScrollElement,
  scrollSpy
} from '../../src';
import { getStorybookExtraStyles } from './utils';
import { useEffect } from '@storybook/addons';

export default {
  title: 'Componenti/Navscroll'
};

const ComponenteVersioneScura = () => {
  useEffect(() => {
    // Updating scrollSpy when the component mounts.
    scrollSpy.update();
  }, []);

  // Function to handle the activation of a link.
  const handleSetActive = (to) => {
    console.log(to);
  };
  return (
    <Container>
      <Row>
        <Col md={12} lg={4}>
          <Navbar
            expand='lg'
            className='it-navscroll-wrapper navbar-expand-lg it-top-navscroll it-right-side affix-top theme-dark-desk theme-dark-mobile'
          >
            <Collapse isOpen={true} navbar id='navbarNavA'>
              <div className='menu-wrapper'>
                <div className='link-list-wrapper'>
                  <h3>header</h3>
                  <LinkList noWrapper>
                    <NavItem>
                      <ScrollLink
                        containerId='containerSectionDark'
                        activeClass='active'
                        to='sectionDark-1'
                        spy={true}
                        smooth={true}
                        onSetActive={handleSetActive}
                      >
                        <span>1. Introduzione</span>
                      </ScrollLink>
                      <LinkList noWrapper>
                        <NavItem tag='li'>
                          <ScrollLink
                            containerId='containerSectionDark'
                            activeClass='active'
                            to='sectionDark-1-1'
                            spy={true}
                            smooth={true}
                            onSetActive={handleSetActive}
                          >
                            <span>1.1 Nested Item</span>
                          </ScrollLink>
                          <LinkList className='tertiary' noWrapper>
                            <NavItem tag='li'>
                              <ScrollLink
                                containerId='containerSectionDark'
                                activeClass='active'
                                to='sectionDark-1-1-1'
                                spy={true}
                                smooth={true}
                                onSetActive={handleSetActive}
                              >
                                <span>1.1.1 Nested Item</span>
                              </ScrollLink>
                            </NavItem>
                            <NavItem tag='li'>
                              <ScrollLink
                                containerId='containerSectionDark'
                                activeClass='active'
                                to='sectionDark-1-1-2'
                                spy={true}
                                smooth={true}
                                onSetActive={handleSetActive}
                              >
                                <span>1.1.2 Nested Item</span>
                              </ScrollLink>
                            </NavItem>
                            <NavItem tag='li'>
                              <ScrollLink
                                containerId='containerSectionDark'
                                activeClass='active'
                                to='sectionDark-1-1-3'
                                spy={true}
                                smooth={true}
                                onSetActive={handleSetActive}
                              >
                                <span>1.1.3 Nested Item</span>
                              </ScrollLink>
                            </NavItem>
                          </LinkList>
                        </NavItem>
                        <NavItem tag='li'>
                          <ScrollLink
                            containerId='containerSectionDark'
                            activeClass='active'
                            to='sectionDark-1-2'
                            spy={true}
                            smooth={true}
                            onSetActive={handleSetActive}
                          >
                            <span>1.2 Nested Item</span>
                          </ScrollLink>
                        </NavItem>
                        <NavItem tag='li'>
                          <ScrollLink
                            containerId='containerSectionDark'
                            activeClass='active'
                            to='sectionDark-1-3'
                            spy={true}
                            smooth={true}
                            onSetActive={handleSetActive}
                          >
                            <span>1.3 Nested Item</span>
                          </ScrollLink>
                        </NavItem>
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
          style={getStorybookExtraStyles()}
          id='containerSectionDark'
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
          <ScrollElement name='sectionDark-1'>
            <h2 className='it-page-section'>Introduzione</h2>
            <p>
              Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies
              a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
              ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
              dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut
              quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod
              pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus.
            </p>
          </ScrollElement>
          <ScrollElement name='sectionDark-1-1'>
            <h3 className='it-page-section'>Nested item 1.1</h3>
            <p>
              Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
              neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
              ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
              dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut
              quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod
              pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus.
            </p>
          </ScrollElement>
          <ScrollElement name='sectionDark-1-1-1'>
            <h4 className='it-page-section'>Nested item 1.1.1</h4>
            <p>
              Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
              neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
              ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
              dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut
              quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod
              pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus.
            </p>
          </ScrollElement>
          <ScrollElement name='sectionDark-1-1-2'>
            <h4 className='it-page-section'>Nested item 1.1.2</h4>
            <p>
              Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
              neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
              ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
              dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut
              quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod
              pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus.
            </p>
          </ScrollElement>
          <ScrollElement name='sectionDark-1-1-3'>
            <h4 className='it-page-section'>Nested item 1.1.3</h4>
            <p>
              Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
              neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
              ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
              dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut
              quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod
              pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus.
            </p>
          </ScrollElement>
          <ScrollElement name='sectionDark-1-2'>
            <h3 className='it-page-section'>Nested item 1.2</h3>
            <p>
              Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
              neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
              ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
              dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut
              quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod
              pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus.
            </p>
          </ScrollElement>
          <ScrollElement name='sectionDark-1-3'>
            <h3 className='it-page-section'> Nested item 1.3</h3>
            <p>
              Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
              neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante
              ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis
              dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut
              quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod
              pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus.
            </p>
          </ScrollElement>
        </div>
      </Row>
    </Container>
  );
};

export const VersioneScura: Story = ComponenteVersioneScura.bind({});

VersioneScura.storyName = 'Variante scura';
