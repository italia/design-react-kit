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
  id,
  disabled = false,
  label,
  children,
  onChange
}: SelectProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const inputProps = {
    name: 'select',
    type: 'select' as InputType,
    disabled: disabled,
    handleChange: handleChange
  };

  return (
    <div className='select-wrapper'>
      {id ? (
        <>
          <label htmlFor={id}>{label}</label>
          <Input id={id} {...inputProps}>
            {children}
          </Input>
        </>
      ) : (
        <label>
          {label}
          <Input {...inputProps}>{children}</Input>
        </label>
      )}
    </div>
  );
};
