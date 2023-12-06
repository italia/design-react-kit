import { Story } from '@storybook/react';
import React, { CSSProperties, ReactChild } from 'react';
import {
  Button,
  NotificationManager,
  NotificationProps,
  NotificationOptions,
  notify,
  createNotification
} from '../../src';

// custom style
const OffsetStyle = {
  transform: 'translateX(100%)',
  left: 50,
  bottom: 50
};

const XOffsetStyle = {
  WebkitTransform: 'translateX(50%)',
  marginTop: '10px'
};

const YOffsetStyle = {
  marginTop: '50px'
};

const NotificationStyle = {
  right: 'auto',
  bottom: 'auto',
  top: 'auto',
  left: 'auto'
};

export default {
  title: 'Componenti/Notification'
};

interface NotificationDocProps {
  id: string;
  title: string;
  state?: NotificationProps['state'];
  fix?: NotificationProps['fix'];
  dismissable?: boolean;
  icon?: NotificationProps['icon'];
  style?: CSSProperties | undefined;
  children?: ReactChild;
}

const NotificationDoc = ({
  // @ts-ignore: need this only for sake of documentation
  id,
  title,
  state,
  fix,
  dismissable,
  icon,
  style,
  children
}: NotificationDocProps) => {
  return createNotification(
    title,
    children,
    {
      state,
      fix,
      icon,
      dismissable
    },
    () => {},
    { autoClose: false, style }
  );
};

export const _Example: Story = () => (
  <div className='container test-docs'>
    <div className='row'>
      <div className='col-12 col-md-6 mb-4 mb-md-0'>
        <p className='mb-4'>
          <strong>Notifica standard</strong>
        </p>
        <NotificationDoc id='notifica-base' title='Titolo Notifica' style={NotificationStyle}></NotificationDoc>
      </div>
      <div className='col-12 col-md-6'>
        <p className='mb-4'>
          <strong>Notifica con icona</strong>
        </p>
        <NotificationDoc
          id='notifica-base-con-icona'
          title='Titolo Notifica'
          icon='it-check-circle'
          style={NotificationStyle}
        ></NotificationDoc>
      </div>
    </div>
  </div>
);

_Example.storyName = 'Esempio base';

export const _NotificationWithMessageStatic: Story = () => (
  <div className='container test-docs'>
    <div className='row'>
      <div className='col-12 col-md-6 mb-4 mb-md-0'>
        <p className='mb-4'>
          <strong>Notifica standard</strong>
        </p>
        <NotificationDoc title='Titolo Notifica' style={NotificationStyle} id='notifica-con-messaggio'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
        </NotificationDoc>
      </div>
      <div className='col-12 col-md-6'>
        <p className='mb-4'>
          <strong>Notifica con icona</strong>
        </p>
        <NotificationDoc
          title='Titolo Notifica'
          state='success'
          style={NotificationStyle}
          id='notifica-con-messaggio-e-icona'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
        </NotificationDoc>
      </div>
    </div>
  </div>
);

_NotificationWithMessageStatic.storyName = 'Notifiche con messaggio statico';

export const _NotificationWithMessage_story_hidden: Story = () => {
  return (
    <div>
      <Button
        onClick={() =>
          notify(
            'Titolo Notifica',
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
          )
        }
      >
        Genera Notifica standard
      </Button>
      <Button
        onClick={() =>
          notify(
            'Titolo Notifica',
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>,
            { state: 'success' }
          )
        }
      >
        Genera Notifica con icona
      </Button>
      <NotificationManager />
    </div>
  );
};

_NotificationWithMessage_story_hidden.storyName = 'Notifica con messaggio';
_NotificationWithMessage_story_hidden.parameters = {
  // disables Chromatic's snapshotting on a story level
  chromatic: { disableSnapshot: true }
};

export const Dismissable: Story = () => (
  <div className='container test-docs'>
    <div className='row'>
      <div className='col-12 col-md-6 mb-4 mb-md-0'>
        <p className='mb-4'>
          <strong>Notifica standard</strong>
        </p>
        <NotificationDoc title='Titolo Notifica' dismissable style={NotificationStyle} id='notifica-base' />
      </div>
      <div className='col-12 col-md-6'>
        <p className='mb-4'>
          <strong>Notifica con icona</strong>
        </p>
        <NotificationDoc
          title='Titolo Notifica'
          state='success'
          dismissable
          style={NotificationStyle}
          id='notifica-avvenuto-con-successo'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
        </NotificationDoc>
      </div>
    </div>
  </div>
);

