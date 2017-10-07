import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import Button from './Button';

storiesOf('Button', module).add(
    'Button',
    withInfo('Simple button')(() => (
        <Button onClick={action('clicked')}>I am a button</Button>
    )),
);
