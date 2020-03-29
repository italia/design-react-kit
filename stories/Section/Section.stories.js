import React from 'react'
import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs/react'

import Esempi from './docs/Esempi.md'

import { Section, Container, Row, Col } from '../../src'

const EsempiComponent = () => {
  return (
    <Section>
      <Container>
        <Row className="mb-3">
          <Col xs={'12'}>
            <h4>Morbi fermentum amet</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={'12'} lg={'6'} xl={'4'} className="pr-0 pr-md-5 mb-3">
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper
            dignissim cras. Dictum sit amet justo donec enim diam vulputate ut.
            Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'} className="pr-0 pr-md-5 mb-3">
            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget
            mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi
            ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'} className="pr-0 pr-md-5 mb-3">
            Euismod lacinia at quis risus sed vulputate. Scelerisque purus
            semper eget duis at tellus at urna condimentum. Mattis enim ut
            tellus elementum sagittis.
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

const SfondoTenueComponent = () => {
  return (
    <Section muted>
      <Container>
        <Row className="mb-3">
          <Col xs={'12'}>
            <h4>Morbi fermentum amet</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={'12'} lg={'6'} xl={'4'} className="pr-0 pr-md-5 mb-3">
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper
            dignissim cras. Dictum sit amet justo donec enim diam vulputate ut.
            Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'} className="pr-0 pr-md-5 mb-3">
            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget
            mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi
            ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'} className="pr-0 pr-md-5 mb-3">
            Euismod lacinia at quis risus sed vulputate. Scelerisque purus
            semper eget duis at tellus at urna condimentum. Mattis enim ut
            tellus elementum sagittis.
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

const SfondoPrimarioComponent = () => {
  return (
    <Section color="primary">
      <Container className="white-color">
        <Row className="mb-3">
          <Col xs={'12'}>
            <h4>Morbi fermentum amet</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={'12'} lg={'6'} xl={'4'} className="pr-0 pr-md-5 mb-3">
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper
            dignissim cras. Dictum sit amet justo donec enim diam vulputate ut.
            Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'} className="pr-0 pr-md-5 mb-3">
            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget
            mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi
            ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'} className="pr-0 pr-md-5 mb-3">
            Euismod lacinia at quis risus sed vulputate. Scelerisque purus
            semper eget duis at tellus at urna condimentum. Mattis enim ut
            tellus elementum sagittis.
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

const SfondoNeutraleComponent = () => {
  return (
    <Section neutral>
      <Container className="white-color">
        <Row className="mb-3">
          <Col xs={'12'}>
            <h4>Morbi fermentum amet</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={'12'} lg={'6'} xl={'4'} className="pr-0 pr-md-5 mb-3">
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper
            dignissim cras. Dictum sit amet justo donec enim diam vulputate ut.
            Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'} className="pr-0 pr-md-5 mb-3">
            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget
            mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi
            ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'} className="pr-0 pr-md-5 mb-3">
            Euismod lacinia at quis risus sed vulputate. Scelerisque purus
            semper eget duis at tellus at urna condimentum. Mattis enim ut
            tellus elementum sagittis.
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

const ImmagineComponent = () => {
  return (
    <Section image="https://picsum.photos/1280/720?image=811">
      <Container className="white-color">
        <Row className="mb-3">
          <Col xs={'12'}>
            <h4>Morbi fermentum amet</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={'12'} lg={'6'} xl={'4'} className="pr-0 pr-md-5 mb-3">
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper
            dignissim cras. Dictum sit amet justo donec enim diam vulputate ut.
            Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'} className="pr-0 pr-md-5 mb-3">
            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget
            mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi
            ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'} className="pr-0 pr-md-5 mb-3">
            Euismod lacinia at quis risus sed vulputate. Scelerisque purus
            semper eget duis at tellus at urna condimentum. Mattis enim ut
            tellus elementum sagittis.
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

const SectionConCardComponent = () => {
  return (
    <Section muted withCard>
      <Container>
        <Row className="mb-3">
          <Col xs={'12'}>
            <h4>Morbi fermentum amet</h4>
          </Col>
        </Row>
        <Row>
          <div className="card-deck">
            <div className="card shadow border-0 mg-md-4">
              <div className="card-body">
                <p className="card-text">
                  Platea dictumst vestibulum rhoncus est pellentesque elit
                  ullamcorper dignissim cras. Dictum sit amet justo donec enim
                  diam vulputate ut. Eu nisl nunc mi ipsum faucibus. Eget
                  egestas purus viverra accumsan. Diam maecenas ultricies mi
                  eget mauris pharetra et.{' '}
                </p>
              </div>
            </div>
            <div className="card shadow border-0 mg-md-4">
              <div className="card-body">
                <p className="card-text">
                  Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum
                  faucibus. Euismod lacinia at quis risus sed vulputate.
                  Scelerisque purus semper eget duis at tellus at urna
                  condimentum. Mattis enim ut tellus elementum sagittis.
                </p>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </Section>
  )
}

storiesOf('Componenti/Section', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add(
    'Esempio',
    withInfo({
      text: Esempi,
      propTables: [Section],
      propTablesExclude: [Col, Row, Container]
    })(EsempiComponent)
  )
  .add(
    'Sfondo Tenue',
    withInfo({
      text: Esempi,
      propTables: [Section],
      propTablesExclude: [Col, Row, Container]
    })(SfondoTenueComponent)
  )
  .add(
    'Sfondo Primario',
    withInfo({
      text: Esempi,
      propTables: [Section],
      propTablesExclude: [Col, Row, Container]
    })(SfondoPrimarioComponent)
  )
  .add(
    'Sfondo Neutrale',
    withInfo({
      text: Esempi,
      propTables: [Section],
      propTablesExclude: [Col, Row, Container]
    })(SfondoNeutraleComponent)
  )
  .add(
    'Immagine di sfondo',
    withInfo({
      text: Esempi,
      propTables: [Section],
      propTablesExclude: [Col, Row, Container]
    })(ImmagineComponent)
  )
  .add(
    'Section con Card',
    withInfo({
      text: Esempi,
      propTables: [Section],
      propTablesExclude: [Col, Row, Container]
    })(SectionConCardComponent)
  )
