import React, { useLayoutEffect, useState } from 'react';
import { Icon } from '../Icon/Icon';
import classNames from 'classnames';
import { BackToTop as BTT } from 'bootstrap-italia';
import { Button } from '../Button/Button';

// TODO: fix the light variant becoming white when pressed

export interface BackToTopProps {
  /**
   * Optional classnames to pass to <a> element
   */
  className?: string;
  /**
   * Render the dark variant of the back to top button
   */
  dark?: boolean;
}

function backToTop() {
  const btt = new BTT(
    document.getElementById('back-to-top-btn') as HTMLButtonElement
  );

  btt.scrollToTop();

  btt.dispose();
}

export const BackToTop = ({ className, dark = false }: BackToTopProps) => {
  const [showBtn, setShowBtn] = useState(false);

  useLayoutEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  return (
    <Button
      aria-hidden='true'
      tabIndex={-1}
      className={classNames(
        className,
        'back-to-top',
        showBtn && 'back-to-top-show',
        dark && 'dark'
      )}
      id='back-to-top-btn'
      onClick={() => backToTop()}
      style={{ padding: 0 }}
    >
      <Icon
        color={dark ? 'secondary' : 'white'}
        icon='it-arrow-up'
        style={{ top: 0 }}
      />
    </Button>
  );
};
