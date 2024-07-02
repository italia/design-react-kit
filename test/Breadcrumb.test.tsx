import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Breadcrumb } from '../src';

describe('Breadcrumb component', () => {
  it('should work as container for children elements', () => {
    render(<Breadcrumb>Content</Breadcrumb>);

    expect(screen.getByText('Content')).not.toBe(null);
  });

  it('should append the passed className to the container', () => {
    const { container } = render(<Breadcrumb className='myclass'>Content</Breadcrumb>);

    expect(container.firstChild).toHaveClass('myclass');
  });

  it('should add class dark to first ol element when add this breadcrumb prop', () => {
    const { container } = render(<Breadcrumb dark>Content</Breadcrumb>);

    expect(container.getElementsByClassName('dark').length).toBe(1);
  });

  it('should have a testId for resilient UI changes', () => {
    render(<Breadcrumb testId='breadcrumb-test-id'>Content</Breadcrumb>);

    expect(screen.getByTestId('breadcrumb-test-id')).toBeTruthy();
  });
});
