import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

const baseClasses = [
    'Prose',
    'Alert',
    'u-layout-prose',
    'u-padding-r-bottom',
    'u-padding-r-right',
    'u-margin-r-bottom',
];

const Alert = ({title, children, type, withIcon, ...rest}) => {
    const isChildrenString = typeof children === 'string';

    const classes = classnames(...baseClasses, {
        'Alert--error': type === 'error',
        'Alert--info': type === 'info',
        'Alert--success': type === 'success',
        'Alert--warning': type === 'warning',
        'Alert--withIcon': withIcon,
    });

    return (
        <div className={classes} role="alert" {...rest}>
            <h2 className="u-text-h3">{title}</h2>
            {isChildrenString ? (
                <p className="u-text-p">{children}</p>
            ) : (
                children
            )}
        </div>
    );
};

Alert.propTypes = {
    withIcon: PropTypes.bool,
    type: PropTypes.oneOf(['info', 'error', 'warning', 'success']),
    title: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Alert.defaultProps = {
    withIcon: true,
    type: 'info',
};

export default Alert;
