import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

export interface ThumbNavItemProps extends HTMLAttributes<HTMLLIElement> {
  active?: boolean;
  targetUrl?: string;
  imageUrl: string;
  actionDescription?: string;
}

export const ThumbNavItem: FC<ThumbNavItemProps> = ({
  active = false,
  targetUrl,
  imageUrl,
  actionDescription,
  ...attributes
}) => {
  const classes = classNames({ active: active }, 'ratio', 'ratio-3x2');

  return (
    <li {...attributes}>
      <a href={targetUrl} className={classes}>
        <img src={imageUrl} alt={actionDescription} />
      </a>
    </li>
  );
};
