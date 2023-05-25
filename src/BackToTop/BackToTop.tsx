import React, { useLayoutEffect, useState } from 'react';
import { Icon } from '../Icon/Icon';
import classNames from 'classnames';
import { BackToTop as BTT } from 'bootstrap-italia';
import { Button } from '../Button/Button';

export interface BackToTopProps {
  /**
   * Optional classnames to pass to <a> element
   */
  className?: string;
  /**
   * Optional id to pass to <a> element
   */
  id?: string;
}

function backToTop() {
  const btt = new BTT(
    document.getElementById('back-to-top-btn') as HTMLButtonElement
  );

  btt.scrollToTop();

  btt.dispose();
}

export const BackToTop = ({ className, id }: BackToTopProps) => {
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
        `back-to-top ${showBtn ? 'back-to-top-show' : ''}`
      )}
      id={id}
      onClick={() => backToTop()}
      style={{ padding: 0 }}
    >
      <Icon color='white' icon='it-arrow-up' style={{ top: 0 }} />
    </Button>
  );
};
