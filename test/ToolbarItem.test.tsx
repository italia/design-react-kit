import React, { ReactElement } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ToolbarItem, preloadIcons, Toolbar } from '../src';

function renderWithSize(size: 'small' | 'medium' | 'large', ui: ReactElement) {
  return render(<Toolbar size={size}>{ui}</Toolbar>);
}

describe('ToolbarItem component', () => {
  // Icons are now async, so preload them to make it behave in an sync way
  beforeAll(() => preloadIcons(['it-comment']));

  it('should render the tag that passed as a prop', () => {
    const { getByRole } = render(<ToolbarItem tag={'button'} iconName={'it-comment'} />);

    expect(getByRole('button')).toBeInTheDocument();
  });

  it('should append the active prop to a link', () => {
    const { container, rerender } = render(<ToolbarItem active={true} iconName={'it-comment'} />);

    expect(container.querySelector('a')).toHaveClass('active');

    rerender(<ToolbarItem iconName={'it-comment'} />);

    expect(container.querySelector('a')).not.toHaveClass('active');
  });

  it('should render toolbar-label wrapper and label text if label prop is passed', () => {
    const { container, queryByText, rerender } = render(<ToolbarItem label={'some-label'} iconName={'it-comment'} />);

    expect(container.querySelector('.toolbar-label')).toBeInTheDocument();
    expect(queryByText('some-label')).toBeInTheDocument();

    rerender(<ToolbarItem iconName={'it-comment'} />);

    expect(container.querySelector('.toolbar-label')).not.toBeInTheDocument();
    expect(queryByText('some-label')).not.toBeInTheDocument();
  });

  it('should render a default disabled message when disabled and without label', () => {
    const { container, queryByText } = render(<ToolbarItem iconName={'it-comment'} disabled />);

    expect(container.querySelector('.toolbar-label')).not.toBeInTheDocument();
    expect(queryByText('elemento disabilitato')).toBeInTheDocument();
  });

  it('should render both label and default disabled message when disabled', () => {
    const { queryByText } = render(<ToolbarItem iconName={'it-comment'} label='some-label' disabled />);

    expect(queryByText('some-label')).toBeInTheDocument();
    expect(queryByText('elemento disabilitato')).toBeInTheDocument();
  });

  it('should have a testId for resilient UI changes', () => {
    render(<ToolbarItem tag={'button'} iconName={'it-comment'} testId='test-id-toolbar-item' />);

    expect(screen.getByTestId('test-id-toolbar-item')).toBeTruthy();
  });
  it('should render a badge on the item', () => {
    const { container, queryByText } = renderWithSize(
      'large',
      <ToolbarItem
        iconName={'it-comment'}
        label='some-label'
        badge={{
          value: 42,
          label: 'da esaminare',
          srText: `ci sono 42 documenti da esaminare`
        }}
      />
    );

    expect(container.querySelector('.badge-wrapper')).toHaveTextContent('42');
    expect(queryByText('da esaminare')).toBeInTheDocument();
    // this is avaialble only for smaller size
    expect(queryByText('ci sono 42 documenti da esaminare')).not.toBeInTheDocument();
  });

  it('should render an alert on the item', () => {
    const { container, queryByText } = renderWithSize(
      'small',
      <ToolbarItem
        iconName={'it-comment'}
        badge={{
          value: 42,
          label: 'da esaminare',
          srText: `ci sono 42 documenti da esaminare`
        }}
      />
    );

    expect(container.querySelector('.badge-wrapper')).toHaveTextContent('ci sono 42 documenti da esaminare');
    expect(queryByText('da esaminare')).not.toBeInTheDocument();
  });

  // test the new deprections
  it('should support deprecated notation with single value', () => {
    const { queryByText, container } = renderWithSize(
      'large',
      <ToolbarItem iconName={'it-comment'} label='some-label' badge={42} srText={`da esaminare`} />
    );

    expect(container.querySelector('.badge-wrapper')).toHaveTextContent('42');
    expect(queryByText('da esaminare')).toBeInTheDocument();
    // this is avaialble only for smaller size
    expect(queryByText('ci sono 42 documenti da esaminare')).not.toBeInTheDocument();
  });

  it('should call the onClick on link item', () => {
    const onClick = jest.fn();
    const { getByText } = render(<ToolbarItem iconName={'it-comment'} label='some-label' onClick={onClick} />);
    fireEvent.click(getByText('some-label'));
    expect(onClick).toHaveBeenCalled();
  });

  it('should call the onClick on dropdown toggle', () => {
    const onClick = jest.fn();
    const { getByText } = render(<ToolbarItem iconName={'it-comment'} label='some-label' dropdown onClick={onClick} />);
    fireEvent.click(getByText('some-label'));
    expect(onClick).toHaveBeenCalled();
  });
});
