import { ReactNode, isValidElement } from 'react';
import { toast } from 'react-toastify';
import type { NotificationOptions } from './NotificationContent';
import { createNotification } from './NotificationContent';
import { NotificationId } from './types';

export function notify(title: string, options?: NotificationOptions): NotificationId;

export function notify(title: string, body: ReactNode, options?: NotificationOptions): NotificationId;

export function notify(
  title: string,
  bodyOrOptions?: ReactNode | NotificationOptions,
  options?: NotificationOptions
): NotificationId {
  const body: ReactNode | undefined = isReactNode(bodyOrOptions) ? bodyOrOptions : undefined;
  const safeOptions = isReactNode(bodyOrOptions) ? { ...options } : bodyOrOptions || {};
  const NotificationContent = createNotification(title, body, safeOptions);
  const internalOptions = {
    ...safeOptions,
    autoClose: safeOptions.duration
  };
  return toast(NotificationContent, internalOptions) as NotificationId;
}

function isReactNode(el: ReactNode | NotificationOptions | undefined): el is ReactNode {
  return el != null && (typeof el === 'string' || typeof el === 'number' || isValidElement(el));
}

notify.dismiss = (id?: NotificationId) => toast.dismiss(id);
