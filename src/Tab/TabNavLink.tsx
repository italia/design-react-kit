import React, { ElementType, FC } from 'react';
import { Nav, NavLinkProps } from 'react-bootstrap';

export interface TabNavLinkProps extends NavLinkProps {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  testId?: string;
}

export const TabNavLink: FC<TabNavLinkProps> = ({ tag, testId, ...attributes }) => {
  const Tag = tag;

  return <Nav.Link as={Tag} data-testid={testId} {...attributes}></Nav.Link>;
};
