import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

export interface MegamenuFooterProps extends HTMLAttributes<HTMLDivElement> {
  /** Classi aggiuntive da usare per il componente Megamenu Footer */
  className?: string;
}

export const MegamenuFooter: FC<MegamenuFooterProps> = ({ className, children, ...attributes }) => {
  const classes = classNames(className, 'it-megamenu-footer');
  return (
    <div className={classes} {...attributes}>
      {children}
    </div>
  );
};
