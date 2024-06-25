import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Accordion, AccordionHeader } from '../src';
import { AccordionItem } from 'reactstrap';

describe('Accordion component', () => {
  it('should work as container for children elements', () => {
    render(<Accordion>Content</Accordion>);

    expect(screen.getByText('Content')).not.toBe(null);
  });

  it('should append the passed className to the container', () => {
    const { container } = render(<Accordion className='myclass'>Content</Accordion>);

    expect(container.firstChild).toHaveClass('myclass');
  });

  it('should have the class accordion-button', () => {
    const { container } = render(
      <Accordion>
        <AccordionItem>
          <AccordionHeader>Content</AccordionHeader>
        </AccordionItem>
      </Accordion>
    );

    expect(container.getElementsByClassName('accordion-button').length).toBe(1);
  });

  it('should have the class collapsed when collapsed', () => {
    const { container } = render(
      <Accordion>
        <AccordionItem>
          <AccordionHeader>Content</AccordionHeader>
        </AccordionItem>
      </Accordion>
    );

    expect(container.getElementsByClassName('accordion-button collapsed').length).toBe(1);
  });

  it('should have a testId for resilient UI changes', () => {
    const collapse = render(<Accordion testId={'test-id-accordion'}>Content</Accordion>);
    expect(collapse.getByTestId('test-id-accordion')).toBeTruthy();
  });
});
