import React, {
  ElementType,
  FC,
  HTMLAttributes,
  MouseEvent,
  useContext
} from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon/Icon';
import { SizeContext, ToolbarProps } from './Toolbar';

export interface ToolbarItemProps extends HTMLAttributes<HTMLElement> {
  tag?: ElementType;
  active?: boolean;
  disabled?: boolean;
  url?: string;
  label?: string;
  iconName: string;
  isIconSmall?: boolean;
  alert?: boolean;
  badge?: number;
  testId?: string;
  onLinkClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

const disabledMessage = ' elemento disabilitato';

function ToolbarItemLabel({
  label,
  size,
  disabled
}: {
  label: ToolbarItemProps['label'];
  size: ToolbarProps['size'];
  disabled: ToolbarItemProps['disabled'];
}) {
  const showSrText = size && size !== 'large';
  if (disabled) {
    if (!label || showSrText) {
      return <span className='sr-only'>{disabledMessage}</span>;
    }
    return (
      <>
        <span className='toolbar-label'>{label}</span>
        <span className='sr-only'>{disabledMessage}</span>
      </>
    );
  }
  if (!label) {
    return null;
  }
  return showSrText ? (
    <span className='sr-only'>{label}</span>
  ) : (
    <span className='toolbar-label'>{label}</span>
  );
}

export const ToolbarItem: FC<ToolbarItemProps> = ({
  active = false,
  badge,
  url,
  iconName,
  label,
  tag = 'a',
  disabled,
  testId,
  ...attributes
}) => {
  const Tag = tag;
  const size = useContext(SizeContext);
  const activeClass = classNames({ active, disabled });
  const badgeWrapper = Boolean(badge) && (
    <div className='badge-wrapper'>
      <span className='toolbar-badge'>{badge}</span>
    </div>
  );

  const ariaAttributes = {
    ...(disabled && { 'aria-disabled': true })
  };

  return (
    <li>
      <Tag
        href={url || '#'}
        className={activeClass}
        data-testid={testId}
        {...attributes}
        {...ariaAttributes}
      >
        {badgeWrapper}
        <Icon icon={iconName} size={size === 'small' ? 'sm' : ''} />
        <ToolbarItemLabel label={label} size={size} disabled={disabled} />
      </Tag>
    </li>
  );
};
