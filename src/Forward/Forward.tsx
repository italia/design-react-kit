import React, { FC, AnchorHTMLAttributes } from 'react';
import classNames from 'classnames';

export interface ForwardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Classi aggiuntive da usare per il componente Forward */
  className?: string;
  /** Riferimento al nodo a cui scorrere quando premuto */
  // scrollToRef: MutableRefObject<Element | null>;
  testId?: string;
}

export const Forward: FC<ForwardProps> = ({ className, children, testId, ...attributes }) => {
  const classes = classNames(className, 'forward');
  return (
    <a
      className={classes}
      onClick={(e) => {
        e.preventDefault()
        if (attributes.href) {
          const scrollToRef = document.querySelector(attributes.href)
          if (scrollToRef) {
            scrollToRef.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
          }
        }
      }}
      data-testid={testId}
      {...attributes}
    >
      {children}
    </a>
  );
};
