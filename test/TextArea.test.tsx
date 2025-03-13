import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { TextArea } from '../src';

test('Should support all basic attributes of a textarea', () => {
  const { container } = render(<TextArea rows={3} placeholder='Esempio di area di testo' />);
  const textarea = container.querySelector('textarea');
  if (textarea) {
    expect(textarea).toHaveAttribute('rows');
    expect(textarea).toHaveAttribute('placeholder');
  }
});

test('should not be normalized when it has a placeholder', () => {
  const { container } = render(<TextArea rows={3} normalized placeholder='Esempio di area di testo' />);
  const textarea = container.querySelector('textarea');
  if (textarea) {
    expect(textarea).not.toHaveAttribute('readOnly');
  }
});

test('should make the textarea readOnly', () => {
  const { container } = render(<TextArea rows={3} normalized />);
  const textarea = container.querySelector('textarea');
  if (textarea) {
    expect(textarea).toHaveAttribute('readOnly');
  }
});

test('should have a testId for resilient UI changes', () => {
  render(<TextArea testId='test-id-text-area' />);

  expect(screen.getByTestId('test-id-text-area')).toBeTruthy();
});

it('should have form-control as class', () => {
  const { container } = render(
    <TextArea />
  );

  expect(container.firstChild).toHaveClass('form-control');
});
