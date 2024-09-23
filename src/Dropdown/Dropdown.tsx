import classNames from 'classnames';
import React, { ElementType, FC, HTMLAttributes } from 'react';
import { Dropdown as BSDRopdown } from 'reactstrap';
export interface DropdownProps extends HTMLAttributes<HTMLElement> {
  tag?: ElementType;
  inNavbar?: boolean;
  textCenter?: boolean;
  theme?: string;
  /** Classi aggiuntive da usare per il componente Button */
  className?: string;
  testId?: string;
}

export const Dropdown: FC<DropdownProps> = ({
  className,
  testId,
  children,
  inNavbar,
  textCenter,
  theme,
  ...attributes
}) => {
  const classes = classNames(className, {
    dropdown: true,
    'text-center': textCenter,
    'nav-item': inNavbar
  });

  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <BSDRopdown
      menuRole='menu'
      color={theme}
      isOpen={isOpen}
      toggle={toggle}
      className={classes}
      data-testid={testId}
      {...attributes}
      inNavbar={inNavbar}
      nav={inNavbar}
    >
      {children}
    </BSDRopdown>
  );
};
