import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Pager = ({classNames, children, ...rest}) => {
    const style = classnames(
        'Grid Grid--fit Grid--alignMiddle',
        classNames.list
    );

    return (
        <nav role="navigation" className={classNames.nav} {...rest}>
            <ul className={style}>{children}</ul>
        </nav>
    );
};

Pager.propTypes = {
    children: PropTypes.node,
    classNames: PropTypes.shape({
        nav: PropTypes.string,
        list: PropTypes.string,
    }),
};

export default Pager;
