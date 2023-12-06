import React from 'react';
import { Row, Col } from '../../src';

export default {
  title: 'Componenti/Utility_story_hidden'
};

export const ColoriTesto_story_hidden = () => (
  <>
    <p className='p-3 mb-2 text-primary'>.text-primary</p>
    <p className='p-3 mb-2 text-secondary'>.text-secondary</p>
    <p className='p-3 mb-2 text-success'>.text-success</p>
    <p className='p-3 mb-2 text-danger'>.text-danger</p>
    <p className='p-3 mb-2 text-warning'>.text-warning</p>
    <p className='p-3 mb-2 text-muted'>.text-muted</p>
    <p className='p-3 mb-2 text-white bg-dark'>.text-white</p>
  </>
);

export const ColoriSfondo_story_hidden = () => (
  <>
    <div className='p-3 mb-2 bg-primary text-white'>.bg-primary</div>
    <div className='p-3 mb-2 bg-secondary text-white'>.bg-secondary</div>
    <div className='p-3 mb-2 bg-success text-white'>.bg-success</div>
    <div className='p-3 mb-2 bg-danger text-white'>.bg-danger</div>
    <div className='p-3 mb-2 bg-warning text-white'>.bg-warning</div>
    <div className='p-3 mb-2 bg-white text-dark'>.bg-white</div>
  </>
);

export const ColoriCustom_story_hidden = () => (
  <>
    <div className='primary-bg p-3'>
      <span className='white-color'>Testo bianco su background colore primario</span>
    </div>
    <div className='primary-border-color border p-3'>
      <span className='primary-color'>Testo colore primario su background con bordo primario</span>
    </div>
  </>
);

export const VariantiColore_story_hidden = () => (
  <div className='bd-example-border-utils'>
    <Row>
      <Col xs='12' md='3'>
        <p>Tinte e ombre</p>
        <div className='c-line primary-bg-a1'>a1</div>
        <div className='c-line primary-bg-a2'>a2</div>
        <div className='c-line primary-bg-a3'>a3</div>
        <div className='c-line primary-bg-a4'>a4</div>
        <div className='c-line white-color primary-bg-a5'>a5</div>
        <div className='c-line white-color primary-bg-a6'>a6</div>
        <div className='c-line white-color primary-bg-a7'>a7</div>
        <div className='c-line white-color primary-bg-a8'>a8</div>
        <div className='c-line white-color primary-bg-a9'>a9</div>
        <div className='c-line white-color primary-bg-a10'>a10</div>
        <div className='c-line white-color primary-bg-a11'>a11</div>
        <div className='c-line white-color primary-bg-a12'>a12</div>
      </Col>
      <Col xs='12' md='3'>
        <p>Toni</p>
        <div className='c-line primary-bg-b1 white-color'>b1</div>
        <div className='c-line primary-bg-b2 white-color'>b2</div>
        <div className='c-line primary-bg-b3 white-color'>b3</div>
        <div className='c-line primary-bg-b4 white-color'>b4</div>
        <div className='c-line primary-bg-b5 white-color'>b5</div>
        <div className='c-line primary-bg-b6 white-color'>b6</div>
        <div className='c-line primary-bg-b7 white-color'>b7</div>
      </Col>
      <Col xs='12' md='3'>
        <p>Variazione di saturazione</p>
        <div className='c-line primary-bg-c1'>c1</div>
        <div className='c-line primary-bg-c2'>c2</div>
        <div className='c-line primary-bg-c3'>c3</div>
        <div className='c-line primary-bg-c4'>c4</div>
        <div className='c-line primary-bg-c5'>c5</div>
        <div className='c-line primary-bg-c6'>c6</div>
        <div className='c-line primary-bg-c7'>c7</div>
        <div className='c-line primary-bg-c8'>c8</div>
        <div className='c-line primary-bg-c9'>c9</div>
        <div className='c-line white-color primary-bg-c10'>c10</div>
        <div className='c-line white-color primary-bg-c11'>c11</div>
        <div className='c-line white-color primary-bg-c12'>c12</div>
      </Col>
    </Row>
  </div>
);

