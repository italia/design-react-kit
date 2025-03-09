import React from 'react';
import { FormGroup, Input, Label } from '..';

const Item = ({ id, children }: { id: string; children: React.ReactNode }) => {
  return (
    <>
      {id} - {children}
    </>
  );
};

const InternalItem = ({
  id,
  checked,
  children,
  onChange
}: {
  id: string;
  checked?: boolean;
  children: React.ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <FormGroup check>
      <Input checked={checked} onChange={onChange} id={id} type='checkbox' />
      <Label for={id} check>
        {children}
      </Label>
    </FormGroup>
  );
};

export { InternalItem, Item };
