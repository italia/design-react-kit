import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import Button from './Button';

storiesOf('Button', module)
    .add(
        'Default Button',
        withInfo('Default button')(() => (
            <div>
                <Button type="default">Button default</Button>
                <br />
                <br />
                <Button disabled>Button default disabled</Button>
                <br />
                <br />
                <Button shadow>Button default shadow</Button>
                <br />
                <br />
                <Button round>Button default round</Button>
                <br />
                <br />
                <Button shadow round>
                    Button default round shadow
                </Button>
                <br />
                <br />
                <Button shadow round link>
                    LinkButton default round shadow
                </Button>
            </div>
        )),
    )
    .add(
        'Info Button',
        withInfo('Info button')(() => (
            <Button type="info">I am a button</Button>
        )),
    )
    .add(
        'Danger Button',
        withInfo('Danger button')(() => (
            <Button type="danger">I am a button</Button>
        )),
    );
