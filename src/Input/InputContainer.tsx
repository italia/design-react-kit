import React, { FC, HTMLAttributes, ReactNode } from 'react';

export interface InputContainerProps extends HTMLAttributes<HTMLElement> {
  wrapperClass: string;
  activeClass: string;
  infoTextClass: string;
  label: string | ReactNode | undefined;
  infoText: string | undefined;
  id: string | undefined;
  infoId: string | undefined;
  testId?: string;
}

export const InputContainer: FC<InputContainerProps> = ({
  id,
  infoId,
  testId,
  activeClass,
  label,
  infoTextClass,
  infoText,
  wrapperClass,
  children
}) => {
  return (
    <div className={wrapperClass} data-testid={testId}>
      {children}
      <label htmlFor={id} className={activeClass}>
        {label}
      </label>
      <small id={infoId} className={infoTextClass}>
        {infoText}
      </small>
    </div>
  );
};
