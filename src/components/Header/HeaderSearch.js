import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon/Icon';

const propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    iconName: PropTypes.string,
    href: PropTypes.string
};

const defaultProps = {
    iconName: 'it-search'
}

const HeaderSearch = ({className, label, href, iconName, ...attributes}) => {
    const classes = classNames('it-search-wrapper', className);
    return <div className={classes} {...attributes}>
    {label && <span className="d-none d-md-block">{label}</span>}
    <a className="search-link rounded-icon" aria-label={label} href={href}>
      <Icon icon={iconName}/>
    </a>
  </div>
};

HeaderSearch.propTypes = propTypes;
HeaderSearch.defaultProps = defaultProps;
export default HeaderSearch;