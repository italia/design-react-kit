import React, { useLayoutEffect, useState } from 'react';
import { Icon } from '../Icon/Icon';
import classNames from 'classnames';

export interface BackToTopProps {
  /**
   * Aria label che definisce lo scopo del componente (default: `Torna su`)
   */
  ariaLabel?: string;
  /**
   * Classi aggiuntive da usare per il componente
   */
  className?: string;
  /**
   * Renderizza la variante `dark` del componente
   */
  dark?: boolean;
  /**
   * Renderizza la variante `small` del componente
   */
  small?: boolean;
  /**
   * Aggiunge l'ombra al componente
   */
  shadow?: boolean;
  /**
   * Configurazione riguardante dopo quanti pixel di scroll il bottone viene mostrato
   */
  showOffset?: number;
}

const backToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const BackToTop = ({
  ariaLabel='Torna su',
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
    <a
      aria-label={ariaLabel}
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
      <Icon color={dark ? 'secondary' : 'light'} icon='it-arrow-up' style={{ cursor: 'pointer' }} />
    </a>
  );
};
