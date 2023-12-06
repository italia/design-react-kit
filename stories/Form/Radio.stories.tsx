import React from 'react';

import { Row, Col, Form, FormGroup, Label, Input, FormText } from '../../src';

export default {
  title: 'Componenti/Form/Radio'
};

export const RadioBase = () => (
  <Form className='m-3'>
    <fieldset>
      <legend>Radio</legend>

      <FormGroup check>
        <Input name='gruppo1' type='radio' id='radio1' defaultChecked />
        <Label check htmlFor='radio1'>
          Radio di esempio 1
        </Label>
      </FormGroup>

      <FormGroup check>
        <Input name='gruppo1' type='radio' id='radio2' />
        <Label check htmlFor='radio2'>
          Radio di esempio 2
        </Label>
      </FormGroup>
    </fieldset>
  </Form>
);

export const RadioInline = () => (
  <section>
    <fieldset>
      <legend>Radio</legend>
      <Form className='m-3'>
        <FormGroup check inline>
          <Input name='gruppo1' type='radio' id='radio3' defaultChecked />
          <Label check htmlFor='radio3'>
            Opzione 1
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Input name='gruppo1' type='radio' id='radio4' />
          <Label check htmlFor='radio4'>
            Opzione 2
          </Label>
        </FormGroup>
      </Form>
    </fieldset>
  </section>
);

export const RadioDisabilitato = () => (
  <section>
    <fieldset>
      <legend>Radio</legend>
      <Form className='m-3'>
        <FormGroup check>
          <Input disabled name='gruppo1' type='radio' id='radio5' defaultChecked />
          <Label check htmlFor='radio5'>
            Opzione disabilitata selezionata
          </Label>
        </FormGroup>
        <FormGroup check>
          <Input disabled name='gruppo1' type='radio' id='radio6' />
          <Label check htmlFor='radio6'>
            Opzione disabilitata non selezionata
          </Label>
        </FormGroup>
      </Form>
    </fieldset>
  </section>
);

export const RadioGruppi = () => (
  <section>
    <Row className='m-5'>
      <Col md={5}>
        <fieldset>
          <legend>Radio</legend>
          <Form>
            <FormGroup check className='form-check-group'>
              <Input id='radio7' name='group1' type='radio' defaultChecked />
              <Label htmlFor='radio7' check>
                Opzione 1
              </Label>
            </FormGroup>
            <FormGroup check className='form-check-group'>
              <Input id='radio8' name='group1' type='radio' />
              <Label htmlFor='radio8' check>
                Opzione 2
              </Label>
            </FormGroup>
            <FormGroup check className='form-check-group'>
              <Input id='radio9' name='group1' type='radio' disabled />
              <Label htmlFor='radio9' check>
                Opzione 3
              </Label>
            </FormGroup>
          </Form>
        </fieldset>
      </Col>
      <Col md={2} />
      <Col md={5}>
        <fieldset>
          <legend>Radio</legend>
          <Form>
            <FormGroup check className='form-check-group'>
              <Input id='radio10' name='group2' type='radio' defaultChecked />
              <Label htmlFor='radio10' check>
                Opzione 1
              </Label>
              <FormText color=''>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero
              </FormText>
            </FormGroup>
            <FormGroup check className='form-check-group'>
              <Input id='radio11' name='group2' type='radio' />
              <Label htmlFor='radio11' check>
                Opzione 2
              </Label>
              <FormText color=''>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero
              </FormText>
            </FormGroup>
            <FormGroup check className='form-check-group'>
              <Input id='radio12' name='group2' type='radio' disabled />
              <Label htmlFor='radio12' check>
                Opzione 3
              </Label>
              <FormText color=''>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero
              </FormText>
            </FormGroup>
          </Form>
        </fieldset>
      </Col>
    </Row>
  </section>
);