export const ColoriCustomSecondari_story_hidden = () => (
  <>
    <div className='analogue-1-bg p-3'>
      <span className='white-color'>Testo bianco su background colore analogo 1</span>
    </div>
    <div className='analogue-2-bg p-3'>
      <span className='analogue-1-color'>Testo colore analogo 1 su background colore analogo 2</span>
    </div>
  </>
);

export const ColoriCustomComplementariETriadici_story_hidden = () => (
  <>
    <div className='complementary-1-bg p-3'>
      <span>Testo su background colore complementare 1</span>
    </div>
    <div className='complementary-2-bg p-3'>
      <span>Testo su background colore complementare 2</span>
    </div>
    <div className='complementary-3-bg p-3'>
      <span>Testo su background colore complementare 3</span>
    </div>
  </>
);

export const ColoriCustomSecondariAnaloghi_story_hidden = () => (
  <>
    <Row>
      <Col md='3'>
        <div className='c-line analogue-1-bg-a1'>a1 </div>
        <div className='c-line analogue-1-bg-a2'>a2 </div>
        <div className='c-line analogue-1-bg-a3'>a3 </div>
        <div className='c-line white-color analogue-1-bg-a4'>a4 </div>
        <div className='c-line white-color analogue-1-bg-a5'>a5 </div>
        <div className='c-line white-color analogue-1-bg-a6'>a6 </div>
        <div className='c-line white-color analogue-1-bg-a7'>a7 </div>
        <div className='c-line white-color analogue-1-bg-a8'>a8 </div>
        <div className='c-line white-color analogue-1-bg-a9'>a9 </div>
        <div className='c-line white-color analogue-1-bg-a10'>a10 </div>
        <div className='c-line white-color analogue-1-bg-a11'>a11 </div>
        <div className='c-line white-color analogue-1-bg-a12'>a12 </div>
      </Col>
      <Col md='3'>
        <div className='c-line white-color analogue-1-bg-b1'>b1</div>
        <div className='c-line white-color analogue-1-bg-b2'>b2</div>
        <div className='c-line white-color analogue-1-bg-b3'>b3</div>
        <div className='c-line white-color analogue-1-bg-b4'>b4</div>
        <div className='c-line white-color analogue-1-bg-b5'>b5</div>
        <div className='c-line white-color analogue-1-bg-b6'>b6</div>
        <div className='c-line white-color analogue-1-bg-b7'>b7</div>
        <div className='c-line white-color analogue-1-bg-b8'>b8</div>
      </Col>
      <Col md='3'>
        <div className='c-line analogue-2-bg-a1'>a1</div>
        <div className='c-line analogue-2-bg-a2'>a2</div>
        <div className='c-line analogue-2-bg-a3'>a3</div>
        <div className='c-line analogue-2-bg-a4'>a4</div>
        <div className='c-line analogue-2-bg-a5'>a5</div>
        <div className='c-line analogue-2-bg-a6'>a6</div>
        <div className='c-line analogue-2-bg-a7'>a7</div>
        <div className='c-line analogue-2-bg-a8'>a8</div>
        <div className='c-line white-color analogue-2-bg-a9'>a9</div>
        <div className='c-line white-color analogue-2-bg-a10'>a10</div>
        <div className='c-line white-color analogue-2-bg-a11'>a11</div>
        <div className='c-line white-color analogue-2-bg-a12'>a12</div>
      </Col>
      <Col md='3'>
        <div className='c-line white-color analogue-2-bg-b1'>b1</div>
        <div className='c-line white-color analogue-2-bg-b2'>b2</div>
        <div className='c-line white-color analogue-2-bg-b3'>b3</div>
        <div className='c-line white-color analogue-2-bg-b4'>b4</div>
        <div className='c-line white-color analogue-2-bg-b5'>b5</div>
        <div className='c-line white-color analogue-2-bg-b6'>b6</div>
        <div className='c-line white-color analogue-2-bg-b7'>b7</div>
        <div className='c-line white-color analogue-2-bg-b8'>b8</div>
      </Col>
    </Row>
  </>
);

