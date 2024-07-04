import classNames from 'classnames';
import React, { ElementType, FC, HTMLAttributes, ReactNode } from 'react';

export interface ListProps extends HTMLAttributes<HTMLUListElement> {
  /** Da utilizzare in caso di titolo principale della lista. Passare una componente React da mostrare come titolo */
  header?: ReactNode;
  /** Classi aggiuntive da usare per il componente lista del List */
  className?: string;
  /** Classi aggiuntive da usare per il componente wrapper del List */
  wrapperClassName?: string;
  /**
   * Utilizzarlo in caso di utilizzo di componenti personalizzati per il wrapper della lista.
   * Nota: viene ignorato quando usato in lista annidate.
   * */
  tag?: ElementType;
  /** Quando abilitato gestisce una lista in cui ciascun elemento è composto da più componenti/elementi. */
  multiline?: boolean;
  /** Da utilizzare per una lista annidata */
  sublist?: boolean;
  /** Quando attivo rimuove il componente contenitore della ListList. Utile per alcuni tipi di liste annidate. */
  noWrapper?: boolean;
  testId?: string;
}

export const List: FC<ListProps> = ({
  className,
  wrapperClassName,
  tag = 'div',
  multiline,
  header,
  sublist,
  noWrapper,
  testId,
  ...attributes
}) => {
  const Tag = tag;
  const wrapperClasses = classNames('it-list-wrapper', wrapperClassName, {
    multiline: multiline
  });
  const classes = classNames(className, {
    'it-list': !sublist,
    'it-sublist': sublist,
  });

  if (noWrapper) {
    return <ul {...attributes} className={classes} data-testid={testId} />;
  }

  if (sublist) {
    return (
      <>
        {header}
        <ul {...attributes} className={classes} />
      </>
    );
  }
  return (
    <Tag className={wrapperClasses} data-testid={testId}>
      {header}
      <ul {...attributes} className={classes} />
    </Tag>
  );
};
