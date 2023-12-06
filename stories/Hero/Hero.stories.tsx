import React from 'react';
import {
  Card,
  CardBody,
  CardReadMore,
  CardSignature,
  CardText,
  CardTitle,
  Col,
  Container,
  Hero,
  HeroBackground,
  HeroBody,
  HeroButton,
  HeroCategory,
  HeroTitle,
  Row
} from '../../src';

export default {
  title: 'Componenti/Hero'
};

export const HeroConSfondo = () => {
  return (
    <Hero>
      <HeroBackground
        src='https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg'
        title='image title'
        alt='imagealt'
      />
    </Hero>
  );
};

export const HeroConSfondoSmall = () => {
  return (
    <Hero small>
      <HeroBackground
        src='https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg'
        title='image title'
        alt='imagealt'
      />
    </Hero>
  );
};

export const HeroConTesto = () => {
  return (
    <Hero>
      <HeroBody>
        <HeroCategory>Category</HeroCategory>
        <HeroTitle>Heading lorem ipsum dolor sit amet, consetetur sadipscing.</HeroTitle>
        <p className='d-none d-lg-block'>
          Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
          donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
        </p>
        <HeroButton outline color='primary'>
          Label button
        </HeroButton>
      </HeroBody>
    </Hero>
  );
};

export const HeroConTestoCentrato = () => {
  return (
    <Hero centered>
      <HeroBody>
        <HeroCategory>Category</HeroCategory>
        <HeroTitle>Heading lorem ipsum dolor sit amet, consetetur sadipscing.</HeroTitle>
        <p className='d-none d-lg-block'>
          Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
          donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
        </p>
        <HeroButton outline color='primary'>
          Label button
        </HeroButton>
      </HeroBody>
    </Hero>
  );
};

export const HeroConTestoSuSfondo = () => {
  return (
    <Hero overlay='dark'>
      <HeroBackground
        src='https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg'
        title='image title'
        alt='imagealt'
      />
      <HeroBody>
        <HeroCategory>Category</HeroCategory>
        <HeroTitle>Heading lorem ipsum dolor sit amet, consetetur sadipscing.</HeroTitle>
        <p className='d-none d-lg-block'>
          Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
          donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
        </p>
        <HeroButton color='secondary'>Label button</HeroButton>
      </HeroBody>
    </Hero>
  );
};

export const HeroConTestoSuSfondoOverlayPrimario = () => {
  return (
    <Hero overlay='primary'>
      <HeroBackground
        src='https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg'
        title='image title'
        alt='imagealt'
      />
      <HeroBody>
        <HeroCategory>Category</HeroCategory>
        <HeroTitle>Heading lorem ipsum dolor sit amet, consetetur sadipscing.</HeroTitle>
        <p className='d-none d-lg-block'>
          Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
          donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
        </p>
        <HeroButton outline color='primary'>
          Label button
        </HeroButton>
      </HeroBody>
    </Hero>
  );
};

export const HeroConSfondoOverlayFiltro = () => {
  return (
    <Hero overlay='filter'>
      <HeroBackground
        src='https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg'
        title='image title'
        alt='imagealt'
      />
    </Hero>
  );
};

export const HeroConSfondoMargineNegativo = () => {
  return (
    <>
      <Hero overlap>
        <HeroBackground
          src='https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg'
          title='image title'
          alt='imagealt'
        />
        <HeroBody>
          <HeroCategory>Category</HeroCategory>
          <HeroTitle>Heading lorem ipsum dolor sit amet, consetetur sadipscing.</HeroTitle>
          <p className='d-none d-lg-block'>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
          </p>
          <HeroButton color='secondary'>Label button</HeroButton>
        </HeroBody>
      </Hero>
      <Container>
        <Row>
          <Col>
            <Card spacing className='card-bg'>
              <CardBody>
                <CardTitle tag='h5' className='big-heading'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit…
                </CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </CardText>
                <CardSignature>di Federico De Paolis</CardSignature>
                <CardReadMore text='Leggi di più' iconName='it-arrow-right' />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
