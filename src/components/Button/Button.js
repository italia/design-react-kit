import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Button = ({type, shadow, round, children, link, className, ...rest}) => {
    const classes = classnames(
        {
            Button: true,
            'Button--default': !type || type === 'default',
            'Button--info': type === 'info',
            'Button--danger': type === 'danger',
            'Button--round': round,
            'Button--shadow': shadow,
        },
        className,
    );

    let ButtonTag = link ? 'a' : 'button';

    return (
        <ButtonTag
            type={!link ? 'button' : undefined}
            role={link ? 'button' : undefined}
            className={classes}
            {...rest}>
            {children}
        </ButtonTag>
    );
};

Button.defaultProps = {
    type: 'default',
    shadow: false,
    round: false,
    link: false,
};

Button.propTypes = {
    type: PropTypes.oneOf(['info', 'danger', 'default']),
    shadow: PropTypes.bool,
    round: PropTypes.bool,
    link: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
};

export default Button;
