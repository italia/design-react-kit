import classNames from 'classnames';
import React, { ElementType, FC } from 'react';
import { Nav, NavProps } from 'react-bootstrap';

export interface TabNavProps extends NavProps {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente Tab */
  className?: string;
  testId?: string;
}

export const TabNav: FC<TabNavProps> = ({ className, tag = 'ul', testId, ...attributes }) => {
  const Tag = tag;

  const classes = classNames(className, 'nav-tabs');

  return <Nav as={Tag} className={classes} data-testid={testId} {...attributes}></Nav>;
};
