import React, { ElementType, FC } from 'react';
import { Nav, NavItemProps } from 'react-bootstrap';

export interface TabNavItemProps extends NavItemProps {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  testId?: string;
}

export const TabNavItem: FC<TabNavItemProps> = ({ tag = 'li', testId, ...attributes }) => {
  const Tag = tag;

  return <Nav.Item as={Tag} role='presentation' data-testid={testId} {...attributes}></Nav.Item>;
};
