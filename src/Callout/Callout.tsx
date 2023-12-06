import React, { FC, ElementType, HTMLAttributes } from 'react';
import classNames from 'classnames';

export interface CalloutProps extends HTMLAttributes<HTMLElement> {
  /** Classi aggiuntive per il componente */
  className?: string;
  /** Permette di dichiarare il colore del bordo e del titolo */
  color?: 'success' | 'warning' | 'danger' | 'note' | 'important' | string;
  /** Permette personalizzare il tag utilizzato per il Callout (diverso da "div"). Accetta sia tag HTML che componenti React. */
  tag?: ElementType;
  /** Abilita il Callout di tipo Highlight */
  highlight?: boolean;
  /** Abilita il Callout di tipo Approfondimento */
  detailed?: boolean;
  testId?: string;
}

export const Callout: FC<CalloutProps> = ({
  children,
  color = '',
  highlight = false,
  className,
  detailed,
  tag = 'div',
  testId,
  ...attributes
}) => {
  const Tag = tag;
  const classes = classNames(className, color, 'callout', {
    'callout-highlight': highlight,
    'callout-more': detailed
  });
  return (
    <Tag className={classes} {...attributes} data-testid={testId}>
      {!highlight && !detailed ? <div className='callout-inner'>{children}</div> : children}
    </Tag>
  );
};
