import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MegamenuItem } from '../src';

describe('MegamenuItem component', () => {
    it('should work as container for children elements', () => {
      render(<MegamenuItem>Content</MegamenuItem>);
  
      expect(screen.getByText('Content')).not.toBe(null);
    });
  
    it('should append the passed className to the container', () => {
      const { container } = render(<MegamenuItem className='myclass'>Content</MegamenuItem>);
  
      expect(container.firstChild).toHaveClass('myclass');
    });
});  