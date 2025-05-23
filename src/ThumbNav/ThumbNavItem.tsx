import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

export interface ThumbNavItemProps extends HTMLAttributes<HTMLLIElement> {
  active?: boolean;
  targetUrl?: string;
  imageUrl: string;
  actionDescription?: string;
  testId?: string;
}

export const ThumbNavItem: FC<ThumbNavItemProps> = ({
  active = false,
  targetUrl,
  imageUrl,
  actionDescription,
  testId,
  ...attributes
}) => {
  const classes = classNames({ active: active }, 'ratio', 'ratio-3x2');

  return (
    <li {...attributes} data-testid={testId}>
      <a href={targetUrl} className={classes}>
        <img src={imageUrl} alt={actionDescription} />
      </a>
    </li>
  );
};
