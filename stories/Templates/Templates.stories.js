import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import Homepage from './homepage/Homepage'
import Amministrazione from './amministrazione/Amministrazione'
import Servizi from './servizi/Servizi'

// doc
import HomepageText from './homepage/Homepage.md'
import AmministrazioneText from './amministrazione/Amministrazione.md'
import ServiziText from './servizi/Servizi.md'

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
    'Amministrazione Template',
    withInfo({
      text: AmministrazioneText
    })(Amministrazione)
  )
  .add(
    'Servizi Template',
    withInfo({
      text: ServiziText
    })(Servizi)
  )
