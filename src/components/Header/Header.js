import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import HeaderContext, {SLIM, CENTER, NAVBAR} from './HeaderContext';

const propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf([SLIM, CENTER, NAVBAR]).isRequired,
    sticky: PropTypes.bool,
    small: PropTypes.bool,
    theme: PropTypes.oneOf(['light', 'dark-mobile', 'light-desk'])
};

const defaultProps = {};

const Header = ({className, small, sticky, theme, type, ...attributes}) => {
    // use context here as theme
    const classes = classNames(className, {
        [`it-header-${type}-wrapper`]: type,
        'it-header-sticky': sticky,
        'it-small-header': type === CENTER && small,
        [`theme-${theme}`]: theme
    });
    return (
        <HeaderContext.Provider value={{type}}>
            <div className={classes} {...attributes}/>
        </HeaderContext.Provider>
    );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;