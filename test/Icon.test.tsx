import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { clearIconCache, Icon, preloadIcons } from '../src';

function getIcon(container: Element) {
  return container.firstChild;
}
function isEmptyIcon(container: Element) {
  return container.querySelector('svg > path:first-child[fill="none"]') != null;
}

beforeEach(() => clearIconCache());

test('Should have a lazy loading behaviour', async () => {
  const { container } = render(<Icon icon='it-search' />);
  expect(isEmptyIcon(container)).toBeTruthy();
  await waitFor(() => !isEmptyIcon(container));
});

test('Should pass all the given props to the icon', async () => {
  const { container } = render(<Icon icon='it-search' aria-label='Search' />);
  expect(getIcon(container)).toHaveAttribute('aria-label', 'Search');
  await waitFor(() => !isEmptyIcon(container));
});

test('should call the onIconLoad callback when ready', async () => {
  const callback = jest.fn();
  const { container } = render(<Icon icon='it-search' onIconLoad={callback} />);
  await waitFor(() => !isEmptyIcon(container));
  expect(callback).toHaveBeenCalled();
});

test('should render immediately the icon when preloaded', async () => {
  const callback = jest.fn();
  expect(await preloadIcons(['it-tool'])).toBeTruthy();
  const { container } = render(<Icon icon='it-tool' onIconLoad={callback} />);
  expect(isEmptyIcon(container)).toBeFalsy();
  expect(callback).toHaveBeenCalled();
});

test('should throw when invalid icon/URL is passed to preload', async () => {
  try {
    await preloadIcons(['not-valid-icon']);
  } catch (e) {
    expect(e).toBeTruthy();
  }
});

test('should clear the icon cache correctly', async () => {
  await preloadIcons(['it-tool', 'it-search']);
  expect(clearIconCache('it-tool')).toEqual({
    'it-tool': expect.any(Function)
  });
  // Call it again: this time should return undefined
  expect(clearIconCache('it-tool')).toEqual({ 'it-tool': undefined });
});

test('should have a testId for resilient UI changes', async () => {
  render(<Icon icon='it-search' testId='test-id-icon' />);

  await waitFor(() => expect(screen.getByTestId('test-id-icon')).toBeTruthy());
});
