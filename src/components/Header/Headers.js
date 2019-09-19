import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
    shadow: PropTypes.bool,
    className: PropTypes.string
};

const defaultProps = {};

const Headers = ({ className, shadow, ...attributes }) => {
    const classes = classNames("it-header-wrapper", {
        'it-shadow': shadow
    }, className);
    return <div className={classes} {...attributes}></div>;
}

Headers.propTypes = propTypes;
Headers.defaultProps = defaultProps;
export default Headers;