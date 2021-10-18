import React, { FC, HTMLAttributes, useState } from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { Collapse } from '../Collapse/Collapse';
import classNames from 'classnames';

export interface MegamenuItemProps extends HTMLAttributes<HTMLUListElement> {
  /** @type {string} Etichetta del megamenu */
  itemName: string,
  /** Classi aggiuntive da usare per il componente Nav */
  className?: string;
}

export const MegamenuItem: FC<MegamenuItemProps> = ({
  itemName = 'Megamenu Label',
  className,
  children,
  ...attributes
}) => {
  const [openNav, setOpenNav] = useState(false);
  const toggle = () => {
    setOpenNav(!openNav);
  };
  const classes = classNames(className, 'megamenu');
  return (
    <NavItem className={classes} {...attributes}>
      <NavLink href='#' aria-expanded='false' onClick={toggle}>{{itemName}}</NavLink>
      <Collapse isOpen={openNav}>
        {children}
      </Collapse>
    </NavItem>
  );
}