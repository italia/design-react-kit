import React, { FC, AnchorHTMLAttributes, ElementType, MouseEvent, MouseEventHandler } from 'react';
import classNames from 'classnames';

export interface LinkListItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
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
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente LinkListItem */
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

export const LinkListItem: FC<LinkListItemProps> & {
  TitleIconWrapper: typeof LinkListTitleIconWrapper;
} = ({
  className,
  active,
  disabled,
  header,
  divider,
  bold,
  large,
  href,
  to,
  tag = 'a',
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
  const handlers: { onClick?: MouseEventHandler<HTMLAnchorElement> } = {};
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
        {children}
      </Tag>
    </li>
  );
};

const LinkListTitleIconWrapper: FC<LinkListItemProps> = ({ children }) => {
  return <span className='list-item-title-icon-wrapper'>{children}</span>;
};

LinkListItem.TitleIconWrapper = LinkListTitleIconWrapper;
