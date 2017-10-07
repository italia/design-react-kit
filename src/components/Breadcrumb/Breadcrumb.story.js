import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import Breadcrumb from './Breadcrumb';
import BreadcrumbItem from './BreadcrumbItem';

storiesOf('Breadcrumb', module).add(
    'Breadcrumb',
    withInfo()(() => (
        <Breadcrumb>
            <BreadcrumbItem className="u-color-50" onClick={action('clicked')}>
                Home
            </BreadcrumbItem>
            <BreadcrumbItem className="u-color-50" onClick={action('clicked')}>
                Pagina interna
            </BreadcrumbItem>
        </Breadcrumb>
    ))
);
