import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { BottomNavItem, preloadIcons } from '../src';

// Icons are now async, so preload them to make it behave in an sync way
beforeAll(() => preloadIcons(['it-comment']));

// Test for breaking changes
test('Should support old link props as @deprecated', () => {
  const { getByRole, rerender } = render(<BottomNavItem link={'/my-url'} />);
  expect(getByRole('link')).toHaveAttribute('href', '/my-url');
});
