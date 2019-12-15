import React from 'react'
import { storiesOf } from '@storybook/react'

import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import { Callout, CalloutText, CalloutTitle, Icon } from '../../src'

import Esempio from './docs/Esempio.md'
import EsempioConIcona from './docs/EsempioConIcona.md'
import EsempioScreenReader from './docs/EsempioScreenReader.md'
import ClasseSuccess from './docs/ClasseSuccess.md'
import ClasseWarning from './docs/ClasseWarning.md'
import ClasseDanger from './docs/ClasseDanger.md'
import ClasseImportant from './docs/ClasseImportant.md'
import ClasseNote from './docs/ClasseNote.md'
import ClasseHighlights from './docs/ClasseHighlights.md'

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
        icon="it-info-circle"
        padding={false}
        style={{ ariaHidden: true }}
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
        icon="it-check-circle"
        padding={false}
        style={{ ariaHidden: true }}
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

const CalloutSuccess = () => (
  <Callout color={'success'}>
    <CalloutTitle>
      <Icon
        icon="it-check-circle"
        padding={false}
        style={{ ariaHidden: true }}
      />
      Usa
    </CalloutTitle>
    <CalloutText>
      Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum
      varius.
    </CalloutText>
  </Callout>
)

const CalloutWarning = () => (
  <Callout color={'warning'}>
    <CalloutTitle>
      <Icon
        icon="it-help-circle"
        padding={false}
        style={{ ariaHidden: true }}
      />
      Attenzione
    </CalloutTitle>
    <CalloutText>
      Quisque ex eros, pellentesque vitae enim sed, pharetra tempus dolor. Donec
      eu nibh ac lacus luctus pellentesque. Duis interdum scelerisque magna nec
      malesuada.
    </CalloutText>
  </Callout>
)

const CalloutDanger = () => (
  <Callout color={'danger'}>
    <CalloutTitle>
      <Icon
        icon="it-close-circle"
        padding={false}
        style={{ ariaHidden: true }}
      />
      Non usare
    </CalloutTitle>
    <CalloutText>
      Quisque ex eros, pellentesque vitae enim sed, pharetra tempus dolor. Donec
      eu nibh ac lacus luctus pellentesque. Duis interdum scelerisque magna nec
      malesuada.
    </CalloutText>
  </Callout>
)

const CalloutImportant = () => (
  <Callout color={'important'}>
    <CalloutTitle>
      <Icon
        icon="it-info-circle"
        padding={false}
        style={{ ariaHidden: true }}
      />
      Importante
    </CalloutTitle>
    <CalloutText>
      Quisque ex eros, pellentesque vitae enim sed, pharetra tempus dolor. Donec
      eu nibh ac lacus luctus pellentesque. Duis interdum scelerisque magna nec
      malesuada.
    </CalloutText>
  </Callout>
)

const CalloutNote = () => (
  <Callout color={'note'}>
    <CalloutTitle>
      <Icon
        icon="it-info-circle"
        padding={false}
        style={{ ariaHidden: true }}
      />
      Note a riguardo
    </CalloutTitle>
    <CalloutText>
      Quisque ex eros, pellentesque vitae enim sed, pharetra tempus dolor. Donec
      eu nibh ac lacus luctus pellentesque. Duis interdum scelerisque magna nec
      malesuada.
    </CalloutText>
  </Callout>
)

const CalloutHighlights = () => (
  <Callout highlight>
    <CalloutTitle>Titolo Callout</CalloutTitle>
    <CalloutText bigText>
      Maecenas at erat id sem interdum efficitur eu sed nunc. Mauris sit amet
      erat eget augue molestie malesuada ut sed ex. In sed dignissim elit.
    </CalloutText>
    <CalloutText>
      Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum
      varius. Maecenas ullamcorper <a href="#">tincidunt nulla quis laoreet.</a>
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
  .add(
    'Procedura avvenuta con successo',
    withInfo({ text: ClasseSuccess })(CalloutSuccess)
  )
  .add(
    'Procedura che richiede attenzione',
    withInfo({ text: ClasseWarning })(CalloutWarning)
  )
  .add(
    'Procedura pericolosa o non consentita',
    withInfo({ text: ClasseDanger })(CalloutDanger)
  )
  .add(
    'Procedura importante',
    withInfo({ text: ClasseImportant })(CalloutImportant)
  )
  .add('Nota', withInfo({ text: ClasseNote })(CalloutNote))
  .add(
    'Callout Highlights',
    withInfo({ text: ClasseHighlights })(CalloutHighlights)
  )
