import React, { ElementType, FC } from 'react';
import { NavProps, Tab } from 'react-bootstrap';

export interface TabsProps extends NavProps {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  testId?: string;
}

export const TabContainer: FC<TabsProps> = ({ tag, testId, ...attributes }) => {
  const Tag = tag;

  return <Tab.Container as={Tag} data-testid={testId} {...attributes}></Tab.Container>;
};
