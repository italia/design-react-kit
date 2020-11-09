import React from 'react'

import icons from './icons.json'

import { Icon, Row, Col } from '../../src'

export default {
  title: 'Componenti/Icon'
}

export const EsempioInterattivo = ({
  icon,
  size,
  padding,
  background,
  color
}) => {
  return (
    <Icon
      icon={icon}
      size={size}
      padding={padding}
      color={color}
      className={background}
    />
  )
}

EsempioInterattivo.story = {
  name: 'Esempio interattivo'
}
EsempioInterattivo.args = {
  icon: 'it-tool',
  size: '',
  padding: false,
  color: 'primary',
  background: ''
}
EsempioInterattivo.argTypes = {
  icon: {
    control: {
      type: 'select',
      options: icons
    }
  },
  size: {
    control: {
      type: 'select',
      options: {
        'Extra small': 'xs',
        Small: 'sm',
        default: '',
        Large: 'lg',
        'Extra Large': 'xl'
      }
    }
  },
  background: {
    control: {
      type: 'select',
      options: {
        default: '',
        Scuro: 'bg-dark',
        Chiaro: 'bg-light'
      }
    }
  },
  color: {
    control: {
      type: 'select',
      options: [
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
        'light',
        'white'
      ]
    }
  }
}

export const Allineamenti = () => {
  return (
    <div style={{ lineHeight: '4em' }}>
      <Icon className="bg-light align-bottom" icon="it-check-circle" />
      <Icon className="bg-light align-middle" icon="it-check-circle" />
      <Icon className="bg-light align-top" icon="it-check-circle" />
    </div>
  )
}

export const ListaIcone = () => {
  return (
    <Row>
      {icons.map(icon => (
        <Col md={{ size: 6 }} lg={{ size: 4 }} key={icon}>
          <Icon icon={icon} /> {icon}
        </Col>
      ))}
    </Row>
  )
}

ListaIcone.story = {
  name: 'Lista icone'
}
