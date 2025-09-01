import React from 'react';

import { Meta, StoryObj } from "@storybook/react-vite";
import {
  Card,
  CardBody,
  CardCategory,
  CardReadMore,
  CardSignature,
  CardText,
  CardTitle,
  Col,
  Row,
  Timeline,
  TimelinePin
} from '../../src';


const meta: Meta<typeof Timeline> = {
  title: "Documentazione/Componenti/Timeline",
  component: Timeline
};

export default meta;

type Story = StoryObj<typeof Timeline>;

export const Esempi: Story = {
  render: () => (
    <div>
      <Timeline>
        <Row>
          <Col xs='12'>
            <TimelinePin label='maggio 2018' past iconTitle='Segnaposto'>
              {/* start card */}
              <Card>
                <CardBody>
                  <CardTitle tag='h4' className='h5 big-heading'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit…
                  </CardTitle>
                  <CardCategory textDescription='Categoria: '>Category</CardCategory>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                  </CardText>
                  <CardSignature>di Federico De Paolis</CardSignature>
                  <CardReadMore text='Leggi di più' iconName='it-arrow-right' />
                </CardBody>
              </Card>
              {/* end card */}
            </TimelinePin>
          </Col>
          <Col xs='12'>
            <TimelinePin label='giugno 2018' past iconTitle='Segnaposto'>
              {/* start card */}
              <Card>
                <CardBody>
                  <CardTitle tag='h4' className='h5'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
                  </CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                  </CardText>
                </CardBody>
              </Card>
              {/* end card */}
            </TimelinePin>
          </Col>
          <Col xs='12'>
            <TimelinePin label='luglio 2018' past iconTitle='Segnaposto'>
              {/* start card */}
              <Card>
                <CardBody>
                  <CardTitle tag='h4' className='h5 big-heading'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit…
                  </CardTitle>
                  <CardCategory textDescription='Categoria: ' dateDescription='Data evento: ' date='10/12/2018'>Category</CardCategory>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                  </CardText>
                  <CardSignature>di Federico De Paolis</CardSignature>
                  <CardReadMore text='Leggi di più' iconName='it-arrow-right' />
                </CardBody>
              </Card>
              {/* end card */}
            </TimelinePin>
          </Col>
          <Col xs='12'>
            <TimelinePin label='agosto 2018' now nowText='Oggi' iconTitle='Segnaposto'>
              {/* start card */}
              <Card>
                <CardBody>
                  <CardTitle tag='h4' className='h5'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
                  </CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                  </CardText>
                </CardBody>
              </Card>
              {/* end card */}
            </TimelinePin>
          </Col>
          <Col xs='12'>
            <TimelinePin label='settembre 2018' iconTitle='Segnaposto'>
              {/* start card */}
              <Card>
                <CardBody>
                  <CardTitle tag='h4' className='h5 big-heading'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit…
                  </CardTitle>
                  <CardCategory textDescription='Categoria: ' dateDescription='Data evento: ' date='10/12/2018'>Category</CardCategory>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                  </CardText>
                  <CardSignature>di Federico De Paolis</CardSignature>
                  <CardReadMore text='Leggi di più' iconName='it-arrow-right' />
                </CardBody>
              </Card>
              {/* end card */}
            </TimelinePin>
          </Col>
          <Col xs='12'>
            <TimelinePin label='ottobre 2018' iconTitle='Segnaposto'>
              {/* start card */}
              <Card>
                <CardBody>
                  <CardTitle tag='h4' className='h5'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
                  </CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                  </CardText>
                </CardBody>
              </Card>
              {/* end card */}
            </TimelinePin>
          </Col>
          <Col xs='12'>
            <TimelinePin label='novembre 2018' iconTitle='Segnaposto'>
              {/* start card */}
              <Card>
                <CardBody>
                  <CardTitle tag='h4' className='h5 big-heading'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit…
                  </CardTitle>
                  <CardCategory textDescription='Categoria: ' dateDescription='Data evento: ' date='10/12/2018'>Category</CardCategory>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                  </CardText>
                  <CardSignature>di Federico De Paolis</CardSignature>
                  <CardReadMore text='Leggi di più' iconName='it-arrow-right' />
                </CardBody>
              </Card>
              {/* end card */}
            </TimelinePin>
          </Col>
          <Col xs='12'>
            <TimelinePin label='dicembre 2018' iconTitle='Segnaposto'>
              {/* start card */}
              <Card>
                <CardBody>
                  <CardTitle tag='h4' className='h5'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
                  </CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
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
};
