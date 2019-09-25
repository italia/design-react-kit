import React from 'react'
import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs/react'

import { Navbar, NavbarToggler } from '../../src'

import HeaderNavExample from './HeaderNavExample'

import Esempi from './docs/Esempi.md'

const EsempiComponent = () => <HeaderNavExample />

storiesOf('Componenti/HeaderNav', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  // .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add(
    'Esempio',
    withInfo({
      text: Esempi,
      propTables: [Navbar, NavbarToggler],
      propTablesExclude: [HeaderNavExample]
    })(EsempiComponent)
  )
