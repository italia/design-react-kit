import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Toolbar } from '../src';

describe('Toolbar component', () => {
  it('should work as container for children elements', () => {
    render(<Toolbar>Content</Toolbar>);

    expect(screen.getByText('Content')).not.toBe(null);
  });

  it('should append the passed className to the container', () => {
    const { container } = render(
      <Toolbar className='toolbar-medium'>Content</Toolbar>
    );

    expect(container.firstChild).toHaveClass('toolbar-medium');
  });

  it('should render the tag that passed as a prop', () => {
    const { container } = render(<Toolbar tag={'header'}>Content</Toolbar>);

    expect(container.querySelector('header')).toBeInTheDocument();
  });
});
