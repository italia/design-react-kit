import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ToolbarDividerItem } from '../src';

describe('ToolbarDividerItem component', () => {
  it('should render component', () => {
    const { container } = render(<ToolbarDividerItem />);

    expect(container.querySelector('li')).toHaveClass('toolbar-divider');
  });

  it('should have aria-hidden attribute and it should be true', () => {
    const { container } = render(<ToolbarDividerItem />);

    expect(container.firstChild).toHaveAttribute('aria-hidden', 'true');
  });
});
