import React, { ElementType, FC, HTMLAttributes } from 'react';
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
  color = '',
  tag = 'button'
}) => {
  const Tag = tag === 'a' || inNavbar ? 'a' : 'button';

  const classes = classNames(className, {
    'btn-dropdown': Tag === 'a' && !inNavbar,
    'dropdown-toggle': true,
    'nav-link': inNavbar,
    btn: tag === 'button'
  });

  let colorClass = '';
  if (tag === 'button' && color) {
    colorClass = `btn-${color}`;
  }

  const iconClasses = classNames({
    'icon-expand': true,
    'icon-sm': !inNavbar,
    'icon-xs': inNavbar,
    'ms-1': inNavbar,
    'icon-light': Tag.valueOf() !== 'a' ? true : false,
    color: color ? 'white' : 'primary'
  });
  return (
    <BSDropdownToggle
      tag={Tag}
      data-testid={testId}
      role={Tag.valueOf() === 'a' ? 'button' : 'link'}
      className={`${classes} ${colorClass}`}
      nav={inNavbar}
    >
      {children as React.ReactNode}
      {caret === true ? <Icon icon='it-expand' className={iconClasses} /> : null}
    </BSDropdownToggle>
  );
};
