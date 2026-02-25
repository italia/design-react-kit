import React from 'react';
import { render, screen } from '@testing-library/react';

import { Collapse } from '../src';

describe('Collapse component', () => {
  it('should work as container for children elements', () => {
    render(<Collapse>Content</Collapse>);

    expect(screen.getByText('Content')).not.toBe(null);
  });

  describe('navbar mode', () => {
    it('should have tabindex="-1" on the panel', () => {
      const { container } = render(<Collapse navbar>Content</Collapse>);
      const panel = container.querySelector('.navbar-collapsable');
      expect(panel).toHaveAttribute('tabindex', '-1');
    });

    it('should have role="dialog" and aria-modal="true" when open', () => {
      const { container } = render(<Collapse navbar isOpen>Content</Collapse>);
      const panel = container.querySelector('.navbar-collapsable');
      expect(panel).toHaveAttribute('role', 'dialog');
      expect(panel).toHaveAttribute('aria-modal', 'true');
    });

    it('should not have role="dialog" or aria-modal when closed', () => {
      const { container } = render(<Collapse navbar isOpen={false}>Content</Collapse>);
      const panel = container.querySelector('.navbar-collapsable');
      expect(panel).not.toHaveAttribute('role', 'dialog');
      expect(panel).not.toHaveAttribute('aria-modal');
    });

    it('should set inert on <main> when open and remove it when closed', () => {
      const main = document.createElement('main');
      document.body.appendChild(main);

      const { rerender } = render(<Collapse navbar isOpen={false}>Content</Collapse>);
      expect(main).not.toHaveAttribute('inert');

      rerender(<Collapse navbar isOpen>Content</Collapse>);
      expect(main).toHaveAttribute('inert');

      rerender(<Collapse navbar isOpen={false}>Content</Collapse>);
      expect(main).not.toHaveAttribute('inert');

      document.body.removeChild(main);
    });
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
