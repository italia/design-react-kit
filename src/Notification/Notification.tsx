import React, { CSSProperties, FC, useEffect } from 'react';
import { ToastProps, useToast, cssTransition } from 'react-toastify';
import { NotificationToastProps } from './NotificationContent';
import { NotificationCommonProps } from './types';

export type NotificationProps = Omit<ToastProps, 'transition'> & NotificationCommonProps & NotificationToastProps;

const dummyTransition = cssTransition({ enter: '', exit: '' });

export const Notification: FC<NotificationProps> = (props) => {
  const { toastRef, eventHandlers } = useToast({
    ...props,
    transition: dummyTransition
  });
  const { children, autoClose, onClick, role, toastId, deleteToast, closeToast, isIn } = props;

  const customStyle: CSSProperties = {
    display: isIn ? 'block' : 'none'
  };

  useEffect(() => {
    if (!isIn) deleteToast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIn]);

  useEffect(() => {
    let timer: NodeJS.Timeout | number;
    if (autoClose) {
      timer = setTimeout(() => closeToast(), autoClose);
    }
    return () => {
      if (timer != null) {
        clearTimeout(Number(timer));
      }
    };
  }, [autoClose, closeToast]);
  return (
    <div
      id={toastId as string}
      onClick={onClick}
      {...eventHandlers}
      style={customStyle}
      ref={toastRef}
      {...(isIn && { role: role })}
    >
      {children}
    </div>
  );
};
