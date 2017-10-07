import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const BreadcrumbItem = ({children, className, ...rest}) => {
    return (
        <li className="Breadcrumb-item">
            <a className={classnames('Breadcrumb-link', className)} {...rest}>
                {children}
            </a>
        </li>
    );
};

BreadcrumbItem.propTypes = {
    children: PropTypes.node,
};

BreadcrumbItem.defaultProps = {
    href: '#',
};

export default BreadcrumbItem;
