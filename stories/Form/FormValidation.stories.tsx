import React, { useState } from 'react';

import {
  Button,
  Input,
  Form,
  FormGroup,
  Label,
  FormText,
  Row
} from '../../src';

export default {
  title: 'Componenti/Form/Form Validation'
};

export const ValidazioneBase = () => (
  <div>
    <Input label='Valid Input' valid />
    <Input label='Invalid Input' invalid />
    <Input value='Mario' label='First name' infoText='Validated!' valid />
    <Input label='Username' infoText='Please choose a username.' invalid />
  </div>
);

export const ValidazioneCompleta = () => {
  const [name, setName] = useState('Mario');
  const [surname, setSurname] = useState('Rossi');
  const [username, setUsername] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [cap, setCap] = useState('');
  const [termsAndConditions, setTermsAndConditions] = useState(false);

  return (
    <Form>
      <Row>
        <FormGroup className='col-md-4 mb-3'>
          <Input
            id='completeValidation-name'
            type='text'
            value={name}
            label='Nome'
            infoText='Validato!'
            valid
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup className='col-md-4 mb-3'>
          <Input
            id='completeValidation-surname'
            type='text'
            value={surname}
            label='Cognome'
            infoText='Validato!'
            valid
            onChange={(e) => setSurname(e.target.value)}
          />
        </FormGroup>
        <FormGroup className='col-md-4 mb-3'>
          <Input
            id='completeValidation-username'
            type='text'
            value={username}
            label='Username'
            infoText='Per favore scegli un username.'
            invalid
            onChange={(e) => setUsername(e.target.value)}
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
            infoText='Per favore inserisci un nome di città valido.'
            invalid
            onChange={(e) => setCity(e.target.value)}
          />
        </FormGroup>
        <FormGroup className='col-md-3 mb-3'>
          <Input
            id='completeValidation-province'
            type='text'
            value={province}
            label='Provincia'
            infoText='Per favore inserisci un nome di provincia valida.'
            invalid
            onChange={(e) => setProvince(e.target.value)}
          />
        </FormGroup>
        <FormGroup className='col-md-3 mb-3'>
          <Input
            id='completeValidation-cap'
            type='text'
            value={cap}
            label='CAP'
            infoText='Per favore inserisci un CAP valido.'
            invalid
            onChange={(e) => setCap(e.target.value)}
          />
        </FormGroup>
      </Row>
      <FormGroup check>
        <Input
          id='termsAndConditions'
          type='checkbox'
          checked={termsAndConditions}
          onChange={() => setTermsAndConditions(!termsAndConditions)}
        />
        <Label for='termsAndConditions' check>
          Accetto i termini e condizioni
        </Label>
        <FormText>
          Devi accettare i termini e le condizioni prima di inviare il modulo.
        </FormText>
      </FormGroup>
      <Button color='primary' type='submit'>
        Invia
      </Button>
    </Form>
  );
};
