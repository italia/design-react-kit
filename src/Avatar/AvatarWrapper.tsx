import React, { FC, HTMLAttributes, ElementType } from 'react';
import classNames from 'classnames';

export interface AvatarWrapperProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente AvatarStatus */
  className?: string;
  /** Utilizzare questo attributo qualora si volesse utilizzare un componente AvatarExtraText all'interno dell'Avatar. */
  extra?: 'text' | string;
  testId?: string;
}

export const AvatarWrapper: FC<AvatarWrapperProps> = ({ className, tag = 'div', extra, testId, ...attributes }) => {
  const Tag = tag;
  const wrapperClass = classNames('avatar-wrapper', className, {
    [`avatar-extra-${extra}`]: extra
  });
  return <Tag {...attributes} className={wrapperClass} data-testid={testId} />;
};
