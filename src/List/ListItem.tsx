import classNames from 'classnames';
import React, { AnchorHTMLAttributes, ElementType, FC, MouseEvent, MouseEventHandler, ReactNode } from 'react';

export interface ListItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Indica se l'elemento è attivo o no */
  active?: boolean;
  /** Indica se l'elemento è disabilitato o no */
  disabled?: boolean;
  /** Indica se l'elemento ha dimensioni larghe o no */
  large?: boolean;
  /** Indica se l'elemento è bold o no */
  bold?: boolean;
  /** Indica se l'elemento è un titolo. */
  header?: boolean;
  /** Indica se l'elemento è un divisore */
  divider?: boolean;
  /** Indica se l'elemento è in un dropdown */
  inDropdown?: boolean;
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

const handleDisabledOnClick = (e: MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
};

export const ListItem: FC<ListItemProps> & {
  MultipleAction: typeof MultipleAction;
} = ({
  className,
  active,
  disabled,
  header,
  divider,
  bold,
  large,
  avatar,
  icon,
  img,
  href,
  tag = 'div',
  wrapperClassName,
  testId,
  children,
  inDropdown,
  ...attributes
}) => {
    let Tag = tag;
    const classes = classNames(
      className,
      {
        active,
        disabled,
        header,
        divider,
        large: large,
        medium: bold,
        'dropdown-item': inDropdown
      },
      'list-item'
    );

    // Prevent click event when disabled.
    const handlers: { onClick?: MouseEventHandler<HTMLAnchorElement> } = {},
      classesItem = classNames(className, {
        'it-rounded-icon': icon,
        'avatar size-lg': avatar,
        'it-thumb': img
      });
    if (disabled) {
      handlers.onClick = handleDisabledOnClick;
    }

    if (header) {
      Tag = 'h3';
    } else if (divider) {
      Tag = 'span';
    }

    if (inDropdown) {
      attributes['role'] = 'menuitem';
      attributes['tabIndex'] = 0;
    }

    if (header && href) {
      return (
        <li className={wrapperClassName} data-testid={testId}>
          <Tag>
            <a href={href || '#'} {...attributes} className={classes} {...handlers}>
              {children}
            </a>
          </Tag>
        </li>
      );
    }

    return (
      <li className={wrapperClassName} data-testid={testId}>
        <Tag
          role={attributes.onClick ? 'button' : undefined}
          {...attributes}
          className={classes}
          href={href}
          {...handlers}
        >
          {(icon || avatar || img) && <div className={classesItem}>{icon || avatar || img}</div>}
          <div className="it-right-zone">{children}</div>
        </Tag>
      </li>
    );
  };

const MultipleAction: FC<ListItemProps> = ({ children }) => {
  return <span className='it-multiple'>{children}</span>
};

ListItem.MultipleAction = MultipleAction;
