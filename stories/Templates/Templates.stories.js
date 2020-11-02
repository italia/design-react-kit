import { withKnobs } from '@storybook/addon-knobs/react';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

import Homepage from './homepage/Homepage';
import Amministrazione from './amministrazione/Amministrazione';
import Servizi from './servizi/Servizi';

// doc
import HomepageText from './homepage/Homepage.md';
import AmministrazioneText from './amministrazione/Amministrazione.md';
import ServiziText from './servizi/Servizi.md';

export default {
  title: 'Introduzione/Introduzione/Kit Comuni',
  decorators: [withA11y, withKnobs],
};

export const HomepageTemplate = withInfo({
  text: HomepageText,
})(Homepage);

export const AmministrazioneTemplate = withInfo({
  text: AmministrazioneText,
})(Amministrazione);

export const ServiziTemplate = withInfo({
  text: ServiziText,
})(Servizi);
