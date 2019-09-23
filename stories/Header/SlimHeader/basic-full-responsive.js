import React from 'react';

import { select } from '@storybook/addon-knobs/react'
import { Button, Header, HeaderContent, HeaderRightZone, Icon, HeaderBrand, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from '../../../src';

const SlimHeader = () => {
    const theme = select('Tema', { default: '', light: 'light' }, '');
    return (
        <Header type="slim" theme={theme}>
            <HeaderContent>
                <HeaderBrand>Ente appartenenza/Owner</HeaderBrand>
                <HeaderRightZone>
                    <UncontrolledDropdown nav tag="div">
                        <DropdownToggle nav caret>
                            ITA
                                <Icon icon="it-expand" />
                        </DropdownToggle>
                        <DropdownMenu>
                        <div className="row">
                                <div className="col-12">
                                    <div className="link-list-wrapper">
                                        <ul className="link-list">
                                            <li>
                                                <DropdownItem href="#" className="list-item">
                                                    <span>ITA</span>
                                            </DropdownItem></li>
                                            <li><DropdownItem href="#" className="list-item">
                                                <span>ENG</span>
                                </DropdownItem></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <Button color="primary" size="full" className="btn-icon" href="#">
                        <span className="rounded-icon">
                            <Icon color="icon-primary" icon="it-user" />
                        </span>
                        <span className="d-none d-lg-block">Accedi all&#39;area personale</span>
                    </Button>
                </HeaderRightZone>
            </HeaderContent>
        </Header>)
}

export default SlimHeader