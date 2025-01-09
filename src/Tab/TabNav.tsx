import classNames from 'classnames';
import React, { ElementType, FC } from 'react';
import { Nav, NavProps } from 'react-bootstrap';

export interface TabNavProps extends NavProps {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente Tab */
  className?: string;
  testId?: string;
}

export const TabNav: FC<TabNavProps> = ({ className, tag = 'ul', testId, ...attributes }) => {
  const Tag = tag;

  const classes = classNames(className, 'nav-tabs');
  let currentTabIndex = 0;
  let activeTabIndex = -1;

  // Ugly workaround to keep Bootstrap Italia behaviour

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>, disabled: boolean = false) => {
    const queriedElements = document.querySelectorAll('.nav-link');
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
        if (currentTabIndex - 1 < 0) {
          currentTabIndex = queriedElements.length;
        }
        currentTabIndex = (currentTabIndex - 1) % queriedElements.length;
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        currentTabIndex = (currentTabIndex + 1) % queriedElements.length;
        break;
      default:
        return;
    }
    if (queriedElements[currentTabIndex].ariaDisabled === 'true') {
      handleKeyDown(event, true);
    } else {
      (queriedElements[currentTabIndex] as HTMLElement).focus();
      setTimeout(() => {
        queriedElements[activeTabIndex].ariaSelected = 'true';
      }, 300);
    }
  };

  return <Nav as={Tag} className={classes} data-testid={testId} {...attributes} onKeyDown={handleKeyDown}></Nav>;
};
