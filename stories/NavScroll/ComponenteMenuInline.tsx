/* eslint jsx-a11y/anchor-is-valid: 0 */
import React, { useRef, useState } from 'react';
import {
  Col,
  Container,
  Icon,
  LinkList,
  LinkListItem,
  Navbar,
  Row,
  useNavScroll
} from '../../src';
import { getStorybookExtraStyles } from './utils';

const ComponenteMenuInline = () => {
  const [isOpenOne, toggleNavScrollOne] = useState(false);
  const [isOpenTwo, toggleNavScrollTwo] = useState(false);
  const [isOpenThree, toggleNavScrollThree] = useState(false);
  const containerRef = useRef(null);
  const { register, isActive } = useNavScroll({
    root: containerRef?.current
  });

  const getActiveClass = (id: string) => (isActive(id) ? 'active' : undefined);

  const isFirstOpen = isOpenOne || isActive('1');
  const isSecondOpen = isOpenTwo || isActive('2');
  const isThirdOpen = isOpenThree || isActive('3');
  return (
    <Container>
      <Row>
        <Col md={12} lg={4}>
          <Navbar className='inline-menu affix-top' cssModule={{ navbar: ' ' }}>
            <LinkList>
              <li>
                <a
                  className={`list-item large medium right-icon ${
                    isFirstOpen ? '' : 'collapsed'
                  } ${getActiveClass('1')}`}
                  href={`#collapseOne`}
                  data-toggle='collapse'
                  aria-expanded='false'
                  aria-controls='collapseOne'
                  onClick={(e) => {
                    e.preventDefault();
                    toggleNavScrollOne(!isOpenOne);
                  }}
                >
                  <span>Link list 1</span>
                  <Icon
                    color='primary'
                    icon='it-expand'
                    aria-hidden
                    size='sm'
                  />
                </a>
                <LinkList
                  sublist
                  className={isFirstOpen ? 'collapse show' : 'collapse'}
                  id='collapseOne'
                >
                  <LinkListItem className={getActiveClass('1_1')}>
                    Link list 1.1
                  </LinkListItem>
                  <LinkListItem className={getActiveClass('1_2')}>
                    Link list 1.2
                  </LinkListItem>
                  <LinkListItem className={getActiveClass('1_3')}>
                    Link list 1.3
                  </LinkListItem>
                </LinkList>
              </li>
              <li>
                <a
                  className={`list-item large medium right-icon ${
                    isSecondOpen ? '' : 'collapsed'
                  } ${getActiveClass('2')}`}
                  href={`#collapseTwo`}
                  data-toggle='collapse'
                  aria-expanded='false'
                  aria-controls='collapseTwo'
                  onClick={(e) => {
                    e.preventDefault();
                    toggleNavScrollTwo(!isOpenTwo);
                  }}
                >
                  <span>Link list 2</span>
                  <Icon
                    color='primary'
                    icon='it-expand'
                    aria-hidden
                    size='sm'
                  />
                </a>
                <LinkList
                  sublist
                  className={isSecondOpen ? 'collapse show' : 'collapse'}
                  id='collapseTwo'
                >
                  <LinkListItem className={getActiveClass('2_1')}>
                    Link list 2.1
                  </LinkListItem>
                  <LinkListItem className={getActiveClass('2_2')}>
                    Link list 2.2
                  </LinkListItem>
                  <LinkListItem className={getActiveClass('2_3')}>
                    Link list 2.3
                  </LinkListItem>
                </LinkList>
              </li>
              <li>
                <a
                  className={`list-item large medium right-icon ${
                    isThirdOpen ? '' : 'collapsed'
                  } ${getActiveClass('3')}`}
                  href={`#collapseThree`}
                  data-toggle='collapse'
                  aria-expanded='false'
                  aria-controls='collapseThree'
                  onClick={(e) => {
                    e.preventDefault();
                    toggleNavScrollThree(!isOpenThree);
                  }}
                >
                  <span>Link list 3</span>
                  <Icon
                    color='primary'
                    icon='it-expand'
                    aria-hidden
                    size='sm'
                  />
                </a>
                <LinkList
                  sublist
                  className={isThirdOpen ? 'collapse show' : 'collapse'}
                  id='collapseThree'
                >
                  <LinkListItem className={getActiveClass('3_1')}>
                    Link list 3.1
                  </LinkListItem>
                  <LinkListItem className={getActiveClass('3_2')}>
                    Link list 3.2
                  </LinkListItem>
                  <LinkListItem className={getActiveClass('3_3')}>
                    Link list 3.3
                  </LinkListItem>
                </LinkList>
              </li>
            </LinkList>
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
          <h2 className='it-page-section' {...register('3')}>
            Introduzione 3
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
          <h3 className='it-page-section' {...register('3_1', { parent: '3' })}>
            Nested item 3.1
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
          <h3 className='it-page-section' {...register('3_2', { parent: '3' })}>
            Nested item 3.2
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
          <h3 className='it-page-section' {...register('3_3', { parent: '3' })}>
            Nested item 3.3
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

export default ComponenteMenuInline;
