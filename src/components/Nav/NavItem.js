import React from 'react';
import PropTypes from 'prop-types';

const NavItem = ({children, onClick, ...rest}) => {
    return (
        <li className="u-padding-right-l">
            <a onClick={onClick} {...rest}>
                {children}
            </a>
        </li>
    );
};

NavItem.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
};

NavItem.defaultProps = {
    href: '#',
};

export default NavItem;
