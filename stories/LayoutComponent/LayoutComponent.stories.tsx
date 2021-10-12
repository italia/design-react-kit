import React from 'react';

import { Container, Row, Col } from '../../src';

export default {
  title: 'Componenti/Layout Component'
};

export const EsempioBase = () => (
  <div className='docs layout-example'>
    <Container>
      <Row>
        <Col>Una di tre colonne</Col>
        <Col>Una di tre colonne</Col>
        <Col>Una di tre colonne</Col>
      </Row>
    </Container>
  </div>
);

export const LarghezzeStandard = () => (
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
);

export const RigheMultipleBugSafari = () => (
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
);

export const ImpostaLarghezzaColonne = () => (
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
);

export const ContenutoLarghezzaVariabile = () => (
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
);

export const EqualWidthMultiRow = () => (
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
);

EqualWidthMultiRow.storyName = 'Equal-width multi-row';

export const TuttiIBreakpoint = () => (
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
);

TuttiIBreakpoint.storyName = 'Tutti i breakpoint';

export const RaccoltiInOrizzontale = () => (
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
);

RaccoltiInOrizzontale.storyName = 'Raccolti in orizzontale';

export const MischiareEAbbinare = () => (
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
);

MischiareEAbbinare.storyName = 'Mischiare e abbinare';
