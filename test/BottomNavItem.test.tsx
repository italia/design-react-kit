import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BottomNavItem, preloadIcons } from '../src';

// Icons are now async, so preload them to make it behave in an sync way
beforeAll(() => preloadIcons(['it-comment']));

// Test for breaking changes
test('Should support old link props as @deprecated', () => {
  const { getByRole } = render(<BottomNavItem link={'/my-url'} />);
  expect(getByRole('link')).toHaveAttribute('href', '/my-url');
});

test('should have a testId for resilient UI changes', () => {
  render(<BottomNavItem link={'/my-url'} testId={'bottom-nav-test-id'} />);
  expect(screen.getByTestId('bottom-nav-test-id')).toBeTruthy();
});
