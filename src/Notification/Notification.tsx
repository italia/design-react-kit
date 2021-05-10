import React, { FC, HTMLAttributes, ReactChild, CSSProperties } from 'react';
import { Toast, ToastHeader, ToastBody, Button } from 'reactstrap';
import classNames from 'classnames';
import { Icon } from '../Icon/Icon';
import { notifyDeprecation } from '../utils';

export interface NotificationProps extends HTMLAttributes<HTMLElement> {
  /**
   * Il titolo della notifica
   * @deprecated
   */
  header?: string;
  /** Il titolo della notifica */
  title?: string;
  /** Il contenuto (messaggio) della notifica */
  children?: ReactChild;
  /** Lo stato corrente della notifica (modifica il colore delle icone e bordo) */
  state?: 'success' | 'error' | 'info' | 'warning' | string;
  /** Quando abilitata il timer automatico viene disabilitato e la notifica viene chiusa solamente al click sul rispettivo bottone di chiusura */
  dismissable?: boolean;
  /**
   * Posiziona la notifica a filo di uno dei margini indicati, modificandone l'arrotondamento.
   * La posizione predefinita è nella parte destra inferiore della finestra.
   * Su dispositivi mobile la Notification è *sempre* a piede della finestra occupandone tutta la lunghezza.
   */
  fix?: 'top' | 'bottom' | 'left' | 'right';
  /** Indica se la notifica contiene una icona affianco al titolo. */
  withIcon?: boolean;
  /** Stili CSS aggiuntivi per il componente Notification */
  style?: CSSProperties;
}

function pickIcon(state: NotificationProps['state']) {
  switch (state) {
    case 'error':
      return 'it-close-circle';
    case 'info':
      return 'it-info-circle';
    case 'warning':
      return 'it-error';
    case 'success':
    default:
      return 'it-check-circle';
  }
}
const fixRegexp = /-fix/;

export const Notification: FC<NotificationProps> = ({
  header,
  title = '',
  state,
  dismissable,
  fix,
  withIcon,
  style,
  children,
  ...attributes
}) => {
  if (header) {
    notifyDeprecation(
      'Please use the prop "title" instead of the "header" for the Notification component.'
    );
  }
  if (fixRegexp.test(fix || '')) {
    notifyDeprecation(
      `The "fix" prop format has changed: accepted values are now "top", "bottom", "left", "right". You passed ${fix}`
    );
  }

  const notificationTitle = header || title;
  const fixPosition = (fix || '').replace(fixRegexp, '');

  const wrapperClass = classNames('notification', {
    [`${fixPosition}-fix`]: fixPosition,
    'with-icon': withIcon,
    dismissable: dismissable
  });
  const icon = pickIcon(state);
  return (
    <Toast className={wrapperClass} style={style}>
      <ToastHeader>
        <h5>
          {notificationTitle}
          <Icon icon={icon} />
        </h5>
      </ToastHeader>
      {children && <ToastBody {...attributes}>{children}</ToastBody>}

      {dismissable && (
        <Button className='btn notification-close'>
          <Icon icon='it-close' />
          <span className='sr-only'>Chiudi notifica: {notificationTitle}</span>
        </Button>
      )}
    </Toast>
  );
};
