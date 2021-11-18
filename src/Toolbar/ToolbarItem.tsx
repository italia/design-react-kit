import React, { ElementType, FC, HTMLAttributes, MouseEvent } from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon/Icon';

export interface ToolbarItemProps extends HTMLAttributes<HTMLElement> {
  tag?: ElementType;
  classname?: string;
  active?: boolean;
  disabled?: boolean;
  url?: string;
  label?: string;
  srText?: string;
  iconName: string;
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
  iconName,
  isIconSmall,
  label,
  tag = 'a',
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
  const screenReaderText = srText ? (
    <span className='sr-only'>{srText}</span>
  ) : null;

  return (
    <li>
      <Tag
        href={url || '#'}
        className={activeClass}
        {...attributes}
        {...ariaAttributes}
      >
        {badgeWrapper}
        <Icon icon={iconName} size={iconSize} />
        {label ? (
          <span className='toolbar-label'>
            {label}
            {screenReaderText}
          </span>
        ) : (
          screenReaderText
        )}
      </Tag>
    </li>
  );
};
