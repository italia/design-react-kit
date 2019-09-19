import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
    tag: PropTypes.string,
    className: PropTypes.string
};

const defaultProps = {
    tag: 'ul'
};

const NavHeader = ({tag: Tag, className,...attributes}) => {
    const classes = classNames('link-list', className);
    // this is pretty basec as for now
    return <Tag className={classes} {...attributes} />
}

NavHeader.propTypes = propTypes;
NavHeader.defaultProps = defaultProps;
export default NavHeader;