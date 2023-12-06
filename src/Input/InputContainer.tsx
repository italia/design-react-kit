import React, { FC, HTMLAttributes, ReactNode } from 'react';

export interface InputContainerProps extends HTMLAttributes<HTMLElement> {
  wrapperClass: string;
  activeClass: string;
  validationTextClass: string;
  label: string | ReactNode | undefined;
  validationText: string | undefined;
  id: string | undefined;
  infoId: string | undefined;
  testId?: string;
}

export const InputContainer: FC<InputContainerProps> = ({
  id,
  // infoId,
  testId,
  activeClass,
  label,
  validationTextClass,
  validationText,
  wrapperClass,
  children
}) => {
  return (
    <div className={wrapperClass} data-testid={testId}>
      {children}
      <label htmlFor={id} className={activeClass}>
        {label}
      </label>
      <div className={validationTextClass}>{validationText}</div>
      {/* <small id={infoId} className={validationTextClass}>
        {validationText}
      </small> */}
    </div>
  );
};
