import classNames from 'classnames';
import React, { ElementType, FC, useRef } from 'react';
import { Nav, NavProps } from 'react-bootstrap';

export interface TabNavProps extends NavProps {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati
   * @default ul
   */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente Tab */
  className?: string;
  /** Imposta l'orientameno delle tab in verticale
   * @default false
   */
  vertical?: boolean;
  /** Imposta la tab con sfondo scuro
   * @default false
   */
  dark?: boolean;
  /** Imposta la tab con design tipo card
   * @default false
   */
  card?: boolean;
  testId?: string;
}

export const TabNav: FC<TabNavProps> = ({
  className,
  vertical = false,
  dark = false,
  card = false,
  tag = 'ul',
  testId,
  ...attributes
}) => {
  const Tag = tag;
  const rootRef = useRef<HTMLInputElement>();

  const classes = classNames(
    className,
    'nav-tabs',
    { 'nav-tabs-vertical': vertical },
    { 'nav-dark': dark },
    { 'nav-tabs-cards': card }
  );
  let currentTabIndex = 0;
  let activeTabIndex = -1;

  // Ugly workaround to keep Bootstrap Italia behaviour

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>, disabled: boolean = false) => {
    const queriedElements = rootRef.current?.querySelectorAll('.nav-link');
    if (queriedElements) {
      for (let i = 0; i < queriedElements.length; i++) {
        if (queriedElements[i].ariaSelected === 'true') {
          activeTabIndex = i;
        }
        // Disabled elements ignore current focused tab
        if (!disabled && document.activeElement === queriedElements[i]) {
          currentTabIndex = i;
        }
        queriedElements[i].ariaSelected = 'false';
      }
      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
          event.stopPropagation();
          event.preventDefault();
          if (currentTabIndex - 1 < 0) {
            currentTabIndex = queriedElements.length;
          }
          currentTabIndex = (currentTabIndex - 1) % queriedElements.length;
          break;
        case 'ArrowRight':
        case 'ArrowDown':
          event.stopPropagation();
          event.preventDefault();
          currentTabIndex = (currentTabIndex + 1) % queriedElements.length;
          break;
        case 'Enter':
          event.stopPropagation();
          event.preventDefault();
          (queriedElements[currentTabIndex] as HTMLElement).click();
          break;
        case 'Tab':
          break;
        default:
          return;
      }
      if (queriedElements[currentTabIndex].ariaDisabled === 'true') {
        handleKeyDown(event, true);
      } else {
        (queriedElements[currentTabIndex] as HTMLElement).focus({ preventScroll: true });
        setTimeout(() => {
          queriedElements[activeTabIndex].ariaSelected = 'true';
        }, 300);
      }
    }
  };

  return (
    <Nav
      ref={rootRef}
      as={Tag}
      className={classes}
      data-testid={testId}
      {...attributes}
      onKeyDown={handleKeyDown}
    ></Nav>
  );
};
