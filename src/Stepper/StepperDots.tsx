import React, { FC, HTMLAttributes, ElementType } from 'react';
import classNames from 'classnames';

export interface StepperDotsProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente Badge */
  className?: string;
  /** Abilita il tema scuro per il componente StepperDots */
  dark?: boolean;
  testId?: string;
}

export const StepperDots: FC<StepperDotsProps> = ({ tag = 'ul', className, testId, ...attributes }) => {
  const Tag = tag;
  const wrapperClass = classNames('steppers-dots', className);
  return <Tag {...attributes} className={wrapperClass} data-testid={testId} />;
};
