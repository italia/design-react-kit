import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ])
};
const defaultProps = {};

const HeaderSocialsZone = ({className, children, label, ...attributes}) => {
    const classes = classNames("it-socials d-none d-md-flex", className);
    return (
        <div className={classes} {...attributes}>
            <span>{label}</span>
            {children}
        </div>
    );
}

HeaderSocialsZone.propTypes = propTypes;
HeaderSocialsZone.defaultProps = defaultProps;
export default HeaderSocialsZone;