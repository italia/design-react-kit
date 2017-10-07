import React from 'react';
import PropTypes from 'prop-types';

const className = [
    'Prose',
    'Alert',
    'Alert--info',
    'Alert--withIcon',
    'u-layout-prose',
    'u-padding-r-bottom',
    'u-padding-r-right',
    'u-margin-r-bottom',
].join('');

const Alert = ({title, children, ...rest}) => {
    const isChildrenString = typeof children === 'string';

    return (
        <div className={className} role="alert" {...rest}>
            <h2 className="u-text-h3">{title}</h2>
            {isChildrenString ? (
                <p className="u-text-p">{children}</p>
            ) : (
                {children}
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

export default Alert;
