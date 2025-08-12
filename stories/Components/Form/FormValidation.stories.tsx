import { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { Alert, Autocomplete, Button, Col, Form, FormGroup, FormText, Input, Label, Row } from '../../../src';

const meta: Meta<typeof Input> = {
  title: 'Documentazione/Form/Validazione'
};

export default meta;

type Story = StoryObj<typeof Input>;

export const ValidazioneBase: Story = {
  render: () => (
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
  )
};

const ValidazioneCompletaHooks = () => {
  const [name, setName] = useState('Mario');
  const [surname, setSurname] = useState('Rossi');
  const [username, setUsername] = useState('');
  const [region, setRegion] = useState('');
  const [province, setProvince] = useState('');
  const [cap, setCap] = useState('');
  const [age, setAge] = useState(18);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [termsAndConditions, setTermsAndConditions] = useState(false);

  const regions = [
    'Abruzzo',
    'Basilicata',
    'Calabria',
    'Campania',
    'Emilia Romagna',
    'Friuli Venezia Giulia',
    'Lazio',
    'Liguria',
    'Lombardia',
    'Marche',
    'Molise',
    'Piemonte',
    'Puglia',
    'Sardegna',
    'Sicilia',
    'Toscana',
    'Trentino Alto Adige',
    'Umbria',
    "Valle d'Aosta",
    'Veneto'
  ];

  const suggest = (query: string, syncResults: (p: string[]) => void) => {
    syncResults(
      query
        ? regions.filter(function (result) {
            return result.toLowerCase().indexOf(query.toLowerCase()) !== -1;
          })
        : []
    );
  };

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
              valid={name != ''}
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
              valid={surname != ''}
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
              valid={username != ''}
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
              value={date}
              label='Date picker'
              validationText='Questo campo è richiesto'
              valid={date != ''}
              onChange={(e) => setDate(e.target.value)}
            />
          </FormGroup>
          <FormGroup className='col-md-6 mb-6'>
            <Input
              id='completeValidation-time'
              type='time'
              value={time}
              label='Time picker'
              validationText='Questo campo è richiesto'
              valid={time != ''}
              onChange={(e) => setTime(e.target.value)}
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup className='form-group col-md-4 mb-3'>
            <Autocomplete
              id='completeValidation-region"'
              label='Regione'
              source={suggest}
              tNoResults={() => 'Nessun risultato'}
              valid={regions.includes(region)}
              validationText='Per favore inserisci una regione valida.'
              onConfirm={(region) => {
                setRegion(region);
              }}
            />
          </FormGroup>
          <FormGroup className='col-md-4 mb-3'>
            <Input
              id='completeValidation-province'
              type='text'
              value={province}
              label='Provincia'
              validationText='Per favore inserisci un nome di provincia valida.'
              valid={province != ''}
              onChange={(e) => setProvince(e.target.value)}
            />
          </FormGroup>
          <FormGroup className='col-md-4 mb-3'>
            <Input
              id='completeValidation-cap'
              type='text'
              value={cap}
              label='CAP (5 cifre)'
              validationText='Questo campo è richiesto'
              valid={cap != ''}
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

export const ValidazioneCompleta: Story = {
  render: () => {
    return <ValidazioneCompletaHooks />;
  },
  parameters: {
    docs: {
      canvas: { sourceState: 'none' }
    }
  }
};
