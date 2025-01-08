import React, { FC, HTMLAttributes, ReactNode } from 'react';

export interface InputContainerProps extends HTMLAttributes<HTMLElement> {
  wrapperClass: string;
  activeClass: string;
  extraLabelClass: string;
  validationTextClass: string;
  label: string | ReactNode | undefined;
  validationText: string | undefined;
  id: string | undefined;
  infoId: string | undefined;
  infoText: string | undefined;
  /** Indica che il componente ha un bottone a destra rispetto all'input */
  hasButtonRight?: boolean;
  /** Componente per il bottone */
  buttonRight?: ReactNode;
  /** Indica che il componente ha una icona a sinistra rispetto all'input */
  hasIconLeft?: boolean;
  /** Componente per l'icona */
  iconLeft?: ReactNode;
  testId?: string;
}

export const InputContainer: FC<InputContainerProps> = ({
  id,
  infoId,
  infoText,
  testId,
  activeClass,
  extraLabelClass,
  label,
  validationTextClass,
  validationText,
  wrapperClass,
  hasButtonRight,
  buttonRight,
  hasIconLeft,
  iconLeft,
  children
}) => {
  if (hasButtonRight || hasIconLeft) {
    return (
      <div className={wrapperClass} data-testid={testId}>
        <div className='input-group'>
          {hasIconLeft && <span className='input-group-text'>{iconLeft}</span>}
          <label htmlFor={id} className={activeClass + ' ' + extraLabelClass}>
            {label}
          </label>
          {children}
          {infoText && (
            <small id={infoId} className='form-text'>
              {infoText}
            </small>
          )}
          <div className={validationTextClass}>{validationText}</div>
          {hasButtonRight && <div className='input-group-append'>{buttonRight}</div>}
        </div>
      </div>
    );
  }
  return (
    <div className={wrapperClass} data-testid={testId}>
      <label htmlFor={id} className={activeClass + ' ' + extraLabelClass}>
        {label}
      </label>
      {children}
      {infoText && (
        <small id={infoId} className='form-text'>
          {infoText}
        </small>
      )}
      <div className={validationTextClass}>{validationText}</div>
    </div>
  );
};
