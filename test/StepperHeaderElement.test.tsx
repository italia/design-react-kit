import React from 'react';
import { render, screen } from '@testing-library/react';


import { preloadIcons, StepperHeaderElement } from '../src';

beforeAll(() => preloadIcons(['it-tool']));

// Test for breaking changes
test('Should support old variant "steppers-index"', () => {
  const { container } = render(<StepperHeaderElement variant='mobile' />);
  expect(container.firstChild).toHaveClass('steppers-index');
});

test('Should support old icon prop as @deprecated', () => {
  const { getAllByRole } = render(<StepperHeaderElement prependIcon='it-tool' prependIconTitle="Tools" />);
  expect(getAllByRole('img')).toHaveLength(1);
});

test('Should support old iconName prop as @deprecated', () => {
  const { getAllByRole } = render(<StepperHeaderElement prependIcon='it-tool' prependIconTitle="Tools" />);
  expect(getAllByRole('img')).toHaveLength(1);
});

test('should have a testId for resilient UI changes', () => {
  render(<StepperHeaderElement testId='test-id-stepper-header' />);

  expect(screen.getByTestId('test-id-stepper-header')).toBeTruthy();
});
