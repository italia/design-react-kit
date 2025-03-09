import React from 'react';
import { FormGroup, Input, Label } from '..';

const SelectAllCheckbox = ({
  className,
  description,
  checked,
  id,
  onChange,
  children
}: {
  className?: string;
  id: string;
  checked?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  children: React.ReactNode;
  description?: string;
}) => {
  return (
    <FormGroup check>
      <Input className={className} checked={checked} onChange={onChange} id={id} type='checkbox' />
      <Label for={id} check>
        {children}
        {description && <span className='descr'>{description}</span>}
      </Label>
    </FormGroup>
  );
};

export { SelectAllCheckbox };
