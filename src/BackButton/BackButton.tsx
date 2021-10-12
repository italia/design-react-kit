import React, { FC } from 'react';
import classNames from 'classnames';

import { Button, ButtonProps } from '../Button/Button';
import { Icon } from '../Icon/Icon';

export interface BackButtonProps extends Omit<ButtonProps, 'icon'> {
  direction?: 'up' | 'back';
  iconColor?: ButtonProps['color'];
}

export const BackButton: FC<BackButtonProps> = ({
  className,
  direction = 'back',
  iconColor = 'white',
  children,
  ...attributes
}) => {
  const classes = classNames(className, 'go-back');

  const baseProps = { icon: true };

  return (
    <Button className={classes} {...baseProps} {...attributes}>
      <Icon
        icon={direction === 'up' ? 'it-arrow-up' : 'it-arrow-left'}
        className='mr-2 icon-sm'
        color={iconColor}
      />
      {children}
    </Button>
  );
};
