import classNames from 'classnames';
import React, { ElementType, FC, HTMLAttributes } from 'react';

export interface AvatarGroupContainerProps extends HTMLAttributes<HTMLUListElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente più esterno di AvatarGroupContainer */
  wrapperClassName?: string;
  testId?: string;
}

export const AvatarGroupContainer: FC<AvatarGroupContainerProps> = ({
  tag = 'ul',
  wrapperClassName,
  testId,
  ...attributes
}) => {
  const Tag = tag;
  const wrapperClasses = classNames('avatar-group-stacked', wrapperClassName);
  return <Tag {...attributes} className={wrapperClasses} data-testid={testId} />;
};
