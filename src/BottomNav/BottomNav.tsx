import React, { ElementType, FC, HTMLAttributes } from 'react';

export interface BottomNavProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente BottomNav */
  className?: string;
  testId?: string;
}

export const BottomNav: FC<BottomNavProps> = ({ tag = 'nav', testId, ...attributes }) => {
  const Tag = tag;
  return (
    <Tag className='bottom-nav' data-testid={testId}>
      <ul {...attributes} />
    </Tag>
  );
};
