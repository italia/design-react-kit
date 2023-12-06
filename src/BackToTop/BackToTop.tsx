import React, { useLayoutEffect, useState } from 'react';
import { Icon } from '../Icon/Icon';
import classNames from 'classnames';
import { Button } from '../Button/Button';

export interface BackToTopProps {
  /**
   * Optional classnames to pass to <a> element
   */
  className?: string;
  /**
   * Render the dark variant of the back to top button
   */
  dark?: boolean;
  /**
   * Render the small variant of the back to top button
   */
  small?: boolean;
  /**
   * Add a shadow to the button
   */
  shadow?: boolean;
  /**
   * Configure after how many scrolled pixels the button is shown
   */
  showOffset?: number;
}

const backToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const BackToTop = ({
  className,
  dark = false,
  small = false,
  shadow = false,
  showOffset = 200
}: BackToTopProps) => {
  const [showBtn, setShowBtn] = useState(false);

  useLayoutEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > showOffset) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, [showOffset]);

  return (
    <Button
      aria-hidden='true'
      tabIndex={-1}
      className={classNames(
        className,
        'back-to-top',
        small && 'back-to-top-small',
        showBtn && 'back-to-top-show',
        dark && 'dark',
        shadow && 'shadow'
      )}
      id='back-to-top-btn'
      onClick={backToTop}
      style={{ padding: 0 }}
      color={!dark ? 'primary' : ''}
    >
      <Icon color={dark ? 'secondary' : 'white'} icon='it-arrow-up' style={{ top: 0 }} />
    </Button>
  );
};
