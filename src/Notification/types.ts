export interface NotificationCommonProps {
  /* Utilizzare questo attributo per gestire più container */
  containerId?: string | number;
  /* Indica per quanto tempo la notifica rimarrà visibile prima di sparire. Quanto impostato a 0ms la notifica rimarrà aperta a tempo indefinito e verrà mostrato anche il tasto di chiusura. Il valore di default è 6000 ms. */
  duration?: number;
  /* Indica il posizionamento fisso della notifica. Non è abilitato di default. */
  fix?: 'top' | 'bottom' | 'right' | 'left';
  /* Quando abilitato permette di chiudere la notifica con un click. Default: `true`. */
  closeOnClick?: boolean;
}

export type NotificationId = string;
