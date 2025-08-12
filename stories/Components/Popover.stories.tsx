import { Meta, StoryObj } from '@storybook/react-vite';
import React, { useRef, useState } from 'react';
import { Button, Icon, Popover, PopoverBody, PopoverHeader } from '../../src';

const meta: Meta<typeof Popover> = {
  title: "Documentazione/Componenti/Popover",
  component: Popover,
  parameters: {
    docs: {
      canvas: { sourceState: "none" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Popover>;

const ExampleWithHooks = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const targetRef = useRef(null);

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };

  return (
    <div>
      <Button color='danger' size='lg' innerRef={targetRef} onClick={togglePopover}>
        Clicca per attivare/disattivare il popover
      </Button>

      <Popover placement='right' target={targetRef} isOpen={popoverOpen} toggle={togglePopover}>
        <PopoverHeader>Titolo del popover</PopoverHeader>
        <PopoverBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</PopoverBody>
      </Popover>
    </div>
  );
}

export const Example: Story = {
  render: () => <ExampleWithHooks/>
};
const ElementiDisabilitatiWithHooks = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const targetRef = useRef(null);

  return (
    <>
        <span ref={targetRef}>
          <Button color='primary' disabled style={{ pointerEvents: 'none' }}>
            Popover disabilitato
          </Button>
        </span>
      <Popover
        placement='right'
        target={targetRef}
        trigger='hover'
        toggle={() => setPopoverOpen(!popoverOpen)}
        isOpen={popoverOpen}
      >
        <PopoverHeader>Titolo del popover</PopoverHeader>
        <PopoverBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</PopoverBody>
      </Popover>
    </>
  );
}
export const ElementiDisabilitati: Story = {
  render: () => <ElementiDisabilitatiWithHooks/>
};

const DirezioniWithHooks = () => {
  const [popoverOpenSx, setPopoverOpenSx] = useState(false);
  const [popoverOpenDx, setPopoverOpenDx] = useState(false);
  const [popoverOpenAlto, setPopoverOpenAlto] = useState(false);
  const [popoverOpenBasso, setPopoverOpenBasso] = useState(false);

  const targetRefSx = useRef(null);
  const targetRefDx = useRef(null);
  const targetRefAlto = useRef(null);
  const targetRefBasso = useRef(null);

  return (
    <div className='d-flex flex-column'>
      <div className='mx-auto align-self-center p-2'>
          <span>
            <Button
              className='me-1'
              color='secondary'
              innerRef={targetRefSx}
              onClick={() => {
                setPopoverOpenSx(!popoverOpenSx);
              }}
            >
              Popover {'a sinistra'}
            </Button>
            <Popover
              placement={'left'}
              isOpen={popoverOpenSx}
              target={targetRefSx}
              toggle={() => {
                setPopoverOpenSx(!popoverOpenSx);
              }}
            >
              <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus</PopoverBody>
            </Popover>
          </span>
      </div>
      <div className='mx-auto align-self-center p-2'>
          <span>
            <Button
              className='me-1'
              color='secondary'
              innerRef={targetRefDx}
              onClick={() => {
                setPopoverOpenDx(!popoverOpenDx);
              }}
            >
              Popover {'a destra'}
            </Button>
            <Popover
              placement={'right'}
              isOpen={popoverOpenDx}
              target={targetRefDx}
              toggle={() => {
                setPopoverOpenDx(!popoverOpenDx);
              }}
            >
              <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus</PopoverBody>
            </Popover>
          </span>
      </div>
      <div className='mx-auto align-self-center p-2'>
          <span>
            <Button
              className='me-1'
              color='secondary'
              innerRef={targetRefAlto}
              onClick={() => {
                setPopoverOpenAlto(!popoverOpenAlto);
              }}
            >
              Popover {'in alto'}
            </Button>
            <Popover
              placement={'top'}
              isOpen={popoverOpenAlto}
              target={targetRefAlto}
              toggle={() => {
                setPopoverOpenAlto(!popoverOpenAlto);
              }}
            >
              <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus</PopoverBody>
            </Popover>
          </span>
      </div>
      <div className='mx-auto align-self-center p-2'>
          <span>
            <Button
              className='me-1'
              color='secondary'
              innerRef={targetRefBasso}
              onClick={() => {
                setPopoverOpenBasso(!popoverOpenBasso);
              }}
            >
              Popover {'in basso'}
            </Button>
            <Popover
              placement={'bottom'}
              isOpen={popoverOpenBasso}
              target={targetRefBasso}
              toggle={() => {
                setPopoverOpenBasso(!popoverOpenBasso);
              }}
            >
              <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus</PopoverBody>
            </Popover>
          </span>
      </div>
    </div>
  );
}

export const Direzioni: Story = {
  render: () => <DirezioniWithHooks/>
};

const TitoloIconaLinkWithHooks = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const targetRef = useRef(null);

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };
  return (
    <div>
      <Button color='secondary' innerRef={targetRef} onClick={togglePopover}>
        Popover con icona e link
      </Button>

      <Popover placement='right' target={targetRef} isOpen={popoverOpen} toggle={togglePopover}>
        <PopoverHeader>
          <Icon icon='it-help-circle' aria-hidden />
          Titolo con icona
        </PopoverHeader>
        <PopoverBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.
          <a href='#' className='popover-inner-link'>
            More info
            <Icon icon='it-arrow-right' aria-hidden />
          </a>
        </PopoverBody>
      </Popover>
    </div>
  );
}

