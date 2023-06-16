import React, { ChangeEvent, ReactElement } from 'react';
import { Input } from 'reactstrap';

export interface SelectProps {
  id: string;
  disabled?: boolean;
  label: string;
  children: ReactElement<'option'>[];
  handleChange: (selectedValue: string) => void;
}

export const Select = ({
  id = 'select',
  disabled = false,
  label,
  children,
  handleChange
}: SelectProps) => {
  const _handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    handleChange(e.target.value);
  };
  return (
    <div className='select-wrapper'>
      <label htmlFor={id + '-select'}>{label}</label>
      <Input
        id={id + '-select'}
        name='select'
        type='select'
        disabled={disabled}
        onChange={_handleChange}
      >
        <option value=''>Scegli un'opzione</option>
        {children}
      </Input>
    </div>
  );
};
