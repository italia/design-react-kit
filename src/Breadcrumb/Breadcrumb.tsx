import React, { ElementType, FC, HTMLAttributes } from 'react';
import { Breadcrumb as BreadcrumbBase, CSSModule } from 'reactstrap';
import classNames from 'classnames';

export interface BreadcrumbProps extends HTMLAttributes<HTMLDivElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati per la l'elemento lista interno */
  listTag?: ElementType;
  /** Classi aggiuntive da usare per il componente Nav */
  className?: string;
  /** Classi aggiuntive da usare per il componente di lista interno */
  listClassName?: string;
  /** Oggetto contenente la nuova mappatura per le classi CSS. */
  cssModule?: CSSModule;
  /** Indica se si vuole la versione con fondo scuro */
  dark?: boolean;
  /** Etichetta significativa per descrivere il tipo di navigazione */
  'aria-label'?: string;
  testId?: string;
}

export const Breadcrumb: FC<BreadcrumbProps> = ({
  className,
  listClassName,
  dark,
  'aria-label': label,
  testId,
  ...attributes
}) => {
  const classes = classNames(className, 'breadcrumb-container');
  const listClasses = classNames(listClassName, { dark });
  const ariaLabel = label ?? 'breadcrumb';
  return (
    <BreadcrumbBase
      className={classes}
      listClassName={listClasses}
      aria-label={ariaLabel}
      data-testid={testId}
      {...attributes}
    />
  );
};
