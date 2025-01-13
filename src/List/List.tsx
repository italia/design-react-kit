import classNames from 'classnames';
import React, { ElementType, FC, HTMLAttributes } from 'react';

export interface ListProps extends HTMLAttributes<HTMLUListElement> {
  /** Classi aggiuntive da usare per il componente lista del List */
  className?: string;
  /** Classi aggiuntive da usare per il componente wrapper del List */
  wrapperClassName?: string;
  /**
   * Utilizzarlo in caso di utilizzo di componenti personalizzati per il wrapper della lista.
   * Nota: viene ignorato quando usato in lista annidate.
   * */
  tag?: ElementType;
  /** Quando attivo rimuove il componente contenitore della ListList. Utile per alcuni tipi di liste annidate. */
  noWrapper?: boolean;
  testId?: string;
}

export const List: FC<ListProps> = ({ className, wrapperClassName, tag = 'div', noWrapper, testId, ...attributes }) => {
  const Tag = tag;
  const wrapperClasses = classNames('it-list-wrapper', wrapperClassName);
  const classes = classNames(className, 'it-list');

  if (noWrapper) {
    return <ul {...attributes} className={classes} data-testid={testId} />;
  }

  return (
    <Tag className={wrapperClasses} data-testid={testId}>
      <ul {...attributes} className={classes} />
    </Tag>
  );
};
