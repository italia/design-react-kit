import React from 'react';
import PropTypes from 'prop-types';

const Nav = ({ children, ...rest }) => {
  return (
    <nav className="Navscroll Navscroll--withHint">
      <ul className="u-padding-all-s u-margin-all-l">{children}</ul>
    </nav>
  );
};

Nav.propTypes = {
  children: PropTypes.node,
};

export default Nav;
