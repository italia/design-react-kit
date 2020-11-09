import React, { useState } from 'react'
import PropTypes from 'prop-types'

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

// Changed The Functional Component to a Class
class EsempiInterattiviComponent extends React.Component {
  constructor(props) {
    super(props)
    this.id = 'example'
    // Avoid Jest complaints
    this.target = () => document.getElementById(this.id)
  }

  // All a LifeCycle Method to manage the store State when components unrender.
  componentWillUnmount() {
    store.set({ isOpen: false })
  }

  render() {
    return (
      <div style={{ padding: 250, textAlign: 'center' }}>
        <Button
          id={this.id}
          color="primary"
          disabled={this.props.disabled}
          onClick={() => store.set({ isOpen: !store.get('isOpen') })}>
          Popover {this.props.disabled ? 'Disabilitato' : ''}
        </Button>

        <State store={store}>
          <Popover
            placement={this.props.placement}
            target={this.target}
            toggle={() => store.set({ isOpen: !store.get('isOpen') })}
            isOpen={store.get('isOpen')}>
            <PopoverHeader>{this.props.title}</PopoverHeader>
            <PopoverBody>{this.props.body}</PopoverBody>
          </Popover>
        </State>
      </div>
    )
  }
}

EsempiInterattiviComponent.propTypes = {
  disabled: PropTypes.bool,
  placement: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string
}

export default {
  title: 'Componenti/Popover'
}

export const _Esempi = PopoverExample

export const LeQuattroDirezioni = PopoverPositionExample

LeQuattroDirezioni.story = {
  name: 'Le quattro direzioni'
}

export const TitoloConIconaELink = PopoverIconLink

TitoloConIconaELink.story = {
  name: 'Titolo con icona e link'
}

export const ModalitaHover = PopoverHover

ModalitaHover.story = {
  name: 'Modalità Hover'
}

export const DismissAlClickSuccessivo = PopoverFocus

DismissAlClickSuccessivo.story = {
  name: 'Dismiss al click successivo'
}

export const _ElementiDisabilitati = ElementiDisabilitatiComponent

_ElementiDisabilitati.story = {
  name: 'Elementi disabilitati'
}

export const _EsempiInterattivi = ({ disabled, placement, title, text }) => {
  const [isOpen, toggle] = useState(false)

  const id = 'example'
  // Avoid Jest complaints
  const target = () => document.getElementById(id)
  return (
    <div style={{ padding: 250, textAlign: 'center' }}>
      <Button
        id={id}
        color="primary"
        disabled={disabled}
        onClick={() => toggle(!isOpen)}>
        Popover {disabled ? 'Disabilitato' : ''}
      </Button>

      <Popover
        placement={placement}
        target={target}
        toggle={() => toggle(!isOpen)}
        isOpen={isOpen}>
        <PopoverHeader>{title}</PopoverHeader>
        <PopoverBody>{text}</PopoverBody>
      </Popover>
    </div>
  )
}

_EsempiInterattivi.story = {
  name: 'Esempi interattivi'
}

_EsempiInterattivi.args = {
  disabled: false,
  placement: 'top',
  title: 'Titolo del popover',
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.'
}
_EsempiInterattivi.argTypes = {
  placement: {
    control: {
      type: 'select',
      options: ['top', 'bottom', 'left', 'right']
    }
  }
}
