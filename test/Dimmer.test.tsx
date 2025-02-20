import React from 'react';
import { render, screen } from '@testing-library/react';


import { Dimmer } from '../src';

// Test for breaking changes
test('Should support old className behaviour with the special flag', () => {
  const { container } = render(<Dimmer wrapperClassName={true} className={'myClass'} />);
  expect(container.firstChild).toHaveClass('myClass');
});

it('should have a testId for resilient UI changes', () => {
  render(<Dimmer wrapperClassName={true} className={'myClass'} testId='test-id-dimmer' />);
  expect(screen.getByTestId('test-id-dimmer')).toBeTruthy();
});