export const States: Story = () => {
  return (
    <div className='container test-docs'>
      <div className='row mb-5'>
        <div className='col-12 col-md-6 mb-4 mb-md-0'>
          <p>
            <strong>Success</strong>
          </p>
          <NotificationDoc
            state='success'
            title='Titolo Notifica'
            style={NotificationStyle}
            id='notifica-con-success-state'
          />
        </div>
        <div className='col-12 col-md-6'>
          <p>
            <strong>Error</strong>
          </p>
          <NotificationDoc
            state='error'
            title='Titolo Notifica'
            style={NotificationStyle}
            id='notifica-con-error-state'
          />
        </div>
      </div>
      <div className='row mb-5'>
        <div className='col-12 col-md-6 mb-4 mb-md-0' style={{ top: 45 }}>
          <p>
            <strong>Info</strong>
          </p>
          <NotificationDoc
            state='info'
            title='Titolo Notifica'
            style={NotificationStyle}
            id='notifica-con-info-state'
          />
        </div>
        <div className='col-12 col-md-6' style={{ top: 45 }}>
          <p>
            <strong>Warning</strong>
          </p>
          <NotificationDoc
            state='warning'
            title='Titolo Notifica'
            style={NotificationStyle}
            id='notifica-con-warning-state'
          />
        </div>
      </div>
    </div>
  );
};

States.storyName = 'Notifica con stati';

export const _RoundingOfCorners: Story = () => {
  return (
    <div className='container test-docs'>
      <div className='row mb-5'>
        <div className='col-12 col-md-6 mb-4 mb-md-0' style={{ position: 'absolute' }}>
          <p>
            <strong>Base (4 angoli arrotondati)</strong>
          </p>
          <NotificationDoc
            title='Titolo Notifica'
            state='success'
            style={NotificationStyle}
            id='notifica-round-corners'
          />
        </div>
      </div>
      <div className='col-12 col-md-6' style={OffsetStyle}>
        <p>
          <strong>top</strong>
        </p>
        <div className='row mb-5' style={XOffsetStyle}>
          <NotificationDoc
            title='Titolo Notifica'
            state='success'
            fix='top'
            style={NotificationStyle}
            id='notifica-round-corners-top'
          />
        </div>
        <p style={{ marginTop: '90px' }}>
          <strong>bottom</strong>
        </p>
        <div className='row mb-5' style={XOffsetStyle}>
          <NotificationDoc
            title='Titolo Notifica'
            state='success'
            fix='bottom'
            style={NotificationStyle}
            id='notifica-round-corners-bottom'
          />
        </div>
        <p style={{ marginTop: '90px' }}>
          <strong>left</strong>
        </p>
        <div className='row mb-5' style={YOffsetStyle}>
          <NotificationDoc
            title='Titolo Notifica'
            state='success'
            fix='left'
            style={NotificationStyle}
            id='notifica-round-corners-left'
          />
        </div>
        <p>
          <strong>right</strong>
        </p>
        <div className='row mb-5' style={YOffsetStyle}>
          <NotificationDoc
            title='Titolo Notifica'
            state='success'
            fix='right'
            style={NotificationStyle}
            id='notifica-round-corners-right'
          />
        </div>
      </div>
    </div>
  );
};

_RoundingOfCorners.storyName = 'Posizione e arrotondamento degli angoli';

export const DefaultLocation: Story = () => {
  return (
    <div className='container test-desktop'>
      <NotificationDoc state='success' title='Titolo Notifica' id='notifica'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
      </NotificationDoc>
    </div>
  );
};

DefaultLocation.storyName = 'Posizione di default';

