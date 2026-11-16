import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import { Autocomplete, Input, TextArea } from '../src';

const expectErrorAssociation = (control: HTMLElement, errorId: string, descriptionId?: string) => {
  expect(control).toHaveAttribute('aria-invalid', 'true');
  const describedBy = control.getAttribute('aria-describedby')?.split(' ') ?? [];

  expect(describedBy).toContain(errorId);
  if (descriptionId) {
    expect(describedBy).toContain(descriptionId);
  }
};

describe('form error accessibility', () => {
  it('marks inputs as invalid and preserves their help text and caller descriptions', () => {
    render(
      <Input
        id='name'
        label='Nome'
        infoText='Inserisci il tuo nome'
        validationText='Il nome è obbligatorio'
        valid={false}
        aria-describedby='nameDescription form-help'
      />
    );

    const input = screen.getByLabelText('Nome');
    expectErrorAssociation(input, 'name-error', 'nameDescription');
    expect(input.getAttribute('aria-describedby')?.split(' ')).toEqual(['nameDescription', 'form-help', 'name-error']);
    expect(screen.getByText('Il nome è obbligatorio')).toHaveAttribute('id', 'name-error');
  });

  it('marks textareas as invalid and references their error message', () => {
    render(
      <TextArea
        id='notes'
        label='Note'
        infoText='Massimo 500 caratteri'
        validationText='Le note sono obbligatorie'
        valid={false}
        aria-describedby='notesDescription form-help'
      />
    );

    const textarea = screen.getByLabelText('Note');
    expectErrorAssociation(textarea, 'notes-error', 'notesDescription');
    expect(textarea.getAttribute('aria-describedby')?.split(' ')).toEqual([
      'notesDescription',
      'form-help',
      'notes-error'
    ]);
    expect(screen.getByText('Le note sono obbligatorie')).toHaveAttribute('id', 'notes-error');
  });

  it('does not reference missing textarea help text when adding an error message', () => {
    const { rerender } = render(
      <TextArea id='notes' label='Note' validationText='Le note sono obbligatorie' valid={false} />
    );

    const textarea = screen.getByLabelText('Note');
    expect(textarea).toHaveAttribute('aria-describedby', 'notes-error');
    expect(screen.getByText('Le note sono obbligatorie')).toHaveAttribute('id', 'notes-error');
    expect(document.getElementById('notesDescription')).toBeNull();

    rerender(<TextArea id='notes' label='Note' valid={true} />);
    expect(textarea).not.toHaveAttribute('aria-describedby');
    expect(textarea).not.toHaveAttribute('aria-invalid');
  });

  it('keeps the autocomplete assistive hint while adding the error message', async () => {
    const props = {
      id: 'autocomplete',
      label: 'Regione',
      source: () => undefined,
      validationText: 'Scegli una regione valida',
      'aria-describedby': 'form-help'
    };
    const { rerender } = render(
      <Autocomplete
        {...props}
        valid={false}
      />
    );

    const autocomplete = screen.getByRole('combobox');
    await waitFor(() => {
      expectErrorAssociation(autocomplete, 'autocomplete-error');
    });
    expect(autocomplete.getAttribute('aria-describedby')?.split(' ')).toContain('form-help');
    expect(screen.getByText('Scegli una regione valida')).toHaveAttribute('id', 'autocomplete-error');

    rerender(<Autocomplete {...props} valid={true} />);
    await waitFor(() => {
      expect(autocomplete).not.toHaveAttribute('aria-invalid');
      expect(autocomplete.getAttribute('aria-describedby')?.split(' ')).not.toContain('autocomplete-error');
    });
  });
});
