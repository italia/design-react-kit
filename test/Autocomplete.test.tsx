import React from 'react';
import { render, screen } from '@testing-library/react';

import { Autocomplete } from '../src';

// Con Vite 8 (Rolldown) l'import predefinito del bundle UMD restituisce l'oggetto del modulo invece del componente
const mockReceivedProps = jest.fn();

jest.mock('accessible-autocomplete/react', () => {
  const ReactActual = jest.requireActual('react');
  const MockAutocomplete = (props: { id: string }) => {
    mockReceivedProps(props);
    return ReactActual.createElement('input', { id: props.id, role: 'combobox' });
  };
  return { __esModule: true, default: { default: MockAutocomplete } };
});

describe('Autocomplete', () => {
  it('Should render when the default import of accessible-autocomplete is the module object', () => {
    render(<Autocomplete id='comune' label='Comune' source={() => undefined} />);
    expect(screen.getByRole('combobox')).toHaveAttribute('id', 'comune');
  });

  it('Should pass to accessible-autocomplete only the supported props', () => {
    render(<Autocomplete id='comune' label='Comune' className='extra' testId='test' source={() => undefined} />);
    const props = mockReceivedProps.mock.calls[mockReceivedProps.mock.calls.length - 1][0];
    expect(props.id).toBe('comune');
    expect(props).not.toHaveProperty('label');
    expect(props).not.toHaveProperty('className');
    expect(props).not.toHaveProperty('testId');
  });
});
