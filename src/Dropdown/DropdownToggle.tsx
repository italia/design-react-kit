import React, { ElementType, FC, HTMLAttributes, Fragment } from 'react';
import { DropdownToggle as BSDropdownToggle } from 'reactstrap';
import classNames from 'classnames';
import { Icon } from '../Icon/Icon';

export interface DropdownToggleProps extends HTMLAttributes<HTMLElement> {
  caret?: boolean;
  tag?: ElementType;
  inNavbar?: boolean;
  testId?: string;
  /** Classi aggiuntive da usare per il componente Button */
  color?: string;
  className?: string;
  outline?: boolean;
}

export const DropdownToggle: FC<DropdownToggleProps> = ({
  className,
  testId,
  children,
  caret,
  inNavbar,
  color = 'primary',
  tag = 'button'
}) => {
  const Tag = tag === 'a' || inNavbar ? 'a' : 'button';

  const classes = classNames(className, {
    'btn-dropdown': Tag === 'a' && !inNavbar,
    'dropdown-toggle': true,
    'nav-link-white': inNavbar,
    btn: tag === 'button'
  });

  let buttonColorClass = '';
  if (tag === 'button' && color) {
    buttonColorClass = `btn-${color}`;
  }

  const iconClasses = classNames({
    'icon-expand': true,
    'icon-sm': !inNavbar,
    'icon-xs': inNavbar,
    'ms-1': inNavbar,
    'icon-light': Tag.valueOf() !== 'a' ? true : false
  });
  return (
    <BSDropdownToggle
      tag={Tag}
      data-testId={testId}
      role={Tag.valueOf() === 'a' ? 'button' : undefined}
      className={`${classes} ${buttonColorClass}`}
    >
      {children as React.ReactNode}
      {caret === true ? (
        <Icon color={tag === 'button' ? 'white' : 'primary'} icon='it-expand' className={iconClasses} />
      ) : null}
    </BSDropdownToggle>
  );
};
