import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ToolbarDividerItem } from '../src';

describe('ToolbarDividerItem component', () => {
  it('should render component', () => {
    const { container } = render(<ToolbarDividerItem />);

    expect(container.querySelector('li')).toHaveClass('toolbar-divider');
  });

  it('should have role=separator and aria-orientation=vertical', () => {
    const { container } = render(<ToolbarDividerItem />);
    expect(container.firstChild).toHaveAttribute('role', 'separator');
    expect(container.firstChild).toHaveAttribute('aria-orientation', 'vertical');
  });
});
