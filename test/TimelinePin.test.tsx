import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import React from 'react';

import { preloadIcons, TimelinePin } from '../src';

beforeAll(() => preloadIcons(['it-tool', 'it-code-circle']));

// Test for breaking changes
test('Should support old icon prop even as @deprecated', () => {
  const { getByRole } = render(<TimelinePin icon='it-tool' label='My pin' />);
  // if undefined will throw, but keep it for now
  expect(getByRole('img')).not.toBeUndefined();
});

test('should have a testId for resilient UI changes', () => {
  render(<TimelinePin label='My pin' testId='test-id-timeline-pin' />);

  expect(screen.getByTestId('test-id-timeline-pin')).toBeTruthy();
});
