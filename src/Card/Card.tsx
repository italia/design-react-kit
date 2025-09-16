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
  /** La card è inline */
  inline?: boolean;
  /** La card è arrotondata */
  rounded?: boolean;
  /** La card è full height */
  fullHeight?: boolean;
  /** La card ha un bordo */
  border?: boolean;
  testId?: string;
}

export const Card: FC<CardProps> = ({
  tag = 'article',
  teaser,
  image,
  border=true,
  inline,
  rounded,
  fullHeight,
  testId,
  ...attributes
}) => {
  const cardClasses = classNames('it-card', attributes.className, {
    'card-teaser': teaser,
    'it-card-image': image,
    'border': border,
    'it-card-inline': inline,
    'it-card-height-full': fullHeight,
    'rounded': rounded,
    'card-teaser-wrapper': teaser
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
