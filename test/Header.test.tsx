import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Header } from '../src';

// Test for regressions #801
test('Should not have a theme set by default', () => {
  const { container } = render(<Header type='center' />);
  expect(container.firstChild).not.toHaveClass('theme-light');
});

test('Should respect the theme passed', () => {
  const { container, rerender } = render(
    <Header type='center' theme='light' />
  );
  expect(container.firstChild).toHaveClass('theme-light');

  rerender(<Header type='center' theme='dark' />);
  expect(container.firstChild).toHaveClass('theme-dark');
});
