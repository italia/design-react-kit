/* eslint jsx-a11y/anchor-is-valid: 0 */
import React, { useState, useCallback } from 'react';
import { actions } from '@storybook/addon-actions';

import { components } from 'react-select';
import AsyncSelect from 'react-select/async';

import { multiOptions } from './Autocomplete/AutocompleteExample';

import { Input, Icon, TextArea, FormGroup } from '../../src';

import Autocomplete from 'accessible-autocomplete/react'; // Reference to https://www.npmjs.com/package/accessible-autocomplete
import 'accessible-autocomplete/dist/accessible-autocomplete.min.css';
//Used for custom style overriding accessible-autocomplete.min.css
import './assets/css/accessible-autocomplete-styles.css';

export default {
  title: 'Componenti/Form/Input'
};

export const EsempiDiCampiDiInput = () => {
  return (
    <div>
      <Input type='text' label='Campo di tipo testuale' id='exampleInputText' />
      <Input type='email' label='Campo di tipo email' id='exampleInputEmail' />
      <Input type='number' label='Campo di tipo numerico' id='exampleInputNumber' />
      <Input type='tel' label='Campo di tipo telefono' id='exampleInputTel' />
    </div>
  );
};

EsempiDiCampiDiInput.storyName = 'Esempi di campi di input';

export const UtilizzoDiPlaceholderELabel = () => (
  <div>
    <Input label='Etichetta di esempio' id='exampleLabel' />
    <Input label='Etichetta di esempio' type='text' placeholder='Testo di esempio' id='examplePlaceholder' />
    <Input
      label='Etichetta di esempio'
      type='text'
      placeholder='Testo di esempio'
      validationText='Ulteriore testo informativo'
      id='examplevalidationText'
      invalid={true}
    />
  </div>
);

UtilizzoDiPlaceholderELabel.storyName = 'Utilizzo di placeholder e label';

export const InputConIconaOBottoni = () => {
  const [isFocused1, toggleFocus1] = useState(false);
  const [isFocused2, toggleFocus2] = useState(false);
  const [isFocused3, toggleFocus3] = useState(false);

  const toggleFocusLabel1 = () => toggleFocus1(true);
  // @ts-ignore: ignore types for now
  const toggleBlurLabel1 = (e) => {
    if (e.target.value === '') {
      toggleFocus1(!isFocused1);
    }
  };
  const toggleFocusLabel2 = () => toggleFocus2(true);
  // @ts-ignore: ignore types for now
  const toggleBlurLabel2 = (e) => {
    if (e.target.value === '') {
      toggleFocus2(!isFocused2);
    }
  };
  const toggleFocusLabel3 = () => toggleFocus3(true);
  // @ts-ignore: ignore types for now
  const toggleBlurLabel3 = (e) => {
    if (e.target.value === '') {
      toggleFocus3(!isFocused3);
    }
  };
  return (
    <div>
      <div className='form-group'>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <div className='input-group-text'>
              <Icon icon='it-pencil' aria-hidden size='sm' />
            </div>
          </div>
          <label htmlFor='input-group-1' className={isFocused1 ? 'active' : ''}>
            Con Etichetta
          </label>
          <input
            type='text'
            className={isFocused1 ? 'form-control focus--mouse' : 'form-control'}
            onFocus={toggleFocusLabel1}
            onBlur={toggleBlurLabel1}
            id='input-group-1'
            name='input-group-1'
          />
          <div className='input-group-append'>
            <button className='btn' type='button' id='button-1'>
              Invio
            </button>
          </div>
        </div>
      </div>
      <div className='form-group'>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <div className='input-group-text'>
              <Icon icon='it-pencil' color='danger' aria-hidden size='sm' />
            </div>
          </div>
          <label htmlFor='input-group-2' className='active'>
            Con Etichetta e placeholder
          </label>
          <input
            type='text'
            className={isFocused2 ? 'form-control focus--mouse' : 'form-control'}
            onFocus={toggleFocusLabel2}
            onBlur={toggleBlurLabel2}
            id='input-group-2'
            name='input-group-2'
            placeholder='Lorem Ipsum'
          />
          <div className='input-group-append'>
            <button className='btn' type='button' id='button-2'>
              Invio
            </button>
          </div>
        </div>
      </div>
      <div className='form-group'>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <div className='input-group-text'>
              <Icon icon='it-pencil' color='primary' aria-hidden size='sm' />
            </div>
          </div>
          <label htmlFor='input-group-3' className={isFocused3 ? 'active' : ''}>
            Con Etichetta e bottone di tipo primary
          </label>
          <input
            type='text'
            className={isFocused3 ? 'form-control focus--mouse' : 'form-control'}
            onFocus={toggleFocusLabel3}
            onBlur={toggleBlurLabel3}
            id='input-group-3'
            name='input-group-3'
          />
          <div className='input-group-append'>
            <button className='btn btn-primary' type='button' id='button-3'>
              Invio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

InputConIconaOBottoni.storyName = 'Input con icona o bottoni';

export const InputPassword = () => (
  <Input
    type='password'
    id='exampleInputPassword'
    label='Password con label, placeholder e testo di aiuto'
    validationText='Inserisci almeno 8 caratteri e una lettera maiuscola'
  />
);

InputPassword.storyName = 'Input password';

export const _Disabilitato = () => <Input label='Contenuto disabilitato' id='exampleDisabled' disabled />;

export const _Readonly = () => <Input label='Contenuto in sola lettura' id='examplereadOnly' readOnly />;

export const ReadonlyNormalizzato = () => (
  <Input type='text' label='Contenuto in sola lettura' id='exampleNormalized' normalized />
);

ReadonlyNormalizzato.storyName = 'Readonly normalizzato';

export const _InputAutocompleteConDati = () => {
  // "_" is used to show or propagate it externally
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setValue] = useState('');

  // memoize the component
  const AutocompleteDropdownIndicator = useCallback(
    (props) => (
      <components.DropdownIndicator {...props}>
        <span style={{ padding: '0px 5px' }} aria-hidden='true'>
          <Icon icon='it-search' aria-hidden size='sm' />
        </span>
      </components.DropdownIndicator>
    ),
    []
  );

  const AutocompleteInput = useCallback((props) => {
    if (props.isHidden) {
      return <components.Input {...props} />;
    }
    return (
      <div style={{ border: `1px dotted blue}` }}>
        <components.Input {...props} />
      </div>
    );
  }, []);

  // @ts-ignore: ignore the types for now
  const handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, '');
    setValue(inputValue);
    return inputValue;
  };

  return (
    <FormGroup>
      <AsyncSelect
        components={{
          DropdownIndicator: AutocompleteDropdownIndicator,
          Input: AutocompleteInput,
          IndicatorSeparator: null
        }}
        loadOptions={(inputValue, callback) => {
          setTimeout(() => {
            callback(multiOptions.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase())));
          }, 1000);
        }}
        cacheOptions
        defaultOptions
        onInputChange={handleInputChange}
        classNamePrefix='react-autocomplete'
        placeholder='Testo da cercare'
      />
      <label htmlFor='autocomplete-regioni' className='visually-hidden'>
        Cerca nel sito
      </label>
    </FormGroup>
  );
};

