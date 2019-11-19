import React from 'react'
import { storiesOf } from '@storybook/react'

import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import { Callout, CalloutText, CalloutTitle, Icon } from '../../src'

import Esempio from './docs/Esempio.md'
import EsempioConIcona from './docs/EsempioConIcona.md'
import EsempioScreenReader from './docs/EsempioScreenReader.md'

const BasicExample = () => (
  <Callout>
    <CalloutTitle>Titolo Callout</CalloutTitle>
    <CalloutText>
      Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum
      varius.
    </CalloutText>
  </Callout>
)

const ExampleWithIcon = () => (
  <Callout>
    <CalloutTitle>
      <Icon
        className={'aria-hidden: true'}
        color=""
        icon="it-info-circle"
        padding={false}
        size=""
      />
      Titolo Callout
    </CalloutTitle>
    <CalloutText>
      Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum
      varius.
    </CalloutText>
  </Callout>
)

const ExampleForScreenReader = () => (
  <Callout>
    <CalloutTitle>
      <Icon
        className={'aria-hidden: true'}
        color=""
        icon="it-check-circle"
        padding={false}
        size=""
      />
      <span className="sr-only">Confermato</span>
      Titolo Callout
    </CalloutTitle>
    <CalloutText>
      Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum
      varius.
    </CalloutText>
  </Callout>
)

storiesOf('Componenti/Callout', module)
  .addDecorator(withA11y)
  .add('Esempio', withInfo({ text: Esempio })(BasicExample))
  .add(
    'Esempio con icona',
    withInfo({ text: EsempioConIcona })(ExampleWithIcon)
  )
  .add(
    'Esempio accessibilità',
    withInfo({ text: EsempioScreenReader })(ExampleForScreenReader)
  )
