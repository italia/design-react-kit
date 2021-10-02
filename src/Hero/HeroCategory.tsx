import React, { FC, HTMLAttributes } from 'react';
import classname from 'classnames';

export interface HeroCategoryProps extends HTMLAttributes<HTMLSpanElement> {}

export const HeroCategory: FC<HeroCategoryProps> = ({
  className,
  ...attributes
}) => {
  const classes = classname('it-category', className);
  return <span {...attributes} className={classes} />;
};
