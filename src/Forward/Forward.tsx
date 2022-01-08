import React, { FC, AnchorHTMLAttributes, MutableRefObject } from 'react';
import classNames from 'classnames';

export interface ForwardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Classi aggiuntive da usare per il componente Forward */
  className?: string;
  /** Riferimento al nodo a cui scorrere quando premuto */
  scrollToRef: MutableRefObject<Element | null>;
}

export const Forward: FC<ForwardProps> = ({
  className,
  scrollToRef,
  children,
  ...attributes
}) => {
  const classes = classNames(className, 'forward');
  return (
    <a
      className={classes}
      onClick={() =>
        scrollToRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
      {...attributes}
    >
      {children}
    </a>
  );
};
