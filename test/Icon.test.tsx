
import { render, waitFor, within } from '@testing-library/react';
import React from 'react';

import { clearIconCache, Icon, icons, preloadIcons } from '../src';

function getIcon(container: Element) {
  return container.firstChild;
}
function getIconTitle(container: HTMLElement, title: string) {
  return within(container).getByText(title);
}
function isEmptyIcon(container: Element) {
  return container.querySelector('svg > path:nth-child(1)[fill="none"]') != null;
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

test('Should pass the alt text to the icon', async () => {
  const { container } = render(<Icon icon='foo-bar.jpg' title='Alt Text' />);
  expect(getIcon(container)).toHaveAttribute('alt', 'Alt Text');
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

test('should replace the existing icon with another (already loaded) when requested - see #855', async () => {
  await preloadIcons(['it-tool', 'it-search']);
  const onLoad = jest.fn();
  const { container, rerender } = render(<Icon icon='it-tool' title='Tool' onIconLoad={onLoad} />);
  expect(getIconTitle(container, 'Tool')).toBeTruthy();
  rerender(<Icon icon='it-search' title='Search' onIconLoad={onLoad} />);
  expect(getIconTitle(container, 'Search')).toBeTruthy();
});

test('should have a testId for resilient UI changes', async () => {
  const { getByTestId } = render(<Icon icon='it-search' testId='test-id-icon' />);

  await waitFor(() => expect(getByTestId('test-id-icon')).toBeTruthy());
});


test('should render a title when passed', async () => {
  await preloadIcons(icons);
  const { container, rerender } = render(<Icon icon={''} title={undefined} />);
  for (const icon of icons) {
    rerender(<Icon icon={icon} title={'MyCustomTitle'} />);
    expect(getIconTitle(container, 'MyCustomTitle')).toBeTruthy();
  }
});

test('should render no title when passed empty string', async () => {
  await preloadIcons(icons);
  const { container, rerender } = render(<Icon icon={''} title={''} />);
  for (const icon of icons) {
    rerender(<Icon icon={icon} title={''} />);
    expect(within(container).queryByTitle((content) => content != null)).toBeFalsy();
  }
});
