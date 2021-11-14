import React, { ElementType, FC, HTMLAttributes, MouseEvent } from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon/Icon';

type HTMLElementWithDisabled<T> = Partial<T> & { disabled?: boolean };

export interface ToolbarItemProps
  extends HTMLElementWithDisabled<HTMLAttributes<HTMLElement>> {
  tag?: ElementType;
  classname?: string;
  active?: boolean;
  url?: string;
  label?: string;
  srText?: string;
  iconName?: string;
  isIconSmall?: boolean;
  alert?: boolean;
  badge?: number;
  onLinkClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

export const ToolbarItem: FC<ToolbarItemProps> = ({
  active = false,
  badge,
  url,
  srText,
  iconName = 'it-comment',
  isIconSmall,
  label,
  tag = 'a',
  onLinkClick,
  ...attributes
}) => {
  const Tag = tag;
  const activeClass = classNames({ active });
  const iconSize = isIconSmall ? 'sm' : '';
  const badgeWrapper = Boolean(badge) && (
    <div className='badge-wrapper'>
      <span className='toolbar-badge'>{badge}</span>
    </div>
  );

  const ariaAttributes = {
    ...(attributes.disabled && { 'aria-disabled': true })
  };

  return (
    <li>
      <Tag
        href={url || '#'}
        className={activeClass}
        onClick={onLinkClick}
        {...attributes}
        {...ariaAttributes}
      >
        {badgeWrapper}
        <Icon icon={iconName} size={iconSize} />
        <span className='toolbar-label'>
          {label}
          {srText ? <span className='sr-only'>{srText}</span> : null}
        </span>
      </Tag>
    </li>
  );
};