export const ColoriSecondariCustomComplementariETriadici_story_hidden = () => (
  <Row>
    <Col md='2'>
      <div className='c-line complementary-1-bg-a1'>a1</div>
      <div className='c-line complementary-1-bg-a2'>a2</div>
      <div className='c-line complementary-1-bg-a3'>a3</div>
      <div className='c-line complementary-1-bg-a4'>a4</div>
      <div className='c-line white-color complementary-1-bg-a5'>a5</div>
      <div className='c-line white-color complementary-1-bg-a6'>a6</div>
      <div className='c-line white-color complementary-1-bg-a7'>a7</div>
      <div className='c-line white-color complementary-1-bg-a8'>a8</div>
      <div className='c-line white-color complementary-1-bg-a9'>a9</div>
      <div className='c-line white-color complementary-1-bg-a10'>a10</div>
      <div className='c-line white-color complementary-1-bg-a11'>a11</div>
      <div className='c-line white-color complementary-1-bg-a12'>a12</div>
    </Col>
    <Col md='2'>
      <div className='c-line white-color complementary-1-bg-b1'>b1</div>
      <div className='c-line white-color complementary-1-bg-b2'>b2</div>
      <div className='c-line white-color complementary-1-bg-b3'>b3</div>
      <div className='c-line white-color complementary-1-bg-b4'>b4</div>
      <div className='c-line white-color complementary-1-bg-b5'>b5</div>
      <div className='c-line white-color complementary-1-bg-b6'>b6</div>
      <div className='c-line white-color complementary-1-bg-b7'>b7</div>
      <div className='c-line white-color complementary-1-bg-b8'>b8</div>
    </Col>
    <Col md='2'>
      <div className='c-line complementary-2-bg-a1'>a1</div>
      <div className='c-line complementary-2-bg-a2'>a2</div>
      <div className='c-line complementary-2-bg-a3'>a3</div>
      <div className='c-line complementary-2-bg-a4'>a4</div>
      <div className='c-line white-color complementary-2-bg-a5'>a5</div>
      <div className='c-line white-color complementary-2-bg-a6'>a6</div>
      <div className='c-line white-color complementary-2-bg-a7'>a7</div>
      <div className='c-line white-color complementary-2-bg-a8'>a8</div>
      <div className='c-line white-color complementary-2-bg-a9'>a9</div>
      <div className='c-line white-color complementary-2-bg-a10'>a10</div>
      <div className='c-line white-color complementary-2-bg-a11'>a11</div>
      <div className='c-line white-color complementary-2-bg-a12'>a12</div>
    </Col>
    <Col md='2'>
      <div className='c-line white-color complementary-2-bg-b1'>b1</div>
      <div className='c-line white-color complementary-2-bg-b2'>b2</div>
      <div className='c-line white-color complementary-2-bg-b3'>b3</div>
      <div className='c-line white-color complementary-2-bg-b4'>b4</div>
      <div className='c-line white-color complementary-2-bg-b5'>b5</div>
      <div className='c-line white-color complementary-2-bg-b6'>b6</div>
      <div className='c-line white-color complementary-2-bg-b7'>b7</div>
      <div className='c-line white-color complementary-2-bg-b8'>b8</div>
    </Col>
    <Col md='2'>
      <div className='c-line complementary-3-bg-a1'>a1</div>
      <div className='c-line complementary-3-bg-a2'>a2</div>
      <div className='c-line complementary-3-bg-a3'>a3</div>
      <div className='c-line complementary-3-bg-a4'>a4</div>
      <div className='c-line complementary-3-bg-a5'>a5</div>
      <div className='c-line complementary-3-bg-a6'>a6</div>
      <div className='c-line white-color complementary-3-bg-a7'>a7</div>
      <div className='c-line white-color complementary-3-bg-a8'>a8</div>
      <div className='c-line white-color complementary-3-bg-a9'>a9</div>
      <div className='c-line white-color complementary-3-bg-a10'>a10</div>
      <div className='c-line white-color complementary-3-bg-a11'>a11</div>
      <div className='c-line white-color complementary-3-bg-a12'>a12</div>
    </Col>
    <Col md='2'>
      <div className='c-line white-color complementary-3-bg-b1'>b1</div>
      <div className='c-line white-color complementary-3-bg-b2'>b2</div>
      <div className='c-line white-color complementary-3-bg-b3'>b3</div>
      <div className='c-line white-color complementary-3-bg-b4'>b4</div>
      <div className='c-line white-color complementary-3-bg-b5'>b5</div>
      <div className='c-line white-color complementary-3-bg-b6'>b6</div>
      <div className='c-line white-color complementary-3-bg-b7'>b7</div>
      <div className='c-line white-color complementary-3-bg-b8'>b8</div>
    </Col>
  </Row>
);

