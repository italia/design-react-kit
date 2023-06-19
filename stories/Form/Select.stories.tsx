import React, { useState } from 'react';

import { Select } from '../../src';

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

export const SelectClassica = () => {
  const [, setValue] = useState<string>();

  const handleChange = (selectedOption: string) => setValue(selectedOption);

  return (
    <Select
      id='example-reactstrap'
      label='Etichetta di esempio'
      handleChange={handleChange}
    >
      {defaultOptions.map((opt, i) => (
        <option label={opt.label} key={i}>
          {opt.value}
        </option>
      ))}
    </Select>
  );
};

SelectClassica.storyName = 'Select classica';

export const SelectDisabilitata = () => {
  const [, setValue] = useState<string>();

  const handleChange = (selectedOption: string) => setValue(selectedOption);

  return (
    <Select
      id='example-reactstrap'
      label='Etichetta di esempio'
      handleChange={handleChange}
      disabled
    >
      {defaultOptions.map((opt, i) => (
        <option label={opt.label} key={i}>
          {opt.value}
        </option>
      ))}
    </Select>
  );
};

SelectDisabilitata.storyName = 'Select disabilitata';

export const SelectConGruppi = () => {
  const [, setValue] = useState<string>();

  const handleChange = (selectedOption: string) => setValue(selectedOption);

  return (
    <Select
      id='example-reactstrap'
      label='Etichetta di esempio'
      handleChange={handleChange}
    >
      {groupedOptions.map((grp, i) => (
        <optgroup label={grp.label}>
          {grp.options.map((opt, j) => (
            <option value={opt.value}>{opt.label}</option>
          ))}
        </optgroup>
      ))}
    </Select>
  );
};

SelectConGruppi.storyName = 'Select con gruppi';
