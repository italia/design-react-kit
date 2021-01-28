import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, select } from '@storybook/addon-knobs/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import { Icon, Row, Col, icons } from '../../src'

storiesOf('Componenti/Icon', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add(
    'Esempio interattivo',
    withInfo({
      // text: Esempi
    })(() => {
      const icon = select('Icona', icons, 'it-tool')
      const size = select(
        'Dimensioni',
        {
          'Extra small': 'xs',
          Small: 'sm',
          default: '',
          Large: 'lg',
          'Extra Large': 'xl'
        },
        ''
      )
      const padding = boolean('Padding addizionale', false)
      const background = select('Sfondo', {
        default: '',
        Scuro: 'bg-dark',
        Chiaro: 'bg-light'
      })
      const color = select('Colore', [
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
        'light',
        'white'
      ])
      return (
        <Icon
          icon={icon}
          size={size}
          padding={padding}
          color={color}
          className={background}
        />
      )
    })
  )
  .add(
    'Allineamenti',
    withInfo({
      // text: Esempi
    })(() => {
      return (
        <div style={{ lineHeight: '4em' }}>
          <Icon className="bg-light align-bottom" icon="it-check-circle" />
          <Icon className="bg-light align-middle" icon="it-check-circle" />
          <Icon className="bg-light align-top" icon="it-check-circle" />
        </div>
      )
    })
  )

storiesOf('Componenti/Icon', module)
  .addParameters({
    options: {
      showAddonPanel: false
    }
  })
  .add(
    'Lista icone',
    withInfo({
      // text: Esempi
    })(() => {
      return (
        <Row>
          {icons.map(icon => (
            <Col md={{ size: 6 }} lg={{ size: 4 }} key={icon}>
              <Icon icon={icon} /> {icon}
            </Col>
          ))}
        </Row>
      )
    })
  )
