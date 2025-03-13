import classNames from 'classnames';
import React, { AnchorHTMLAttributes, ElementType, FC, ReactNode } from 'react';

export interface ListItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Indica se l'elemento è attivo o no */
  active?: boolean;
  /** Indica se l'elemento ha un avatar */
  avatar?: ReactNode;
  /** Indica se l'elemento ha una icona */
  icon?: ReactNode;
  /** Indica se l'elemento ha una immagine */
  img?: ReactNode;
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente ListItem */
  className?: string;
  /** Classi aggiuntive da usare per l'elemento contenitore dell'item */
  wrapperClassName?: string;
  /** Indica il link a cui l'elemento deve puntare. */
  href?: string;
  /** Indica il link route a cui l'elemento deve puntare. */
  to?: string;
  testId?: string;
}

export const ListItem: FC<ListItemProps> & {
  MultipleAction: typeof MultipleAction;
} = ({
  className,
  active,
  avatar,
  icon,
  img,
  href,
  tag = 'div',
  to,
  wrapperClassName,
  testId,
  children,
  ...attributes
}) => {
    const Tag = tag;
    const classes = classNames(
      className,
      { active },
      'list-item'
    ),
      classesItem = classNames(className, {
        'it-rounded-icon': icon,
        'avatar size-lg': avatar,
        'it-thumb': img
      }),
      leftItem = icon || avatar || img;

    if (href) {
      return (
        <li className={wrapperClassName} data-testid={testId}>
          <a href={href || '#'} {...attributes} className={classes}>
            <div className="it-right-zone">{children}</div>
          </a>
        </li>
      );
    }

    return (
      <li className={wrapperClassName} data-testid={testId}>
        <Tag
          {...attributes}
          className={classes}
          href={href}
          to={to}
        >
          {leftItem && <div className={classesItem}>{leftItem}</div>}
          <div className="it-right-zone">{children}</div>
        </Tag>
      </li>
    );
  };

const MultipleAction: FC<ListItemProps> = ({ children }) => {
  return <span className='it-multiple'>{children}</span>
};

ListItem.MultipleAction = MultipleAction;
