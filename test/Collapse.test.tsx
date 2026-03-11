import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';

const mockRaf = () =>
  jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => { cb(0); return 0; });

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

    it('should have role="dialog", aria-modal="true" and aria-label when open', () => {
      const { container } = render(<Collapse navbar isOpen>Content</Collapse>);
      const panel = container.querySelector('.navbar-collapsable');
      expect(panel).toHaveAttribute('role', 'dialog');
      expect(panel).toHaveAttribute('aria-modal', 'true');
      expect(panel).toHaveAttribute('aria-label', 'Menu di navigazione');
    });

    it('should allow overriding aria-label via props', () => {
      const { container } = render(<Collapse navbar isOpen aria-label='Navigazione principale'>Content</Collapse>);
      const panel = container.querySelector('.navbar-collapsable');
      expect(panel).toHaveAttribute('aria-label', 'Navigazione principale');
    });

    it('should not have role="dialog", aria-modal or aria-label when closed', () => {
      const { container } = render(<Collapse navbar isOpen={false}>Content</Collapse>);
      const panel = container.querySelector('.navbar-collapsable');
      expect(panel).not.toHaveAttribute('role', 'dialog');
      expect(panel).not.toHaveAttribute('aria-modal');
      expect(panel).not.toHaveAttribute('aria-label');
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

    it('should call onOverlayClick when Escape key is pressed and panel is open', () => {
      const onOverlayClick = jest.fn();
      render(<Collapse navbar isOpen onOverlayClick={onOverlayClick}>Content</Collapse>);
      fireEvent.keyDown(document, { key: 'Escape' });
      expect(onOverlayClick).toHaveBeenCalledTimes(1);
    });

    it('should not call onOverlayClick when Escape key is pressed and panel is closed', () => {
      const onOverlayClick = jest.fn();
      render(<Collapse navbar isOpen={false} onOverlayClick={onOverlayClick}>Content</Collapse>);
      fireEvent.keyDown(document, { key: 'Escape' });
      expect(onOverlayClick).not.toHaveBeenCalled();
    });

    it('should lock body scroll when open and restore it when closed', () => {
      const { rerender } = render(<Collapse navbar isOpen={false}>Content</Collapse>);
      expect(document.body.style.overflow).not.toBe('hidden');

      rerender(<Collapse navbar isOpen>Content</Collapse>);
      expect(document.body.style.overflow).toBe('hidden');

      rerender(<Collapse navbar isOpen={false}>Content</Collapse>);
      expect(document.body.style.overflow).toBe('');
    });

    it('should move focus to the panel when opened', () => {
      const raf = mockRaf();
      const { container, rerender } = render(<Collapse navbar isOpen={false}>Content</Collapse>);
      const panel = container.querySelector('.navbar-collapsable') as HTMLElement;

      act(() => {
        rerender(<Collapse navbar isOpen>Content</Collapse>);
      });

      expect(document.activeElement).toBe(panel);
      raf.mockRestore();
    });

    it('should restore focus to the trigger when closed', () => {
      jest.useFakeTimers();
      const raf = mockRaf();

      const trigger = document.createElement('button');
      document.body.appendChild(trigger);
      trigger.focus();

      const { rerender } = render(<Collapse navbar isOpen={false}>Content</Collapse>);
      // flush the initial mount timer (isOpen=false fires a setTimeout too)
      act(() => { jest.runAllTimers(); });

      // open: saves activeElement as trigger, then focuses panel
      act(() => {
        rerender(<Collapse navbar isOpen>Content</Collapse>);
      });

      // close: fires the restore-focus timer
      act(() => {
        rerender(<Collapse navbar isOpen={false}>Content</Collapse>);
      });
      act(() => { jest.runAllTimers(); });

      expect(document.activeElement).toBe(trigger);
      document.body.removeChild(trigger);
      raf.mockRestore();
      jest.useRealTimers();
    });
  });

  describe('megamenu mode', () => {
    it('should have tabindex="-1" on the panel', () => {
      const { container } = render(<Collapse megamenu>Content</Collapse>);
      const panel = container.querySelector('.navbar-collapsable');
      expect(panel).toHaveAttribute('tabindex', '-1');
    });

    it('should have role="dialog", aria-modal="true" and aria-label when open', () => {
      const { container } = render(<Collapse megamenu isOpen>Content</Collapse>);
      const panel = container.querySelector('.navbar-collapsable');
      expect(panel).toHaveAttribute('role', 'dialog');
      expect(panel).toHaveAttribute('aria-modal', 'true');
      expect(panel).toHaveAttribute('aria-label', 'Menu di navigazione');
    });

    it('should set inert on <main> when open and remove it when closed', () => {
      const main = document.createElement('main');
      document.body.appendChild(main);

      const { rerender } = render(<Collapse megamenu isOpen={false}>Content</Collapse>);
      expect(main).not.toHaveAttribute('inert');

      rerender(<Collapse megamenu isOpen>Content</Collapse>);
      expect(main).toHaveAttribute('inert');

      rerender(<Collapse megamenu isOpen={false}>Content</Collapse>);
      expect(main).not.toHaveAttribute('inert');

      document.body.removeChild(main);
    });

    it('should call onOverlayClick when Escape key is pressed and panel is open', () => {
      const onOverlayClick = jest.fn();
      render(<Collapse megamenu isOpen onOverlayClick={onOverlayClick}>Content</Collapse>);
      fireEvent.keyDown(document, { key: 'Escape' });
      expect(onOverlayClick).toHaveBeenCalledTimes(1);
    });

    it('should lock body scroll when open and restore it when closed', () => {
      const { rerender } = render(<Collapse megamenu isOpen={false}>Content</Collapse>);
      rerender(<Collapse megamenu isOpen>Content</Collapse>);
      expect(document.body.style.overflow).toBe('hidden');

      rerender(<Collapse megamenu isOpen={false}>Content</Collapse>);
      expect(document.body.style.overflow).toBe('');
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
