import React from 'react';
import { FormGroup, Input, Label } from '..';

const SelectAllCheckbox = ({
  className,
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
}) => {
  return (
    <FormGroup check>
      <Input className={className} checked={checked} onChange={onChange} id={id} type='checkbox' />
      <Label for={id} check>
        {children}
      </Label>
    </FormGroup>
  );
};

export { SelectAllCheckbox };
