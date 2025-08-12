import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import {
  Button,
  Card,
  CardBody,
  CardCategory,
  CardReadMore,
  CardSignature,
  CardTag,
  CardTagsHeader,
  CardText,
  CardTitle,
  Col,
  Icon,
  Row
} from '../../src';

const meta: Meta<typeof Card> = {
  title: 'Documentazione/Componenti/Cards',
  component: Card
};

export default meta;

type Story = StoryObj<typeof Card>;

export const SimpleCard: Story = {
  render: () => (
    <Row>
      <Col xs='12' lg='4'>
        {/* start card */}
        <Card>
          <CardBody>
            <CardTitle tag='h5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </CardText>
          </CardBody>
        </Card>
        {/* end card */}
      </Col>
    </Row>
  )
};

export const SimpleCardMultipleColumns: Story = {
  render: () => (
    <Row>
      {[1, 2, 3].map((i) => (
        <Col xs='12' lg='4' key={i}>
          <Card>
            <CardBody>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  )
};

export const SimpleArticle: Story = {
  render: () => (
    <Row>
      <Col xs='12' lg='6'>
        {/* start card */}
        <Card>
          <CardBody>
            <CardCategory date='10/12/2018'>Category</CardCategory>
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
        {/* end card */}
      </Col>
    </Row>
  )
};

export const CardIcon: Story = {
  render: () => (
    <Row>
      <Col xs='12' lg='6'>
        {/* Start card */}
        <Card>
          <CardBody>
            <CardCategory iconName='it-file'>
              <span className='text'>
                Category
                <br />
                Name
              </span>
            </CardCategory>
            <a href='#'>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
              </CardTitle>
            </a>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </CardText>
          </CardBody>
        </Card>
        {/* end card */}
      </Col>
    </Row>
  )
};

export const CardIconAdvanced: Story = {
  render: () => (
    <Row>
      <Col xs='12' lg='6'>
        {/* Start card */}
        <Card>
          <CardBody>
            <CardCategory iconName='it-file'>
              <span className='text'>(2) Files</span>
            </CardCategory>
            <a href='#'>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
              </CardTitle>
            </a>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </CardText>
            <a className='simple-link' href='#'>
              Link
            </a>
          </CardBody>
        </Card>

        {/* end card */}
      </Col>
    </Row>
  )
};

export const CardWithShading: Story = {
  render: () => (
    <Row>
      <Col xs='12' lg='6'>
        {/* Start card */}
        <Card spacing className='card-bg'>
          <CardBody>
            <CardTitle tag='h5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </CardText>
            <CardReadMore iconName='it-arrow-right' text='Leggi di più' href='#' />
          </CardBody>
        </Card>
        {/* end card */}
      </Col>
    </Row>
  )
};

export const BigCard: Story = {
  render: () => (
    <Row>
      <Col xs='12' lg='6'>
        {/* Start card */}
        <Card spacing className='card-bg card-big'>
          <CardBody>
            <div className='top-icon'>
              <Icon icon='it-card' />
            </div>
            <CardTitle tag='h5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </CardText>
            <CardReadMore iconName='it-arrow-right' text='Leggi di più' href='#' />
          </CardBody>
        </Card>
        {/* end card */}
      </Col>
    </Row>
  )
};

export const BigCardExampleTwo: Story = {
  render: () => (
    <Row>
      <Col xs='12' lg='6'>
        {/* Start card */}
        <Card spacing className='card-bg card-big border-bottom-card'>
          <div className='flag-icon'></div>
          <div className='etichetta'>
            <Icon icon='it-settings' />
            <span>Sviluppo</span>
          </div>
          <CardBody>
            <div className='top-icon'>
              <Icon icon='it-card' />
            </div>
            <CardTitle tag='h5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </CardText>
            <CardReadMore iconName='it-arrow-right' text='Leggi di più' href='#' />
          </CardBody>
        </Card>
        {/* end card */}
      </Col>
    </Row>
  )
};

export const BigCardWithTag: Story = {
  render: () => (
    <Row>
      <Col xs='12' lg='6'>
        {/* Start card */}
        <Card spacing className='card-bg card-big no-after'>
          <CardBody>
            <CardTagsHeader date='10/10/2018'>
              <CardTag href='#'>Tag</CardTag>
            </CardTagsHeader>
            <CardTitle tag='h5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </CardText>
            <div className='it-card-footer'>
              <CardSignature>di Federico De Paolis</CardSignature>
              <Button outline color='primary' size='sm'>
                Action
              </Button>
            </div>
          </CardBody>
        </Card>
        {/* end card */}
      </Col>
    </Row>
  )
};

export const CardsWithImages: Story = {
  render: () => (
    <Row>
      <Col xs='12' lg='6'>
        {/* Start card */}
        <Card className='card-img no-after'>
          <div className='img-responsive-wrapper'>
            <div className='img-responsive'>
              <figure className='img-wrapper'>
                <img
                  src='https://placehold.co/310x190/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO'
                  title='img title'
                  alt='imagealt'
                />
              </figure>
            </div>
          </div>
          <CardBody>
            <CardTitle tag='h5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
            </CardTitle>
            <CardReadMore iconName='it-arrow-right' text='Leggi di più' href='#' />
          </CardBody>
        </Card>
        {/* end card */}
      </Col>
      <Col xs='12' lg='6'>
        {/* Start card */}
        <Card className='card-img no-after'>
          <div className='img-responsive-wrapper'>
            <div className='img-responsive img-responsive-panoramic'>
              <figure className='img-wrapper'>
                <img
                  src='https://placehold.co/310x94/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO'
                  title='img title'
                  alt='imagealt'
                />
              </figure>
            </div>
          </div>
          <CardBody>
            <CardTitle tag='h5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
            </CardTitle>
            <CardReadMore iconName='it-arrow-right' text='Leggi di più' href='#' />
          </CardBody>
        </Card>
        {/* end card */}
      </Col>
      <Col xs='12' lg='6'>
        {/* Start card */}
        <Card className='card-img no-after'>
          <div className='img-responsive-wrapper'>
            <div className='img-responsive'>
              <figure className='img-wrapper'>
                <img
                  src='https://placehold.co/310x190/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO'
                  title='img title'
                  alt='imagealt'
                />
              </figure>
              <div className='card-calendar d-flex flex-column justify-content-center'>
                <span className='card-date'>31</span>
                <span className='card-day'>novembre</span>
              </div>
            </div>
          </div>
          <CardBody>
            <CardTitle tag='h5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
            </CardTitle>
            <CardReadMore iconName='it-arrow-right' text='Leggi di più' href='#' />
          </CardBody>
        </Card>
        {/* end card */}
      </Col>
      <Col xs='12' lg='6'>
        {/* Start card */}
        <Card className='card-img no-after'>
          <div className='img-responsive-wrapper'>
            <div className='img-responsive img-responsive-panoramic'>
              <figure className='img-wrapper'>
                <img
                  src='https://placehold.co/310x94/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO'
                  title='img title'
                  alt='imagealt'
                />
              </figure>
              <div className='card-calendar d-flex flex-column justify-content-center'>
                <span className='card-date'>31</span>
                <span className='card-day'>novembre</span>
              </div>
            </div>
          </div>
          <CardBody>
            <CardTitle tag='h5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
            </CardTitle>
            <CardReadMore iconName='it-arrow-right' text='Leggi di più' href='#' />
          </CardBody>
        </Card>
        {/* end card */}
      </Col>
    </Row>
  )
};

export const SpecialCard: Story = {
  render: () => (
    <Row>
      <Col xs='12' lg='6'>
        {/* Start card */}
        <Card className='card-img no-after special-card' tag='a' href='#'>
          <div className='img-responsive-wrapper'>
            <div className='img-responsive'>
              <figure className='img-wrapper'>
                <img
                  src='https://placehold.co/174x214/F9F9FE/0066CC/?text=IMMAGINE%20DI%20ESEMPIO'
                  title='img title'
                  alt='imagealt'
                />
              </figure>
            </div>
          </div>
          <CardBody>
            <CardTagsHeader date='10/10/2018' />
            <CardTitle tag='h5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
            </CardTitle>
          </CardBody>
        </Card>
        {/* end card */}
      </Col>
    </Row>
  )
};

export const SimpleCardTeaser: Story = {
  render: () => (
    <Card teaser>
      <CardBody>
        <CardTitle tag='h5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </CardText>
      </CardBody>
    </Card>
  )
};

export const CardTeaserMultiple: Story = {
  render: () => (
    <div className='card-wrapper card-teaser-wrapper'>
      <Card teaser noWrapper>
        <CardBody>
          <CardTitle tag='h5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </CardText>
        </CardBody>
      </Card>
      <Card teaser noWrapper className='rounded shadow'>
        <CardBody>
          <CardTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </CardText>
        </CardBody>
      </Card>
      <Card teaser noWrapper className='rounded shadow'>
        <CardBody>
          <CardCategory iconName='it-clip'></CardCategory>
          <a href='#'>
            <CardTitle tag='h5'>Lorem ipsum dolor sit amet</CardTitle>
          </a>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </CardText>
        </CardBody>
      </Card>
    </div>
  )
};
