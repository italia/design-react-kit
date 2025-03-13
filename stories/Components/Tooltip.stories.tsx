import type { Meta, StoryObj } from '@storybook/react';
import React, { useRef, useState } from 'react';
import { Button, Tooltip, TooltipProps, UncontrolledTooltip } from '../../src';

const meta: Meta<typeof Tooltip> = {
  title: 'Documentazione/Componenti/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      canvas: { sourceState: 'none' }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

const EsempiWithHooks = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  return (
    <div className='bd-example tooltip-demo'>
      <p className='muted'>
        Ecco un{' '}
        <a href='#' ref={ref1}>
          bianco scenario
        </a>
        <br />
        per tratteggiarvi l’accompagnamento
        <br />
        degli oggetti di sfondo che pur vivono.
        <br />
        Non ne sarò{' '}
        <a href='#' ref={ref2}>
          l’artefice
        </a>{' '}
        impaziente.
        <br />
        Berrò alle coppe della nostalgia,
        <br />
        avrò preteso d’ozio nelle lacrime...
        <br />
        perché non mi ribello alla natura:
        <br />
        la mia lentezza li esaspera...
        <br />
        La mia lentezza? No, la mia fiducia.
        <br />
        Per adesso è deserto.
        <br />
        <a href='#' ref={ref3}>
          Il mondo può rifarsi senza me
        </a>
        ,
        <br />E intanto gli altri mi denigreranno
      </p>
      <p>
        <em>La città nuova, Alda Merini</em>
      </p>

      <UncontrolledTooltip placement='top' target={ref1}>
        Primo tooltip
      </UncontrolledTooltip>
      <UncontrolledTooltip placement='top' target={ref2}>
        Secondo tooltip
      </UncontrolledTooltip>
      <UncontrolledTooltip placement='top' target={ref3}>
        Terzo tooltip
      </UncontrolledTooltip>
    </div>
  );
};

export const Esempi: Story = {
  render: () => <EsempiWithHooks />
};

const EsempiConControlloWithHooks = () => {
  const [openOne, toggleOne] = useState(false);
  const [openTwo, toggleTwo] = useState(false);
  const [openThree, toggleThree] = useState(false);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  return (
    <div className='bd-example tooltip-demo'>
      <p className='muted'>
        Ecco un{' '}
        <a href='#' ref={ref1}>
          bianco scenario
        </a>
        <br />
        per tratteggiarvi l’accompagnamento
        <br />
        degli oggetti di sfondo che pur vivono.
        <br />
        Non ne sarò{' '}
        <a href='#' ref={ref2}>
          l’artefice
        </a>{' '}
        impaziente.
        <br />
        Berrò alle coppe della nostalgia,
        <br />
        avrò preteso d’ozio nelle lacrime...
        <br />
        perché non mi ribello alla natura:
        <br />
        la mia lentezza li esaspera...
        <br />
        La mia lentezza? No, la mia fiducia.
        <br />
        Per adesso è deserto.
        <br />
        <a href='#' ref={ref3}>
          Il mondo può rifarsi senza me
        </a>
        ,
        <br />E intanto gli altri mi denigreranno
      </p>
      <p>
        <em>La città nuova, Alda Merini</em>
      </p>

      <Tooltip placement='top' target={ref1} isOpen={openOne} toggle={() => toggleOne(!openOne)}>
        Primo tooltip
      </Tooltip>
      <Tooltip placement='top' target={ref2} isOpen={openTwo} toggle={() => toggleTwo(!openTwo)}>
        Secondo tooltip
      </Tooltip>
      <Tooltip placement='top' target={ref3} isOpen={openThree} toggle={() => toggleThree(!openThree)}>
        Terzo tooltip
      </Tooltip>
    </div>
  );
};
export const EsempiConControllo: Story = {
  render: () => <EsempiConControlloWithHooks />
};

const PosizioniWithHooks = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  return (
    <div style={{ padding: 100 }}>
      <Button innerRef={ref1} className='m-3'>
        Tooltip in alto
      </Button>
      <Button innerRef={ref2} className='m-3'>
        Tooltip a destra
      </Button>
      <Button innerRef={ref3} className='m-3'>
        Tooltip in basso
      </Button>
      <Button innerRef={ref4} className='m-3'>
        Tooltip a sinistra
      </Button>
      <Button innerRef={ref5} className='m-3'>
        Tooltip con HTML
      </Button>

      <UncontrolledTooltip placement='top' target={ref1}>
        Tooltip on top
      </UncontrolledTooltip>
      <UncontrolledTooltip placement='right' target={ref2}>
        Tooltip on right
      </UncontrolledTooltip>
      <UncontrolledTooltip placement='bottom' target={ref3}>
        Tooltip on bottom
      </UncontrolledTooltip>
      <UncontrolledTooltip placement='left' target={ref4}>
        Tooltip on left
      </UncontrolledTooltip>
      <UncontrolledTooltip placement='top' target={ref5}>
        <em>Tooltip</em> <u>with</u> <b>HTML</b>
      </UncontrolledTooltip>
    </div>
  );
};

export const Posizioni: Story = {
  render: () => <PosizioniWithHooks />
};

const EsempiInterattiviWithHooks = ({ placement, text }: TooltipProps) => {
  const ref = useRef(null);
  return (
    <div>
      <Button innerRef={ref} className='m-3'>
        Tooltip
      </Button>

      <UncontrolledTooltip placement={placement} target={ref}>
        {text}
      </UncontrolledTooltip>
    </div>
  );
};

export const EsempiInterattivi: Story = {
  render: (args) => <EsempiInterattiviWithHooks {...args} />,
  parameters: {
    layout: 'centered'
  },
  args: {
    placement: 'top',
    text: 'Tooltip'
  },
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right']
    },
    text: {
      control: 'text'
    }
  }
};
