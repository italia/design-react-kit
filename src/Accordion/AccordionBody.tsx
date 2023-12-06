import React, { ElementType, useCallback, useState } from 'react';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';

import { pick, omit } from '../utils';
import { TransitionTimeouts, TransitionsKeys } from '../transitions';
import type { TransitionProps } from 'react-transition-group/Transition';
import type { TransitionStates } from '../transitions';

export type AccordionBodyProps = Partial<TransitionProps> & {
  tag?: ElementType;
  className?: string;
  listClassName?: string;
  active?: boolean;
  onToggle?: () => void;
};

// hardcode these entries to avoid leaks
const transitionStatusToClassHash: Record<TransitionStates, string> = {
  entering: 'collapsing',
  entered: 'collapse show',
  exiting: 'collapsing',
  exited: 'collapse'
};

function getTransitionClass(status: TransitionStates) {
  return transitionStatusToClassHash[status] || 'collapse';
}

function getHeight(node: HTMLElement) {
  return node.scrollHeight;
}

export const AccordionBody = ({
  className,
  listClassName,
  tag = 'div',
  active = false,
  children,
  timeout = TransitionTimeouts.Collapse,
  ...attributes
}: AccordionBodyProps) => {
  const [height, setHeight] = useState<null | number>(null);

  const onEntering = useCallback(
    (node: HTMLElement, isAppearing: boolean) => {
      setHeight(getHeight(node));
      attributes.onEntering?.(node, isAppearing);
    },
    [attributes.onEntering]
  );
  const onEntered = useCallback(
    (node: HTMLElement, isAppearing: boolean) => {
      setHeight(null);
      attributes.onEntered?.(node, isAppearing);
    },
    [attributes.onEntered]
  );
  const onExit = useCallback(
    (node: HTMLElement) => {
      setHeight(getHeight(node));
      attributes.onExit?.(node);
    },
    [attributes.onExit]
  );
  const onExiting = useCallback(
    (node: HTMLElement) => {
      // getting this variable triggers a reflow
      // @ts-expect-error
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _unused = node.offsetHeight;
      setHeight(0);
      attributes.onExiting?.(node);
    },
    [attributes.onExiting]
  );
  const onExited = useCallback(
    (node: HTMLElement) => {
      setHeight(null);
      attributes.onExited?.(node);
    },
    [attributes.onExited]
  );
  const Tag = tag;

  const transitionProps = pick(attributes, TransitionsKeys);
  const childProps = omit(attributes, TransitionsKeys);

  return (
    <Transition
      {...transitionProps}
      timeout={timeout}
      in={active}
      onEntering={onEntering}
      onEntered={onEntered}
      onExit={onExit}
      onExiting={onExiting}
      onExited={onExited}
    >
      {(status: TransitionStates) => {
        const transitionClass = getTransitionClass(status);
        const classes = classNames(className, transitionClass);
        const listClasses = classNames(listClassName, 'accordion-body');
        const style = height == null ? null : { height };

        return (
          <Tag className={classes} style={{ ...childProps.style, ...style }} {...childProps}>
            <div className={listClasses}>{children}</div>
          </Tag>
        );
      }}
    </Transition>
  );
};
// }
