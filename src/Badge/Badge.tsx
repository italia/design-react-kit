import React, { FC, HTMLAttributes, ElementType, Ref, ReactChild, AnchorHTMLAttributes } from 'react';
import { Badge as BadgeReact } from 'reactstrap';
import { CSSModule } from 'reactstrap/types/lib/utils';

export type BadgeProps = {
  /** Le varianti di colore definite in Bootstrap Italia */
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | string;
  /** Quando attivo rende i Badge arrotondati */
  pill?: boolean;
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente Badge */
  className?: string;
  /** Oggetto contenente la nuova mappatura per le classi CSS. */
  cssModule?: CSSModule;
  /** Da utilizzare per impostare un riferimento all'elemento DOM */
  innerRef?: Ref<HTMLElement>;
  /** Il contenuto del badge */
  children: ReactChild;
  testId?: string;
} & (HTMLAttributes<HTMLElement> | AnchorHTMLAttributes<HTMLAnchorElement>);

export const Badge: FC<BadgeProps> = ({
  color = 'secondary',
  pill = false,
  tag = 'span',
  children,
  testId,
  ...attributes
}) => {
  return (
    <BadgeReact color={color} pill={pill} tag={tag} {...attributes} data-testid={testId}>
      {children}
    </BadgeReact>
  );
};