export const TitoloIconaLink: Story = {
  render: () => <TitoloIconaLinkWithHooks/>
};

const ModalitàHoverWithHooks = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const targetRef = useRef(null);

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };
  return (
    <div>
      <Button color='secondary' innerRef={targetRef}>
        Apertura in Hover
      </Button>

      <Popover placement='right' trigger='hover' target={targetRef} isOpen={popoverOpen} toggle={togglePopover}>
        <PopoverHeader>Popover in Hover</PopoverHeader>
        <PopoverBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</PopoverBody>
      </Popover>
    </div>
  );
}

export const ModalitàHover: Story = {
  render: () => <ModalitàHoverWithHooks/>
};

const ClickSuccessivoWithHooks = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const targetRef = useRef(null);

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };
  return (
    <div>
      <Button tabIndex={0} color='danger' innerRef={targetRef}>
        Popover richiudibile
      </Button>

      <Popover placement='right' trigger='focus' target={targetRef} isOpen={popoverOpen} toggle={togglePopover}>
        <PopoverHeader>Dismissible popover</PopoverHeader>
        <PopoverBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</PopoverBody>
      </Popover>
    </div>
  );
}

export const ClickSuccessivo: Story = {
  render: () => <ClickSuccessivoWithHooks/>
};

/*
type EsempiInterattiviProps = {
  disabled: boolean;
  placement: 'top' | 'bottom' | 'left' | 'right';
  title: string;
  text: string;
};

// using Story or adding types to props breaks storybook
export const _EsempiInterattivi: Story = {
  render: ({ disabled, placement, title, text }) => {
    const [isOpen, toggle] = useState(false);
    const ref = useRef(null);

    return (
      <div style={{ padding: 250, textAlign: 'center' }}>
        <Button innerRef={ref} color='primary' disabled={disabled} onClick={() => toggle(!isOpen)}>
          Popover {disabled ? 'Disabilitato' : ''}
        </Button>
        <Popover placement={placement} target={ref} toggle={() => toggle(!isOpen)} isOpen={isOpen}>
          <PopoverHeader>{title}</PopoverHeader>
          <PopoverBody>{text}</PopoverBody>
        </Popover>
      </div>
    );
  }
};

_EsempiInterattivi.storyName = 'Esempi interattivi';

_EsempiInterattivi.args = {
  disabled: false,
  placement: 'top',
  title: 'Titolo del popover',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.'
};
_EsempiInterattivi.argTypes = {
  placement: {
    control: {
      type: 'select',
      options: ['top', 'bottom', 'left', 'right']
    }
  }
}; */
