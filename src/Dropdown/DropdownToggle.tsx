import React, { ElementType, FC, HTMLAttributes, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { Dropdown } from 'bootstrap-italia';
import { Icon } from '../Icon/Icon';
import { Button } from '../Button/Button';

export interface DropdownToggleProps extends HTMLAttributes<HTMLElement> {
  caret?: boolean;
  tag?: ElementType;
  color?: string;
  inNavbar?: boolean;
  /** Classi aggiuntive da usare per il componente Button */
  className?: string;
  testId?: string;
}

export const DropdownToggle: FC<DropdownToggleProps> = ({
  className,
  testId,
  children,
  caret,
  tag = 'button',
  inNavbar,
  color,
  ...attributes
}) => {
  const toggleRef = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const Tag = tag === 'a' || inNavbar ? 'a' : Button;

  useEffect(() => {
    if (toggleRef.current) {
      new Dropdown(toggleRef.current as HTMLAnchorElement & HTMLButtonElement);
    }
  });
  const classes = classNames(className, {
    'btn-dropdown': Tag === 'a' && !inNavbar,
    'dropdown-toggle': true,
    'nav-link': inNavbar
  });
  const iconClasses = classNames({
    'icon-expand': true,
    'icon-sm': !inNavbar,
    'icon-xs': inNavbar,
    'ms-1': inNavbar,
    'icon-light': Tag.valueOf() !== 'a' ? true : false
  });
  return (
    <Tag
      role={Tag.valueOf() === 'a' ? 'button' : undefined}
      color={color}
      ref={toggleRef}
      className={classes}
      data-bs-toggle='dropdown'
      aria-haspopup='true'
      data-testid={testId}
      {...attributes}
    >
      {children}
      {caret === true ? <Icon icon='it-expand' className={iconClasses} /> : null}
    </Tag>
  );
};
