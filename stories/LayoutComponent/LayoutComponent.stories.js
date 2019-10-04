import React from 'react'
import { storiesOf } from '@storybook/react'

import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import { Container, Row, Col } from '../../src'

import Esempi from './docs/Esempi.md'

const EsempiComponent = () => (
  <div>
    <Container>
      <Row>
        <Col className="p-3 mb-2 text-white bg-dark">.col</Col>
      </Row>
      <Row>
        <Col className="p-3 mb-2 text-white bg-dark">.col</Col>
        <Col className="p-3 mb-2 text-white bg-primary">.col</Col>
        <Col className="p-3 mb-2 text-white bg-dark">.col</Col>
        <Col className="p-3 mb-2 text-white bg-primary">.col</Col>
      </Row>
      <Row>
        <Col xs="3" className="p-3 mb-2 text-white bg-dark">
          .col-3
        </Col>
        <Col xs="auto" className="p-3 mb-2 text-white bg-primary">
          .col-auto - variable width content
        </Col>
        <Col xs="3" className="p-3 mb-2 text-white bg-dark">
          .col-3
        </Col>
      </Row>
      <Row>
        <Col xs="6" className="p-3 mb-2 text-white bg-dark">
          .col-6
        </Col>
        <Col xs="6" className="p-3 mb-2 text-white bg-primary">
          .col-6
        </Col>
      </Row>
      <Row>
        <Col xs="6" sm="4" className="p-3 mb-2 text-white bg-dark">
          .col-6 .col-sm-4
        </Col>
        <Col xs="6" sm="4" className="p-3 mb-2 text-white bg-primary">
          .col-6 .col-sm-4
        </Col>
        <Col sm="4" className="p-3 mb-2 text-white bg-dark">
          .col-sm-4
        </Col>
      </Row>
      <Row>
        <Col
          sm={{ size: 6, order: 2, offset: 1 }}
          className="p-3 mb-2 text-white bg-dark">
          .col-sm-6 .order-sm-2 .offset-sm-1
        </Col>
      </Row>
      <Row>
        <Col
          sm="12"
          md={{ size: 6, offset: 3 }}
          className="p-3 mb-2 text-white bg-primary">
          .col-sm-12 .col-md-6 .offset-md-3
        </Col>
      </Row>
      <Row>
        <Col
          sm={{ size: 'auto', offset: 1 }}
          className="p-3 mb-2 text-white bg-dark">
          .col-sm-auto .offset-sm-1
        </Col>
        <Col
          sm={{ size: 'auto', offset: 1 }}
          className="p-3 mb-2 text-white bg-primary">
          .col-sm-auto .offset-sm-1
        </Col>
      </Row>
    </Container>
  </div>
)

storiesOf('Componenti/Layout Component', module)
  .addDecorator(withA11y)
  .add(
    'Esempi',
    withInfo({
      text: Esempi
    })(EsempiComponent)
  )
