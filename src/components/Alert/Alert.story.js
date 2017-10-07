import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import Alert from './Alert';

const loremDescription = `Voluptate ut voluptatem sit earum ipsam sint.
    Aut unde explicabo eos dolor rerum eum et.
    Maxime aliquam deserunt.
    Non officiis eos fugit in perferendis.`;

const loremHtml = (
    <p>
        Voluptate ut voluptatem sit earum ipsam sint.<br />
        <small>Aut unde explicabo eos dolor rerum eum et.</small>
        <br />
        <bold>Maxime aliquam deserunt.</bold>
        <br />
        <underline>Non officiis eos fugit in perferendis.</underline>
        <br />
    </p>
);

const message = {
    error: 'Si è verificato un errore',
    info: 'Ulteriori Informazioni',
    success: 'Operazione eseguita con successo',
    warning: 'Attenzione',
};

storiesOf('Alert', module)
    .add(
        'Default',
        withInfo('Default')(() => (
            <Alert title={message.info}>{loremDescription}</Alert>
        )),
    )
    .add(
        'Without Icon',
        withInfo('Without Icon')(() => (
            <Alert title={message.info} withIcon={false}>
                {loremDescription}
            </Alert>
        )),
    )
    .add(
        'With discrete text inside',
        withInfo('With discrete text inside')(() => (
            <Alert title={message.info}>{loremHtml}</Alert>
        )),
    )
    .add(
        'Error',
        withInfo('Error')(() => (
            <Alert title={message.error} type="error">
                {loremDescription}
            </Alert>
        )),
    )
    .add(
        'Info',
        withInfo('Info')(() => (
            <Alert title={message.info} type="info">
                {loremDescription}
            </Alert>
        )),
    )
    .add(
        'Success',
        withInfo('Success')(() => (
            <Alert title={message.success} type="success">
                {loremDescription}
            </Alert>
        )),
    )
    .add(
        'Warning',
        withInfo('Warning')(() => (
            <Alert title={message.warning} type="warning">
                {loremDescription}
            </Alert>
        )),
    );
