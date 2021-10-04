import React, { ElementType, FC, HTMLAttributes } from 'react';
import classname from 'classnames';

export interface HeroTitleProps extends HTMLAttributes<HTMLSpanElement> {
  /** Indica il tag da utilizzare per il titolo */
  tag?: ElementType;
}

export const HeroTitle: FC<HeroTitleProps> = ({
  tag: Tag = 'h1',
  className,
  ...attributes
}) => {
  const classes = classname(className);
  return <Tag {...attributes} className={classes} />;
};
