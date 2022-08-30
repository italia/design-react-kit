import React, { FC, HTMLAttributes } from 'react';
import { FadeProps, Modal as InnerModal } from 'reactstrap';
import { CSSModule } from 'reactstrap/types/lib/utils';
import classnames from 'classnames';

export interface ModalProps extends HTMLAttributes<HTMLElement> {
  [key: string]: any;
  /** Indica lo stato del modale. Valore di default: undefined. */
  isOpen?: boolean;
  autoFocus?: boolean;
  size?: string;
  /** Funzione da chiamare quando l'utente clicca sul backdrop. Valore di default: undefined. */
  toggle?: React.KeyboardEventHandler<any> | React.MouseEventHandler<any>;
  keyboard?: boolean;
  backdrop?: boolean | 'static';
  /**
   * Abilitare quando si vuole che solo il contenuto della modale sia scrollabile.
   * Valore di default: undefined.
   * */
  scrollable?: boolean;
  onEnter?: () => void;
  onExit?: () => void;
  onOpened?: () => void;
  onClosed?: () => void;
  cssModule?: CSSModule;
  wrapClassName?: string;
  modalClassName?: string;
  backdropClassName?: string;
  contentClassName?: string;
  zIndex?: number | string;
  fade?: boolean;
  backdropTransition?: FadeProps;
  modalTransition?: FadeProps;
  centered?: boolean;
  external?: React.ReactNode;
  labelledBy?: string;
  unmountOnClose?: boolean;
  returnFocusAfterClose?: boolean;
  container?: string | HTMLElement | React.RefObject<HTMLElement>;
  innerRef?: React.Ref<HTMLElement>;
  /** Abilitare quando si utilizza una icona nell'intestazione, al fine di formattare correttamente il modale. Valore di default: undefined. */
  withIcon?: boolean;
  /** Abilitare quando si utilizza una LinkList nell'intestazione, al fine di formattare correttamente il modale. Valore di default: undefined. */
  withLinkList?: boolean;
  /** Abilitare quando si vuole mostrare un breve messaggio di conferma. Valore di default: undefined. */
  popConfirm?: boolean;
  /** Abilitare quando si vuole mostrare un modale allineato a sinistra. Valore di default: undefined. */
  align?: 'left' | 'right';
}

export const Modal: FC<ModalProps> = ({
  withIcon,
  withLinkList,
  popConfirm,
  modalClassName,
  align,
  scrollable,
  className,
  ...props
}) => {
  const isAligned = align != null && ['left', 'right'].includes(align);
  const modalDialogClassnames = classnames(modalClassName, {
    'alert-modal': withIcon,
    'it-dialog-link-list': withLinkList,
    'popconfirm-modal': popConfirm,
    'it-dialog-scrollable': scrollable && isAligned
  });
  const modalClassnames = classnames(className, {
    'modal-dialog-left': align === 'left',
    'modal-dialog-right': align === 'right'
  });
  return (
    <InnerModal
      {...props}
      scrollable={!isAligned && scrollable}
      className={modalClassnames}
      modalClassName={modalDialogClassnames}
    />
  );
};
