import { withA11y } from '@storybook/addon-a11y'

import Homepage from './homepage/Homepage'
// import Amministrazione from './amministrazione/Amministrazione'
// import Servizi from './servizi/Servizi'

// doc
import HomepageText from './homepage/Homepage.md'
import AmministrazioneText from './amministrazione/Amministrazione.md'
import ServiziText from './servizi/Servizi.md'

export default {
  title: 'Templates/Kit Comuni',
  decorators: [withA11y]
}

export const HomepageTemplate = Homepage

HomepageTemplate.args = {
  theme: '',
  townName: 'Nome del Comune',
  townTagLine: 'Uno dei tanti Comuni d Italia'
}
HomepageTemplate.argTypes = {
  townName: {
    control: {
      name: 'Comune'
    }
  },
  townTagLine: {
    control: {
      name: 'Motto Comune'
    }
  },
  theme: {
    control: {
      name: 'Tema',
      type: 'select',
      options: ['', 'light', 'dark']
    }
  }
}

// export const AmministrazioneTemplate = Amministrazione

// export const ServiziTemplate = Servizi
