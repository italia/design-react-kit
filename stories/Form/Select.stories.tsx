import { Story } from '@storybook/react';
import React, { useState } from 'react';

import { GroupTypeBase, Select } from '../../src';

const defaultOptions = [
  { value: 'Value 1', label: 'Lorem ipsum dolor sit amet' },
  { value: 'Value 2', label: 'Duis vestibulum eleifend libero' },
  { value: 'Value 3', label: 'Phasellus pretium orci sed odio tempus' },
  {
    value: 'Value 4',
    label: 'Vestibulum bibendum ex vel augue porttitor sodales'
  },
  { value: 'Value 5', label: 'Praesent quis elementum turpis' }
];

const groupOneOptions = [
  { value: 'Value 1', label: 'Lorem ipsum dolor sit amet' },
  { value: 'Value 2', label: 'Duis vestibulum eleifend libero' },
  { value: 'Value 3', label: 'Phasellus pretium orci sed odio tempus' }
];

const groupTwoOptions = [
  {
    value: 'Value 4',
    label: 'Vestibulum bibendum ex vel augue porttitor sodales'
  },
  { value: 'Value 5', label: 'Praesent quis elementum turpis' }
];

const groupedOptions = [
  {
    label: 'Gruppo 1',
    options: groupOneOptions
  },
  {
    label: 'Gruppo 2',
    options: groupTwoOptions
  }
];

export default {
  title: 'Componenti/Form/Select'
};

type Value = {
  label: string;
  value: string;
};

export const SelectClassica = () => {
  const [, setValue] = useState({
    value: '',
    label: ''
  });

  const handleChange = (selectedOption) => setValue(selectedOption);

  return (
    <div className='bootstrap-select-wrapper'>
      <label htmlFor='selectExampleClassic'>Etichetta di esempio</label>
      <Select
        id='selectExampleClassic'
        onChange={handleChange}
        options={defaultOptions}
        placeholder='Scegli una opzione'
        aria-label='Scegli una opzione'
      />
    </div>
  );
};

SelectClassica.storyName = 'Select classica';

export const SelectClassicaTS = () => {
  type MyCustomValueType = {
    label: string;
    value: string;
  };

  const [, setValue] = useState<MyCustomValueType | null>({
    value: '',
    label: ''
  });

  return (
    <div className='bootstrap-select-wrapper'>
      <label htmlFor='selectExampleClassic'>Etichetta di esempio</label>
      <Select<MyCustomValueType>
        id='selectExampleClassic'
        onChange={(selectedOption) => setValue(selectedOption)}
        options={defaultOptions}
        placeholder='Scegli una opzione'
        aria-label='Scegli una opzione'
      />
    </div>
  );
};

SelectClassicaTS.storyName = 'Select classica (Typescript)';

export const SelectDisabilitata = () => {
  const [, setValue] = useState<Value | null>({
    value: '',
    label: ''
  });
  const handleChange = (selectedOption) => setValue(selectedOption);

  return (
    <div className='bootstrap-select-wrapper'>
      <label htmlFor='selectExampleDisabled'>Etichetta di esempio</label>
      <Select
        id='selectExampleDisabled'
        isDisabled={true}
        onChange={handleChange}
        options={defaultOptions}
        placeholder='Scegli una opzione'
        aria-label='Scegli una opzione'
      />
    </div>
  );
};

SelectDisabilitata.storyName = 'Select disabilitata';

export const SelectConReset = () => {
  const [, setValue] = useState({ value: '', label: '' });

  const handleChange = (selectedOption) => setValue(selectedOption);
  return (
    <div className='bootstrap-select-wrapper'>
      <label htmlFor='selectExampleReset'>Etichetta di esempio</label>
      <Select
        id='selectExampleReset'
        isClearable={true}
        onChange={handleChange}
        options={defaultOptions}
        placeholder='Scegli una opzione'
        aria-label='Scegli una opzione'
      />
    </div>
  );
};

SelectConReset.storyName = 'Select con reset';

export const SelectConRicerca = () => {
  const [, setValue] = useState({ value: '', label: '' });

  const handleChange = (selectedOption) => setValue(selectedOption);
  return (
    <div className='bootstrap-select-wrapper'>
      <label htmlFor='selectExampleSearch'>Etichetta di esempio</label>
      <Select
        id='selectExampleSearch'
        isSearchable={true}
        onChange={handleChange}
        options={defaultOptions}
        placeholder='Scegli una opzione'
        aria-label='Scegli una opzione'
      />
    </div>
  );
};

SelectConRicerca.storyName = 'Select con ricerca';

export const _SelectMultipla = () => {
  const [, setValue] = useState({ value: '', label: '' });

  const handleChange = (selectedOption) => setValue(selectedOption);
  return (
    <div className='bootstrap-select-wrapper'>
      <label htmlFor='selectExampleMulti'>Etichetta di esempio</label>
      <Select
        id='selectExampleMulti'
        isMulti={true}
        onChange={handleChange}
        options={defaultOptions}
        placeholder='Scegli una opzione'
        aria-label='Scegli una opzione'
      />
    </div>
  );
};

export const SelectConGruppi = () => {
  const [, setValue] = useState({ value: '', label: '' });

  const handleChange = (selectedOption) => setValue(selectedOption);
  return (
    <div className='bootstrap-select-wrapper'>
      <label htmlFor='selectExampleGroups'>Etichetta di esempio</label>
      <Select
        id='selectExampleGroups'
        onChange={handleChange}
        options={groupedOptions}
        placeholder='Scegli una opzione'
        aria-label='Scegli una opzione'
      />
    </div>
  );
};

SelectConGruppi.storyName = 'Select con gruppi';

export const SelectConGruppiTS = () => {
  type MyCustomValueType = {
    label: string;
    value: string;
  };

  const [, setValue] = useState<Value | readonly Value[] | null>([
    { value: '', label: '' }
  ]);

  return (
    <div className='bootstrap-select-wrapper'>
      <label htmlFor='selectExampleGroups'>Etichetta di esempio</label>
      <Select<MyCustomValueType, true, GroupTypeBase<MyCustomValueType>>
        id='selectExampleGroups'
        onChange={(selectedOption) => setValue(selectedOption)}
        options={groupedOptions}
        placeholder='Scegli una opzione'
        aria-label='Scegli una opzione'
      />
    </div>
  );
};

SelectConGruppiTS.storyName = 'Select con gruppi (Typescript)';

type SelectInterattivoProps = {
  search: boolean;
  multi: boolean;
  group: boolean;
  disabled: boolean;
  reset: boolean;
};
export const SelectInterattivo: Story<SelectInterattivoProps> = ({
  search,
  multi,
  group,
  disabled,
  reset
}) => {
  const [, setValue] = useState({ value: '', label: '' });

  let options = defaultOptions;

  if (group) {
    // @ts-expect-error adding types makes the example harder to read
    options = groupedOptions;
  }
  const handleChange = (selectedOption) => setValue(selectedOption);
  return (
    <div className='bootstrap-select-wrapper'>
      <label htmlFor='selectExampleInteractive'>Etichetta di esempio</label>
      <Select
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
SelectInterattivo.storyName = 'Esempio interattivo';

SelectInterattivo.args = {
  search: false,
  multi: false,
  group: false,
  disabled: false,
  reset: false
};
