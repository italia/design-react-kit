import React, { ElementType, FC, HTMLAttributes, Fragment } from 'react';
import { DropdownToggle as BSDropdownToggle } from 'reactstrap';
import classNames from 'classnames';
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
  inNavbar,
  color = 'primary',
  tag = 'button'
}) => {
  // const toggleRef = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const Tag = tag === 'a' || inNavbar ? 'a' : Button;

  // useEffect(() => {
  //   if (toggleRef.current) {
  //     new Dropdown(toggleRef.current as HTMLAnchorElement & HTMLButtonElement);
  //   }
  // }, [toggleRef.current]);

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
      testId={testId}
      role={Tag.valueOf() === 'a' ? 'button' : undefined}
      className={`${classes} ${buttonColorClass}`}
    >
      <Fragment>
        {children as React.ReactNode}
        {caret === true ? <Icon icon='it-expand' className={iconClasses} /> : null}
      </Fragment>
    </BSDropdownToggle>
  );
};
