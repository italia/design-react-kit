import React, { ChangeEvent, ReactElement, SelectHTMLAttributes } from 'react';
import { Input } from 'reactstrap';
import { InputType } from 'reactstrap/types/lib/Input';

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  /**
   * Se `true` determina la disabilitazione del campo
   */
  disabled?: boolean;
  /**
   * L'etichetta del campo
   */
  label: string;
  /**
   * La lista di opzioni da visualizzare nella tendina del Select
   */
  children: ReactElement<'option'> | ReactElement<'option'>[];
  /**
   * Gestisce il cambio del valore selezionato
   * @param selectedValue
   * @returns
   */
  onChange: (selectedValue: string) => void;
}

export const Select = ({
  id = 'select',
  disabled = false,
  label,
  children,
  onChange
}: SelectProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
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
        {children}
      </Input>
    </div>
  );
};
