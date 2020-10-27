import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { storiesOf } from '@storybook/react'
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import { Popover, PopoverHeader, PopoverBody, Button } from '../../src'

import PopoverExample from './PopoverExample'
import PopoverPositionExample from './PopoverPositionExample'
import PopoverIconLink from './PopoverIconLink'
import PopoverHover from './PopoverHover'
import PopoverFocus from './PopoverFocus'

import Esempi from './docs/Esempi.md'
import QuattroDirezioni from './docs/QuattroDirezioni.md'
import ElementiDisabilitati from './docs/ElementiDisabilitati.md'
import EsempiInterattivi from './docs/EsempiInterattivi.md'
import IconLink from './docs/IconLink.md'
import Hover from './docs/Hover.md'
import Focus from './docs/Focus.md'

const ElementiDisabilitatiComponent = () => {
  const id = 'example'
  // Avoid Jest complaints
  const target = () => document.getElementById(id)

  return (
    <div>
      <Button color="primary" id={id} disabled>
        Popover disabilitato
      </Button>
      <Popover placement="right" target={target}>
        <PopoverHeader>Titolo del popover</PopoverHeader>
        <PopoverBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel
          finibus augue.
        </PopoverBody>
      </Popover>
    </div>
  )
}

const EsempiInterattiviComponent = props => {
  const [popoverOpen, setPopoverOpen] = useState(false)
  const id = 'example'
  // Avoid Jest complaints
  const target = () => document.getElementById(id)
  const togglePopover = () => {
    setPopoverOpen(!popoverOpen)
  }

  return (
    <div style={{ padding: 200, textAlign: 'center' }}>
      <Button
        id={id}
        color="primary"
        disabled={props.disabled}
        onClick={togglePopover}>
        Popover {props.disabled ? 'Disabilitato' : ''}
      </Button>

      <Popover
        placement={props.placement}
        target={target}
        toggle={togglePopover}
        isOpen={popoverOpen}>
        <PopoverHeader>{props.title}</PopoverHeader>
        <PopoverBody>{props.body}</PopoverBody>
      </Popover>
    </div>
  )
}

EsempiInterattiviComponent.propTypes = {
  disabled: PropTypes.bool,
  placement: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string
}

storiesOf('Componenti/Popover', module)
  .addDecorator(withA11y)
  .add(
    'Esempi',
    withInfo({
      text: Esempi,
      propTables: [Popover, PopoverHeader, PopoverBody],
      propTablesExclude: [PopoverExample]
    })(PopoverExample)
  )
  .add(
    'Le quattro direzioni',
    withInfo({
      text: QuattroDirezioni,
      propTables: [Popover, PopoverHeader, PopoverBody],
      propTablesExclude: [PopoverPositionExample]
    })(PopoverPositionExample)
  )
  .add(
    'Titolo con icona e link',
    withInfo({
      text: IconLink,
      propTables: [Popover, PopoverHeader, PopoverBody],
      propTablesExclude: [PopoverExample]
    })(PopoverIconLink)
  )
  .add(
    'Modalità Hover',
    withInfo({
      text: Hover,
      propTables: [Popover, PopoverHeader, PopoverBody],
      propTablesExclude: [PopoverExample]
    })(PopoverHover)
  )
  .add(
    'Dismiss al click successivo',
    withInfo({
      text: Focus,
      propTables: [Popover, PopoverHeader, PopoverBody],
      propTablesExclude: [PopoverExample]
    })(PopoverFocus)
  )
  .add(
    'Elementi disabilitati',
    withInfo({
      text: ElementiDisabilitati,
      propTablesExclude: [Button]
    })(ElementiDisabilitatiComponent)
  )
  .addDecorator(withKnobs)
  .add(
    'Esempi interattivi',
    withInfo({
      text: EsempiInterattivi,
      propTablesExclude: [Button]
    })(props => {
      // All the proerties for Addon Knobs are placed back in the function
      const disabled = boolean('Disabilitato', false)
      const placements = ['top', 'bottom', 'left', 'right']
      const placement = select('Posizione', placements, placements[0])
      const title = text('Titolo', 'Titolo del popover')
      const body = text(
        'Body',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.'
      )
      // All the knob properties are passed as props
      return (
        <EsempiInterattiviComponent
          disabled={disabled}
          placement={placement}
          title={title}
          body={body}
          {...props}
        />
      )
    })
  )
