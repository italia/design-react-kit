import React, { ReactChild } from 'react';
import { Icon } from '../Icon/Icon';
import classNames from 'classnames';
import { Button } from '../Button/Button';

export interface GoBackProps {
  /**
   * Optional classnames to pass to the element
   */
  className?: string;
  /**
   * Render the link variant of the go back button
   */
  link?: boolean;
  /**
   * Render the up variant of the go back button
   */
  up?: boolean;
  children: ReactChild;
}

const goBack = () => {
  window.history.back();
};

export const GoBack = ({ className, link = false, up = false, children }: GoBackProps) => {
  const Tag = link ? 'a' : Button;

  return (
    <Tag className={classNames(className, 'go-back')} color='primary' onClick={goBack}>
      <Icon
        className={children ? 'me-2' : ''}
        color={link ? 'primary' : 'white'}
        icon={up ? 'it-arrow-up' : 'it-arrow-left'}
      />
      {children}
    </Tag>
  );
};
