import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Col, Container, Row } from '../../src';

//Non esiste un componente specifico per cui uso Container come riferimento per la storia
const meta: Meta<typeof Container> = {
  title: "Documentazione/Organizzare gli spazi/Griglie",
  component: Row,
};

export default meta;

type Story = StoryObj<typeof Container>;

export const EsempioBase: Story = {
  render: () => (
    <div className='docs layout-example'>
      <Container>
        <Row>
          <Col>Una di tre colonne</Col>
          <Col>Una di tre colonne</Col>
          <Col>Una di tre colonne</Col>
        </Row>
      </Container>
    </div>
  )
};

export const LarghezzeStandard: Story = {
  render: () => (
    <div className='docs layout-example'>
      <Container>
        <Row>
          <Col>1 di 2</Col>
          <Col>2 di 2</Col>
        </Row>
        <Row>
          <Col>1 di 3</Col>
          <Col>2 di 3</Col>
          <Col>3 di 3</Col>
        </Row>
      </Container>
    </div>
  )
};

export const RigheMultipleBugSafari: Story = {
  render: () => (
    <div className='docs layout-example'>
      <Container>
        <Row>
          <Col>Colonna</Col>
          <Col>Colonna</Col>
          <div className='w-100'></div>
          <Col>Colonna</Col>
          <Col>Colonna</Col>
        </Row>
      </Container>
    </div>
  )
};

export const ImpostaLarghezzaColonne: Story = {
  render: () => (
    <div className='docs layout-example'>
      <Container>
        <Row>
          <Col>1 di 3</Col>
          <Col xs='6'>2 di 3 (larga 6/12)</Col>
          <Col>3 di 3</Col>
        </Row>
        <Row>
          <Col>1 di 3</Col>
          <Col xs='5'>2 di 3 (larga 5/12)</Col>
          <Col>3 di 3</Col>
        </Row>
      </Container>
    </div>
  )
};

export const ContenutoLarghezzaVariabile: Story = {
  render: () => (
    <div className='docs layout-example'>
      <Container>
        <Row className='justify-content-md-center'>
          <Col lg='2'>1 di 3</Col>
          <Col xs='auto'>Contenuto a larghezza variabile</Col>
          <Col lg='2'>3 di 3</Col>
        </Row>
        <Row>
          <Col>1 di 3</Col>
          <Col md='auto'>Contenuto a larghezza variabile</Col>
          <Col lg='2'>3 di 3</Col>
        </Row>
      </Container>
    </div>
  )
};

export const EqualWidthMultiRow: Story = {
  render: () => (
    <div className='docs layout-example'>
      <Container>
        <Row>
          <Col>col</Col>
          <Col>col</Col>
        </Row>
        <Row>
          <Col>col</Col>
          <Col>col</Col>
        </Row>
      </Container>
    </div>
  )
};

export const TuttiIBreakpoint: Story = {
  render: () => (
    <div className='docs layout-example'>
      <Container>
        <Row>
          <Col>col</Col>
          <Col>col</Col>
          <Col>col</Col>
          <Col>col</Col>
        </Row>
        <Row>
          <Col xs={8}>col-8</Col>
          <Col xs={4}>col-4</Col>
        </Row>
      </Container>
    </div>
  )
};

export const RaccoltiInOrizzontale: Story = {
  render: () => (
    <div className='docs layout-example'>
      <Container>
        <Row>
          <Col sm='8'>col-sm-8</Col>
          <Col sm='4'>col-sm-4</Col>
        </Row>
        <Row>
          <Col widths={['sm']}>col-sm</Col>
          <Col widths={['sm']}>col-sm</Col>
          <Col widths={['sm']}>col-sm</Col>
        </Row>
      </Container>
    </div>
  )
};

export const MischiareEAbbinare: Story = {
  render: () => (
    <div className='docs layout-example'>
      <Container>
        <Row>
          <Col xs='12' md='8'>
            .col-12 .col-md-8
          </Col>
          <Col xs='6' md='4'>
            .col-6 .col-md-4
          </Col>
        </Row>
        <Row>
          <Col xs='6' md='4'>
            .col-6 .col-md-4
          </Col>
          <Col xs='6' md='4'>
            .col-6 .col-md-4
          </Col>
          <Col xs='6' md='4'>
            .col-6 .col-md-4
          </Col>
        </Row>
        <Row>
          <Col xs='6'>.col-6</Col>
          <Col xs='6'>.col-6</Col>
        </Row>
      </Container>
    </div>
  )
};
