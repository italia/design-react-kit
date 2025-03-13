import React, { CSSProperties, FC, PropsWithChildren, useEffect } from 'react';
import { cssTransition, ToastProps, useToast } from 'react-toastify';
import { NotificationToastProps } from './NotificationContent';
import { NotificationCommonProps } from './types';

export type NotificationProps = Omit<ToastProps, 'transition'> & NotificationCommonProps & NotificationToastProps;

const dummyTransition = /* @__PURE__ */ cssTransition({ enter: '', exit: '' });

export const Notification: FC<PropsWithChildren<NotificationProps>> = (props) => {
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
