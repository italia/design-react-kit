import React, { ElementType, FC, HTMLAttributes, MouseEventHandler, Ref } from 'react';
import { FadeProps, Alert as InnerAlert } from 'reactstrap';
import { CSSModule } from 'reactstrap/types/lib/utils';

// Copy over from reactstrap and add new ones
export interface AlertProps extends HTMLAttributes<HTMLElement> {
  closeClassName?: string;
  closeAriaLabel?: string;
  /** Oggetto contenente la nuova mappatura per le classi CSS. */
  cssModule?: CSSModule;
  /** Le varianti di colore definite in Bootstrap Italia
   * @default primary
   */
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | string;
  /** Quando abilitato mostra un'animazione di entrata ed uscita del componente Alert.
   * @default true */
  fade?: boolean;
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  transition?: FadeProps;
  /** Da utilizzare per impostare un riferimento all'elemento DOM */
  innerRef?: Ref<HTMLElement>;
  /** Quando abilitato mostra l'alert
   * @default true
   */
  isOpen?: boolean;
  toggle?: MouseEventHandler<unknown>;
  testId?: string;
}

export const Alert: FC<AlertProps> = ({ color = 'success', isOpen = true, fade = true, testId, ...props }) => {
  const baseProps = {
    color,
    isOpen,
    fade
  };
  return <InnerAlert data-testid={testId} {...baseProps} {...props} />;
};
