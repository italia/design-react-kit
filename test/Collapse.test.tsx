import React from 'react';
import { render, screen } from '@testing-library/react';

import { Collapse } from '../src';

describe('Collapse component', () => {
  it('should work as container for children elements', () => {
    render(<Collapse>Content</Collapse>);

    expect(screen.getByText('Content')).not.toBe(null);
  });

  it('should append the passed className to the container', () => {
    const { container } = render(<Collapse className='myclass'>Content</Collapse>);

    expect(container.firstChild).toHaveClass('myclass');
  });

  it('should wrapping content inside additional element when add megamenu prop', () => {
    const { container } = render(<Collapse megamenu>Content</Collapse>);

    expect(container.getElementsByClassName('menu-wrapper').length).toBe(1);
  });

  it('should have a testId for resilient UI changes', () => {
    const collapse = render(<Collapse testId={'test-id-collapse'}>Content</Collapse>);
    expect(collapse.getByTestId('test-id-collapse')).toBeTruthy();
  });
});
