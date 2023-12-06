import React, { ElementType, FC, HTMLAttributes, MouseEvent, useContext } from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon/Icon';
import { SizeContext, ToolbarProps } from './Toolbar';
import { Dropdown, DropdownProps, DropdownToggle } from 'reactstrap';

export interface ToolbarItemBadge {
  value?: number;
  label: string;
  srText: string;
}

export interface ToolbarItemProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati. Il valore di default è il tag anchor. */
  tag?: ElementType;
  /** Indica l'elemento attivo nella Toolbar */
  active?: boolean;
  /** Mostra l'elemento come disabilitato nella Toolbar */
  disabled?: boolean;
  /** L'URL a cui far puntare il tag anchor. */
  url?: string;
  /**
   * L'etichetta da mostrare sotto l'icona. In caso di dimensioni più piccole verrà
   * automaticamente sintegrata in uno span per gli screen reader.
   */
  label?: string;
  /** Il nome dell'icona da utilizzare */
  iconName: string;
  testId?: string;
  /**
   * Un testo completo da mostrare per Toolbar di grandezza media e piccola con badge (ad esempio: "ci sono 42 nuovi documenti da esaminare")
   * @deprecated
   */
  srText?: string;
  /**
   * Il badge da mostrare sull'icona del ToolbarItem.
   * Un badge è composto da:
   *
   *   * una label per screen reader da affiancare alla label corrente (ad esempio: "da leggere")
   *   * un testo completo da mostrare per Toolbar di grandezza media e piccola (ad esempio: "ci sono 42 nuovi documenti da esaminare")
   *   * un eventuale valore numerico (omesso in caso di un badge di alert)
   **/
  badge?: number | ToolbarItemBadge;
  /**
   * Indica che il ToolbarItem contiene un menu dropdown.
   * Quando questo attributo è attivo il contenuto del componente ToolbarItem verrà mostrato all'interno del dropdown.
   */
  dropdown?: boolean;
  /**
   * Quando l'opzione dropdown è attiva questo attributo controlla se
   * l'elemento è di tipo "altro" contenente altre icone/opzioni o no.
   */
  showMore?: boolean;
  /**
   * Quando il componente è in modalità dropdown permette di controllarne
   * lo stato di visibilità. Il valore di default è false.
   */
  isDropdownOpen?: boolean;
  /**
   * Da utilizzare quando l'attributo "dropdown" è attivo.
   * Gli attributi qui passati verranno inoltrati al componente Dropdown interno.
   */
  dropdownProps?: Omit<DropdownProps, 'toggle' | 'isOpen'>;
  /**
   * Funzione chiamata al click dell'element ToolbarItem
   */
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

const disabledMessage = ' elemento disabilitato';

function ToolbarItemLabel({
  label,
  size,
  disabled,
  badge
}: {
  label: ToolbarItemProps['label'];
  size: ToolbarProps['size'];
  disabled: ToolbarItemProps['disabled'];
  badge?: ToolbarItemBadge;
}) {
  const showSrText = size && size !== 'large';
  if (disabled) {
    if (!label || showSrText) {
      return <span className='visually-hidden'>{disabledMessage}</span>;
    }
    return (
      <>
        <span className='toolbar-label'>{label}</span>
        <span className='visually-hidden'>{disabledMessage}</span>
      </>
    );
  }
  if (!label) {
    return null;
  }

  return showSrText ? (
    <span className='visually-hidden'>{label}</span>
  ) : (
    <span className='toolbar-label'>
      {label}
      {badge?.label ? <span className='visually-hidden'>{badge.label}</span> : null}
    </span>
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
  srText,
  dropdown,
  dropdownProps,
  children,
  showMore,
  onClick,
  isDropdownOpen,
  ...attributes
}) => {
  const Tag = tag;
  const size = useContext(SizeContext);
  const activeClass = classNames({ active, disabled });

  const ariaAttributes = {
    ...(disabled && { 'aria-disabled': true })
  };
  const badgeObject = typeof badge === 'number' ? { value: badge, label: srText || '', srText: srText || '' } : badge;

  const toolbarItemContent = (
    <>
      {badgeObject ? (
        <div className='badge-wrapper'>
          <span className='toolbar-badge'>{size !== 'large' ? null : badgeObject.value}</span>
          {size !== 'large' && <span className='visually-hidden'>{badgeObject.srText}</span>}
        </div>
      ) : null}
      <Icon icon={iconName} size={size === 'small' ? 'sm' : ''} />
      <ToolbarItemLabel label={label} size={size} disabled={disabled} badge={badgeObject} />
    </>
  );

  if (dropdown) {
    return (
      <li>
        <Dropdown {...dropdownProps} toggle={onClick} isOpen={isDropdownOpen}>
          <DropdownToggle
            disabled={disabled}
            caret
            className={classNames('btn-dropdown', { 'toolbar-more': showMore })}
            color=''
          >
            {toolbarItemContent}
          </DropdownToggle>
          {children}
        </Dropdown>
      </li>
    );
  }

  return (
    <li>
      <Tag
        href={url || '#'}
        className={activeClass}
        data-testid={testId}
        {...attributes}
        {...ariaAttributes}
        onClick={onClick}
      >
        {toolbarItemContent}
      </Tag>
    </li>
  );
};
