import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { preloadIcons, TimelinePin } from '../src';

beforeAll(() => preloadIcons(['it-tool', 'it-code-circle']));

// Test for breaking changes
test('Should support old icon prop even as @deprecated', () => {
  const { getByRole } = render(<TimelinePin icon='it-tool' label='My pin' />);
  // if undefined will throw, but keep it for now
  expect(getByRole('img')).not.toBeUndefined();
});
