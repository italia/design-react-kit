import React, { FC, HTMLAttributes, ElementType } from 'react';
import classNames from 'classnames'

export interface SpinnerProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente Spinner */
  className?: string
  /** Utilizzato per indicare lo stato attivo di caricamento (animato) */
  active?: boolean;
  /** Utilizzato per ottenere la versione ridotta del componente Spinner */
  small?: boolean;
  /** Utilizzato per ottenere una animazione alternativa in fase di caricamento */
  double?: boolean;
}

export const Spinner: FC<SpinnerProps> = ({
  className,
  tag: Tag = 'span',
  active = false,
  small = false,
  double = false,
  ...attributes
}) => {

  const wrapperClasses = classNames(
    'progress-spinner', {
    'progress-spinner-active': active,
    'size-sm': small,
    'progress-spinner-double': double,
  }
  )

  const classes = classNames(className, 'sr-only')
  if (double) {
    return (
      <Tag className={wrapperClasses}>
        <div className='progress-spinner-inner' />
        <div className='progress-spinner-inner' />
        <Tag {...attributes} className={classes}>
          Caricamento...
          </Tag>
      </Tag>
    )
  }

  return (
    <Tag className={wrapperClasses}>
      <Tag {...attributes} className={classes}>
        Caricamento...
        </Tag>
    </Tag>
  )
}
