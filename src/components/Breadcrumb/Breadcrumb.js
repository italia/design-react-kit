import React from 'react';
import PropTypes from 'prop-types';
import BreadcrumbItem from './BreadcrumbItem';

const Breadcrumb = ({children}) => {
    return (
        <nav aria-label="sei qui:" role="navigation">
            <ul className="u-padding-all-s u-margin-all-l">{children}</ul>
        </nav>
    );
};

Breadcrumb.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(BreadcrumbItem),
        BreadcrumbItem,
    ]),
};

export default Breadcrumb;

//     <ul class="Breadcrumb">
//     <li class="Breadcrumb-item"><a class="Breadcrumb-link u-color-50" href="/">Home</a></li>
//     <li class="Breadcrumb-item"><a class="Breadcrumb-link u-color-50" href="/">pagina interna</a></li>
//     <li class="Breadcrumb-item"><a class="Breadcrumb-link u-color-50" href="/">pagina interna</a></li>
//     <li class="Breadcrumb-item"><a class="Breadcrumb-link u-color-50" href="#main">pagina corrente</a></li>
// </ul>
