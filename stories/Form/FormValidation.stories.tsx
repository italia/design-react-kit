import React, { useState } from 'react';

import { Button, Input, Form, FormGroup, Label, FormText, Row, Alert, Col } from '../../src';

export default {
  title: 'Componenti/Form/Form Validation'
};

export const ValidazioneBase = () => (
  <div>
    <Input label='Valid Input' valid />
    <Input label='Invalid Input' valid={false} />
    <Input value='Mario' label='First name' validationText='Validated!' valid />
    <Input label='Username' validationText='Please choose a username.' valid={false} />
    <Input
      label='Username'
      infoText='Username of your account'
      validationText='Please choose a username.'
      valid={false}
    />
  </div>
);

export const ValidazioneCompleta = () => {
  const [name, setName] = useState('Mario');
  const [surname, setSurname] = useState('Rossi');
  const [username, setUsername] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [cap, setCap] = useState('');
  const [age, setAge] = useState(18);
  const [termsAndConditions, setTermsAndConditions] = useState(false);

  return (
    <>
      <Form>
        <Row>
          <FormGroup className='col-md-3 mb-3'>
            <Input
              id='completeValidation-name'
              type='text'
              value={name}
              label='Nome'
              validationText='Validato!'
              valid
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup className='col-md-3 mb-3'>
            <Input
              id='completeValidation-surname'
              type='text'
              value={surname}
              label='Cognome'
              validationText='Validato!'
              valid
              onChange={(e) => setSurname(e.target.value)}
            />
          </FormGroup>
          <FormGroup className='col-md-3 mb-3'>
            <Input
              id='completeValidation-username'
              type='text'
              value={username}
              label='Username'
              validationText='Questo campo è richiesto'
              valid={false}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormGroup>
          <FormGroup className='col-md-3 mb-3'>
            <Input
              id='completeValidation-age'
              type='number'
              value={age}
              label='Età (minimo 18 anni)'
              validationText='Questo campo è richiesto'
              valid={age >= 18}
              onChange={(e) => setAge(parseInt(e.target.value))}
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup className='col-md-6 mb-6'>
            <Input
              id='completeValidation-date'
              type='date'
              label='Date picker'
              validationText='Questo campo è richiesto'
              valid={false}
            />
          </FormGroup>
          <FormGroup className='col-md-6 mb-6'>
            <Input
              id='completeValidation-time'
              type='time'
              label='Time picker'
              validationText='Questo campo è richiesto'
              valid={false}
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup className='col-md-6 mb-3'>
            <Input
              id='completeValidation-city'
              type='text'
              value={city}
              label='Città'
              validationText='Questo campo è richiesto'
              valid={false}
              onChange={(e) => setCity(e.target.value)}
            />
          </FormGroup>
          <FormGroup className='col-md-3 mb-3'>
            <Input
              id='completeValidation-province'
              type='text'
              value={province}
              label='Provincia'
              validationText='Per favore inserisci un nome di provincia valida.'
              valid={false}
              onChange={(e) => setProvince(e.target.value)}
            />
          </FormGroup>

          <FormGroup className='col-md-3 mb-3'>
            <Input
              id='completeValidation-cap'
              type='text'
              value={cap}
              label='CAP (5 cifre)'
              validationText='Questo campo è richiesto'
              valid={false}
              onChange={(e) => setCap(e.target.value)}
            />
          </FormGroup>
        </Row>
        <Row className='align-items-center'>
          <Col md='9' lg='6'>
            <FormGroup check>
              <Input
                id='termsAndConditions'
                type='checkbox'
                checked={termsAndConditions}
                onChange={() => setTermsAndConditions(!termsAndConditions)}
                valid={termsAndConditions}
              />
              <Label for='termsAndConditions' check>
                Accetto i termini e condizioni
              </Label>
              <FormText tag='div'>Devi accettare i termini e le condizioni prima di inviare il modulo.</FormText>
            </FormGroup>
          </Col>
          <Col
            md='3'
            lg='6'
            className='mt-3 mt-md-0 d-flex justify-content-center justify-content-md-end justify-content-lg-start'
          >
            <Button color='primary' type='submit'>
              Invia
            </Button>
          </Col>
        </Row>
      </Form>
      <Row className='mt-4'>
        <Col>
          <Alert color='danger'>
            <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.
          </Alert>
        </Col>
      </Row>
    </>
  );
};
