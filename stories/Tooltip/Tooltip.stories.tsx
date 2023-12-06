/* eslint jsx-a11y/anchor-is-valid: 0 */
import type { Story } from '@storybook/react';
import React, { useRef, useState } from 'react';
import { UncontrolledTooltip, Tooltip, Button } from '../../src';

export const Esempi = () => {
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

export const EsempiConControllo = () => {
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

export const Posizioni = () => {
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

type EsempiInterattiviProps = {
  placement: 'top' | 'bottom' | 'left' | 'right';
  text: string;
};

export const _EsempiInterattivi: Story<EsempiInterattiviProps> = ({ placement, text }) => {
  const ref = useRef(null);
  return (
    <div style={{ padding: 200 }}>
      <Button innerRef={ref} className='m-3'>
        Tooltip
      </Button>

      <UncontrolledTooltip placement={placement} target={ref}>
        {text}
      </UncontrolledTooltip>
    </div>
  );
};

_EsempiInterattivi.storyName = 'Esempi interattivi';

_EsempiInterattivi.args = {
  placement: 'top',
  text: 'Tooltip'
};
_EsempiInterattivi.argTypes = {
  placement: {
    control: {
      type: 'select',
      options: ['top', 'bottom', 'left', 'right']
    }
  }
};

export default {
  title: 'Componenti/Tooltip'
};
