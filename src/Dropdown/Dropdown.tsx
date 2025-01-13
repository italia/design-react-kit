import classNames from 'classnames';
import React, { ElementType, FC } from 'react';
import { Dropdown as BSDRopdown, DropdownProps as BSDRopdownProps } from 'reactstrap';
export interface DropdownProps extends BSDRopdownProps {
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
    'text-center': textCenter
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
      {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        React.Children.map(children, (child: any) => React.cloneElement(child, { inNavbar: inNavbar }))
      }
    </BSDRopdown>
  );
};
