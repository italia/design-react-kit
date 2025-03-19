import classNames from 'classnames';
import React, { ElementType, PropsWithChildren, useCallback, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';
import type { TransitionProps } from 'react-transition-group/Transition';
import { TransitionTimeouts, TransitionsKeys } from '../transitions';
import { omit, pick } from '../utils';

export type AccordionBodyProps = Partial<TransitionProps> & {
  tag?: ElementType;
  className?: string;
  listClassName?: string;
  active?: boolean;
  onToggle?: () => void;
};

// hardcode these entries to avoid leaks
const transitionStatusToClassHash: Record<string, string> = {
  entering: 'collapsing',
  entered: 'collapse show',
  exiting: 'collapsing',
  exited: 'collapse'
};

function getTransitionClass(status: string) {
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
}: PropsWithChildren<AccordionBodyProps>) => {
  const [height, setHeight] = useState<null | number>(null);
  const nodeRef = useRef<HTMLElement>(null);
  const onEntering = useCallback(
    (isAppearing: boolean) => {
      if (nodeRef.current) {
        setHeight(getHeight(nodeRef.current));
        attributes.onEntering?.(nodeRef.current, isAppearing);
      }
    },
    [attributes.onEntering]
  );
  const onEntered = useCallback(
    (isAppearing: boolean) => {
      setHeight(null);
      if (nodeRef.current) {
        attributes.onEntered?.(nodeRef.current, isAppearing);
      }
    },
    [attributes.onEntered]
  );
  const onExit = useCallback(
    () => {
      if (nodeRef.current) {
        setHeight(getHeight(nodeRef.current));
        attributes.onExit?.(nodeRef.current);
      }
    },
    [attributes.onExit]
  );
  const onExiting = useCallback(
    () => {
      if (nodeRef.current) {
        // getting this variable triggers a reflow
        // @ts-expect-error variabile non usata
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _unused = nodeRef.current.offsetHeight;
        setHeight(0);
        attributes.onExiting?.(nodeRef.current);
      }
    },
    [attributes.onExiting]
  );
  const onExited = useCallback(
    () => {
      setHeight(null);
      if (nodeRef.current) {
        attributes.onExited?.(nodeRef.current);
      }
    },
    [attributes.onExited]
  );
  const Tag = tag;

  const transitionProps = pick(attributes, TransitionsKeys);
  const childProps = omit(attributes, TransitionsKeys);

  return (
    <Transition
      nodeRef={nodeRef}
      timeout={timeout}
      in={active}
      onEntering={onEntering}
      onEntered={onEntered}
      onExit={onExit}
      onExiting={onExiting}
      onExited={onExited}
      {...transitionProps}
    >
      {(status) => {
        const transitionClass = getTransitionClass(status);
        const classes = classNames(className, transitionClass);
        const listClasses = classNames(listClassName, 'accordion-body');
        const style = height == null ? null : { height };

        return (
          <Tag className={classes} ref={nodeRef} style={{ ...childProps.style, ...style }} {...childProps}>
            <div className={listClasses}>{children}</div>
          </Tag>
        );
      }}
    </Transition>
  );
};
