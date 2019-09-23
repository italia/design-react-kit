import React from 'react'
import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import { BottomNav, BottomNavItem } from '../../src'

import Esempi from './docs/Esempi.md'
import Badge from './docs/Badge.md'
import Alert from './docs/Alert.md'

const EsempiComponent = () => (
  <BottomNav>
    <BottomNavItem label="messaggi" />
    <BottomNavItem label="immagini" iconName="it-camera" />
    <BottomNavItem label="documenti" iconName="it-file" />
  </BottomNav>
)

const BadgeComponent = () => (
  <BottomNav>
    <BottomNavItem label="messaggi" badge="1" srText="- 1 da leggere" />
    <BottomNavItem
      label="immagini"
      badge="2"
      iconName="it-camera"
      srText="- 2 da vedere"
      active
    />
    <BottomNavItem
      label="documenti"
      badge="88"
      iconName="it-file"
      srText="- 88 da esaminare"
    />
    <BottomNavItem label="preferiti" iconName="it-star-outline" />
    <BottomNavItem label="preferenze" iconName="it-settings" />
  </BottomNav>
)

const AlertComponent = () => (
  <BottomNav>
    <BottomNavItem
      alert
      label="messaggi"
      srText="- nuovo contenuto disponibile"
    />
    <BottomNavItem label="immagini" iconName="it-camera" />
    <BottomNavItem
      alert
      label="documenti"
      iconName="it-file"
      srText="- nuovo contenuto disponibile"
    />
    <BottomNavItem label="preferiti" iconName="it-star-outline" />
    <BottomNavItem label="preferenze" iconName="it-settings" />
  </BottomNav>
)

storiesOf('Componenti/BottomNav', module)
  .addDecorator(withA11y)
  .add(
    'Esempi',
    withInfo({
      text: Esempi,
      propTables: [BottomNav, BottomNavItem]
    })(EsempiComponent)
  )
  .add(
    'Badge',
    withInfo({
      text: Badge,
      propTables: [BottomNav, BottomNavItem]
    })(BadgeComponent)
  )
  .add(
    'Alert',
    withInfo({
      text: Alert,
      propTables: [BottomNav, BottomNavItem]
    })(AlertComponent)
  )
