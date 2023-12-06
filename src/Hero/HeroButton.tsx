import React, { FC } from 'react';
import classname from 'classnames';
import { Button, ButtonProps } from '../Button/Button';

export interface HeroButtonProps extends ButtonProps {
  wrapperClassName?: string;
  testId?: string;
}

export const HeroButton: FC<HeroButtonProps> = ({ wrapperClassName, testId, ...attributes }) => {
  const classes = classname('it-btn-container', wrapperClassName);
  return (
    <div className={classes} data-testid={testId}>
      <Button size='sm' {...attributes} />
    </div>
  );
};
