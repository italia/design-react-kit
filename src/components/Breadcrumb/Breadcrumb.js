import React from 'react';
import PropTypes from 'prop-types';
// import BreadcrumbItem from './BreadcrumbItem';

const Breadcrumb = ({children}) => {
    return (
        <nav aria-label="sei qui:" role="navigation">
            <ul className="u-padding-all-s u-margin-all-l">{children}</ul>
        </nav>
    );
};

/**
 * è stato necessario disabilitare il typecheck per un'incompatibilità su storybook in caso di
 * un unico figlio
 */
Breadcrumb.propTypes = {
    children: PropTypes.node,
    // children: PropTypes.oneOfType([
    //     PropTypes.arrayOf(BreadcrumbItem),
    //     BreadcrumbItem,
    // ]),
};

export default Breadcrumb;