_InputAutocompleteConDati.storyName = 'Input autocomplete';

export const _InputAutocompleteConDatiAccessibile = () => {
  // @ts-ignore
  const suggest = (query, populateResults) => {
    const filteredResults = multiOptions.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()));
    let data = filteredResults.map((item) => {
      return item.label;
    });
    populateResults(data);
  };

  return (
    <FormGroup>
      <label htmlFor='autocomplete'>Provincia</label>
      <Autocomplete
        id='autocomplete'
        source={suggest}
        autoselect
        placeholder={'Testo da cercare'}
        defaultValue={''}
        className={''}
        displayMenu={'overlay'}
        tNoResults={() => 'Nessun risultato'}
      />
    </FormGroup>
  );
};

_InputAutocompleteConDatiAccessibile.storyName = 'Input autocomplete accessibile';

export const AreaDiTesto = () => <TextArea label='Esempio di area di testo' rows={3} />;

AreaDiTesto.storyName = 'Area di testo';

export const AreaDiTestoConSegnaposto = () => (
  <TextArea rows={3} label='Esempio di area di testo' placeholder='Testo di esempio' />
);

AreaDiTestoConSegnaposto.storyName = 'Area di testo con segnaposto';

export const InputNumericoDimensionamento = () => {
  const [value, setValue] = useState('100');
  const [value50, setValue50] = useState('100');
  return (
    <>
      <div className='w-100'>
        <Input
          type='number'
          label='Input Number inserito in una colonna a tutta larghezza'
          value={value}
          onChange={(ev) => {
            setValue(ev.target.value);
          }}
        />
      </div>
      <div className='w-50 mt-5'>
        <Input
          type='number'
          label='Input Number inserito in una colonna di larghezza 50%'
          value={value50}
          onChange={(ev) => {
            setValue50(ev.target.value);
          }}
        />
      </div>
    </>
  );
}

export const InputNumericoSteps = () => {
  const [value, setValue] = useState('100');
  return (
    <Input
      type='number'
      label='Min, Max & Step'
      value={value}
      min={-2000}
      max={15000}
      step={500}
      onChange={(ev) => {
        setValue(ev.target.value);
      }}
    />
  );
};

export const InputNumericoDisabilitato = () => {
  return <Input type='number' label='Disabled' value='50' min={0} max={100} disabled />;
};

export const InputNumericoValuta = () => {
  const [value, setValue] = useState('100');

  return (
    <Input
      type='number'
      label='Currency'
      value='50'
      min={0}
      max={100}
      className={'input-number-currency'}
      onChange={(ev) => {
        setValue(ev.target.value);
      }}
    />
  );
};


export const InputNumericoPercentuale = () => {
  const [value, setValue] = useState('100');

  return (
    <Input
      type='number'
      label='Percentage'
      value='50'
      min={0}
      max={100}
      className={'input-number-percentage'}
      onChange={(ev) => {
        setValue(ev.target.value);
      }}
    />
  );
};

export const InputNumericoRidimensionamento = () => {
  const [value, setValue] = useState('100');

  return (
    <Input
      type='number'
      label='Ridimensionamento'
      value='50'
      min={0}
      max={100}
      className={'input-number-adaptive'}
      onChange={(ev) => {
        setValue(ev.target.value);
      }}
    />
  );
};
