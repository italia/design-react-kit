import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { preloadIcons, Toolbar, ToolbarItem } from '../src';

describe('Toolbar component', () => {
  // Icons are now async, so preload them to make it behave in an sync way
  beforeAll(() => preloadIcons(['it-comment']));
  it('should work as container for children elements', () => {
    render(<Toolbar>Content</Toolbar>);

    expect(screen.getByText('Content')).not.toBe(null);
  });

  it('should append the passed className to the container', () => {
    const { container } = render(<Toolbar className='toolbar-medium'>Content</Toolbar>);

    expect(container.firstChild).toHaveClass('toolbar-medium');
  });

  it('should render the tag that passed as a prop', () => {
    const { container } = render(<Toolbar tag={'header'}>Content</Toolbar>);

    expect(container.querySelector('header')).toBeInTheDocument();
  });

  it('shoud propagate the size to the inner toolbar elements', () => {
    const { container } = render(
      <Toolbar size='small'>
        <ToolbarItem label='messaggi' iconName='it-comment' />
      </Toolbar>
    );

    expect(container.querySelector('.icon-sm')).toBeInTheDocument();
  });

  it('should not render labels nor help text when no label string is passed', () => {
    const { container } = render(
      <Toolbar size='small'>
        <ToolbarItem iconName='it-comment' />
      </Toolbar>
    );

    expect(container.querySelector('.icon-sm')).toBeInTheDocument();
  });

  it('should render label as screen reader node only when size is smaller than large', () => {
    const { container, rerender, queryByText } = render(
      <Toolbar size='small'>
        <ToolbarItem label='some-label' iconName='it-comment' />
      </Toolbar>
    );

    expect(container.querySelector('.toolbar-label')).not.toBeInTheDocument();
    expect(queryByText('some-label')).toBeInTheDocument();

    rerender(
      <Toolbar size='large'>
        <ToolbarItem label='some-label' iconName='it-comment' />
      </Toolbar>
    );

    expect(container.querySelector('.toolbar-label')).toBeInTheDocument();
    expect(queryByText('some-label')).toBeInTheDocument();

    rerender(
      <Toolbar size='medium'>
        <ToolbarItem label='some-label' iconName='it-comment' />
      </Toolbar>
    );

    expect(container.querySelector('.toolbar-label')).not.toBeInTheDocument();
    expect(queryByText('some-label')).toBeInTheDocument();
  });

  it('should have a testId for resilient UI changes', () => {
    render(
      <Toolbar className='toolbar-medium' testId='test-id-toolbar'>
        Content
      </Toolbar>
    );

    expect(screen.getByTestId('test-id-toolbar')).toBeTruthy();
  });
});
