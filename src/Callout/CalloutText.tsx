import React, { FC, ElementType, HTMLAttributes } from 'react';
import classNames from 'classnames'


export interface CalloutTextProps extends HTMLAttributes<HTMLElement>{
    /** Aumenta la dimensione del testo nel paragrafo contenuto  */
  bigText?: boolean,
  /** Classi aggiuntive per il componente */
  className?: string,
  /** Permette personalizzare il tag utilizzato per il contenitore del titolo (diverso da "div"). Accetta sia tag HTML che componenti React. */
  tag?: ElementType
}

export const CalloutText: FC<CalloutTextProps> = ({
  bigText = false,
  children,
  className,
  tag: Tag = 'p',
  ...attributes
}) => {
  const classes = classNames(className, {
    'callout-big-text': bigText
  })
  return (
    <Tag className={classes} {...attributes}>
      {children}
    </Tag>
  )
}
