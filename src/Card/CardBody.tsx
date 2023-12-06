import React, { FC, HTMLAttributes, ElementType, Ref } from 'react';
import { CardBody as InnerCardBody } from 'reactstrap';
import { CSSModule } from 'reactstrap/types/lib/utils';
// Note: this is a wrapper class around a reactstrap component.
// TODO: remove this class and restore the direct import when
// https://github.com/storybookjs/storybook/issues/10536 gets resolved

export interface CardBodyProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente Card */
  className?: string;
  /** Da utilizzare per impostare un riferimento all'elemento DOM */
  innerRef?: Ref<HTMLElement>;
  /** Oggetto contenente la nuova mappatura per le classi CSS. */
  cssModule?: CSSModule;
  testId?: string;
}

export const CardBody: FC<CardBodyProps> = ({ tag = 'div', testId, ...props }) => (
  <InnerCardBody {...props} tag={tag} data-testid={testId} />
);
