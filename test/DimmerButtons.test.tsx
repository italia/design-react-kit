import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { DimmerButtons } from '../src';

// Test for breaking changes
test('Should support old dark behaviour with the special flag', () => {
  const { container } = render(<DimmerButtons dark={false} />);
  expect(container.firstChild).not.toHaveClass('bg-dark');
});

it('should have a testId for resilient UI changes', () => {
  render(<DimmerButtons dark={false} testId='test-id-dimmer' />);
  expect(screen.getByTestId('test-id-dimmer')).toBeTruthy();
});
