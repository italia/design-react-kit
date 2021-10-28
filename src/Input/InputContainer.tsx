import React, { FC, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

export interface InputContainerProps extends HTMLAttributes<HTMLElement> {
  wrapperClass: string;
  activeClass: string;
  errorClass?: string;
  infoTextClass: string;
  label: string | ReactNode | undefined;
  infoText: string | undefined;
  id: string | undefined;
  infoId: string | undefined;
  button?: ReactNode;
  icon?: ReactNode;
}

export const InputContainer: FC<InputContainerProps> = ({
  id,
  infoId,
  activeClass,
  errorClass,
  label,
  infoTextClass,
  infoText,
  wrapperClass,
  children,
  button,
  icon
}) => {
  if (button || icon) {
    return (
      <div className={wrapperClass}>
        <div className='input-group'>
          {icon && (
            <div className='input-group-prepend'>
              <div className='input-group-text'>{icon}</div>
            </div>
          )}
          {children}
          <label htmlFor={id} className={classNames(activeClass, errorClass)}>
            {label}
          </label>
          <small id={infoId} className={infoTextClass}>
            {infoText}
          </small>
          {button && <div className='input-group-append'>{button}</div>}
        </div>
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      {children}
      <label htmlFor={id} className={classNames(activeClass, errorClass)}>
        {label}
      </label>
      <small id={infoId} className={infoTextClass}>
        {infoText}
      </small>
    </div>
  );
};
