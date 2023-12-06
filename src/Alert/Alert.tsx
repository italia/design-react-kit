import React, { FC, HTMLAttributes, MouseEventHandler, ElementType, Ref } from 'react';
import { Alert as InnerAlert, FadeProps } from 'reactstrap';
import { CSSModule } from 'reactstrap/types/lib/utils';

// Copy over from reactstrap and add new ones
export interface AlertProps extends HTMLAttributes<HTMLElement> {
  closeClassName?: string;
  closeAriaLabel?: string;
  /** Oggetto contenente la nuova mappatura per le classi CSS. */
  cssModule?: CSSModule;
  /** Le varianti di colore definite in Bootstrap Italia */
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | string;
  /** Quando abilitato mostra un'animazione di entrata ed uscita del componente Alert. Valore di default: true. */
  fade?: boolean;
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  transition?: FadeProps;
  /** Da utilizzare per impostare un riferimento all'elemento DOM */
  innerRef?: Ref<HTMLElement>;
  isOpen?: boolean;
  toggle?: MouseEventHandler<any>;
  testId?: string;
}

const defaultProps = {
  color: 'success',
  isOpen: true,
  fade: true
};

export const Alert: FC<AlertProps> = ({ testId, ...props }) => {
  return <InnerAlert data-testid={testId} {...props} />;
};

Alert.defaultProps = defaultProps;
