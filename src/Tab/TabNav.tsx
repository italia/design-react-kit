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
  const elements: HTMLElement[] = [];

  // Ugly workaround to keep Bootstrap Italia behaviour

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    const queriedElements = document.querySelectorAll('.nav-link');
    for (let i = 0; i < queriedElements.length; i++) {
      if (queriedElements[i].ariaSelected === 'true') {
        currentTabIndex = i;
      }
      queriedElements[i].ariaSelected = 'false';
      elements.push(queriedElements[i] as HTMLElement);
    }
    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        if (currentTabIndex - 1 < 0) {
          currentTabIndex = elements.length;
        }
        currentTabIndex = (currentTabIndex - 1) % elements.length;
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        currentTabIndex = (currentTabIndex + 1) % elements.length;
        break;
      default:
        return;
    }
    if (elements[currentTabIndex].ariaDisabled === 'true') {
      handleKeyDown(event);
    } else {
      elements[currentTabIndex].focus();
    }
  };

  return <Nav as={Tag} className={classes} data-testid={testId} {...attributes} onKeyDown={handleKeyDown}></Nav>;
};
