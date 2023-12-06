import React, { CSSProperties, ReactChild } from 'react';
import { Button } from '../Button/Button';
import classNames from 'classnames';
import { Icon } from '../Icon/Icon';
import { usePosition } from './usePosition';
import { NotificationCommonProps } from './types';

export interface NotificationToastProps {
  /** Indica quale icona affiancare al titolo. */
  icon?: string;
  /** Lo stato corrente della notifica (modifica il colore delle icone e bordo) */
  state?: 'success' | 'error' | 'info' | 'warning';
  /** Il titolo della notifica */
  title?: string;
}

type NotificationElementProps = {
  closeToast?: () => void;
  toastProps?: any;
  title: string;
  body?: ReactChild;
  options: NotificationOptions;
};

export const getBorderStyleFix = (fix: NotificationCommonProps['fix']) => {
  const borderReset = ['top', 'bottom', 'right', 'left']
    .filter((curPosition) => (fix === 'left' ? curPosition !== 'right' : curPosition !== 'left'))
    .map(
      (borderPosition) =>
        `border${borderPosition[0].toUpperCase() + borderPosition.substring(1)}` as
          | 'borderTop'
          | 'borderBottom'
          | 'borderLeft'
          | 'borderRight'
    );

  const customStyle: CSSProperties = {};
  for (const borderPos of borderReset) {
    customStyle[borderPos] = 'none';
  }
  return customStyle;
};

export type NotificationOptions = NotificationCommonProps &
  Pick<NotificationToastProps, 'icon' | 'state'> & {
    /* Quando abilitato mostra un pulsante per la chiusura del toast prima della chiusura naturale. Default: `false`. */
    dismissable?: boolean;
    /* Una funzione invocata all'apertura della notifica */
    onOpen?: <T = NotificationElementProps>(props: T) => void;
    /* Una funziona invocata alla chiusura nella notifica */
    onClose?: <T = NotificationElementProps>(props: T) => void;
  };

function pickIcon(state: NotificationToastProps['state']) {
  switch (state) {
    case 'error':
      return 'it-close-circle';
    case 'info':
      return 'it-info-circle';
    case 'warning':
      return 'it-error';
    case 'success':
      return 'it-check-circle';
    default:
      return undefined;
  }
}

function NotificationElement({ closeToast, toastProps, title, body, options }: NotificationElementProps) {
  const globalFix = usePosition();
  const { icon: userIcon, state, fix: localFix, dismissable } = options;
  const fixPosition = localFix == null && globalFix ? globalFix : localFix || globalFix;
  const { autoClose, style } = toastProps;
  const content = typeof body === 'string' ? <p>{body}</p> : body;
  const icon = userIcon || pickIcon(state);

  const borderFixes = getBorderStyleFix(fixPosition);

  const wrapperClass = classNames('notification', state, {
    [`${fixPosition}-fix`]: fixPosition,
    'with-icon': icon,
    dismissable: dismissable || !autoClose
  });

  // Need to override some toast styling here
  const customStyle: CSSProperties = {
    ...style,
    ...borderFixes,
    // force a display as the notification class has a "display: none" set
    display: 'block'
  };

  return (
    <div className={wrapperClass} style={customStyle}>
      <h5>
        {title}
        {icon ? <Icon icon={icon} /> : null}
      </h5>
      {content}
      {(!autoClose || dismissable) && (
        <Button className='notification-close' onClick={closeToast}>
          <Icon icon='it-close' />
          <span className='visually-hidden'>Chiudi notifica: {title}</span>
        </Button>
      )}
    </div>
  );
}

/**
 * Internal use only. Exported for documentation purposes.
 * @internal
 */
export const createNotification = (
  title: string,
  body: ReactChild | undefined,
  options: NotificationOptions,
  closeToast?: () => void,
  toastProps?: any
) => (
  <NotificationElement title={title} body={body} options={options} closeToast={closeToast} toastProps={toastProps} />
);