export const ColoriNeutraliCustom_story_hidden = () => (
  <>
    <div className='neutral-1-bg p-3'>
      <span className='white-color'>Testo bianco su background colore neutrale 1</span>
    </div>
    <div className='neutral-2-bg p-3'>
      <span>Testo su background colore neutrale 2</span>
    </div>
  </>
);

export const VarianteColoriNeutraliCustom_story_hidden = () => (
  <Row>
    <Col md='3'>
      <div className='c-line neutral-1-bg-a1'>a1</div>
      <div className='c-line neutral-1-bg-a2'>a2</div>
      <div className='c-line neutral-1-bg-a3'>a3</div>
      <div className='c-line neutral-1-bg-a4'>a4</div>
      <div className='c-line neutral-1-bg-a5'>a5</div>
      <div className='c-line white-color neutral-1-bg-a6'>a6</div>
      <div className='c-line white-color neutral-1-bg-a7'>a7</div>
      <div className='c-line white-color neutral-1-bg-a8'>a8</div>
      <div className='c-line white-color neutral-1-bg-a9'>a9</div>
      <div className='c-line white-color neutral-1-bg-a10'>a10</div>
    </Col>
    <Col md='3'>
      <div className='c-line neutral-2-bg-b1'>b1</div>
      <div className='c-line neutral-2-bg-b2'>b2</div>
      <div className='c-line neutral-2-bg-b3'>b3</div>
      <div className='c-line white-color neutral-2-bg-b4'>b4</div>
      <div className='c-line white-color neutral-2-bg-b5'>b5</div>
      <div className='c-line white-color neutral-2-bg-b6'>b6</div>
      <div className='c-line white-color neutral-2-bg-b7'>b7</div>
    </Col>
    <Col md='3'>
      <div className='c-line neutral-2-bg-a1'>a1</div>
      <div className='c-line neutral-2-bg-a2'>a2</div>
      <div className='c-line neutral-2-bg-a3'>a3</div>
      <div className='c-line white-color neutral-2-bg-a4'>a4</div>
      <div className='c-line white-color neutral-2-bg-a5'>a5</div>
      <div className='c-line white-color neutral-2-bg-a6'>a6</div>
      <div className='c-line white-color neutral-2-bg-a7'>a7</div>
    </Col>
  </Row>
);

export const ColoriGrigiChiariCustom_story_hidden = () => (
  <Row>
    <Col md='2'>
      <div className='c-line lightgrey-bg-a1'>a1</div>
      <div className='c-line lightgrey-bg-a2'>a2</div>
      <div className='c-line lightgrey-bg-a3'>a3</div>
      <div className='c-line lightgrey-bg-a4'>a4</div>
    </Col>
    <Col md='2'>
      <div className='c-line lightgrey-bg-b1'>b1</div>
      <div className='c-line lightgrey-bg-b2'>b2</div>
      <div className='c-line lightgrey-bg-b3'>b3</div>
      <div className='c-line lightgrey-bg-b4'>b4</div>
    </Col>
    <Col md='2'>
      <div className='c-line lightgrey-bg-c1'>c1</div>
      <div className='c-line lightgrey-bg-c2'>c2</div>
    </Col>
  </Row>
);
