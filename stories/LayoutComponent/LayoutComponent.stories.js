import React from 'react'
import { storiesOf } from '@storybook/react'

import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import { Container, Row, Col } from '../../src'

import StandardWidth from './docs/StandardWidth.md'
import SetWidthColumn from './docs/SetWidthColumn.md'
import VariableWidth from './docs/VariableWidth.md'
import EqualWidthRow from './docs/EqualWidthRow.md'
import Breakpoint from './docs/Breakpoint.md'
import HorizontalGrouping from './docs/HorizontalGrouping.md'
import MixMatch from './docs/MixMatch.md'

const StandardWidthComponent = () => (
  <div>
    <Container>
      <Row>
        <Col className="p-3 mb-2 text-white bg-dark"> 1 di 2</Col>
        <Col className="p-3 mb-2 text-white bg-primary">2 di 2</Col>
      </Row>
      <Row>
        <Col className="p-3 mb-2 text-white bg-dark">1 di 3</Col>
        <Col className="p-3 mb-2 text-white bg-primary">2 di 3</Col>
        <Col className="p-3 mb-2 text-white bg-dark">3 di 3</Col>
      </Row>
    </Container>
  </div>
)

const SetWidthColumnComponent = () => (
  <div>
    <Container>
      <Row>
        <Col className="p-3 mb-2 text-white bg-dark"> 1 di 3</Col>
        <Col xs="6" className="p-3 mb-2 text-white bg-primary">
          2 di 3 (larga 6/12)
        </Col>
        <Col className="p-3 mb-2 text-white bg-dark">3 di 3</Col>
      </Row>
      <Row>
        <Col className="p-3 mb-2 text-white bg-dark">1 di 3</Col>
        <Col xs="5" className="p-3 mb-2 text-white bg-primary">
          2 di 3 (larga 5/12)
        </Col>
        <Col className="p-3 mb-2 text-white bg-dark">3 di 3</Col>
      </Row>
    </Container>
  </div>
)

const VariableWidthComponent = () => (
  <div>
    <Container>
      <Row>
        <Col lg="2" className="p-3 mb-2 text-white bg-dark">
          1 di 3
        </Col>
        <Col xs="auto" className="p-3 mb-2 text-white bg-primary">
          Contenuto a larghezza variabile
        </Col>
        <Col lg="2" className="p-3 mb-2 text-white bg-dark">
          3 di 3
        </Col>
      </Row>
      <Row>
        <Col className="p-3 mb-2 text-white bg-dark">1 di 3</Col>
        <Col md="auto" className="p-3 mb-2 text-white bg-primary">
          Contenuto a larghezza variabile
        </Col>
        <Col lg="2" className="p-3 mb-2 text-white bg-dark">
          3 di 3
        </Col>
      </Row>
    </Container>
  </div>
)

const EqualWidthRowComponent = () => (
  <div>
    <Container>
      <Row>
        <Col className="p-3 mb-2 text-white bg-dark">col</Col>
        <Col className="p-3 mb-2 text-white bg-primary">col</Col>
      </Row>
      <Row>
        <Col className="p-3 mb-2 text-white bg-primary">col</Col>
        <Col className="p-3 mb-2 text-white bg-dark">col</Col>
      </Row>
    </Container>
  </div>
)

const BreakpointComponent = () => (
  <div>
    <Container>
      <Row>
        <Col className="p-3 mb-2 text-white bg-dark">col</Col>
        <Col className="p-3 mb-2 text-white bg-primary">col</Col>
        <Col className="p-3 mb-2 text-white bg-dark">col</Col>
        <Col className="p-3 mb-2 text-white bg-primary">col</Col>
      </Row>
      <Row>
        <Col xs={8} className="p-3 mb-2 text-white bg-primary">
          col-8
        </Col>
        <Col xs={4} className="p-3 mb-2 text-white bg-dark">
          col-4
        </Col>
      </Row>
    </Container>
  </div>
)

const HorizontalGroupingComponent = () => (
  <div>
    <Container>
      <Row>
        <Col sm="8" className="p-3 mb-2 text-white bg-dark">
          col-sm-8
        </Col>
        <Col sm="4" className="p-3 mb-2 text-white bg-primary">
          col-sm-4
        </Col>
      </Row>
      <Row>
        <Col widths={['sm']} className="p-3 mb-2 text-white bg-primary">
          col-sm
        </Col>
        <Col widths={['sm']} className="p-3 mb-2 text-white bg-dark">
          col-sm
        </Col>
        <Col widths={['sm']} className="p-3 mb-2 text-white bg-primary">
          col-sm
        </Col>
      </Row>
    </Container>
  </div>
)
const MixMatchComponent = () => (
  <div>
    <Container>
      <Row>
        <Col xs="12" md="8" className="p-3 mb-2 text-white bg-dark">
          .col-12 .col-md-8
        </Col>
        <Col xs="6" md="4" className="p-3 mb-2 text-white bg-primary">
          .col-6 .col-md-4
        </Col>
      </Row>
      <Row>
        <Col xs="6" md="4" className="p-3 mb-2 text-white bg-primary">
          .col-6 .col-md-4
        </Col>
        <Col xs="6" md="4" className="p-3 mb-2 text-white bg-dark">
          .col-6 .col-md-4
        </Col>
        <Col xs="6" md="4" className="p-3 mb-2 text-white bg-primary">
          .col-6 .col-md-4
        </Col>
      </Row>
      <Row>
        <Col xs="6" className="p-3 mb-2 text-white bg-primary">
          .col-6
        </Col>
        <Col xs="6" className="p-3 mb-2 text-white bg-dark">
          .col-6
        </Col>
      </Row>
    </Container>
  </div>
)

storiesOf('Componenti/Layout Component', module)
  .addDecorator(withA11y)
  .add(
    'Standardize widths',
    withInfo({
      text: StandardWidth
    })(StandardWidthComponent)
  )
  .add(
    'Set width of Column',
    withInfo({
      text: SetWidthColumn
    })(SetWidthColumnComponent)
  )
  .add(
    'Variable width content',
    withInfo({
      text: VariableWidth
    })(VariableWidthComponent)
  )
  .add(
    'Equal-width multi-row',
    withInfo({
      text: EqualWidthRow
    })(EqualWidthRowComponent)
  )
  .add(
    'Tutti i breakpoint',
    withInfo({
      text: Breakpoint
    })(BreakpointComponent)
  )
  .add(
    'Raccolti in orizzontale',
    withInfo({
      text: HorizontalGrouping
    })(HorizontalGroupingComponent)
  )
  .add(
    'Mischiare e abbinare',
    withInfo({
      text: MixMatch
    })(MixMatchComponent)
  )
