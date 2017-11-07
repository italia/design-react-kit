import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import Nav from './Nav';
import NavItem from './NavItem';

storiesOf('Navscroll', module)
    .add(
        'Navscroll',
        withInfo('Simple nav')(() => (
            <Nav>
                <NavItem
                    href="http://www.google.it"
                    target="_blank"
                    onClick={action('clicked')}>
                    Maiores eius et
                </NavItem>
                <NavItem href="#" onClick={action('clicked')}>
                    Aut dolores exercitationem
                </NavItem>
                <NavItem onClick={action('clicked')}>Rerum at labore</NavItem>
                <NavItem onClick={action('clicked')}>
                    Modi nostrum expedita
                </NavItem>
                <NavItem onClick={action('clicked')}>Et dolores quae</NavItem>
            </Nav>
        )),
    )
    .add(
        'Navscroll 2',
        withInfo('Simple nav')(() => (
            <Nav>
                <NavItem
                    href="http://www.google.it"
                    target="_blank"
                    onClick={action('clicked')}>
                    Maiores eius et
                </NavItem>
            </Nav>
        )),
    );
