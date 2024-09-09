import classNames from 'classnames';
import React, { ElementType, FC, HTMLAttributes } from 'react';

export interface AvatarStatusProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente AvatarStatus */
  className?: string;
  /** Utilizzare questo attributo per indicare il tipo di stato dell'utente. */
  status: 'approved' | 'declined' | 'notify' | string;
  testId?: string;
}

export const AvatarStatus: FC<AvatarStatusProps> = ({ className, tag = 'div', status, testId, ...attributes }) => {
  const Tag = tag;
  const typeClass = classNames(
    'avatar-status',
    {
      status
    },
    className
  );
  return <Tag {...attributes} className={typeClass} data-testid={testId} />;
};