export const FixedPositions: Story = () => {
  return (
    <div className='container test-desktop'>
      <div>
        <NotificationDoc title='Top Fix' fix='top' state='success' id='notifica-fixed-top'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
        </NotificationDoc>
      </div>
      <div>
        <NotificationDoc title='Left Fix' fix='left' state='success' id='notifica-fixed-left' />
      </div>
      <div>
        <NotificationDoc title='Right Fix' fix='right' state='success' id='notifica-fixed-right' />
      </div>
      <div>
        <NotificationDoc title='Bottom Fix' fix='bottom' state='success' id='notifica-fixed-bottom'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
        </NotificationDoc>
      </div>
    </div>
  );
};

FixedPositions.storyName = 'Posizione fissa';

type EsempioInterattivoProps = {
  title: string;
  message: string;
  duration: number;
  icon: string;
  state: 'success' | 'error' | 'info' | 'warning';
  fix: 'top' | 'bottom' | 'left' | 'right';
  dismissable: boolean;
  closeOnClick: boolean;
};
export const EsempioInterattivo: Story<EsempioInterattivoProps> = ({
  title,
  message,
  duration,
  icon,
  state,
  fix,
  dismissable,
  closeOnClick
}) => {
  return (
    <div>
      <Button onClick={() => notify(title, message, { duration, icon, state, dismissable })}>Mostra Notifica</Button>
      <Button onClick={() => notify.dismiss()}>Chiudi tutte le notifiche</Button>
      <NotificationManager fix={fix} closeOnClick={closeOnClick} />
    </div>
  );
};

EsempioInterattivo.args = {
  title: 'Titolo',
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…',
  fix: undefined,
  dismissable: false,
  closeOnClick: false,
  duration: 6000,
  icon: undefined,
  state: undefined
};
EsempioInterattivo.argTypes = {
  fix: {
    control: {
      type: 'select',
      options: [undefined, 'top', 'bottom', 'right', 'left']
    }
  },
  state: {
    control: {
      type: 'select',
      options: [undefined, 'success', 'error', 'info', 'warning']
    }
  },
  icon: {
    control: {
      type: 'select',
      options: [undefined, 'it-tool', 'it-camera', 'it-check', 'it-calendar']
    }
  }
};

EsempioInterattivo.storyName = 'Esempio interattivo';
EsempioInterattivo.parameters = { controls: { expanded: true } };

// Hidden components used only in docs

export const EsempioInterattivo_story_hidden = () => {
  return (
    <div>
      <Button
        outline
        onClick={() =>
          notify('Titolo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…')
        }
      >
        Mostra Notifica
      </Button>
      <NotificationManager containerId='esempio-base' />
    </div>
  );
};
EsempioInterattivo_story_hidden.parameters = {
  // disables Chromatic's snapshotting on a story level
  chromatic: { disableSnapshot: true }
};

export const EsempioInterattivoAdvanced_story_hidden = () => {
  return (
    <div>
      <Button
        outline
        onClick={() =>
          notify(
            'Titolo',
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
            </p>
          )
        }
      >
        Mostra Notifica con componente React
      </Button>
      <NotificationManager containerId='esempio-avanzato' />
    </div>
  );
};
EsempioInterattivoAdvanced_story_hidden.parameters = {
  // disables Chromatic's snapshotting on a story level
  chromatic: { disableSnapshot: true }
};

// Fake components used only to generate automatic arg table in docs
// @ts-ignore: need to turn off typescript here for docuemntation sake
export const NotifyFakeComponent_story_hidden = ({
  title,
  body = undefined,
  options
}: {
  /**
   * Il titolo della notifica
   */
  title: string;
  /**
   * Il messaggio della notifica. Può essere una semplice stringa, `null` o JSX React.
   */
  body?: ReactChild;
  /**
   * Una lista di opzioni per personalizzare la specifica notifica. Vedi sotto per più dettagli.
   */
  options?: NotificationOptions;
}) => {
  return null;
};
NotifyFakeComponent_story_hidden.parameters = {
  // disables Chromatic's snapshotting on a story level
  chromatic: { disableSnapshot: true }
};

export const NotifyFakeOptionsComponent_story_hidden = (
  // @ts-ignore: need this only for sake of documentation
  props: NotificationOptions
) => {
  return null;
};
NotifyFakeOptionsComponent_story_hidden.parameters = {
  // disables Chromatic's snapshotting on a story level
  chromatic: { disableSnapshot: true }
};
