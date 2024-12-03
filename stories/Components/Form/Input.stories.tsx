import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Button, FormGroup, Icon, Input, TextArea, Autocomplete } from '../../../src';

const meta: Meta<typeof Input> = {
  title: 'Documentazione/Form/Input',
  component: Input
};

export default meta;

type Story = StoryObj<typeof Input>;

export const EsempiDiCampiDiInput: Story = {
  render: () => {
    return (
      <div>
        <Input type='text' label='Campo di tipo testuale' id='exampleInputText' />
        <Input type='email' label='Campo di tipo email' id='exampleInputEmail' />
        <Input type='number' label='Campo di tipo numerico' id='exampleInputNumber' />
        <Input type='tel' label='Campo di tipo telefono' id='exampleInputTel' />
      </div>
    );
  }
};

export const UtilizzoDiPlaceholderELabel: Story = {
  render: () => (
    <div>
      <Input label='Etichetta di esempio' id='exampleLabel' />
      <Input label='Etichetta di esempio' type='text' placeholder='Testo di esempio' id='examplePlaceholder' />
      <Input
        label='Etichetta di esempio'
        type='text'
        placeholder='Testo di esempio'
        infoText='Ulteriore testo informativo'
        id='exampleInfoText'
      />
      <Input
        label='Etichetta di esempio'
        type='text'
        placeholder='Testo di esempio'
        validationText='Campo non valido'
        id='examplevalidationText'
        valid={false}
      />
    </div>
  )
};

export const InputConIconaOBottoni: Story = {
  render: () => {
    return (
      <>
        <Input
          id='exampleInputIcon'
          label='Campo di tipo testuale'
          type='text'
          hasIconLeft
          iconLeft={<Icon icon='it-pencil' aria-hidden size='sm' />}
        />
        <Input
          id='exampleInputIconDanger'
          label='Con etichetta e placeholder'
          placeholder='Lorem Ipsum'
          type='text'
          hasIconLeft
          iconLeft={<Icon icon='it-pencil' aria-hidden color='danger' size='sm' />}
        />
        <Input
          id='exampleInputButton'
          label='Con etichetta e bottone di tipo primary'
          type='text'
          hasIconLeft
          iconLeft={<Icon icon='it-pencil' color='primary' aria-hidden size='sm' />}
          hasButtonRight
          buttonRight={<Button color='primary'>Invio</Button>}
        />
      </>
    );
  }
};

export const InputPassword: Story = {
  args: {
    type: 'password',
    id: 'exampleInputPassword',
    label: 'Password con label, placeholder e testo di aiuto',
    infoText: 'Inserisci almeno 8 caratteri e una lettera maiuscola'
  }
};

export const Disabilitato: Story = {
  args: {
    label: 'Contenuto disabilitato',
    id: 'exampleDisabled',
    disabled: true
  }
};

export const Readonly: Story = {
  args: {
    label: 'Contenuto in sola lettura',
    id: 'examplereadOnly',
    readOnly: true
  }
};

export const ReadonlyNormalizzato: Story = {
  args: {
    type: 'text',
    label: 'Contenuto in sola lettura',
    id: 'exampleNormalized',
    normalized: true
  }
};

export const _InputAutocompleteConDatiAccessibile: Story = {
  render: () => {
    const multiOptions: { value: string; label: string }[] = [
      { value: '1', label: 'Abruzzo' },
      { value: '2', label: 'Basilicata' },
      { value: '3', label: 'Calabria' },
      { value: '4', label: 'Campania' },
      { value: '5', label: 'Emilia Romagna' },
      { value: '6', label: 'Friuli Venezia Giulia' },
      { value: '7', label: 'Lazio' },
      { value: '8', label: 'Liguria' },
      { value: '9', label: 'Lombardia' },
      { value: '10', label: 'Marche' },
      { value: '11', label: 'Molise' },
      { value: '12', label: 'Piemonte' },
      { value: '13', label: 'Puglia' },
      { value: '14', label: 'Sardegna' },
      { value: '15', label: 'Sicilia' },
      { value: '16', label: 'Toscana' },
      { value: '17', label: 'Trentino Alto Adige' },
      { value: '18', label: 'Umbria' },
      { value: '19', label: "Valle d'Aosta" },
      { value: '20', label: 'Veneto' }
    ];

    return (
      <FormGroup className='select-wrapper'>
        <label htmlFor='autocomplete'>Provincia</label>
        <Autocomplete
          id='autocomplete'
          source={multiOptions}
          placeholder={'Testo da cercare'}
          defaultValue={''}
          displayMenu={'inline'}
          tNoResults={() => 'Nessun risultato'}
        />
      </FormGroup>
    );
  },
  parameters: {
    docs: {
      canvas: { sourceState: 'none' }
    }
  }
};

export const AreaDiTesto: Story = { render: () => <TextArea label='Esempio di area di testo' rows={3} /> };

export const AreaDiTestoConSegnaposto: Story = {
  render: () => (
    <TextArea
      rows={3}
      label='Esempio di area di testo'
      placeholder='Testo di esempio'
      id='example-textarea-placeholder'
    />
  )
};

const InputDatepickerHooks = () => {
  const [value, setValue] = useState('');

  return (
    <Input
      type='date'
      label='Datepicker'
      className='active'
      placeholder='22/12/2023'
      value={value}
      onChange={(ev) => {
        setValue(ev.target.value);
      }}
    />
  );
};

export const InputDatepicker: Story = {
  render: () => {
    return <InputDatepickerHooks />;
  },
  parameters: {
    docs: {
      canvas: { sourceState: 'none' }
    }
  }
};

const InputHourpickerHooks = () => {
  const [value, setValue] = useState('');

  return (
    <Input
      type='time'
      label='Hourpicker'
      className='active'
      value={value}
      onChange={(ev) => {
        setValue(ev.target.value);
      }}
    />
  );
};

export const InputHourpicker: Story = {
  render: () => {
    return <InputHourpickerHooks />;
  },
  parameters: {
    docs: {
      canvas: { sourceState: 'none' }
    }
  }
};
