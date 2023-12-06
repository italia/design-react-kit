import { ReactChild } from 'react';
import { toast } from 'react-toastify';
import { createNotification } from './NotificationContent';
import type { NotificationOptions } from './NotificationContent';
import { NotificationId } from './types';

export function notify(title: string, options?: NotificationOptions): NotificationId;

export function notify(title: string, body: ReactChild, options?: NotificationOptions): NotificationId;

export function notify(
  title: string,
  bodyOrOptions?: ReactChild | NotificationOptions,
  options?: NotificationOptions
): NotificationId {
  let body: ReactChild | undefined = isReactChild(bodyOrOptions) ? bodyOrOptions : undefined;
  const safeOptions = isReactChild(bodyOrOptions) ? { ...options } : bodyOrOptions || {};
  const NotificationContent = createNotification(title, body, safeOptions);
  const internalOptions = {
    ...safeOptions,
    autoClose: safeOptions.duration
  };
  return toast(NotificationContent, internalOptions) as NotificationId;
}

function isReactChild(el: ReactChild | NotificationOptions | undefined): el is ReactChild {
  return el != null && (typeof el === 'string' || typeof el === 'number' || 'type' in el);
}

notify.dismiss = (id?: NotificationId) => toast.dismiss(id);
