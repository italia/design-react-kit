import { Meta, StoryObj } from '@storybook/react-vite';
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

const meta: Meta<typeof Hero> = {
  title: "Documentazione/Componenti/Hero",
  component: Hero,
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const HeroConSfondo: Story = {
  render: () => (
    <Hero aria-label='In evidenza'>
      <HeroBackground
        src='https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg'
        title='image title'
        alt='imagealt'
      />
    </Hero>
  )
};

export const HeroConSfondoSmall: Story = {
  render: () => (
    <Hero aria-label='In evidenza' small>
      <HeroBackground
        src='https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg'
        title='image title'
        alt='imagealt'
      />
    </Hero>
  )
}

export const HeroConTesto: Story = {
  render: () => (
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
  )
};

export const HeroConTestoCentrato: Story = {
  render: () => (
    <Hero centered>
      <HeroBody>
        <HeroCategory>Category</HeroCategory>
        <HeroTitle tag={'h2'}>Heading lorem ipsum dolor sit amet, consetetur sadipscing.</HeroTitle>
        <p className='d-none d-lg-block'>
          Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
          donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
        </p>
        <HeroButton outline color='primary'>
          Label button
        </HeroButton>
      </HeroBody>
    </Hero>
  )
};

export const HeroConTestoSuSfondo: Story = {
  render: () => (
    <Hero overlay='dark'>
      <HeroBackground
        src='https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg'
        title='image title'
        alt='imagealt'
      />
      <HeroBody>
        <HeroCategory>Category</HeroCategory>
        <HeroTitle tag={'h2'}>Heading lorem ipsum dolor sit amet, consetetur sadipscing.</HeroTitle>
        <p className='d-none d-lg-block'>
          Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
          donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
        </p>
        <HeroButton color='secondary'>Label button</HeroButton>
      </HeroBody>
    </Hero>
  )
};

export const HeroConTestoSuSfondoOverlayPrimario: Story = {
  render: () => (
    <Hero overlay='primary'>
      <HeroBackground
        src='https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg'
        title='image title'
        alt='imagealt'
      />
      <HeroBody>
        <HeroCategory>Category</HeroCategory>
        <HeroTitle tag={'h2'}>Heading lorem ipsum dolor sit amet, consetetur sadipscing.</HeroTitle>
        <p className='d-none d-lg-block'>
          Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
          donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
        </p>
        <HeroButton outline color='primary'>
          Label button
        </HeroButton>
      </HeroBody>
    </Hero>
  )
};

export const HeroConSfondoOverlayFiltro: Story = {
  render: () => (
    <Hero overlay='filter'>
      <HeroBackground
        src='https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg'
        title='image title'
        alt='imagealt'
      />
    </Hero>
  )
};

export const HeroConSfondoMargineNegativo: Story = {
  render: () => (
    <>
      <Hero overlay='dark' overlap>
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
  )
};
