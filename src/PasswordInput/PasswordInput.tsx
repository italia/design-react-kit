import React, { HTMLAttributes, useState } from 'react';
import classNames from 'classnames';
import { Input } from '../Input/Input';

export interface PasswordInputProps extends HTMLAttributes<HTMLInputElement> {
  type: 'password' | HTMLInputElement['type'];
}
export const PasswordInput = ({
  type = 'password',
  ...rest
}: PasswordInputProps) => {
  const [showPassword, togglePassword] = useState(false);
  const className = classNames('btn-eye', {
    'eye-off': showPassword,
    'eye-on': !showPassword
  });

  return (
    <>
      <span
        className={className}
        onClick={() => togglePassword(!showPassword)}
      />
      <Input {...rest} type={showPassword ? 'text' : (type as 'password')} />
    </>
  );
};
