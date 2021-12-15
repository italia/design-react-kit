import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ToolbarItem, preloadIcons } from '../src';

describe('ToolbarItem component', () => {
  // Icons are now async, so preload them to make it behave in an sync way
  beforeAll(() => preloadIcons(['it-comment']));

  it('should render the tag that passed as a prop', () => {
    const { getByRole } = render(
      <ToolbarItem tag={'button'} iconName={'it-comment'} />
    );

    expect(getByRole('button')).toBeInTheDocument();
  });

  it('should append the active prop to a link', () => {
    const { container, rerender } = render(
      <ToolbarItem active={true} iconName={'it-comment'} />
    );

    expect(container.querySelector('a')).toHaveClass('active');

    rerender(<ToolbarItem iconName={'it-comment'} />);

    expect(container.querySelector('a')).not.toHaveClass('active');
  });

  it('should render toolbar-label wrapper and label text if label prop is passed', () => {
    const { container, queryByText, rerender } = render(
      <ToolbarItem label={'some-label'} iconName={'it-comment'} />
    );

    expect(container.querySelector('.toolbar-label')).toBeInTheDocument();
    expect(queryByText('some-label')).toBeInTheDocument();

    rerender(<ToolbarItem iconName={'it-comment'} />);

    expect(container.querySelector('.toolbar-label')).not.toBeInTheDocument();
    expect(queryByText('some-label')).not.toBeInTheDocument();
  });
});
