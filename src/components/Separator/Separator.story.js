import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Separator from './Separator';

storiesOf('Separator', module).add(
  'Separator',
  withInfo('Basic version')(() => (
        <Separator
            colorTop="u-background-50"
            colorBottom="u-background-grey-20"
        />
  )),
);
