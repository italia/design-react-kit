import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavbarToggler } from 'reactstrap';

import HeaderContext, { SLIM, NAVBAR } from './HeaderContext';

const propTypes = {
    tag: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string
};

const defaultProps = {};

export default class HeaderToggler extends PureComponent {

    static propTypes = propTypes;
    static defaultProps = defaultProps;
    static contextType = HeaderContext;
    render() {
        const { className, tag, type, ...attributes } = this.props;
        const { type: HeaderType } = this.context;
        const BUTTON = 'button';
        const defaultTag = HeaderType === SLIM ? 'a' : BUTTON;
        const defaultType = HeaderType === SLIM ? '' : BUTTON;
        const classes = classNames({
            "it-opener d-lg-none": HeaderType === SLIM,
            "custom-navbar-toggler": HeaderType === NAVBAR
        }, className);
        return <NavbarToggler className={classes} {...attributes} tag={tag || defaultTag} type={type || defaultType} />
    }
}

