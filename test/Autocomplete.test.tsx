import React from 'react';
import { render, screen } from '@testing-library/react';

import { Autocomplete } from '../src';

// Con Vite 8 (Rolldown) l'import predefinito del bundle UMD restituisce l'oggetto del modulo invece del componente
jest.mock('accessible-autocomplete/react', () => {
  const ReactActual = jest.requireActual('react');
  const MockAutocomplete = ({ id }: { id: string }) => ReactActual.createElement('input', { id, role: 'combobox' });
  return { __esModule: true, default: { default: MockAutocomplete } };
});

describe('Autocomplete', () => {
  it('Should render when the default import of accessible-autocomplete is the module object', () => {
    render(<Autocomplete id='comune' label='Comune' source={() => undefined} />);
    expect(screen.getByRole('combobox')).toHaveAttribute('id', 'comune');
  });
});
