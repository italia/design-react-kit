import React, { FC, HTMLAttributes, ElementType } from 'react';
import classNames from 'classnames';

export interface SkiplinkProps extends HTMLAttributes<HTMLElement> {
  ariaLabel?: string;
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Utilizzare il componente in modalità `nav` */
  nav?: boolean;
  /** Classi aggiuntive da usare per il componente Skiplink */
  className?: string;
  testId?: string;
}

export const Skiplink: FC<SkiplinkProps> = ({ ariaLabel=null, className, tag = 'div', nav=false, testId, children, ...attributes }) => {
  const Tag = nav ? 'nav' : tag;
  const classes = classNames(className, 'skiplinks');
  if (nav) {
    return (
      <Tag aria-label={ariaLabel} className={classes} {...attributes} data-testid={testId} >
        <ul>
          {children}
        </ul>
      </Tag>
    )

  } else {
    return <Tag aria-label={ariaLabel} className={classes} {...attributes} data-testid={testId} />;
  }
};
