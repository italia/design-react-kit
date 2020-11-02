import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

import { Skiplink, SkiplinkItem } from '../../src';

import SkiplinkExample from './SkiplinkExample';

import Esempi from './docs/Esempi.md';

export default {
  title: 'Componenti/Skiplink',
  decorators: [withA11y],
};

export const _Esempi = withInfo({
  text: Esempi,
  propTables: [Skiplink, SkiplinkItem],
  propTablesExclude: [SkiplinkExample],
})(() => <SkiplinkExample />);
