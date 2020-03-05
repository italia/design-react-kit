import React from 'react'
import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import Esempi from './docs/Esempi.md'

import {
  Row,
  Col,
  Timeline,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardCategory,
  CardSignature,
  CardReadMore,
  TimelinePin
} from '../../src'

const EsempiComponent = () => (
  <div>
    <Timeline>
      <Row>
        <Col xs="12">
          <TimelinePin label="maggio 2018" past>
            {/* start card */}
            <Card>
              <CardBody>
                <CardCategory date="10/12/2018">Category</CardCategory>
                <CardTitle tag="h5" className="big-heading">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit…
                </CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </CardText>
                <CardSignature>di Federico De Paolis</CardSignature>
                <CardReadMore text="Leggi di più" iconName="it-arrow-right" />
              </CardBody>
            </Card>
            {/* end card */}
          </TimelinePin>
        </Col>
        <Col xs="12">
          <TimelinePin label="giugno 2018" past>
            {/* start card */}
            <Card>
              <CardBody>
                <CardTitle tag="h5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor…
                </CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </CardText>
              </CardBody>
            </Card>
            {/* end card */}
          </TimelinePin>
        </Col>
        <Col xs="12">
          <TimelinePin label="luglio 2018" past>
            {/* start card */}
            <Card>
              <CardBody>
                <CardCategory date="10/12/2018">Category</CardCategory>
                <CardTitle tag="h5" className="big-heading">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit…
                </CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </CardText>
                <CardSignature>di Federico De Paolis</CardSignature>
                <CardReadMore text="Leggi di più" iconName="it-arrow-right" />
              </CardBody>
            </Card>
            {/* end card */}
          </TimelinePin>
        </Col>
        <Col xs="12">
          <TimelinePin label="agosto 2018" now nowText="Oggi">
            {/* start card */}
            <Card>
              <CardBody>
                <CardTitle tag="h5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor…
                </CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </CardText>
              </CardBody>
            </Card>
            {/* end card */}
          </TimelinePin>
        </Col>
        <Col xs="12">
          <TimelinePin label="settembre 2018">
            {/* start card */}
            <Card>
              <CardBody>
                <CardCategory date="10/12/2018">Category</CardCategory>
                <CardTitle tag="h5" className="big-heading">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit…
                </CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </CardText>
                <CardSignature>di Federico De Paolis</CardSignature>
                <CardReadMore text="Leggi di più" iconName="it-arrow-right" />
              </CardBody>
            </Card>
            {/* end card */}
          </TimelinePin>
        </Col>
        <Col xs="12">
          <TimelinePin label="ottobre 2018">
            {/* start card */}
            <Card>
              <CardBody>
                <CardTitle tag="h5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor…
                </CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </CardText>
              </CardBody>
            </Card>
            {/* end card */}
          </TimelinePin>
        </Col>
        <Col xs="12">
          <TimelinePin label="novembre 2018">
            {/* start card */}
            <Card>
              <CardBody>
                <CardCategory date="10/12/2018">Category</CardCategory>
                <CardTitle tag="h5" className="big-heading">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit…
                </CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </CardText>
                <CardSignature>di Federico De Paolis</CardSignature>
                <CardReadMore text="Leggi di più" iconName="it-arrow-right" />
              </CardBody>
            </Card>
            {/* end card */}
          </TimelinePin>
        </Col>
        <Col xs="12">
          <TimelinePin label="dicembre 2018">
            {/* start card */}
            <Card>
              <CardBody>
                <CardTitle tag="h5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor…
                </CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </CardText>
              </CardBody>
            </Card>
            {/* end card */}
          </TimelinePin>
        </Col>
      </Row>
    </Timeline>
  </div>
)

storiesOf('Componenti/Timeline', module)
  .addDecorator(withA11y)
  .add(
    'Esempi',
    withInfo({
      text: Esempi,
      propTables: [Timeline, TimelinePin],
      propTablesExclude: [
        Card,
        CardBody,
        CardCategory,
        CardReadMore,
        CardSignature,
        CardText,
        CardTitle
      ]
    })(EsempiComponent)
  )
