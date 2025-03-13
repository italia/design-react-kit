import { Meta, StoryObj } from '@storybook/react';
import React, { CSSProperties, ReactNode } from 'react';
import { Button, NotificationManager, NotificationProps, createNotification, notify } from '../../src';

const NotificationStyle = {
  right: 'auto',
  bottom: 'auto',
  top: 'auto',
  left: 'auto'
};

const meta: Meta<typeof NotificationManager> = {
  title: 'Documentazione/Componenti/Notification',
  component: NotificationManager
};

export default meta;

type Story = StoryObj<typeof NotificationManager>;

interface NotificationDocProps {
  id: string;
  title: string;
  state?: NotificationProps['state'];
  fix?: NotificationProps['fix'];
  dismissable?: boolean;
  icon?: NotificationProps['icon'];
  style?: CSSProperties | undefined;
  children?: ReactNode;
}

const NotificationDoc = ({ title, state, fix, dismissable, icon, style, children }: NotificationDocProps) => {
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

export const EsempioMinimo: Story = {
  render: () => {
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
  }
};

export const EsempioMinimoComponente: Story = {
  render: () => {
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
  }
};

export const _Example: Story = {
  render: () => (
    <div className='container test-docs'>
      <div className='row'>
        <div className='col-12 col-md-6 mb-4 mb-md-0'>
          <p className='mb-4'>
            <strong>Notifica standard</strong>
          </p>
          <NotificationDoc id='notifica-base' title='Titolo Notifica' style={NotificationStyle} />
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
  )
};

export const _NotificationWithMessageStatic: Story = {
  render: () => (
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
  )
};

export const Dismissable: Story = {
  render: () => (
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
  )
};

export const States: Story = {
  render: () => {
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
  }
};

export const _RoundingOfCorners: Story = {
  render: () => {
    return (
      <div className='container test-docs'>
        <div className='row mb-5'>
          <div className='col-12 col-md-6 mb-4 mb-md-0'>
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
          <div className='col-12 col-md-6'>
            <p>
              <strong>top-fix</strong>
            </p>
            <div>
              <NotificationDoc title='Titolo Notifica' state='success' fix='top' id='notifica-round-corners-top' />
            </div>
            <p className='mt-4'>
              <strong>bottom-fix</strong>
            </p>
            <div>
              <NotificationDoc
                title='Titolo Notifica'
                state='success'
                fix='bottom'
                id='notifica-round-corners-bottom'
              />
            </div>
            <p className='mt-4'>
              <strong>left-fix</strong>
            </p>
            <div>
              <NotificationDoc title='Titolo Notifica' state='success' fix='left' id='notifica-round-corners-left' />
            </div>
            <p className='mt-4'>
              <strong>right-fix</strong>
            </p>
            <div>
              <NotificationDoc title='Titolo Notifica' state='success' fix='right' id='notifica-round-corners-right' />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export const DefaultLocation: Story = {
  render: () => {
    return (
      <div className='container test-desktop'>
        <NotificationDoc state='success' title='Titolo Notifica' id='notifica'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
        </NotificationDoc>
      </div>
    );
  }
};

export const FixedPositions: Story = {
  render: () => {
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
  }
};