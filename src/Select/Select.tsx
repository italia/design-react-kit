import React, { ChangeEvent, ReactElement, SelectHTMLAttributes } from 'react';

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
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

export const Select = ({ id, disabled = false, label, children, onChange }: SelectProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const inputProps = {
    disabled: disabled,
    handleChange: handleChange
  };

  return (
    <div className='select-wrapper'>
      {id ? (
        <>
          <label htmlFor={id}>{label}</label>
          <select id={id} {...inputProps}>
            {children}
          </select>
        </>
      ) : (
        <label>
          {label}
          <select {...inputProps}>{children}</select>
        </label>
      )}
    </div>
  );
};
