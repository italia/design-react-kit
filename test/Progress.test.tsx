import React from 'react';
import { render, screen } from '@testing-library/react';


import { logError } from '../src/utils';
import { Progress } from '../src';

jest.mock('../src/utils', () => ({
  logError: jest.fn()
}));

beforeEach(() => {
  (logError as jest.Mock).mockRestore();
});

// Tests for breaking changes here
test('Should support old className behaviour with special flag', () => {
  const { container } = render(<Progress className='myClass' wrapperClassName={true} value={1} />);
  expect(container.firstChild).toHaveClass('myClass');
});

test('Should not apply className to the wrapper', () => {
  const { container } = render(<Progress className='myClass' value={1} />);
  expect(container.firstChild).not.toHaveClass('myClass');
});

test('Should apply wrapperClassName to the wrapper', () => {
  const { container } = render(<Progress wrapperClassName='myClass' value={1} />);
  expect(container.firstChild).toHaveClass('myClass');
});

// Write more proper tests here
test('Should log an error when value is not a number', () => {
  const { container } = render(<Progress wrapperClassName='myClass' value={'a'} />);
  expect(container.firstChild).toHaveClass('myClass');
  expect(logError).toHaveBeenCalledWith('The passed "value" is not a valid number. You passed "a"');
});

test('Should be ok with a numeric string as for value', () => {
  const { container } = render(<Progress wrapperClassName='myClass' value={'1'} />);
  expect(container.firstChild).toHaveClass('myClass');
});

test('should have a testId for resilient UI changes', () => {
  render(<Progress testId='test-id-progress' />);

  expect(screen.getByTestId('test-id-progress')).toBeTruthy();
});
