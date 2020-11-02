import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';

import Footer from './basic';

export default {
  title: 'Componenti/Footer',
  decorators: [withA11y, withKnobs],
};

export const _Footer = withInfo({})(Footer);
