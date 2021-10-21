import React, { FC, HTMLAttributes, ReactNode } from 'react';

export interface InputContainerProps extends HTMLAttributes<HTMLElement> {
  wrapperClass: string;
  activeClass: string;
  infoTextClass: string;
  label: string | ReactNode | undefined;
  infoText: string | undefined;
  id: string | undefined;
  infoId: string | undefined;
  button: ReactNode;
}

export const InputContainer: FC<InputContainerProps> = ({
  id,
  infoId,
  activeClass,
  label,
  infoTextClass,
  infoText,
  wrapperClass,
  children,
  button
}) => {
  if (button) {
    return (
      <div className={wrapperClass}>
        <div className='input-group'>
          {children}
          <label htmlFor={id} className={activeClass}>
            {label}
          </label>
          <small id={infoId} className={infoTextClass}>
            {infoText}
          </small>
          <div className='input-group-append'>{button}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
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
