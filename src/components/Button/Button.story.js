import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import Button from './Button';

storiesOf('Button', module)
    .add(
        'Default Button',
        withInfo('Default button')(() => (
            <ul style={{listStyleType: 'none'}}>
                <li>
                    <Button type="default" className="u-text-r-xs">
                        Button default
                    </Button>
                </li>
                <li>
                    <Button className="u-text-r-xs" disabled>
                        Button default disabled
                    </Button>
                </li>
                <li>
                    <Button className="u-text-r-xs" shadow>
                        Button default shadow
                    </Button>
                </li>
                <li>
                    <Button className="u-text-r-xs" round>
                        Button default round
                    </Button>
                </li>
                <li>
                    <Button className="u-text-r-xs" shadow round>
                        Button default round shadow
                    </Button>
                </li>
                <li>
                    <Button className="u-text-r-xs" shadow round link>
                        LinkButton default round shadow
                    </Button>
                </li>
            </ul>
        )),
    )
    .add(
        'Info Button',
        withInfo('Info button')(() => (
            <Button className="u-text-r-xs" type="info">
                I am a button
            </Button>
        )),
    )
    .add(
        'Danger Button',
        withInfo('Danger button')(() => (
            <Button className="u-text-r-xs" type="danger">
                I am a button
            </Button>
        )),
    );
