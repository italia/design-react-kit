import React from 'react';
import PropTypes from 'prop-types';
// import NavItem from './NavItem';

const Nav = ({children}) => {
    return (
        <nav className="Navscroll Navscroll--withHint">
            <ul className="u-padding-all-s u-margin-all-l">{children}</ul>
        </nav>
    );
};

/**
 * è stato necessario disabilitare il typecheck per un'incompatibilità su storybook in caso di
 * un unico figlio
 */
Nav.propTypes = {
    children: PropTypes.node,
    // children: PropTypes.oneOfType([PropTypes.arrayOf(NavItem), NavItem]),
};

export default Nav;
