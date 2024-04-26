import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { Input, preloadIcons } from '../src';

// Icons are now async, so preload them to make it behave in an sync way
beforeAll(() => preloadIcons(['it-password-visible', 'it-password-invisible']));

// Test for breaking changes
test('Should support old wrapperClass prop even as @deprecated', () => {
  const { container } = render(<Input wrapperClass='myClass' placeholder='write text here' />);
  expect(container.firstChild).toHaveClass('myClass');
});

test('should display the label', () => {
  const { container } = render(<Input label='MyLabel' />);
  const label = container.querySelector('label');
  if (label) {
    expect(label).toHaveTextContent('MyLabel');
  }
});

test('should display the validationText', () => {
  const { container } = render(<Input validationText='SomeInfo' />);
  const validationText = container.querySelector('small');
  if (validationText) {
    expect(validationText).toHaveTextContent('SomeInfo');
  }
});

test('should display the placeholder', () => {
  const { container } = render(<Input placeholder='Esempio di area di testo' />);
  const input = container.querySelector('input');
  if (input) {
    expect(input).toHaveAttribute('placeholder');
  }
});

test('should make the input readOnly when requested', () => {
  const { container } = render(<Input normalized />);
  const input = container.querySelector('input');
  if (input) {
    expect(input).toHaveAttribute('readOnly');
  }
});

test('should not be normalized when it has a placeholder', () => {
  const { container } = render(<Input normalized placeholder='Esempio di area di testo' />);
  const input = container.querySelector('input');
  if (input) {
    expect(input).not.toHaveAttribute('readOnly');
  }
});

test('should toggle password icon on click', () => {
  const { container } = render(
    <Input
      type='password'
      label='Password'
      id='exampleInputPassword'
      placeholder='Inserisci la tua password'
      wrapperClassName='col col-md-6'
    />
  );
  const icon = container.querySelector('[aria-hidden="true"] > svg');
  const input = container.querySelector('input');
  if (icon && input) {
    act(() => {
      fireEvent.click(icon);
    });
    expect(input).toHaveAttribute('type', 'text');
    act(() => {
      fireEvent.click(icon);
    });
    expect(input).toHaveAttribute('type', 'password');
  }
});

test('should return an unstyled input', () => {
  const { container } = render(<Input noWrapper />);
  expect(container.firstChild?.nodeName).toBe('INPUT');
});

test('should have a testId for resilient UI changes', () => {
  render(<Input testId='test-id-input' />);

  expect(screen.getByTestId('test-id-input')).toBeTruthy();
});
