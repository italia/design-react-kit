import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import Homepage from './others/Homepage'
import Amministrazione from './first-level/Amministrazione'
import Servizi from './first-level/Servizi'
import Evento from './second-level/Evento'

// doc
import HomepageText from './docs/Homepage.md'
import AmministrazioneText from './docs/Amministrazione.md'
import ServiziText from './docs/Servizi.md'

storiesOf('Introduzione/Introduzione/Kit Comuni', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add(
    'Homepage Template',
    withInfo({
      text: HomepageText
    })(Homepage)
  )
  .add(
    'Amministrazione - Primo livello',
    withInfo({
      text: AmministrazioneText
    })(Amministrazione)
  )
  .add(
    'Servizi - Primo livello',
    withInfo({
      text: ServiziText
    })(Servizi)
  )
  .add(
    'Novità Evento - Secondo livello',
    withInfo({
      // text: Esempi
    })(Evento)
  )
