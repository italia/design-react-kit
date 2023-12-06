import React, { FC, HTMLAttributes } from 'react';
import classname from 'classnames';

export interface HeroCategoryProps extends HTMLAttributes<HTMLSpanElement> {
  /** Eventuali classi aggiuntive per la categoria */
  className?: string;
  testId?: string;
}

export const HeroCategory: FC<HeroCategoryProps> = ({ className, testId, ...attributes }) => {
  const classes = classname('it-category', className);
  return <span {...attributes} className={classes} data-testid={testId} />;
};
