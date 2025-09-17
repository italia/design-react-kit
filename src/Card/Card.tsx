import React, { FC, HTMLAttributes, ElementType, Ref } from 'react';
import classNames from 'classnames';
import { CSSModule } from 'reactstrap/types/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente Card */
  className?: string;
  /** Da utilizzare per impostare un riferimento all'elemento DOM */
  innerRef?: Ref<HTMLElement>;
  /** Oggetto contenente la nuova mappatura per le classi CSS. */
  cssModule?: CSSModule;
  /** Abilita la versione teaser della Card */
  teaser?: boolean;
  /** La card contiene un'immagine */
  image?: boolean;
  /** La card è di tipo banner */
  banner?: boolean;
  /** La card è di tipo profile */
  profile?: boolean;
  /** La card è inline */
  inline?: boolean;
  /** La card è inline-reverse */
  inlineReverse?: boolean;
  /** La card è inline-mini */
  inlineMini?: boolean;
  /** La card è arrotondata */
  rounded?: boolean;
  /** La card è full height */
  fullHeight?: boolean;
  /** La card ha un bordo */
  border?: boolean;
  /** La card ha un bordo di estremità */
  borderTop?: boolean;
  /** La card ha un bordo */
  shadow?: 'sm' | 'lg' | 'normal' | null;
  testId?: string;
}

export const Card: FC<CardProps> = ({
  tag = 'article',
  teaser,
  image,
  border=true,
  borderTop,
  inline,
  inlineReverse,
  inlineMini,
  rounded,
  fullHeight,
  banner,
  profile,
  shadow=null,
  testId,
  ...attributes
}) => {
  const cardClasses = classNames('it-card', attributes.className, {
    'card-teaser': teaser,
    'it-card-image': image,
    'border': border,
    'it-card-inline': inline,
    'it-card-inline-reverse': inlineReverse,
    'it-card-inline-mini': inlineMini,
    'it-card-height-full': fullHeight,
    'rounded': rounded,
    'card-teaser-wrapper': teaser,
    'shadow': shadow === 'normal',
    'shadow-lg': shadow === 'lg',
    'shadow-sm': shadow === 'sm',
    'it-card-banner': banner,
    'it-card-profile': profile,
    'it-border-top': borderTop,
    'it-border-top-secondary': borderTop,

  });

  const T = tag;

  return (
    <T
      {...attributes}
      className={cardClasses}
      data-testid={testId}
    />
  );

};
