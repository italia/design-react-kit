import React, { useState } from 'react';

import Select from 'react-select';

import {
  defaultOptions,
  groupedOptions,
  ClearIndicator,
  DropdownIndicator,
  GroupHeading,
  Option,
  MenuList,
  SelectContainer
} from './Select/SelectExamples';

export default {
  title: 'Componenti/Form/Select'
};

export const SelectClassica = () => {
  const [, setValue] = useState(null);

  const handleChange = (selectedOption) => setValue(selectedOption);
  return (
    <div className='bootstrap-select-wrapper'>
      <label htmlFor='selectExampleClassic'>Etichetta di esempio</label>
      <Select
        components={{
          Option,
          DropdownIndicator,
          IndicatorSeparator: null
        }}
        id='selectExampleClassic'
        onChange={handleChange}
        options={defaultOptions}
        placeholder='Scegli una opzione'
        aria-label='Scegli una opzione'
        classNamePrefix='react-select'
      />
    </div>
  );
};

SelectClassica.story = {
  name: 'Select classica'
};

export const SelectDisabilitata = () => {
  const [, setValue] = useState(null);

  const handleChange = (selectedOption) => setValue(selectedOption);
  return (
    <div className='bootstrap-select-wrapper'>
      <label htmlFor='selectExampleDisabled'>Etichetta di esempio</label>
      <Select
        components={{
          Option,
          DropdownIndicator,
          IndicatorSeparator: null
        }}
        id='selectExampleDisabled'
        isDisabled={true}
        onChange={handleChange}
        options={defaultOptions}
        placeholder='Scegli una opzione'
        aria-label='Scegli una opzione'
        classNamePrefix='react-select'
      />
    </div>
  );
};

SelectDisabilitata.story = {
  name: 'Select disabilitata'
};

export const SelectConReset = () => {
  const [, setValue] = useState(null);

  const handleChange = (selectedOption) => setValue(selectedOption);
  return (
    <div className='bootstrap-select-wrapper'>
      <label htmlFor='selectExampleReset'>Etichetta di esempio</label>
      <Select
        components={{
          Option,
          DropdownIndicator,
          ClearIndicator,
          IndicatorSeparator: null
        }}
        id='selectExampleReset'
        isClearable={true}
        onChange={handleChange}
        options={defaultOptions}
        placeholder='Scegli una opzione'
        aria-label='Scegli una opzione'
        classNamePrefix='react-select'
      />
    </div>
  );
};

SelectConReset.story = {
  name: 'Select con reset'
};

export const SelectConRicerca = () => {
  const [, setValue] = useState(null);

  const handleChange = (selectedOption) => setValue(selectedOption);
  return (
    <div className='bootstrap-select-wrapper'>
      <label htmlFor='selectExampleSearch'>Etichetta di esempio</label>
      <Select
        components={{
          Option,
          DropdownIndicator,
          IndicatorSeparator: null
        }}
        id='selectExampleSearch'
        isSearchable={true}
        onChange={handleChange}
        options={defaultOptions}
        placeholder='Scegli una opzione'
        aria-label='Scegli una opzione'
        classNamePrefix='react-select'
      />
    </div>
  );
};

SelectConRicerca.story = {
  name: 'Select con ricerca'
};

export const _SelectMultipla = () => {
  const [, setValue] = useState(null);

  const handleChange = (selectedOption) => setValue(selectedOption);
  return (
    <div className='bootstrap-select-wrapper'>
      <label htmlFor='selectExampleMulti'>Etichetta di esempio</label>
      <Select
        components={{
          MenuList,
          Option,
          SelectContainer,
          DropdownIndicator,
          IndicatorSeparator: null
        }}
        id='selectExampleMulti'
        isMulti={true}
        onChange={handleChange}
        options={defaultOptions}
        placeholder='Scegli una opzione'
        aria-label='Scegli una opzione'
        classNamePrefix='react-select'
      />
    </div>
  );
};

export const SelectConGruppi = () => {
  const [, setValue] = useState(null);

  const handleChange = (selectedOption) => setValue(selectedOption);
  return (
    <div className='bootstrap-select-wrapper'>
      <label htmlFor='selectExampleGroups'>Etichetta di esempio</label>
      <Select
        components={{
          MenuList,
          Option,
          DropdownIndicator,
          GroupHeading,
          IndicatorSeparator: null
        }}
        id='selectExampleGroups'
        onChange={handleChange}
        options={groupedOptions}
        placeholder='Scegli una opzione'
        aria-label='Scegli una opzione'
        classNamePrefix='react-select'
      />
    </div>
  );
};

SelectConGruppi.story = {
  name: 'Select con gruppi'
};

type SelectOptions =
  | { value: string; label: string }
  | { label: string; options: { value: string; label: string }[] };

export const SelectInterattivo = ({
  search,
  multi,
  group,
  disabled,
  reset
}) => {
  const [, setValue] = useState(null);

  let options: SelectOptions[] = defaultOptions;

  if (group) {
    options = groupedOptions;
  }

  const handleChange = (selectedOption) => setValue(selectedOption);
  return (
    <div className='bootstrap-select-wrapper'>
      <label htmlFor='selectExampleInteractive'>Etichetta di esempio</label>
      <Select
        components={{
          MenuList,
          Option,
          SelectContainer,
          DropdownIndicator,
          ClearIndicator,
          GroupHeading,
          IndicatorSeparator: null
        }}
        id='selectExampleInteractive'
        onChange={handleChange}
        options={options}
        placeholder='Scegli una opzione'
        isDisabled={!!disabled}
        isSearchable={!!search}
        isMulti={!!multi}
        isClearable={!!reset}
        aria-label='Scegli una opzione'
        classNamePrefix={'react-select'}
      />
    </div>
  );
};
SelectInterattivo.story = {
  name: 'Esempio interattivo'
};

SelectInterattivo.args = {
  search: false,
  multi: false,
  group: false,
  disabled: false,
  reset: false
};
