import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';
import classNames from 'classnames';

export interface MegamenuFooterProps extends HTMLAttributes<HTMLDivElement> {
  /** Classi aggiuntive da usare per il componente Megamenu Footer */
  className?: string;
  vertical?: boolean;
}

export const MegamenuFooter: FC<MegamenuFooterProps> & {
  Item: typeof Item;
} = ({ className, children, vertical, ...attributes }) => {
  const classes = classNames(className, `it-footer-link-wrapper${vertical ? '-vertical' : ''}`);
  return (
    <div className={classes} {...attributes}>
      {children}
    </div>
  );
};

const Item: FC<PropsWithChildren<HTMLAnchorElement>> = ({ href, children }) => {
  return (
    <a href={href || '#'} className='it-footer-link'>
      {children}
    </a>
  );
};

MegamenuFooter.Item = Item;
