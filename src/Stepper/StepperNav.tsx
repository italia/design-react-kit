import React, { FC, HTMLAttributes, ElementType } from 'react';
import classNames from 'classnames';

export interface StepperNavProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente Badge */
  className?: string;
  testId?: string;
}

export const StepperNav: FC<StepperNavProps> = ({ tag = 'nav', testId, className, ...attributes }) => {
  const Tag = tag;
  const wrapperClass = classNames('steppers-nav', className);
  return <Tag {...attributes} className={wrapperClass} data-testid={testId} />;
};
