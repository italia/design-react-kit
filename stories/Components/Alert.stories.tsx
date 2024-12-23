import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { componentColor } from '../../.storybook/stories-helper';
import { Alert } from '../../src';

const meta: Meta<typeof Alert> = {
  title: 'Documentazione/Componenti/Alert',
  component: Alert,
  args: {
    color: 'success'
  },
  argTypes: {
    color: {
      control: 'select',
      options: componentColor
    }
  }
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const _EsempiInterattivi: Story = {
  render: ({ ...args }) => (
    <Alert {...args}>
      Questo è un alert di{" "}<b>{args.color}</b>!
    </Alert>
  )
};

export const _LinkEvidenziato: Story = {
  render: ({ ...args }) => (
    <Alert {...args}>
      Questo è un alert con un esempio di{" "}
      <a href="#" className="alert-link">
        link
      </a>{" "}
    </Alert>
  ),
  args: {
    color: 'danger'
  }
};

export const _ContenutoAggiuntivo: Story = {
  render: ({ ...args }) => (
    <Alert {...args}>
      <h4 className='alert-heading'>Avviso di successo!</h4>
      <p>
        Stai leggendo questo importante messaggio di avviso di successo. Questo testo di esempio sarà più a lungo in
        modo da poter vedere come funzioni la spaziatura all&#39;interno di un avviso con questo tipo di contenuto.
      </p>
      <hr />
      <p className='mb-0'>
        Quando necessario, assicurarti di inserire le utilità di margine per mantenere gli spazi equilibrati.
      </p>
    </Alert>
  )
};

const ChiusuraControllataWithHooks = ({ ...args }) => {
  const [open, setOpen] = useState(true);

  const closeAlert = () => setOpen(false);

  return (
    <div>
      <Alert {...args} isOpen={open} toggle={closeAlert}>
        <strong>Attenzione:</strong> Alcuni campi inseriti sono da controllare.
      </Alert>
    </div>
  );
};

export const ChiusuraControllata: Story = {
  render: (args) => <ChiusuraControllataWithHooks {...args} />,
  parameters: {
    docs: {
      canvas: { sourceState: 'none' }
    }
  },
  args: {
    color: 'warning'
  }
};
