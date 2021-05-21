/* eslint jsx-a11y/anchor-is-valid: 0 */
import React, { useState, useRef } from 'react';

import { Popover, PopoverHeader, PopoverBody, Button } from '../../src';

import PopoverExample from './PopoverExample';
import PopoverPositionExample from './PopoverPositionExample';
import PopoverIconLink from './PopoverIconLink';
import PopoverHover from './PopoverHover';
import PopoverFocus from './PopoverFocus';

const ElementiDisabilitatiComponent = () => {
  const targetRef = useRef(null);

  return (
    <div>
      <Button color='primary' disabled innerRef={targetRef}>
        Popover disabilitato
      </Button>
      <Popover placement='right' target={targetRef}>
        <PopoverHeader>Titolo del popover</PopoverHeader>
        <PopoverBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel
          finibus augue.
        </PopoverBody>
      </Popover>
    </div>
  );
};

ElementiDisabilitatiComponent.story = {
  name: 'Elementi disabilitati'
};

// const EsempiInterattiviComponent = () => {
//   const [popoverOpen, setPopoverOpen] = useState(false)
//   const id = 'example'
//   // Avoid Jest complaints
//   const target = () => document.getElementById(id)
//   const togglePopover = () => {
//     setPopoverOpen(!popoverOpen)
//   }

//   // All the proerties for Addon Knobs are placed back in the function
//   const disabled = boolean('Disabilitato', false)
//   const placements = ['top', 'bottom', 'left', 'right']
//   const placement = select('Posizione', placements, placements[0])
//   const title = text('Titolo', 'Titolo del popover')
//   const body = text(
//     'Body',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.'
//   )

//   return (
//     <div
//       className="d-flex  justify-content-center"
//       style={{ paddingTop: '120px' }}>
//       <Button
//         id={id}
//         color="primary"
//         disabled={disabled}
//         onClick={togglePopover}>
//         Popover {disabled ? 'Disabilitato' : ''}
//       </Button>

//       <Popover
//         placement={placement}
//         target={target}
//         toggle={togglePopover}
//         isOpen={popoverOpen}>
//         <PopoverHeader>{title}</PopoverHeader>
//         <PopoverBody>{body}</PopoverBody>
//       </Popover>
//     </div>
//   )
// }

// EsempiInterattiviComponent.propTypes = {
//   disabled: PropTypes.bool,
//   placement: PropTypes.string,
//   title: PropTypes.string,
//   body: PropTypes.string
// }

export default {
  title: 'Componenti/Popover'
};

export const _Esempi = PopoverExample;

export const LeQuattroDirezioni = PopoverPositionExample;

LeQuattroDirezioni.story = {
  name: 'Le quattro direzioni'
};

export const TitoloConIconaELink = PopoverIconLink;

TitoloConIconaELink.story = {
  name: 'Titolo con icona e link'
};

export const ModalitaHover = PopoverHover;

ModalitaHover.story = {
  name: 'Modalità Hover'
};

export const DismissAlClickSuccessivo = PopoverFocus;

DismissAlClickSuccessivo.story = {
  name: 'Dismiss al click successivo'
};

export const _ElementiDisabilitati = ElementiDisabilitatiComponent;

_ElementiDisabilitati.story = {
  name: 'Elementi disabilitati'
};

export const _EsempiInterattivi = ({ disabled, placement, title, text }) => {
  const [isOpen, toggle] = useState(false);

  const id = 'example';
  // Avoid Jest complaints
  // const target = () => document.getElementById(id)
  return (
    <div style={{ padding: 250, textAlign: 'center' }}>
      <Button
        id={id}
        color='primary'
        disabled={disabled}
        onClick={() => toggle(!isOpen)}
      >
        Popover {disabled ? 'Disabilitato' : ''}
      </Button>

      <Popover
        placement={placement}
        target={id}
        toggle={() => toggle(!isOpen)}
        isOpen={isOpen}
      >
        <PopoverHeader>{title}</PopoverHeader>
        <PopoverBody>{text}</PopoverBody>
      </Popover>
    </div>
  );
};

_EsempiInterattivi.story = {
  name: 'Esempi interattivi'
};

_EsempiInterattivi.args = {
  disabled: false,
  placement: 'top',
  title: 'Titolo del popover',
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.'
};
_EsempiInterattivi.argTypes = {
  placement: {
    control: {
      type: 'select',
      options: ['top', 'bottom', 'left', 'right']
    }
  }
};
