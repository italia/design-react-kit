import classNames from 'classnames';
import React, { ElementType, FC, HTMLAttributes, Ref } from 'react';

import { Collapse as CollapseBase } from 'reactstrap';
import { CSSModule } from 'reactstrap/types/lib/utils';

import { Icon } from '../Icon/Icon';

// Copy over from reactstrap and add new ones
export interface CollapseProps extends HTMLAttributes<HTMLElement> {
  /** Indica se il menu HeaderNav sia aperto o meno. Usato unicamente nel caso della HeaderNav, ovvero con navbar e header entrambi true */
  isOpen?: boolean;
  /** Oggetto contenente la nuova mappatura per le classi CSS. */
  cssModule?: CSSModule;
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Indica se il componente Collapse è usato all'interno di un componente navbar */
  navbar?: boolean;
  /** Indica se il componente Collapse ha al suo interno un Megamenu */
  megamenu?: boolean;
  /** Indica se il componente Collapse è usato all'interno di un componente Header */
  header?: boolean;
  delay?: {
    show: number;
    hide: number;
  };
  /** Funzione chiamata all'apertura del componente Collapse */
  onOpened?: () => void;
  /** Funzione chiamata alla chiusura del componente Collapse */
  onClosed?: () => void;
  /** Funzione chiamata durante la trasizione di apertura del componente Collapse */
  onEntering?: () => void;
  /** Funzione chiamata al termine della trasizione di apertura del componente Collapse */
  onEntered?: () => void;
  onExit?: () => void;
  /** Funzione chiamata durante la trasizione di chiusura del componente Collapse */
  onExiting?: () => void;
  /** Funzione chiamata al termine della trasizione di chiusura del componente Collapse */
  onExited?: () => void;
  /** Funzione chiamata su click di overlay dell'HeaderNav aperto. Usato unicamente nel caso della HeaderNav, ovvero con navbar e header entrambi true */
  onOverlayClick?: () => void;
  /** Da utilizzare per impostare un riferimento all'elemento DOM */
  innerRef?: Ref<HTMLElement>;
  /** Testo pulsante di chiusura per screen reader */
  closeSrText?: string;
  testId?: string;
}

export const Collapse: FC<CollapseProps> = ({
  header = false,
  className,
  navbar,
  megamenu,
  children,
  isOpen = false,
  onOverlayClick,
  cssModule,
  testId,
  closeSrText = 'Nascondi la navigazione',
  ...attributes
}) => {
  const newCssModule = {
    'navbar-collapse': 'navbar-collapsable',
    ...cssModule
  };
  if (megamenu || navbar) {
    const classes = classNames(className, 'navbar-collapse', {
      expanded: isOpen
    });
    const style = { display: isOpen ? 'block' : 'none' };
    const overlayClasses = classNames('overlay', {
      fade: isOpen,
      show: isOpen
    });
    return (
      <CollapseBase
        className={classes}
        cssModule={newCssModule}
        navbar={navbar}
        style={style}
        data-testid={testId}
        {...attributes}
      >
        <div className={overlayClasses} style={style} onClick={onOverlayClick}></div>
        <div className='close-div'>
          <button className='btn close-menu' type='button' onClick={onOverlayClick}>
            <span className='visually-hidden'>{closeSrText}</span>
            <Icon color='white' icon='it-close-big' />
          </button>
        </div>
        {megamenu ? <div className='menu-wrapper '>{children}</div> : <>{children}</>}
      </CollapseBase>
    );
  }
  const classes = classNames(className, {
    'link-list-wrapper': header
  });

  return (
    <CollapseBase
      className={classes}
      cssModule={newCssModule}
      {...attributes}
      navbar={navbar}
      isOpen={isOpen}
      data-testid={testId}
    >
      {children}
    </CollapseBase>
  );
};
