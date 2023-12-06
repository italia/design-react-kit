import React, { useState } from 'react';

import { Select } from '../../src';

export default {
  title: 'Componenti/Form/Select'
};

export const SelectClassica = () => {
  const [, setValue] = useState<string>();

  const handleChange = (selectedOption: string) => setValue(selectedOption);

  return (
    <Select id='example-reactstrap' label='Etichetta di esempio' onChange={handleChange}>
      <option value=''>Scegli un'opzione</option>
      <option value='Value 1'>Lorem ipsum dolor sit amet</option>
      <option value='Value 2'>Duis vestibulum eleifend libero</option>
      <option value='Value 3'>Phasellus pretium orci sed odio tempus</option>
      <option value='Value 4'>Vestibulum bibendum ex vel augue porttitor sodales</option>
      <option value='Value 5'>Praesent quis elementum turpis</option>
    </Select>
  );
};

SelectClassica.storyName = 'Select classica';

export const SelectDisabilitata = () => {
  const [, setValue] = useState<string>();

  const handleChange = (selectedOption: string) => setValue(selectedOption);

  return (
    <Select id='example-reactstrap' label='Etichetta di esempio' onChange={handleChange} disabled>
      <option value=''>Scegli un'opzione</option>
      <option value='Value 1'>Lorem ipsum dolor sit amet</option>
      <option value='Value 2'>Duis vestibulum eleifend libero</option>
      <option value='Value 3'>Phasellus pretium orci sed odio tempus</option>
      <option value='Value 4'>Vestibulum bibendum ex vel augue porttitor sodales</option>
      <option value='Value 5'>Praesent quis elementum turpis</option>
    </Select>
  );
};

SelectDisabilitata.storyName = 'Select disabilitata';

export const SelectConGruppi = () => {
  const [, setValue] = useState<string>();

  const handleChange = (selectedOption: string) => setValue(selectedOption);

  return (
    <Select id='example-reactstrap' label='Etichetta di esempio' onChange={handleChange}>
      <option value=''>Scegli un'opzione</option>
      <optgroup label='Gruppo 1'>
        <option value='Value 1'>Lorem ipsum dolor sit amet</option>
        <option value='Value 2'>Duis vestibulum eleifend libero</option>
        <option value='Value 3'>Phasellus pretium orci sed odio tempus</option>
      </optgroup>
      <optgroup label='Gruppo 2'>
        <option value='Value 4'>Vestibulum bibendum ex vel augue porttitor sodales</option>
        <option value='Value 5'>Praesent quis elementum turpis</option>
      </optgroup>
    </Select>
  );
};

SelectConGruppi.storyName = 'Select con gruppi';
